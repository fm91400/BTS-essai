import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TopicCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export function TopicCard({ title, description, image, onClick }: TopicCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-blue-600">
          <span className="font-medium">En savoir plus</span>
          <ChevronRight className="ml-2 h-5 w-5" />
        </div>
      </div>
    </div>
  );
}