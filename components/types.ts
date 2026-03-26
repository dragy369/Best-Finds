export type Product = {
  name: string;
  link: string;
  price?: string;
  label?: string;
  type?: string;
  color?: string;
  fit?: string;
};

export type Outfit = {
  id: string;
  title: string;
  description?: string;
  image: string;
  category?: string;
  products: Product[];
  style_notes?: string[];
  occasion?: string[];
};
