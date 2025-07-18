from fastapi import APIRouter
from app.services.neural_net import recommend_articles_for_user
from app.services.collab_filter import recommend_similar_articles
router = APIRouter()
@router.get("/")
def root():
    print("✅ Root endpoint hit!")
    return {"message": "News Personalization Engine is running"}


@router.get("/recommend/{user_id}")
def recommend(user_id: str, top_k: int = 5):
    recs = recommend_articles_for_user(user_id, top_k)
    return {"user_id": user_id, "recommended_articles": recs}


@router.get("/recommend/item/{article_id}")
def recommend_by_article(article_id: int, top_k: int = 5):
    recs = recommend_similar_articles(article_id, top_k)
    return {"article_id": article_id, "recommended_articles": recs}