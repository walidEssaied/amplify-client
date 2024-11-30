import { FC, ReactNode } from "react";
import Client1 from "../assets/clients/brady_client.png";
import Client2 from "../assets/clients/hamza_client.png";
import Client3 from "../assets/clients/mohamed_client.png";
import Client4 from "../assets/clients/raed_client.png";
import Client5 from "../assets/clients/random1_client.png";
import Client6 from "../assets/clients/random2_client.png";
import Client7 from "../assets/clients/random3_client.png";
import { Button, buttonVariants } from "./ui/button";

interface RatingCardProps {
  title?: ReactNode;
  description?: string;
  buttons?: ReactNode;
}

const clients = [
  { name: "Client1", img: Client1 },
  { name: "Client2", img: Client2 },
  { name: "Client3", img: Client3 },
  { name: "Client4", img: Client4 },
  { name: "Client5", img: Client5 },
  { name: "Client6", img: Client6 },
  { name: "Client7", img: Client7 },
];

export const RatingCard: FC<RatingCardProps> = ({
  title = (
    <>
      Amplify Your <i className="font-serif">Presence</i>
    </>
  ),
  description = "by shaping supreme visuals",
  buttons = (
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
      <Button className="w-full sm:w-auto bg-primary text-white">
        Check Our Offers
      </Button>
      <Button
        variant="outline"
        className={`w-full sm:w-auto ${buttonVariants({
          variant: "outline",
        })} bg-[#3F3F3F] text-white hover:bg-[#4F4F4F]`}
      >
        Why Choose Us?
      </Button>
    </div>
  ),
}): JSX.Element => {
  return (
    <section className="p-4 md:p-0 bg-black -mt-16">
      <div className="container relative z-20 py-20 md:py-32 space-y-8 text-white flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            {title}
          </h1>
          <h2 className="text-lg sm:text-xl text-[#939393]">{description}</h2>
        </div>
        {buttons}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <div className="flex -space-x-2">
            {clients.map((client) => (
              <div
                key={client.name}
                className="w-[38px] h-[38px] rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold">
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
