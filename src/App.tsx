import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import CartSidebar from '@/components/cart/cart-sidebar';
import './App.css'
import CartSidebarTrigger from '@/components/cart/customtrigger';
import Navbar from '@/components/ui/navbar';
import CategoryWrapper from '@/components/products/category-wrapper';
import { CartProvider } from '@/contexts/cart';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2Icon } from 'lucide-react';

function App() {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const onOrderEmission = () => {
    console.log("Yep yep yep")
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
  }

  return (
    <CartProvider>
      <SidebarProvider defaultOpen={false}>
        <SidebarInset>
          <main className='flex flex-col w-full py-4 px-2 antialiased lg:px-8 lg:py-4'>
            <Navbar />

            <CategoryWrapper />

            { showAlert && (
              <section className='fixed bottom-2 w-full flex items-center justify-center'>
                <Alert className='w-fit animate-fade-up'>
                  <CheckCircle2Icon />
                  <AlertTitle>Su orden ha sido emitida</AlertTitle>
                  <AlertDescription className='max-w-64 text-xs md:text-sm md:max-w-md'>
                    ¡Hemos procesado tu orden! Espere unos minutos y un mesero le llevará su pedido una vez esté listo.
                  </AlertDescription>
                </Alert>
              </section>
            ) }

            <CartSidebarTrigger />
          </main>
        </SidebarInset>
        <CartSidebar onOrderEmit={onOrderEmission} />
      </SidebarProvider>
    </CartProvider>
  )
}

export default App
