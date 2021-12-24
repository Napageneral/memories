from django.http.response import ResponseHeaders
from django.shortcuts import render
from django.http import HttpResponse
from fastai.text.all import *
from transformers import pipeline
from sentence_transformers import SentenceTransformer
from django.views.decorators.csrf import csrf_exempt
from sklearn.datasets import load_digits
import json
import umap

sentiment_analyzer = pipeline('sentiment-analysis')
sentence_embedder = SentenceTransformer('sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2')

#Using hugging-face dense vector embedding model
@csrf_exempt
def embed_sentence(request):
    text = "default text"
    if request.body:
        text = json.loads(request.body)['message']

    embedding = sentence_embedder.encode(text)
    print(embedding)

    response_data = {}
    response_data['value'] = embedding.tolist()
    response = json.dumps(response_data)
    
    return HttpResponse(response)

#Using hugging-face sentiment model
@csrf_exempt
def analyze_sentiment(request):
    text = "default text"
    if request.body:
        text = json.loads(request.body)['message']

    sentiment = sentiment_analyzer(text)[0]
    #print(sentiment[0])

    response_data = {}
    response_data['label'] = sentiment['label']
    response_data['score'] = sentiment['score']
    response = json.dumps(response_data)
    
    return HttpResponse(response)


@csrf_exempt
def umap_embed(request):

    parsed_request = json.loads(request.body)
    print(parsed_request)
    num_neighbors = int(parsed_request['n_neighbors']['value'])
    min_distance = float(parsed_request['min_distance']['value'])

    digits = load_digits()

    embedding = umap.UMAP(n_neighbors=num_neighbors,
                        min_dist=min_distance,
                        metric='correlation').fit_transform(digits.data)

    print(embedding)
    print(len(embedding))

    response_data = {}
    response_data['value'] = embedding.tolist()
    response = json.dumps(response_data)
    
    return HttpResponse(response)


def say_hello(request):
    return render(request, 'hello.html', {'name':'Mosh'})

#Attempt using self trained ULMfit model
@csrf_exempt
def vectorize_text(request):
    text = "default text"
    if request.body:
        text = json.loads(request.body)['message']

    spacy = WordTokenizer()

    tkn = Tokenizer(spacy)
    toks = tkn(text)

    # Numericalize requires a corpus of text to train on first
    num = Numericalize()
    num.setup(text)
    
    nums = num(toks)
    response = HttpResponse(nums)
    return response
