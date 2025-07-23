# services/collab_filter.py

import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from app.utils.preprocess import get_user_item_matrix

class ItemBasedRecommender:
    def __init__(self):
        self.user_item_matrix = None
        self.similarity_df = None
        self.articles_df = None

    def fit(self, interactions_df, articles_df, id_column='article_id'):
        self.articles_df = articles_df
        self.user_item_matrix = get_user_item_matrix(interactions_df)

        item_vectors = self.user_item_matrix.T  # Items as rows
        similarity_matrix = cosine_similarity(item_vectors)

        # Set index/columns as article_id (if id_column exists)
        if id_column in articles_df.columns:
            item_ids = list(item_vectors.index)
            self.similarity_df = pd.DataFrame(
                similarity_matrix,
                index=item_ids,
                columns=item_ids
            )
        else:
            # Fallback: use default indexing
            self.similarity_df = pd.DataFrame(
                similarity_matrix,
                index=item_vectors.index,
                columns=item_vectors.index
            )


    def recommend_similar_items(self, article_id, top_n=5):
        if article_id not in self.similarity_df.index:
            return []

        sim_scores = self.similarity_df[article_id].drop(article_id)
        top_articles = sim_scores.sort_values(ascending=False).head(top_n).index.tolist()
        return self.articles_df[self.articles_df['article_id'].isin(top_articles)]
