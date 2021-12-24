from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('hello/', views.say_hello),
    path('vectorize/', views.vectorize_text),
    path('sentiment/', views.analyze_sentiment),
    path('embed/', views.embed_sentence),
    path('umap/', views.umap_embed)
]