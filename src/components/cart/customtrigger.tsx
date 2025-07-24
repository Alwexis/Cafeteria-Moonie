import { useSidebar } from "@/components/ui/sidebar";
import clsx from "clsx";
import { ShoppingBasket } from "lucide-react";

export default function CartSidebarTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return <button type="button" onClick={toggleSidebar} title="Sidebar button" className={
    clsx(
      "fixed bottom-4 right-6 bg-neutral-100 hover:bg-neutral-200 transition-colors px-2 py-2 rounded-md border border-neutral-200 cursor-pointer",
      { "hidden": open }
    )
  }>
    <ShoppingBasket />
  </button>
}