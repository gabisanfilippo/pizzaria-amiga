import { PizzaMozzarella } from "../../../assets/svgs/PizzaMozzarella";
import { PizzaPepperoni } from "../../../assets/svgs/PizzaPepperoni";
import { PizzaMushrooms } from "../../../assets/svgs/PizzaMushrooms";
import { PizzaMargarita } from "../../../assets/svgs/PizzaMargarta";
import { PizzaBacon } from "../../../assets/svgs/PizzaBacon";

export const PIZZAS = [
  {
    title: "Marguerita",
    subtitle: "Solicitar ajuda urgente",
    path: "/helps",
    image: PizzaMargarita,
  },
  {
    title: "Calabresa",
    subtitle: "Informações sobre direitos",
    path: "/rights",
    image: PizzaPepperoni,
  },
  {
    title: "Mussarela",
    subtitle: "Contatos de apoio e abrigos",
    path: "/helps",
    image: PizzaMozzarella,
  },
  {
    title: "Bacon",
    subtitle: "Dicas e orientações psicológicas",
    path: "/guidelines",
    image: PizzaBacon,
  },
  {
    title: "Monte sua pizza",
    subtitle: "Personalizar um pedido de ajuda",
    path: "/customize",
    image: PizzaMushrooms,
  },
];
