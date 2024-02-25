import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle going to a specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Function to handle the "next" button
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle the "prev" button
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="default-carousel" className="relative " data-carousel="static">
      {/* Carousel wrapper */}
      <div className="h-56 rounded-xl md:h-128 lg:h-3/4-screen overflow-hidden">
        {images.map((img, index) => {
          const image = getImage(img.childImageSharp.gatsbyImageData);
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              } flex justify-center items-center`} // Center image in case it's smaller than the container
              data-carousel-item
            >
              <GatsbyImage
                className="object-contain max-w-full max-h-full" // Ensure image scales down
                image={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
      {/* Slider indicators */}
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
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute  top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="font-bold bg-customTeal-1100 rounded-full px-2 py-1 inline-flex items-center justify-center">
          {"<"}
        </span>
      </button>
      <button
        type="button"
        className="absolute   top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="font-bold bg-customTeal-1100 rounded-full px-2 py-1 inline-flex items-center justify-center">
          {">"}
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
