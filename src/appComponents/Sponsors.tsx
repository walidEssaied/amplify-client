import { Radar } from "lucide-react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  { icon: <Radar size={34} />, name: "Client 1" },
  { icon: <Radar size={34} />, name: "Client 2" },
  { icon: <Radar size={34} />, name: "Client 3" },
  { icon: <Radar size={34} />, name: "Client 4" },
  { icon: <Radar size={34} />, name: "Client 5" },
  { icon: <Radar size={34} />, name: "Client 6" },
  { icon: <Radar size={34} />, name: "Client 7" },
  { icon: <Radar size={34} />, name: "Client 8" },
  { icon: <Radar size={34} />, name: "Client 9" },
  { icon: <Radar size={34} />, name: "Client 10" },
  { icon: <Radar size={34} />, name: "Client 11" },
  { icon: <Radar size={34} />, name: "Client 12" },
  { icon: <Radar size={34} />, name: "Client 13" },
  { icon: <Radar size={34} />, name: "Client 14" },
  { icon: <Radar size={34} />, name: "Client 15" },
  { icon: <Radar size={34} />, name: "Client 16" },
  { icon: <Radar size={34} />, name: "Client 17" },
  { icon: <Radar size={34} />, name: "Client 18" },
  { icon: <Radar size={34} />, name: "Client 19" },
  { icon: <Radar size={34} />, name: "Client 20" },
  { icon: <Radar size={34} />, name: "Client 21" },
  { icon: <Radar size={34} />, name: "Client 22" },
  { icon: <Radar size={34} />, name: "Client 23" },
  { icon: <Radar size={34} />, name: "Client 24" },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="sm:mt-0 md:mt-0 py-16 flex flex-col items-center justify-center space-y-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <span
        className="text-center text-red-500 font-semibold"
        data-aos="fade-up"
      >
        Our Clients
      </span>
      <h2
        className="text-center text-md lg:text-4xl font-bold text-black dark:text-white transition-colors duration-300"
        data-aos="fade-up"
      >
        Featured Collaborations
      </h2>

      <div className="w-full max-w-screen-lg">
        <Swiper
          autoplay
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 6,
            },
            300: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          className="flex items-center"
        >
          {sponsors.map(({ name }) => (
            <SwiperSlide
              key={name}
              className=" flex-shrink-0 flex items-center gap-2 justify-center h-[76px] w-[179px] bg-red-50 dark:bg-gray-800 shadow-md p-4 rounded-lg"
            >
              <h3 className="text-xl font-bold text-black dark:text-white transition-colors duration-300">
                {name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
