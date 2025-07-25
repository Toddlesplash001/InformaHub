
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
}

interface NewsCardProps {
  news: NewsItem;
  showBookmark?: boolean;
}

const NewsCard = ({ news, showBookmark = true }: NewsCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className={`${isMobile ? 'h-36' : 'h-48'} overflow-hidden`}>
          <img 
            src={news.imageUrl} 
            alt={news.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className={`${isMobile ? 'p-3' : 'p-4'}`}>
        <div className="text-sm text-blue-600 mb-2">{news.category}</div>
        <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold mb-2 line-clamp-2`}>{news.title}</h3>
        <p className={`text-gray-600 ${isMobile ? 'line-clamp-2' : 'line-clamp-3'}`}>{news.description}</p>
      </CardContent>
      <CardFooter className={`${isMobile ? 'p-3' : 'p-4'} flex justify-between items-center`}>
        <span className="text-sm text-gray-500">{news.date}</span>
        {showBookmark && (
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
