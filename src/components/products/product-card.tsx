import type { Product } from "@lib/types"
import clsx from "clsx";
import { BadgeCheck, ShoppingBasket } from "lucide-react"
import { useState } from "react";

interface Props {
  product: Product;
  onCartAdd: (product: Product) => void;
  classes?: string;
  styles?: object;
}

export default function ProductCard({ product, onCartAdd, classes = "", styles={} }: Props) {
  const [added, setAdded] = useState<boolean>(false);

  const handleAdd = (product: Product) => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
    onCartAdd(product);
  }

  return (
    <div style={styles} className={`flex px-2 py-4 space-x-4 shadow-sm rounded-sm animate-fade-down md:animate-fade ${classes}`}>
      <img loading="lazy" className="w-20 h-20 rounded-md aspect-square object-cover" src={product.image.src} alt={product.image.alt} />
      <section className="w-full flex flex-col justify-between">
        <h4 className="font-semibold text-sm">{product.name}</h4>
        <p className="font-light text-xs line-clamp-3">{product.description}</p>
        <div className="w-full flex items-end justify-between mt-2.5">
          <span className="font-light text-xs text-indigo-600">${product.price}</span>
          <button type="button" onClick={() => handleAdd(product)}
            className={clsx(
              "flex items-center text-white px-2.5 py-1 rounded-xs md:rounded-sm cursor-pointer transition-colors",
              { "bg-blue-800": added, "bg-neutral-800 hover:bg-neutral-600": !added }
            )}>
            <ShoppingBasket width={16} className={clsx("transition-all duration-300", { "w-0": added, "w-6": !added })} />
            <BadgeCheck width={16} className={clsx("transition-all duration-300", { "w-0": !added, "w-6": added })} />
            <span className={clsx("text-xs font-light transition-all duration-300 w-full overflow-hidden", { "max-w-0 ml-0": added, "max-w-32 ml-2": !added })}>Agregar</span>
          </button>
        </div>
      </section>
    </div>
  )
}