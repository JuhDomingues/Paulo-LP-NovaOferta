'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Image1 from '@/images/1.jpg';
import Image2 from '@/images/2.jpg';
import Image3 from '@/images/3.jpg';
import Image4 from '@/images/4.jpg';
import Image5 from '@/images/5.jpg';
import Image6 from '@/images/6.jpg';
import Image7 from '@/images/7.jpg';

const images = [
  { src: Image1, alt: 'Imagem 1' },
  { src: Image2, alt: 'Imagem 2' },
  { src: Image3, alt: 'Imagem 3' },
  { src: Image4, alt: 'Imagem 4' },
  { src: Image5, alt: 'Imagem 5' },
  { src: Image6, alt: 'Imagem 6' },
  { src: Image7, alt: 'Imagem 7' },
];

export default function ImageCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of container width
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 lg:mb-12">
        Alguns <span className="text-[#8EF27E]">Instagrams transformados</span> dos nossos Alunos!
      </h2>
      
      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Scroll para esquerda"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Scroll para direita"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Images Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScroll}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0" style={{width: '269px'}}>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-contain bg-gray-900"
                  style={{width: '269px', height: '786px'}}
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}