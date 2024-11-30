import { FC, useEffect, useRef, useState } from "react";

import ParalaxImage from "../assets/images/62adafaf-c4dd-402d-b046-8b76b76a580d 1.png";
import Image4 from "../assets/images/image 4.png";
import YoutubeIcon from "../assets/images/image 5.png";
import GrowthIcon from "../assets/logo/growth.png";
import { RatingCard } from "./RatingCard";
import { Button, buttonVariants } from "./ui/button";

export const HeroServicesPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (parallaxRef.current) {
        const rect = (parallaxRef.current as any).getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${ParalaxImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: `translate(${-mousePosition.x / 50}px, ${
      -mousePosition.y / 50
    }px)`,
    transition: "transform 0.1s ease",
  };

  return (
    <>
      <section
        ref={parallaxRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: `
          rgba(0, 0, 0, 0.4) -20px -20px 30px -10px inset, 
          rgba(0, 0, 0, 0.4) 20px 20px 30px -10px inset, 
          rgba(0, 0, 0, 0.4) -20px 20px 30px -10px inset, 
          rgba(0, 0, 0, 0.4) 20px -20px 30px -10px inset
        `,
        }}
      >
        <div
          className="absolute inset-0 z-0 opacity-100"
          style={parallaxStyle}
        />

        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10"></div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div>
          <div className="container relative z-20 py-20 md:py-32 space-y-6 text-white flex flex-col items-center justify-center">
            <div className="relative w-3/4">
              <div className="relative w-full h-full">
                <div
                  className="absolute -inset-8 bg-black rounded-[40px] z-0 pointer-events-none"
                  style={{
                    boxShadow: `
              0 0 40px 20px rgba(0,0,0,0.7) inset,
              0 0 100px 20px rgba(255,255,255,0.1)
            `,
                    filter: "blur(20px)",
                  }}
                ></div>

                <div className="absolute rounded-3xl inset-0 bg-gradient-to-br from-[#2C3E50]/70 via-[#3498DB]/50 to-[#2980B9]/70  z-10 pointer-events-none"></div>

                <img
                  src={Image4}
                  alt="Branding"
                  className="w-full rounded-3xl relative z-20"
                />

                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <img
                    src={YoutubeIcon}
                    alt="Youtube Icon"
                    className="w-20 h-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RatingCard
        title={
          <div className="text-center leading-snug">
            Product visualisation For <br /> Social Media
          </div>
        }
        buttons={
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-primary text-white">
              Contact Us Now
            </Button>
            <Button
              variant="outline"
              className={`w-full sm:w-auto ${buttonVariants({
                variant: "outline",
              })} bg-[#3F3F3F] text-white hover:bg-[#4F4F4F]`}
            >
              What You Will Get
            </Button>
          </div>
        }
      />
      <MarketingSection />
    </>
  );
};

export const MarketingSection: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] opacity-10">
        <div className="w-full h-full bg-[url('/placeholder.svg')] bg-no-repeat bg-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <span className="text-red-500 font-bold text-lg">Is This You?</span>
            <h4 className="text-white text-4xl font-bold mb-2">Are You...</h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-zinc-900/50 rounded-2xl p-10 border border-gray-600 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤔</span>
                  <p className="text-sm text-left">
                    Looking for an all-in-one program to master Webflow from A
                    to Z?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 mb-16 font-bold text-xl">
          If the answer is "Yes" to any of the above, this package is for you.
        </p>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">You Will Get</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-zinc-900/50 rounded-2xl p-10 backdrop-blur-sm flex flex-col gap-10 border"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12">
                    <img src={GrowthIcon} className="p-2 border rounded-md" />
                  </div>
                  <h3 className="text-left text-sm font-bold">
                    Looking for an all-in-one program to master
                  </h3>
                  <p className="text-left text-xs text-gray-400">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
