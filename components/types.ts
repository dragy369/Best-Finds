export type Product = {
  name: string;
  link: string;
  price?: string;
  label?: string;
};

export type Outfit = {
  id: string;
  title: string;
  image: string;
  products: Product[];
};
