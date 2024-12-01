import Client1 from "../assets/clients/brady_client.png";
import Client2 from "../assets/clients/hamza_client.png";
import Client3 from "../assets/clients/mohamed_client.png";
import Client4 from "../assets/clients/raed_client.png";
import Client5 from "../assets/clients/random1_client.png";
import Client6 from "../assets/clients/random2_client.png";
import Client7 from "../assets/clients/random3_client.png";
import GlobalDarkBackground from "../assets/images/dark-bg_s.jpg";
import LightBackground from "../assets/images/light-bg l.jpg";
import ParalaxImage from "../assets/images/parllax_v2.png";
import ParalaxMobile from "../assets/images/9.16 parllax.png";
import { useTheme } from "./theme-provider";
import { Button, buttonVariants } from "./ui/button";

export const Hero = () => {
  const { theme } = useTheme();

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
      className="relative min-h-[100vh] flex flex-col md:justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${
          theme === "dark" ? GlobalDarkBackground : LightBackground
        })`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-1 z-0 opacity-100 hidden md:block min-h-[101vh] -top-1"
        style={{
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the image in the section
          backgroundImage: `url(${ParalaxImage})`, // Sets the image URL
        }}
      />

      <div
        className="absolute inset-1 z-0 opacity-100 md:hidden "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "contain",
          backgroundImage: `url(${ParalaxMobile})`, // Sets the image URL

        }}
      />

      <div className="relative">
        <div className="md:container relative z-20 py-20 md:py-32 space-y-6 text-white flex flex-col items-center justify-center">
          <div
            className="absolute inset-36 opacity-100 bg-black rounded-[40px] -z-10 pointer-events-none hidden dark:block"
            style={{
              boxShadow: `
      0 0 50px 150px rgba(0, 0, 0, 0.9) inset, /* Darker shadow in the center */
      0 0 20px 10px rgba(0, 0, 0, 0.5) /* Slight outer glow for effect */
    `,
              filter: "blur(100px)" /* Increase blur for smoother edges */,
            }}
          ></div>

          <div className="text-center space-y-2 w-full">
            <h1
              className="hidden md:block text-5xl md:text-6xl font-bold"
              data-aos="fade-up"
            >
              Amplify Your <i className="font-serif">Presence</i>
            </h1>
            <h1
              className="block text-4xl md:hidden font-bold"
              data-aos="fade-up"
            >
              <i className="font-serif">Amplify Your Presence</i>
            </h1>
            <h2 className="text-xl text-[#939393]" data-aos="fade-up">
              by shaping supreme visuals
            </h2>
          </div>

          <div
            className="text-center space-y-1 md:space-x-4 md:space-y-0 w-full md:w-1/2 px-2 md:px-0"
            data-aos="zoom-in-up"
          >
            <Button className="w-full md:w-1/3 bg-primary text-white">
              Check Our Offers
            </Button>
            <Button
              variant="outline"
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "outline",
              })} bg-[#3F3F3F] text-white hover:bg-[#4F4F4F] `}
            >
              Why Choose Us?
            </Button>
          </div>

          <div
            className={`justify-center items-center md:space-x-6 space-y-2 md:space-y-0  w-2/3 ${
              theme === "dark" ? "text-white" : "text-black"
            } md:flex lg:flex`}
          >
            <div className="flex -space-x-1">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className={`w-[38px] h-[38px] rounded-full ${
                    theme === "dark" ? "bg-gray-700/50" : "bg-gray-300/50"
                  } backdrop-blur-sm flex items-center justify-center`}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-bold w-full">
                Amplify SSV Projects are Rated:
              </h3>
              <div className="flex justify-center sm:justify-start items-center">
                <span className="mr-2 text-sm">Excellent</span>
                <span
                  className={`text-[#A2161B] ${
                    theme === "dark" ? "text-[#A2161B]" : ""
                  }`}
                >
                  ★★★★☆
                </span>
                <span
                  className={`ml-2 ${
                    theme === "dark" ? "text-red-200" : "text-gray-500"
                  }`}
                >
                  (4.8/5)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
