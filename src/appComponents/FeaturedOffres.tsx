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
    <section className="py-24 bg-black relative">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <span className="text-red-500 font-bold text-lg">Most Popular</span>
        <h4 className="text-white text-4xl font-bold mb-2">Featured Offers</h4>
        <p className="text-gray-400 max-w-md">
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
      />
      <img
        src={AccentImage}
        className="absolute right-0 rotate-180"
        style={{
          top: "-37rem",
        }}
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-16">
        {data.slice(0, 2).map((offer, index) => (
          <Card key={index} {...offer} />
        ))}
      </div>
    </section>
  );
};
