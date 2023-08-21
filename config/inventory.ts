import { Image } from "sanity";

interface InventoryProduct {
  id: string;
  name: string;
  image: string;
  images: string[];
  categories: string[];
  sizes: string[];
  colors: string[];
  price: number;
  currency: string;
  description: string;
  sku: string;
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string;
  _createdAt: Date;
  slug: string;
  images: Image[];
}

export const inventory: InventoryProduct[] = [
  {
    id: "abcdefg",
    sku: "alex_pendant_bracelet_1",
    name: "Alex Pendant and Bracelet",
    description: "Stunning gold pendant and bracelet set.",
    price: 5000, // $50 USD in cents
    image: "public/product/alex-pendant.jpg",
    images: ["public/product/alex-pendant.jpg"],
    sizes: ["one-size"],
    categories: ["jewelry"],
    colors: ["gold"],
    currency: "USD",
  },
  {
    id: "hijklmn",
    sku: "black_keychain_1",
    name: "Black Keychain",
    description: "Sleek black keychain with a silver finish.",
    price: 1900, // $19 USD in cents
    image: "public/product/black-keychain.jpeg",
    images: ["public/product/black-keychain.jpeg"],
    sizes: ["one-size"],
    categories: ["accessories"],
    colors: ["black", "silver"],
    currency: "USD",
  },
  {
    id: "opqrstu",
    sku: "carmen_lopez_ring_1",
    name: "Carmen Lopez Ring",
    description: "Elegant gold ring designed by Carmen Lopez.",
    price: 11800, // $118 USD in cents
    image: "public/product/carmen-lopez-ring.jpg",
    images: ["public/product/carmen-lopez-ring.jpg"],
    sizes: ["one-size"],
    categories: ["jewelry"],
    colors: ["gold"],
    currency: "USD",
  },
  {
    id: "vwxyz01",
    sku: "customizable_pendant_1",
    name: "Customizable Pendant",
    description: "Beautiful silver heart-shaped pendant that can be customized.",
    price: 2000, // $20 USD in cents
    image: "public/product/customizable-silver-heart-shaped-pendant.jpeg",
    images: ["public/product/customizable-silver-heart-shaped-pendant.jpeg"],
    sizes: ["one-size"],
    categories: ["jewelry"],
    colors: ["silver"],
    currency: "USD",
  },
  {
    id: "2345678",
    sku: "edgar_rings_1",
    name: "Edgar Rings",
    description: "Set of 3 rings, 2 gold and 1 silver, designed by Edgar.",
    price: 4500, // $45 USD in cents
    image: "public/product/edgar-rings.jpg",
    images: ["public/product/edgar-rings.jpg"],
    sizes: ["s", "m", "l"],
    categories: ["jewelry"],
    colors: ["gold", "silver"],
    currency: "USD",
  },
  // Add the remaining new products following the same pattern...
];
