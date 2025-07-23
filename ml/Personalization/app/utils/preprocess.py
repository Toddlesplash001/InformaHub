import pandas as pd
import os
import numpy as np
from sklearn.preprocessing import LabelEncoder
# from app.data import augmented_articles
def clean_text(text):
    return text.lower().strip()


def load_and_prepare_data(path: str = "augmented_articles.csv"):
    if path is None:
        # Dynamically get the absolute path to the data file
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # get the root of `app/`
        path = os.path.join(base_dir, "data", "augmented_articles.csv")
        
    else:
        # Convert relative path to absolute, based on current working dir
        path = os.path.abspath(path)

    print(f"Loading dataset from: {path}")  # Debug info
    
    df = pd.read_csv(path)
    df.dropna(subset=['Title', 'Content'], inplace=True)
    df['article_id'] = df.index.astype(str)

    # Generate dummy users
    num_users = 50
    user_ids = [f"user_{i}" for i in range(num_users)]
    interactions = []

    for user in user_ids:
        sampled = df.sample(n=np.random.randint(5, 15))  # 5 to 15 articles per user
        for _, row in sampled.iterrows():
            interactions.append({
                "user_id": user,
                "article_id": row["article_id"],
                "interaction": np.random.randint(1, 6)  # rating from 1-5
            })

    inter_df = pd.DataFrame(interactions)

    # Encode user and article ids
    user_enc = LabelEncoder()
    article_enc = LabelEncoder()
    inter_df['user'] = user_enc.fit_transform(inter_df['user_id'])
    inter_df['article'] = article_enc.fit_transform(inter_df['article_id'])

    # Save encoders for inference
    os.makedirs("ml_models", exist_ok=True)
    import joblib
    joblib.dump(user_enc, "ml_models/user_encoder.pkl")
    joblib.dump(article_enc, "ml_models/article_encoder.pkl")

    return inter_df, len(user_enc.classes_), len(article_enc.classes_)

# colabfiltering
def get_user_item_matrix(interactions_df):
    """
    Returns a user-item matrix (users x articles) with binary or rating-based interactions.
    """
    user_item_matrix = interactions_df.pivot_table(
        index='user', columns='article', values='interaction', fill_value=0
    )
    return user_item_matrix


def load_user_interactions():
    return pd.read_csv("../app/data/user_interactions.csv")

def load_articles():
    return pd.read_csv("../app/data/augmented_articles.csv")
