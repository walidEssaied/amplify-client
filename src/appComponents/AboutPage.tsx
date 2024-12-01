import { FC } from "react";
import Abstract13 from "../assets/images/abstract_lines1 3.png";
import Abstract14 from "../assets/images/abstract_lines1 4.png";
import Line27 from "../assets/images/abstract_lines2 7.png";
import Line28 from "../assets/images/abstract_lines2 8.png";
import Image4 from "../assets/images/image 4.png";
import YoutubeIcon from "../assets/images/image 5.png";
import Avatar from "../assets/images/istockphoto-1208175274-612x612.png";
import { HomeCallToAction } from "./HomeCallToAction";

export const AboutPage: FC = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="container mx-auto py-24 px-4" data-aos="fade-up">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="p-2 border rounded-xl font-bold text-md md:text-lg text-black dark:text-white">
              ABOUT US
            </div>
            <div className="p-2 border rounded-xl font-bold text-md md:text-lg text-black dark:text-white">
              Values
            </div>
          </div>
          <h5 className="text-4xl text-center leading-relaxed font-bold text-black dark:text-white max-w-4xl">
            Creating The Best Social Media Visuals For Beauty And Wellness
            Brands
          </h5>
          <p className="dark:text-gray-300 text-gray-700 text-center max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative">
            <div
              className="absolute -inset-8 bg-black rounded-[40px] z-0 pointer-events-none hidden dark:block"
              style={{
                boxShadow: `
                  0 0 40px 20px rgba(0,0,0,0.7) inset,
                  0 0 100px 20px rgba(255,255,255,0.1)
                `,
                filter: "blur(20px)",
              }}
            ></div>
            <div
              className="absolute -inset-8 bg-white rounded-[40px] z-0 pointer-events-none block dark:hidden"
              style={{
                boxShadow: `
                  0 0 40px 20px rgba(0, 0, 0, 0.7) inset,
                  0 0 100px 20px rgba(255,255,255,0.1)
                `,
                filter: "blur(20px)",
              }}
            ></div>

            <div className="absolute rounded-3xl inset-0 bg-gradient-to-br from-[#2C3E50]/70 via-[#3498DB]/50 to-[#2980B9]/70 z-10 pointer-events-none"></div>

            <img
              src={Image4}
              alt="Branding"
              className="w-full rounded-3xl relative z-20"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <img src={YoutubeIcon} alt="Youtube Icon" className="w-20 h-20" />
            </div>
            <div className="absolute top-1/4 left-0 transform -translate-x-1/2 z-10 md:block hidden">
              <img
                src={Line27}
                alt="Decorative Line"
                className="w-40 h-80 hidden dark:block"
              />
            </div>
            <div className="absolute -bottom-10 -right-52 transform -translate-x-1/2 z-10 rotate-180 hidden md:block">
              <img
                src={Line28}
                alt="Decorative Line"
                className="w-80 h-40 hidden dark:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative">
        <div className="absolute -top-96 left-0  hidden md:block">
          <img src={Abstract13} alt="Abstract" className="w-[900px] " />
        </div>
        <div className="absolute top-0 right-0 hidden md:block">
          <img src={Abstract14} alt="Abstract" className="w-[700px]" />
        </div>
        <div
          className="flex flex-col items-center justify-center text-center space-y-4 my-12 mt-48"
          data-aos="fade-up"
        >
          <span className="text-red-600 font-bold text-lg">100% Remote </span>
          <h4 className="dark:text-white text-black text-4xl font-bold">
            Meet Our Team
          </h4>
        </div>
        <div className="relative overflow-hidden">
          <ProfileGrid />
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <div
          className="flex flex-col items-center justify-center text-center space-y-4 mb-12"
          data-aos="fade-up"
        >
          <span className="text-red-600 font-bold text-lg">
            Founded By Passion
          </span>
          <h4 className="text-black dark:text-white text-4xl font-bold">
            Our Backstory & Values
          </h4>
        </div>
        <div className="space-y-9 mx-auto leading-loose">
          <p className="text-center text-black dark:text-white text-lg leading-loose font-medium">
            Amplify was born from a shared passion for pushing creative
            boundaries and a belief that stunning visuals should be accessible
            to all. Founded in 2023 by a group of ambitious college students
            with diverse skillsets – specializing in Generative AI, 3D product
            visualization, rendering and graphic design – Amplify represents the
            culmination of their combined talents and shared vision
          </p>
          <hr className="border-2 w-11/12" />
          <p className="text-center text-black dark:text-white text-lg leading-loose font-medium">
            We are a creative studio on a mission: to empower small and
            medium-sized businesses with the impactful visuals they need to
            thrive in a competitive world. We believe that stunning visuals
            shouldn't be a luxury reserved for large corporations. That's why
            we've built a studio that blends artistic passion with cutting-edge
            technology, making high-end 3D visualization accessible to all.
          </p>
          <hr className="border-2 my-10 mx-20" />
          <p className="text-center text-black dark:text-white text-lg leading-loose font-medium">
            What sets Amplify apart is our unwavering commitment to quality and
            our dedication to pushing creative boundaries. We don't just create
            visuals; we craft experiences. We believe in the power of visual
            storytelling to evoke emotion, spark engagement, and ultimately
            drive results for our clients.
          </p>
        </div>
      </section>
      <HomeCallToAction title="Facinated By Our Journey?" />
    </div>
  );
};



function ProfileGrid() {
  const profiles = [
    { name: "Ayadi Abdenour" },
    { name: "Fezai Ghaith" },
    { name: "Mohamed Amine Jbeli" },
  ];

  return (
    <div className="py-8 px-4">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="rounded-2xl w-[280px] bg-white shadow-lg border border-white overflow-hidden"
          >
            <div className="bg-black p-6 text-center">
              <h3 className="text-white text-lg font-medium">{profile.name}</h3>
            </div>
            <div className="p-8 flex justify-center relative">
              <img
                src={Avatar}
                alt={profile.name}
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
