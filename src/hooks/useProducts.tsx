import { useEffect, useState } from "react";
import type { CategorizedProducts, Product } from "../lib/types";

const URL: string = import.meta.env.VITE_MOCK_API;

export default function useProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [categorizedData, setCategorizedData] = useState<CategorizedProducts>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(URL + "productos", {
      method: "GET",
      headers: { 'content-type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data: Product[]) => {
        setData(data);
        
        const categorized: CategorizedProducts = {};
        data.forEach((product) => {
          const catId = product.category.id;
          if (!categorized[catId]) {
            categorized[catId] = [];
          }
          categorized[catId].push(product);
        });
      
        setCategorizedData(categorized);
      })
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, [])

  return { products: data, categorizedProducts: categorizedData, loading, error }
}