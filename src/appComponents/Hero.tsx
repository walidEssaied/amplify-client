import { useEffect, useRef, useState } from "react";
import GlobalDarkBackground from "../assets/images/dark-bg_s.jpg";
import ParalaxImage from "../assets/images/parllax.png";
import { Button, buttonVariants } from "./ui/button";
import Client1 from "../assets/clients/brady_client.png";
import Client2 from "../assets/clients/hamza_client.png";
import Client3 from "../assets/clients/mohamed_client.png";
import Client4 from "../assets/clients/raed_client.png";
import Client5 from "../assets/clients/random1_client.png";
import Client6 from "../assets/clients/random2_client.png";
import Client7 from "../assets/clients/random3_client.png";

export const Hero = () => {
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

  // Array of clients with images
  const clients = [
    { name: "Client1", img: Client1 },
    { name: "Client2", img: Client2 },
    { name: "Client3", img: Client3 },
    { name: "Client4", img: Client4 },
    { name: "Client5", img: Client5 },
    { name: "Client6", img: Client6 },
    { name: "Client7", img: Client7 },
  ];

  return (
    <section
      ref={parallaxRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${GlobalDarkBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", // Inner shadow effect
      }}
    >
      <div className="absolute inset-0 z-0 opacity-100" style={parallaxStyle} />

      <div className="container relative z-20 py-20 md:py-32 space-y-6 text-white flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Amplify Your <i className="font-serif">Presence</i>
          </h1>
          <h2 className="text-xl text-[#939393]">by shaping supreme visuals</h2>
        </div>

        <div className="text-center space-y-4 md:space-x-4 md:space-y-0 w-1/2">
          <Button className="w-full md:w-1/3 bg-primary text-white">
            Check Our Offers
          </Button>
          <Button
            variant="outline"
            className={`md:w-1/3 ${buttonVariants({
              variant: "outline",
            })} bg-[#3F3F3F] text-white hover:bg-[#4F4F4F] `}
          >
            Why Choose Us?
          </Button>
        </div>

        <div className="flex justify-center space-x-6 w-2/3">
          <div className="flex -space-x-1">
            {/* Dynamically render client images */}
            {clients.map((client) => (
              <div
                key={client.name}
                className="w-[38px] h-[38px] rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center"
              >
                <img src={client.img} alt={client.name} className="rounded-full" />
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold w-full">
              Amplify SSV Projects are Rated:
            </h3>
            <div className="flex justify-center sm:justify-start items-center">
              <span className="mr-2 text-sm">Excellent</span>
              <span className="text-red-500">★★★★☆</span>
              <span className="text-red-200 ml-2">(4.8/5)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
