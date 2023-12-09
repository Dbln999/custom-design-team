import tshirt from "../assets/examples/t-shirt.svg";
import sweatshirt from "../assets/examples/sweater.svg";
import hoodie from "../assets/examples/hoodie.svg";
import jeans from "../assets/examples/jeans.svg";
import vest from "../assets/examples/vest.svg";
import cap from "../assets/examples/cap.svg";
import { Product } from "../../pages/CatalogPage/ui/CatalogPage.tsx";

export const sizes: string[] = ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"];
export const colors: string[] = [
  "#000000",
  "#FFFFFF",
  "#DC0000",
  "#11D100",
  "#2F00EB",
  "#8800DB",
  "#D9DD04",
];

export const productExmaples: Product[] = [
  {
    id: 0,
    title: "T-shirt",
    src: tshirt,
    price: 15.99,
    sizes: 8,
    colors: 7,
  },
  {
    id: 1,
    title: "Sweatshirt",
    src: sweatshirt,
    price: 19.99,
    sizes: 8,
    colors: 7,
  },
  {
    id: 2,
    title: "Hoodie",
    src: hoodie,
    price: 29.99,
    sizes: 8,
    colors: 7,
  },
  {
    id: 3,
    title: "Jeans",
    src: jeans,
    price: 29.99,
    sizes: 8,
    colors: 7,
  },
  {
    id: 4,
    title: "Vest",
    src: vest,
    price: 16.99,
    sizes: 8,
    colors: 7,
  },
  {
    id: 5,
    title: "Cap",
    src: cap,
    price: 19.99,
    sizes: 8,
    colors: 7,
  },
];
