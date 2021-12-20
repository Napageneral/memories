from django.http.response import ResponseHeaders
from django.shortcuts import render
from django.http import HttpResponse
from fastai.text.all import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

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

# subword tokenization requires a corpus of text to train on first
# def subword(sz):
#     sp = SubwordTokenizer(vocab_sz=sz)
#     sp.setup()

def say_hello(request):
    return render(request, 'hello.html', {'name':'Mosh'})


