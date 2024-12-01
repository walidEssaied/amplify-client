import { FC } from "react";
import AccentImage from "../assets/images/abstract_lines1 3.png";
import { Card, CardProps } from "./ServiceCard";
import { featuredOffresData } from "./ServicesData";

type FeaturedOffresProps = {
  data?: CardProps[];
};

export const FeaturedOffres: FC<FeaturedOffresProps> = ({
  data = featuredOffresData,
}): JSX.Element => {
  return (
    <section className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
      <div
        className="flex flex-col items-center justify-center text-center mb-8"
        data-aos="fade-up"
      >
        <span className="text-red-500 font-bold text-lg">Most Popular</span>
        <h4 className="text-black dark:text-white text-4xl font-bold mb-2">
          Featured Offers
        </h4>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          Discover our latest offers and exclusive deals crafted just for you.
          Don't miss out on these amazing opportunities!
        </p>
      </div>

      <img
        src={AccentImage}
        className="absolute left-0"
        style={{
          top: "-113px",
        }}
        alt="Accent Design"
        data-aos="fade-up"
      />
      <img
        src={AccentImage}
        className="absolute right-0 rotate-180"
        style={{
          top: "-37rem",
        }}
        alt="Accent Design"
        data-aos="fade-up"
      />

      <div className="container grid grid-cols-1 sm:grid-cols-2  gap-6 px-6 md:px-16">
        {data.slice(0, 2).map((offer, index) => (
          <Card key={index} {...offer} data-aos="fade-up" />
        ))}
      </div>
    </section>
  );
};
