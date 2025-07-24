import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenuItem, SidebarMenu, SidebarGroupContent, useSidebar } from "../ui/sidebar";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart";
import type { CartItem } from "@/lib/types";
import { Send, X } from "lucide-react";

interface Props {
  onOrderEmit?: () => void;
}

export default function CartSidebar({ onOrderEmit }: Props) {
  const { toggleSidebar } = useSidebar();
  const cartContext = useContext(CartContext)
  if (!cartContext) return;
  const { cart, decreaseItem, addToCart, getTotal, clearCart } = cartContext;

  const handleOrderEmission = () => {
    if (cart.length < 1) return;
    //? Then you can send the data of the order (cartData) to a server via websocket, for example, so it goes in real time to kitchen.
    //* const cartData = cart
    toggleSidebar()
    clearCart();
    if (onOrderEmit) {
      onOrderEmit();
    }
  }

  return (
    <Sidebar side="right">
      <SidebarHeader>
        <h3 className="py-2">Carrito de compras</h3>
      </SidebarHeader>
      <SidebarContent className={cart.length < 1 ? "flex items-center justify-center" : ""}>
        {
          cart.length > 0 ? (
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {
                    cart.map((item: CartItem) => (
                      <SidebarMenuItem className="flex items-center space-x-2" key={item.id}>
                        <img className="w-16 rounded-sm aspect-square object-cover" src={item.image.src} alt={item.image.alt} />
                        <section>
                          <h4 className="line-clamp-1 font-semibold text-sm">{item.name}</h4>
                          <p className="line-clamp-1 text-xs font-light">{item.description}</p>
                          <div className="mt-2 flex justify-between items-end">
                            <span className="font-light font-grotesk text-red-500">${item.price}</span>
                            <div>
                              <button onClick={() => decreaseItem(item.id)} type="button" title="decrease" className="px-1.5 border rounded-sm border-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer">
                                -
                              </button>
                              <span className="mx-2 px-2 py-0.5 rounded-xs bg-neutral-100">{item.quantity}</span>
                              <button onClick={() => addToCart(item)} type="button" title="increase" className="px-1.5 border rounded-sm border-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer">
                                +
                              </button>
                            </div>
                          </div>
                        </section>
                      </SidebarMenuItem>
                    ))
                  }
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
            :
            (
              <div className="px-4 flex flex-col items-center justify-center">
                <h4 className="font-semibold">El carrito está vacío.</h4>
                <p className="text-center text-sm font-light">Agrega productos al carrito y emite la órden para procesarla, y llevarla a tu mesa.</p>
              </div>
            )
        }
      </SidebarContent>
      <SidebarFooter className="py-4">
        <div className="self-center w-full h-[1px] bg-black/10 my-2"></div>
        <section>
          <h5 className="font-semibold">Total: <span className="font-grotesk font-light text-red-500 text-sm">${getTotal()}</span></h5>
          <p className="text-xs font-light text-neutral-600">Una vez emitida la orden, se enviará a cocina y posteriormente un mesero le llevará el pedido a su mesa.</p>
        </section>
        <div className="self-center w-3/4 h-[1px] bg-black/10 my-2"></div>
        <section className="flex w-full space-x-4">
          <button type="button" onClick={toggleSidebar} title="Close Cart" className="bg-red-600/95 hover:bg-red-400 transition-colors text-white w-fit px-2 py-2 rounded-md cursor-pointer">
            <X />
          </button>
          <button type="button" onClick={handleOrderEmission} title="Sent order" className="flex items-center justify-center space-x-4 w-full bg-black/80 hover:bg-black/60 transition-colors cursor-pointer text-white px-2 py-2 rounded-md">
            <Send width={18} />
            <span>Emitir orden</span>
          </button>
        </section>
      </SidebarFooter>
    </Sidebar>
  )
}