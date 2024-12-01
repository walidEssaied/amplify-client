import { HomeCallToAction } from "./HomeCallToAction";
import { NewOffreCard } from "./NewOffreCard";
import { Card } from "./ServiceCard";
import { featuredOffresData } from "./ServicesData";

export const Services = () => {
  return (
    <div className="bg-white dark:bg-black">
      <section className="container py-24 sm:py-32">
        <div
          className="p-6 flex flex-col items-center justify-center space-y-6"
          data-aos="fade-up"
        >
          <div className="p-2 border rounded-xl font-bold text-xl">
            Services
          </div>
          <h5 className="text-xl md:text-4xl text-center leading-relaxed font-bold dark:text-white w-7/12">
            We Offer A Variety Of Services That Will Guide Your Brand To Success{" "}
          </h5>
          <p className="my-2 dark:text-gray-300 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16">
          {featuredOffresData.map((offer, index) => (
            <Card withIcons={false} key={index} {...offer} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-10 px-6 lg:px-16 gap-6">
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-6xl lg:text-9xl font-extrabold leading-tight dark:text-white">
              New
              <br className="hidden lg:block" />
              Offre
            </h4>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <NewOffreCard size="small" youWillGet={false} showButton={false} />
          </div>
        </div>
        <HomeCallToAction title="Facinated By Our Journey?" />
      </section>
    </div>
  );
};

export default Services;
