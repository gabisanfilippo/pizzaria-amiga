import type { Dispatch, SetStateAction } from "react";

import { PizzaMozzarella } from "../../../assets/svgs/PizzaMozzarella";
import { PizzaPepperoni } from "../../../assets/svgs/PizzaPepperoni";
import { PizzaMushrooms } from "../../../assets/svgs/PizzaMushrooms";
import { PizzaMargarita } from "../../../assets/svgs/PizzaMargarta";
import { PizzaBacon } from "../../../assets/svgs/PizzaBacon";

interface IClickCallback {
  setModalState: Dispatch<SetStateAction<boolean>>;
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
    clickCallback: (params: IClickCallback) => params,
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
    clickCallback: (params: IClickCallback) => params,
  },
  {
    title: "Monte sua pizza",
    subtitle: "Personalizar um pedido de ajuda",
    image: PizzaMushrooms,
    clickCallback: (params: IClickCallback) => params,
  },
];
