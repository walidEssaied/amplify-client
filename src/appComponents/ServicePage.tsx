import { FC } from "react";
import { HeroServicesPage } from "./HeroServicesPage";
import Services from "./Services";

export const ServicePage: FC = (): JSX.Element => {
  return (
    <>
      <HeroServicesPage />
      <Services />
    </>
  );
};
