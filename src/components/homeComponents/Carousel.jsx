import React, { useEffect, useState } from "react";

const images = [
  "https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg?crop=1.00xw:0.752xh;0.00160xw,0.120xh&resize=1200:*",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg/1200px-Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg",
  "https://www.cam.ac.uk/sites/default/files/styles/content-885x432/public/about-the-university/kings-8489564479-o.jpg?itok=0MziluRV",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);

    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-[30vh] md:h-[50vh] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
