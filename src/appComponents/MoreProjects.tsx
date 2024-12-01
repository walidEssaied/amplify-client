import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image2 from "../assets/images/3d-render-power-knowledge-concept-book-lamp.png";
import Image1 from "../assets/images/istockphoto-1208175274-612x612-1.png";
import over300ProjectsImage from "../assets/images/over_300_project.png";
import Image3 from "../assets/images/perfume_band 1.png";
import Image4 from "../assets/images/simple-comfyui-img2img-upscale-workflow-v0-fxbaq995mzfb1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define the Project interface
interface Project {
  id: number;
  image: any;
  project_name: string;
  description: string;
}

// Mock project data
const projectsData: Project[] = [
  {
    id: 1,
    image: Image1,
    project_name: "Brady Browning",
    description:
      "Got to say, Amplify delivered exceptional work within the tight timeframe. Also, I'm a perfectionist myself and I noticed Amplify are aswell. also because his quality of work! Thanks Abdenour and let's keep working together.",
  },
  {
    id: 2,
    image: Image2,
    project_name: "Social Media Analytics Tool",
    description:
      "Developed a comprehensive social media analytics platform that provides real-time insights and sentiment analysis for businesses. Our tool leverages advanced machine learning algorithms to track engagement, measure brand sentiment, and generate actionable reports. The dashboard offers intuitive visualizations, helping companies understand their social media performance at a glance. Key features include trend tracking, competitor analysis, and customizable reporting modules.",
  },
  {
    id: 3,
    image: Image3,
    project_name: "AI-Powered Chatbot",
    description:
      "Created an intelligent chatbot solution using cutting-edge natural language processing technologies. This AI-driven customer support tool can understand context, handle complex queries, and provide personalized responses. The chatbot integrates seamlessly with existing customer service platforms, reducing response times and improving overall customer satisfaction. Machine learning capabilities allow continuous improvement in understanding and resolving customer inquiries.",
  },
  {
    id: 4,
    image: Image4,
    project_name: "Health Tracking Mobile App",
    description:
      "Designed a comprehensive health and fitness tracking application that goes beyond basic activity monitoring. The app provides personalized health insights, integrating data from multiple sources including wearables, manual inputs, and health records. Advanced algorithms analyze user data to offer tailored fitness recommendations, nutrition guidance, and progress tracking. Features include goal setting, achievement badges, and integration with popular health platforms.",
  },
];

export const MoreProjects: React.FC = (): JSX.Element => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute bottom-[150px] left-0 right-0 z-0 opacity-100 blur-sm">
        <img
          src={over300ProjectsImage}
          alt="Background Image"
          className="w-full h-[300px] bg-no-repeat object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12" data-aos="fade-up">
          <h4 className="text-black dark:text-white text-4xl font-bold mb-2">
            300+ Projects Finished
          </h4>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Join a global network of freelancers who have achieved success
            through our courses. Collaborate, seek advice, and continue growing
            alongside peers who understand your journey.
          </p>
        </div>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#D9D9D9] hover:bg-white/30 dark:bg-[#333] dark:hover:bg-white/30 md:w-[80px] md:h-[80px] rounded-full p-2 backdrop-blur-sm max-md:hidden flex flex-col items-center justify-center"
            onClick={() => swiperInstance?.slidePrev()}
          >
            <ChevronLeft className="text-black dark:text-white" size={"medium"} />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#D9D9D9] hover:bg-white/30 dark:bg-[#333] dark:hover:bg-white/30 md:w-[80px] md:h-[80px] rounded-full p-2 backdrop-blur-sm max-md:hidden flex flex-col items-center justify-center"
            onClick={() => swiperInstance?.slideNext()}
          >
            <ChevronRight className="text-black dark:text-white" size={"medium"} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            className="w-full max-w-4xl mx-auto"
            autoplay
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-gray-200 dark:bg-[#1f1f1f] backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-start md:flex-row p-6 md:h-[400px] w-full border-22 border-gray-600 dark:border-gray-700">
                  <div className="md:w-2/3">
                    <img
                      src={project.image}
                      alt={project.project_name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="w-full flex flex-col justify-center items-start text-left md:p-12 space-y-4">
                    <p className="text-gray-900 dark:text-gray-300 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                      {project.project_name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
