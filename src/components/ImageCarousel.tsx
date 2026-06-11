import React, { useState } from 'react';

interface Props {
  images: string[];
}

export default function ImageCarousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="mb-10">
      <div className="relative bg-surface rounded-lg overflow-hidden mb-3">
        <img
          src={images[current]}
          alt={`Screenshot ${current + 1} of ${images.length}`}
          className="w-full max-h-[500px] object-contain"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl transition"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl transition"
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <>
          <div className="flex gap-2 overflow-x-auto py-1">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-shrink-0 rounded overflow-hidden transition-all ${
                  i === current
                    ? 'ring-2 ring-accent opacity-100'
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                <img src={img} alt="" className="h-16 w-24 object-cover" />
              </button>
            ))}
          </div>
          <p className="text-center text-muted text-xs font-mono mt-2">
            {current + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}
