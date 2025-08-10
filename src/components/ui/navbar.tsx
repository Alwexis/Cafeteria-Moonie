import useCategories from "@hooks/useCategories"
import type { Category } from "@lib/types";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu";

export default function Navbar() {
  const { categories, loading } = useCategories();

  const navigateToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex items-center w-full justify-between fixed bg-white z-10 top-0 left-0 py-4 px-4 md:px-8">
      <h2 className='text-lg md:text-2xl font-medium tracking-wide flex items-center'>
        {/*
        <Coffee className="mr-2" />
        */}
        <img className="w-8 mr-2" loading="lazy" src="/favicon.svg" alt="Moonie's Coffee shop icon" />
        Cafetería Moonie
      </h2>
      {!loading && categories.length > 0 && (
        <>
          <div className="xl:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {
                      categories.map((category: Category) => (
                        <NavigationMenuLink key={category.id} asChild>
                          <button type="button" className="font-light text-xs text-start cursor-pointer" onClick={() => navigateToSection(category.id)}>
                            {category.name}
                          </button>
                        </NavigationMenuLink>
                      ))
                    }
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden xl:flex space-x-4">
            {
              categories.map((category: Category) => (
                <button key={category.id} type="button" className="text-sm cursor-pointer flex flex-col items-center justify-center group" onClick={() => navigateToSection(category.id)}>
                  {category.name}
                  <div className="w-0 opacity-0 group-hover:w-full group-hover:opacity-100 h-[1px] bg-black transition-all duration-200"></div>
                </button>
              ))
            }
          </div>
        </>
      )}
    </nav>
  )
}