'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RoomCarouselProps {
  images: string[];
  roomName: string;
  placeholderText: string;
}

export default function RoomCarousel({ images, roomName, placeholderText }: RoomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full h-80 bg-gray-100 flex items-center justify-center text-muted-foreground">
        {placeholderText}
      </div>
    );
  }

  return (
    <div className="relative w-full h-80 group overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt={`${roomName} - Image ${currentIndex + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
