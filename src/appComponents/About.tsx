import React from "react";
import "./about.css";

// Import your images
import honeyProduct from "../assets/images/Honey product manipulation final.png";
import image2 from "../assets/images/image 2.png";
import image3 from "../assets/images/image 3.png";
import perfumeBand from "../assets/images/perfume_band 1.png";
import spreadFlowers from "../assets/images/spread flowes.png";
import version1 from "../assets/images/Version 1 middle 1.png";
import watermelon from "../assets/images/Water Melon Canned FInal 5 1.png";
import womanHands from "../assets/images/woman_hands_1.1 2.png";

const works = [
  honeyProduct,
  image2,
  image3,
  perfumeBand,
  spreadFlowers,
  version1,
  watermelon,
  womanHands,
  image2,
];

export const OurWorkGallery: React.FC = () => {
  const renderMarqueeColumn = (
    direction: "up" | "down",
    speed: number = 2,
    columnWorks: string[]
  ) => {
    const animationClass = direction === "down" ? "reverse" : "";

    return (
      <div
        className="marquee-container h-[500px] md:h-[500px]"
        style={{
          animationDuration: `${speed}s`, // Adjust animation speed dynamically
        }}
      >
        <div className={`marquee-column ${animationClass}`}>
          {/* Looping through the images twice */}
          {columnWorks.concat(columnWorks).map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-lg transition-transform duration-300 hover:scale-105"
              style={{
                width: "clamp(100px, 20vw, 700px)", // Scales between 100px and 500px
                height: "clamp(100px, 20vw, 700px)", // Keeps a similar aspect ratio
                margin: "clamp(2px, 1vw, 10px)", // Ensures consistent spacing
              }}
            >
              <img
                src={src}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="bg-white dark:bg-black transition-colors duration-300 relative"
      style={{ overflow: "hidden" }}
    >
      {/* Top gradient mask */}
      <div className="absolute top-0 left-0 w-full h-24 z-10 bg-gradient-to-b from-white/100 dark:from-black/100 to-transparent pointer-events-none "></div>

      {/* Title */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 w-full text-center mb-20 md:mb-0">
        <h4 className="text-md font-bold text-red-600">See the magic</h4>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white transition-colors duration-300">
          Designs Our Students Created
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mx-auto max-w-2xl transition-colors duration-300">
          Explore the remarkable designs created by our students after
          completing our courses.
        </p>
      </div>

      <section className="mx-auto px-4 py-8 relative opacity-90 ">
        <div className="relative w-full overflow-hidden md:-mt-4 md:-mb-6">
          <div className="flex justify-center items-center gap-[clamp(10px, 2vw, 30px)] min-w-full relative">
            <div className="w-full md:w-1/3">
              {renderMarqueeColumn("down", 10, works)}
            </div>
            <div className="w-full md:w-1/3">
              {renderMarqueeColumn("up", 11, works)}
            </div>
            <div className="w-full md:w-1/3">
              {renderMarqueeColumn("down", 12, works)}
            </div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full h-16 z-10 bg-gradient-to-t from-white/100 dark:from-black/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default OurWorkGallery;
