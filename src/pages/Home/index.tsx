import { MoreInformationSection } from "./components/MoreInformationSection";
import { HouseFlavorsSection } from "./components/HouseFlavorsSection";
import { PizzasSection } from "./components/PizzasSection";
import { DefaultLayout } from "../../layouts";

export const Home = () => {
  return (
    <DefaultLayout>
      <PizzasSection />
      <MoreInformationSection />
      <HouseFlavorsSection />
    </DefaultLayout>
  );
};
