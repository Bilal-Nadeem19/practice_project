import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({ review }) {
  return (
    <div className="w-full min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-8 flex flex-col items-center text-center h-full">
      {/* Stars */}
      <div className="flex items-center justify-center gap-2 mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 mb-4 break-words">
        {review.review}
      </p>

      {/* Name & Company */}
      <p className="text-sm sm:text-base font-bold text-heading break-words">{review.name}</p>
      <p className="text-xs sm:text-sm text-textcolor mt-1 break-words">{review.company}</p>
    </div>
  );
}