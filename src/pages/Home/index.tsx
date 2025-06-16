import { MoreInformationSection } from "./components/MoreInformationSection";
import { PizzasSection } from "./components/PizzasSection";
import { DefaultLayout } from "../../layouts";

export const Home = () => {
  return (
    <DefaultLayout>
      <PizzasSection />
      <MoreInformationSection />
    </DefaultLayout>
  );
};
