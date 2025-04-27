
import { useEffect, useState } from 'react';
import NewsCard, { NewsItem } from '../components/NewsCard';

const DefaultPage = () => {
  const [trendingNews, setTrendingNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Simulated trending news data
    setTrendingNews([
      {
        id: '1',
        title: 'The Future of AI in 2025',
        description: 'Artificial Intelligence continues to evolve at an unprecedented pace, transforming industries and daily life...',
        category: 'Technology',
        date: '2025-04-27',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
      },
      {
        id: '2',
        title: 'Global Climate Summit Announces New Initiatives',
        description: 'World leaders gather to discuss climate change solutions and announce groundbreaking environmental policies...',
        category: 'Environment',
        date: '2025-04-27',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
      },
    ]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Trending News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default DefaultPage;
