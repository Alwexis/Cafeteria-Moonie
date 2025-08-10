import type { Product } from "@lib/types";
import ProductCard from "./product-card";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@contexts/cart";

interface Props {
  products: Product[];
}

export default function ProductWrapper({ products }: Props) {
  const [shownProducts, setShownProducts] = useState<Product[]>([])
  const [showMore, setShowMore] = useState<boolean>(false);
  const cartCtx = useContext(CartContext);
  if (!cartCtx) return;
  
  const { addToCart } = cartCtx;

  useEffect(() => {
    if (!showMore) {
      setShownProducts(products.slice(0, 4))
    } else {
      setShownProducts(products)
    }
  }, [products, showMore])

  return (
    <section className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2">
        {shownProducts.map((product: Product, i: number) => (
          <ProductCard onCartAdd={(prod: Product) => addToCart(prod)} styles={{ animationDelay: `${i * 20}ms` }} key={product.id} product={product} />
        ))}
      </div>
      {
        products.length > 4 && (
          <button onClick={() => setShowMore(!showMore)} className="self-center mt-6 cursor-pointer bg-neutral-800 hover:bg-neutral-600 transition-colors text-white px-6 py-2 rounded-sm shadow-md" type="button" title={ showMore ? "Mostrar menos productos" : "Mostrar más productos" }>
            { showMore ? "Mostrar menos" : "Mostrar más" }
          </button>
        )
      }
    </section>
  )
}