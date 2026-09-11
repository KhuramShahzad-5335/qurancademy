'use client';

import React, { useState, useEffect, useCallback } from 'react';

// MUI Icons
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Review, siteConfig } from '@/app/content/site.config';

interface ReviewsSliderProps {
  customReviews?: Review[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ReviewsSlider({
  customReviews = siteConfig.reviews,
  autoPlay = true,
  interval = 5000,
}: ReviewsSliderProps) {
  const reviews = customReviews || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = useCallback((newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 150); // Match transition duration
  }, []);

  const handleNext = useCallback(() => {
    changeSlide((currentIndex + 1) % reviews.length);
  }, [currentIndex, reviews.length, changeSlide]);

  const handlePrev = useCallback(() => {
    changeSlide((currentIndex - 1 + reviews.length) % reviews.length);
  }, [currentIndex, reviews.length, changeSlide]);

  // Auto-play timer
  useEffect(() => {
    if (!autoPlay || reviews.length <= 1) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, handleNext, reviews.length]);

  // Star Rating Renderer
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} className="text-amber-400 text-lg" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<StarHalfIcon key={i} className="text-amber-400 text-lg" />);
      } else {
        stars.push(<StarIcon key={i} className="text-neutral-700 text-lg" />);
      }
    }
    return stars;
  };

  if (!reviews || reviews.length === 0) return null;

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative z-[1] py-16 px-4 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-white bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full inline-block mb-3">
          Student & Parent Feedback
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          What Our Community Says
        </h2>
      </div>

      {/* Main Review Card Container - Fixed Dimensions to eliminate layout shift */}
      <div className="relative bw-card p-6 md:p-10 bg-neutral-900/50 border border-neutral-800/80 rounded-3xl backdrop-blur flex flex-col justify-between min-h-[380px] sm:min-h-[340px]">
        
        {/* Background Quote Watermark */}
        <div className="absolute top-6 right-6 text-neutral-800/40 pointer-events-none">
          <FormatQuoteIcon style={{ fontSize: 80 }} />
        </div>

        {/* Fading Content Area */}
        <div
          className={`relative z-10 flex flex-col justify-between flex-1 transition-opacity duration-150 ease-in-out ${
            isFading ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
          }`}
        >
          {/* Top Bar: Rating & Date */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800/60 pb-4 mb-4">
            <div className="flex items-center gap-1">
              {renderStars(currentReview.rating)}
              <span className="text-xs font-bold text-neutral-300 ml-2">
                {currentReview.rating}.0
              </span>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              {currentReview.date}
            </span>
          </div>

          {/* Review Text - Clamped line-height & scrollable fallback if excessively long */}
          <div className="my-auto py-2">
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed italic line-clamp-4">
              &quot;{currentReview.review}&quot;
            </p>
          </div>

          {/* Author Details & Course Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 mt-auto border-t border-neutral-800/40">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-white">{currentReview.name}</h4>
                <VerifiedIcon className="text-emerald-400 text-sm" titleAccess="Verified Review" />
              </div>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">
                {currentReview.location}
              </p>
            </div>

            <span className="text-xs bg-neutral-950 border border-neutral-800 text-neutral-300 px-3 py-1.5 rounded-lg w-fit font-mono">
              Course: <span className="text-emerald-400">{currentReview.course}</span>
            </span>
          </div>
        </div>

        {/* Controls Bar - Always pinned to the bottom */}
        <div className="relative z-10 flex items-center justify-between pt-6 mt-4 border-t border-neutral-800/60">
          
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changeSlide(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-emerald-500'
                    : 'w-2.5 bg-neutral-700 hover:bg-neutral-600'
                }`}
              />
            ))}
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Review"
              className="p-2.5 bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700/60 rounded-xl text-neutral-200 hover:text-white transition-all active:scale-95"
            >
              <ArrowBackIosNewIcon style={{ fontSize: 16 }} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="p-2.5 bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700/60 rounded-xl text-neutral-200 hover:text-white transition-all active:scale-95"
            >
              <ArrowForwardIosIcon style={{ fontSize: 16 }} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}