import { useEffect, useState } from "react";
import type { Category } from "../lib/types";

const URL: string = import.meta.env.VITE_MOCK_API;

export default function useCategories() {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(URL + "categorias", {
      method: "GET",
      headers: { 'content-type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data: Category[]) => setData(data))
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, [])

  return { categories: data, loading, error }
}