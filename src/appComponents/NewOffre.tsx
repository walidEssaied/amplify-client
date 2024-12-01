import { FC } from "react";
import Abstract25 from "../assets/images/abstract_lines2 5.png";
import { NewOffreCard } from "./NewOffreCard";

export const NewOffre: FC = (): JSX.Element => {
  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div
        className="flex flex-col items-center justify-center text-center mb-12 relative z-10"
        data-aos="fade-up"
      >
        <span className="text-red-500 font-bold text-lg">New Offers</span>
        <h4 className="text-black dark:text-white text-4xl font-bold mb-2">
          Architectural Visualization
        </h4>
      </div>

      <img
        src={Abstract25}
        alt="Abstract design"
        className="hidden lg:block absolute top-14 left-8x w-[400px] opacity-100 -rotate-90 z-0"
      />
      <img
        src={Abstract25}
        alt="Abstract design"
        className="hidden lg:block absolute -bottom-14 right-14 w-[400px] opacity-100 -rotate-90 z-0"
      />

      <div className="container mx-auto relative z-10">
        <NewOffreCard />
      </div>
    </section>
  );
};

export default NewOffre;
