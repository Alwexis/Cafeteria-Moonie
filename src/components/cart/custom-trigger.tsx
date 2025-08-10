import { useSidebar } from "@components/ui/sidebar";
import { CartContext } from "@contexts/cart";
import clsx from "clsx";
import { ShoppingBasket } from "lucide-react";
import { useContext } from "react";

export default function CartSidebarTrigger() {
  const { toggleSidebar, open } = useSidebar();
  const cartContext = useContext(CartContext)
  if (!cartContext) return;
  const { cart, getTotalItems } = cartContext;

  return <button type="button" onClick={toggleSidebar} title="Sidebar button" className={
    clsx(
      "fixed bottom-4 right-6 bg-neutral-100 hover:bg-neutral-200 transition-colors px-2 py-2 rounded-md border border-neutral-200 cursor-pointer",
      { "hidden": open }
    )
  }>
    <span className={clsx("absolute z-10 -top-2 -right-2 rounded-full w-6 h-6 text-center bg-red-600 text-white transition-all", { "opacity-100": cart.length > 0, "opacity-0": cart.length == 0 })}>{getTotalItems()}</span>
    <ShoppingBasket />
  </button>
}