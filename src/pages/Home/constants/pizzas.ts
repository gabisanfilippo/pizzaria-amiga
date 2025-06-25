import type { NavigateFunction } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

import { PizzaMozzarella } from "../../../assets/svgs/PizzaMozzarella";
import { PizzaPepperoni } from "../../../assets/svgs/PizzaPepperoni";
import { PizzaMushrooms } from "../../../assets/svgs/PizzaMushrooms";
import { PizzaMargarita } from "../../../assets/svgs/PizzaMargarta";
import { PizzaBacon } from "../../../assets/svgs/PizzaBacon";
import {
  INFORMATION_RIGHTS,
  COMFORTING_COMBOS,
} from "../../../constants/paths";

interface IClickCallback {
  setModalState: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
}

export const PIZZAS = [
  {
    title: "Marguerita",
    subtitle: "Solicitar ajuda urgente",
    image: PizzaMargarita,
    clickCallback: ({ setModalState }: IClickCallback) => setModalState(true),
  },
  {
    title: "Calabresa",
    subtitle: "Informações sobre direitos",
    image: PizzaPepperoni,
    clickCallback: ({ navigate }: IClickCallback) =>
      navigate(INFORMATION_RIGHTS),
  },
  {
    title: "Mussarela",
    subtitle: "Contatos de apoio e abrigos",
    image: PizzaMozzarella,
    clickCallback: ({ setModalState }: IClickCallback) => setModalState(true),
  },
  {
    title: "Bacon",
    subtitle: "Dicas e orientações psicológicas",
    image: PizzaBacon,
    clickCallback: ({ navigate }: IClickCallback) =>
      navigate(COMFORTING_COMBOS),
  },
  {
    title: "Monte sua pizza",
    subtitle: "Personalizar um pedido de ajuda",
    image: PizzaMushrooms,
    clickCallback: (params: IClickCallback) => params,
  },
];
