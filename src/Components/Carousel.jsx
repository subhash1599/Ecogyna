import React from "react";

function Carousel({ currentContent }) {
  const isContent1or2 = currentContent === 1 || currentContent === 2;
  const isContent3 = currentContent === 3;

  return (
    <div className="relative w-full">
      <img
        src={`https://ecoyaan.com/images/carousel-${currentContent}.png`}
        alt={`Content ${currentContent}`}
        className="w-full h-auto"
      />
      <div
        className={`overlay absolute ${
          isContent1or2
            ? "top-1/2 left-0"
            : isContent3
            ? "top-1/4 left-1/2 transform -translate-x-1/2"
            : "top-1/2 left-1/2 transform -translate-x-1/2"
        } -translate-y-1/2 text-center px-4`}
      >
        {currentContent === 1 && (
          <div>
            <p className="text-lg md:text-2xl font-bold mb-2">
              Buy Less, Buy Better!
            </p>
            <p className="text-sm md:text-base">
              Authentic source of truth for your sustainability needs
            </p>
            <button className="button mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
              About Us
            </button>
          </div>
        )}
        {currentContent === 2 && (
          <div>
            <p className="text-lg md:text-2xl font-bold mb-2">
              Follow us on Instagram
            </p>
            <p className="text-sm md:text-base">
              For climate news, lifestyle tips, & updates
            </p>
            <button className="button mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
              Follow Us
            </button>
          </div>
        )}
        {currentContent === 3 && (
          <div className="mt-8 md:mt-16">
            <p className="text-lg md:text-2xl font-bold mb-2">
              Are you a business that truly cares about sustainability?
            </p>
            <p className="text-sm md:text-base">
              We would love to work with you
            </p>
            <button className="button mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
              Get In Touch
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
