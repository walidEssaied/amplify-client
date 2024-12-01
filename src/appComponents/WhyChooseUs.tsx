import { FC } from "react";
import Image4 from "../assets/images/1000_F_481105096_hJYNYkbZAcod6ghMZMO6MUeRoixrPYK8 1.png";
import Image1 from "../assets/images/3d-jigsaw-puzzle-pieces-symbol-600nw-2178436367.png";
import Image2 from "../assets/images/3d-render-power-knowledge-concept-book-lamp.png";
import AccentImage1 from "../assets/images/abstract_lines1 5.png";
import AccentImage7 from "../assets/images/abstract_lines1 7.png";
import AccentImage8 from "../assets/images/abstract_lines1 4.png";
import AccentImage2 from "../assets/images/abstract_lines1 6.png";
import AccentImage3 from "../assets/images/abstract_lines1 3.png";
import AbstractImage2 from "../assets/images/abstract_lines2 2.png";
import AbstractImage from "../assets/images/abstract_lines2 4.png";
import AbstractImage5 from "../assets/images/abstract_lines2 7.png";
import AbstractImage1 from "../assets/images/abstract_lines2 8.png";
import Image3 from "../assets/images/perfume_band 1.png";
import Image5 from "../assets/images/simple-comfyui-img2img-upscale-workflow-v0-fxbaq995mzfb1.png";
import Connection from "../assets/logo/connection.png";
import Find from "../assets/logo/find.png";
import Grow from "../assets/logo/growth.png";
import Idea from "../assets/logo/idea.png";
import Ratings from "../assets/logo/ratings.png";

const sectionsData = [
  {
    icon: Grow,
    title: "A Partnership for Growth:",
    description:
      "Amplify is invested in your brand's success, constantly seeking new ways to push boundaries and help your business grow.",
    image: Image1,
    accentImage: AbstractImage1,
    accentClassName: "absolute w-[409px] h-[272px] -top-8 left-8",
  },
  {
    icon: Idea,
    title: "Cutting-Edge ToolsDeep Understanding of Brand Needs:",
    description:
      "With years of experience in visualization, We understand how to tailor our work to meet specific brand needs and goals.",
    image: Image2,
    accentImage: AbstractImage2,
    accentClassName: "absolute w-[440px] h-[272px] rotate-90 -top- left-0",
  },
  {
    icon: Find,
    title: "Tailored StrategiesMeticulous Attention to Detail:",
    description:
      "Every element, from camera angle and light to texture and story, is meticulously chosen to create a captivating and impactful final product.",
    image: Image3,
    // imageClassName: "w-[1200px] absolute right-0 -bottom-40 md:right-0 lg:right-0",
    accentImage: AbstractImage5,
    accentClassName: "absolute w-[250px] h-[250px]",
  },

  {
    icon: Connection,
    title: "Cutting-Edge Technology:",
    description:
      "We leverage cutting-edge techniques like 3D environment creation, photo manipulation, and generative AI to bring a unique and hyperrealistic quality to our visuals.",
    image: Image5,
    imageClass: "md:w-[500px] border-1",
    accentImage: AbstractImage,
    accentClassName: "absolute w-[595px] h-[250px] bottom-0 right-10",
  },
  {
    icon: Ratings,
    title: "Proven Client Satisfaction:",
    description:
      "Clients consistently praise us for our talent, communication, ability to meet deadlines, and fresh ideas.",
    image: Image4,
    accentImage: AbstractImage,
    accentClassName: "absolute w-[250px] h-[250px] top-0 right-0",
  },
];

export const WhyChooseUs: FC = (): JSX.Element => {
  return (
    <section className="relative py-24 bg-white dark:bg-black overflow-hidden">
      <img src={AccentImage1} alt="Accent" className="absolute bottom-0 left-0" />
      <img src={AccentImage7} alt="Accent" className="absolute bottom-0 right-0" />
      <img src={AccentImage8} alt="Accent" className="absolute bottom-40 right-0" />
      <img
        src={AccentImage2}
        alt="Accent"
        className="absolute -left-80 w-1/3 bottom-40"
      />
      <img src={AccentImage3} alt="Accent" className="absolute left-0 top-3 " />
      <div className="flex flex-col items-center justify-center text-center mb-8" data-aos="fade-up">
        <span className="text-red-500 font-bold text-lg">
          The Amplify Advantage
        </span>
        <h4 className="text-black dark:text-white text-4xl font-bold mb-2" >
          Why work with us?
        </h4>
        <p className="text-black dark:text-gray-400 max-w-md" >
          5 reasons to take your brand to the next level with Amplify
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
      <div className="space-y-16 sm:space-y-24">
        {sectionsData.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-8 lg:gap-12`}
             data-aos="fade-up"
          >
            <div className="flex flex-col items-start text-left w-full lg:w-1/2">
              <img
                src={section.icon}
                alt=""
                className="w-10 h-10 mb-4 p-2 border border-black bg-black dark:bg-transparent dark:border-white rounded-lg"
              />
              <h2 className="text-black dark:text-white text-2xl sm:text-3xl font-bold mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg">
                {section.description}
              </p>
            </div>

            <div className="relative w-full lg:w-1/2 aspect-square flex justify-center items-center mt-8 lg:mt-0">
              <img
                src={section.accentImage}
                alt=""
                className={`absolute ${section.accentClassName}`}
              />
              <img
                src={section.image}
                alt={section.title}
                className={`w-4/5 h-4/5 object-cover z-10 ${section.imageClass || ''}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};
