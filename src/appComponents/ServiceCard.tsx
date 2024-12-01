import { FC } from "react";
import { Button } from "./ui/button";

export type CardProps = {
  title: string;
  description: string;
  image: string;
  contact_link: string;
  learn_more_link: string;
  withIcons?: boolean;
};

export const Card: FC<CardProps> = ({
  title,
  description,
  image,
  contact_link,
  learn_more_link,
  withIcons = true,
}) => {
  return (
    <div className="bg-white dark:bg-[#212121] rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 mx-auto w-full max-w-[673px] border border-gray-600 dark:border-gray-700">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="p-6 flex flex-col items-center justify-center w-full">
        <h5 className="text-xl font-bold text-black dark:text-white">{title}</h5>
        <p className="my-2 text-gray-600 dark:text-gray-300 text-center">{description}</p>
        {withIcons && (
          <div className="flex justify-center mt-4 w-full gap-4">
            <a href={contact_link} className="w-full">
              <Button className="w-full bg-primary text-white dark:bg-primary dark:text-white">
                Contact Us
              </Button>
            </a>
            <a href={learn_more_link} className="w-full">
              <Button variant="outline" className="w-full border-gray-600 dark:border-gray-500 text-black dark:text-white">
                Learn More
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
