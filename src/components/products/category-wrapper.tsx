import useProducts from "@/hooks/useProducts";
import ProductWrapper from "./product-wrapper";
import useCategories from "@/hooks/useCategories";
import type { Category } from "@/lib/types";
import CategoryWrapperSkeleton from "./category-wrapper-skeleton";

export default function CategoryWrapper() {
  const { categories, loading: loadingCategories } = useCategories();
  const { categorizedProducts, loading } = useProducts();  

  if (loading || loadingCategories) return <CategoryWrapperSkeleton />;

  return <div className="my-8 py-6 space-y-12 px-6">
    {
      categories.map((category: Category) => (
        <div key={category.id} id={category.id}>
          <h3 className="font-semibold text-xl mb-4">{category.name}</h3>
          <ProductWrapper products={categorizedProducts[category.id]} />
        </div>
      ))
    }
  </div>  
}