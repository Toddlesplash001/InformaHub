# app/services/neural_net.py

import tensorflow as tf
import joblib
import numpy as np


model = tf.keras.models.load_model("ml_models/nn_model.h5", compile=False)

user_enc = joblib.load("ml_models/user_encoder.pkl")
article_enc = joblib.load("ml_models/article_encoder.pkl")

def recommend_articles_for_user(user_id: str, top_k: int = 5):
    user_idx = user_enc.transform([user_id])[0]
    all_article_ids = article_enc.classes_
    article_indices = article_enc.transform(all_article_ids)

    user_array = np.full_like(article_indices, user_idx)

    preds = model.predict([user_array, article_indices], verbose=0).flatten()
    top_indices = preds.argsort()[-top_k:][::-1]
    top_article_ids = all_article_ids[top_indices]
    return top_article_ids.tolist()
