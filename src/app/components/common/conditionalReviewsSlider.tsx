'use client';

import { usePathname } from 'next/navigation';
import ReviewsSlider from './reviewsSlider';

const legalPaths = new Set(['/privacy', '/terms']);

export default function ConditionalReviewsSlider() {
  const pathname = usePathname();

  if (legalPaths.has(pathname)) return null;

  return <ReviewsSlider />;
}