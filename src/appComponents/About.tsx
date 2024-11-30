import React, { useEffect, useRef, useState } from "react";
import honeyProduct from "../assets/images/Honey product manipulation final.png";
import image2 from "../assets/images/image 2.png";
import image3 from "../assets/images/image 3.png";
import perfumeBand from "../assets/images/perfume_band 1.png";
import spreadFlowers from "../assets/images/spread flowes.png";
import version1 from "../assets/images/Version 1 middle 1.png";
import watermelon from "../assets/images/Water Melon Canned FInal 5 1.png";
import womanHands from "../assets/images/woman_hands_1.1 2.png";
import "./about.css";

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

const VerticalMarquee: React.FC<{
  direction: "up" | "down";
  images: string[];
  isActive: boolean;
}> = ({ direction, images, isActive }) => {
  return (
    <div
      className={`amplify-work_vertical-marquee-component ${
        direction === "down" ? "cc-reversed" : ""
      } ${isActive ? "active" : ""}`}
    >
      <div className="amplify-work_vertical-marquee">
        {images.map((src, index) => (
          <div
            key={index}
            className="amplify-work_vertical-marquee-image-wrapper p-2"
          >
            <img
              src={src}
              alt={`Student work ${index + 1}`}
              className="amplify-work_vertical-marquee-image"
            />
          </div>
        ))}
        {images.map((src, index) => (
          <div
            key={`duplicate-${index}`}
            className="amplify-work_vertical-marquee-image-wrapper p-2"
          >
            <img
              src={src}
              alt={`Student work ${index + 1}`}
              className="amplify-work_vertical-marquee-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const OurWorkGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log({entry});
        
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black">
      <section
        className="amplify-work-section container mx-auto px-4 md:px-8 lg:px-16"
        ref={sectionRef}
      >
        <div className="absolute inset-0 z-10 pointer-events-none amplify-work-section-overlay"></div>
        <div>
          <div className="section_content-wrapper text-center mb-8 relative z-20 mt-10 px-4 sm:px-8 lg:px-16">
            <h4 className="text-md font-bold text-red-600">See the magic</h4>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Designs Our Students Created
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 mx-auto max-w-2xl">
              Explore the remarkable designs created by our students after
              completing our courses.
            </p>
          </div>

          <div className="amplify-work_vertical-marquee-wrapper flex flex-col md:flex-row gap-4">
            <div className="hidden md:block">
              <VerticalMarquee
                direction="up"
                images={works.slice(0, 3)}
                isActive={isActive || isDesktop}
              />
            </div>
            <div className="">
              <VerticalMarquee
                direction="down"
                images={works.slice(3, 6)}
                isActive={isActive || isDesktop}
              />
            </div>
            <div className="hidden md:block">
              <VerticalMarquee
                direction="up"
                images={works.slice(6)}
                isActive={isActive || isDesktop}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
