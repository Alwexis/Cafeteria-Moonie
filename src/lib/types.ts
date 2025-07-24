interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: ProductImage;
  category: Category;
}

type ProductImage = {
  src: string;
  alt: string;
}

type Category = {
  id: string;
  name: string;
}

type CategorizedProducts = {
  [categoryId: string]: Product[];
};

interface CartItem extends Product {
  quantity: number;
}

export type { Product, Category, CategorizedProducts, CartItem }