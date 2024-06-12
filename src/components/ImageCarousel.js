import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const nextSlide = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  const prevSlide = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const nextLightboxSlide = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  const prevLightboxSlide = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const imageUrls = images.map(
    (img) => getImage(img.childImageSharp.gatsbyImageData).images.fallback.src
  );

  return (
    <div id="default-carousel" className="relative">
      <div className="h-56 rounded-xl md:h-128 lg:h-3/4-screen overflow-hidden">
        {images.map((img, index) => {
          const image = getImage(img.childImageSharp.gatsbyImageData);
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              } flex justify-center items-center`}
              data-carousel-item
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(index);
              }}
              tabIndex={0}
              role="button"
              aria-label={`View image ${index + 1} in lightbox`}
              style={{ cursor: "pointer" }}
            >
              <GatsbyImage
                className="object-contain max-w-full max-h-full"
                image={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={imageUrls[activeIndex]}
          nextSrc={imageUrls[(activeIndex + 1) % images.length]}
          prevSrc={imageUrls[(activeIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={prevLightboxSlide}
          onMoveNextRequest={nextLightboxSlide}
        />
      )}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-customTeal-1100" : "bg-customTeal-200"
            }`}
            aria-current={activeIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
      {/* Navigation buttons for the carousel */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous slide"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-customTeal-800/30 group-hover:bg-white/50 dark:group-hover:bg-customTeal-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-customTeal-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        aria-label="Next slide"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-customTeal-800/30 group-hover:bg-white/50 dark:group-hover:bg-customTeal-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-customTeal-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
