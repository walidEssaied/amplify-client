import "../App.css";
import { OurWorkGallery } from "./About";
import { FeaturedOffres } from "./FeaturedOffres";
import { Hero } from "./Hero";
import { HomeCallToAction } from "./HomeCallToAction";
import { MoreProjects } from "./MoreProjects";
import { NewOffre } from "./NewOffre";
import { Sponsors } from "./Sponsors";
import { WhyChooseUs } from "./WhyChooseUs";

export function Home() {
  return (
    <>
      <Hero />
      <OurWorkGallery />
      <Sponsors />
      <FeaturedOffres />
      <WhyChooseUs />
      <NewOffre />
      <MoreProjects />
      <HomeCallToAction />
    </>
  );
}
