import { FC } from "react";
import Image2 from "../assets/clients/random1_client.png";
import Image1 from "../assets/clients/random2_client.png";
import Image3 from "../assets/clients/random3_client.png";
import ArtBoardLeft from "../assets/images/0Artboard 1 1.png";
import ArtBoardRight from "../assets/images/0Artboard 1 2.png";
import { Button } from "./ui/button";

export const HomeCallToAction: FC<{ title?: string; description?: string }> = ({
  description = "Let’s schedule a meeting and discuss how our services will bring great growth to your business",
  title = "Still not convinced?",
}): JSX.Element => {
  return (
    <div className="bg-black py-1 overflow-hidden">
      <section className="relative container py-20 mt-40 ">
        {/* Artboards positioned behind the box */}
        <img
          src={ArtBoardRight}
          alt="ArtBoardRight"
          className="absolute -bottom-6 -right-52 w-1/2 z-0 hidden md:block"
        />
        <img
          src={ArtBoardLeft}
          alt="ArtBoardLeft"
          className="absolute -top-40 -left-48 w-1/2 z-0 hidden md:block"
        />

        {/* Box content with a higher z-index */}
        <div className="relative z-10 bg-[#212121] rounded-lg p-10 text-center space-y-5 border border-gray-600">
          <div className="flex items-center justify-center -space-x-4">
            <img src={Image1} alt="Team Images" />
            <img src={Image2} alt="Team Images" className="mb-10" />
            <img src={Image3} alt="Team Images" />
          </div>
          <h3 className="font-bold text-4xl">{title}</h3>
          <p className="">{description}</p>
          <Button
            variant="default"
            size={"lg"}
            style={{
              boxShadow: "0 0 10px #A2161B",
            }}
            className="text-2xl p-8 text-white bg-[#A2161B]"
          >
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};
