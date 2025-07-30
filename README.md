# 🗞️ InformaHub

A full-stack intelligent news aggregation platform that fetches, categorizes, deduplicates, summarizes, and personalizes news content for users. Built with **Supabase** (backend) and **React** (frontend).

---

## 📌 Features

* 🔍 **Article Fetching**: Pulls content from RSS feeds and News APIs.
* 🧠 **Categorization**: Automatically classifies news articles into predefined categories.
* 🔁 **Deduplication**: Prevents storing similar or duplicate articles using semantic similarity.
* ✂️ **Summarization**: Summarizes the article description using ML models.
* 📚 **Personalization**: Delivers top-K personalized articles using neural network models.
* 📈 **Fallback for New Users**: Shows trending articles to new users with no interaction history.

---

## 🧱 Tech Stack

| Layer     | Tech Used                                       |
| --------- | ----------------------------------------------- |
| Frontend  | React                                           |
| Backend   | Supabase (PostgreSQL, Auth, API)                |
| ML Models | HuggingFace Transformers, Sentence Transformers |

---

## 📂 Folder Structure

```
news-aggregator/
├── frontend/             # React frontend
│   ├── components/
│   ├── pages/
│   └── utils/
├── supabase/             # Supabase SQL schema & functions
│   ├── schema.sql
│   └── triggers.sql
├── models/               # Python scripts for summarization/deduplication
│   ├── summarize.py
│   └── deduplicate.py
├── scripts/              # Article scraper & processor
│   └── fetch_articles.py
└── README.md
```

---

## 🛢️ Database Schema (Supabase)

### `articles`

| Column        | Type      | Description                  |
| ------------- | --------- | ---------------------------- |
| id            | UUID (PK) | Unique article ID            |
| title         | TEXT      | Article title                |
| description   | TEXT      | Original fetched description |
| summary       | TEXT      | ML-generated summary         |
| url           | TEXT      | Source URL                   |
| category\_id  | INT (FK)  | Link to `categories` table   |
| source        | TEXT      | Source name (e.g., BBC)      |
| published\_at | TIMESTAMP | Original publish time        |
| created\_at   | TIMESTAMP | Time stored in DB            |

### `categories`

| Column | Type | Description              |
| ------ | ---- | ------------------------ |
| id     | INT  | Primary Key              |
| name   | TEXT | e.g., Tech, Health, etc. |

### `users`

| Column      | Type      | Description      |
| ----------- | --------- | ---------------- |
| id          | UUID (PK) | Supabase Auth ID |
| email       | TEXT      | User email       |
| created\_at | TIMESTAMP | Registered time  |

### `user_article_interactions`

| Column            | Type      | Description                |
| ----------------- | --------- | -------------------------- |
| id                | SERIAL PK | Interaction ID             |
| user\_id          | UUID FK   | Refers to `users` table    |
| article\_id       | UUID FK   | Refers to `articles` table |
| interaction\_type | TEXT      | e.g., view, like, bookmark |
| interaction\_time | TIMESTAMP | When it happened           |

---

## 🚀 How It Works

1. **Scraper** fetches articles from RSS/News API.
2. **Categorizer** tags the article.
3. **Deduplication Model** prevents redundant entries.
4. **Summarization Model** condenses article description.
5. Processed articles are stored in Supabase DB.
6. Users request articles:

   * If new → show trending
   * If returning → use personalization model

---

## 📦 Future Improvements

* Add feedback loop to improve summarization quality.
* Use pgvector for semantic search & better deduplication.
* Add bookmark & save-later features.

---
