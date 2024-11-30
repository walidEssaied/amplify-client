import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/appComponents/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/appComponents/ui/sheet";
import { useState } from "react";
import { Menu } from "lucide-react";
import amplifyBlacklogo from "../assets/images/amplify__logo--black.png";
import amplifyWhitelogo from "../assets/images/amplify__logo--white 1.png";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import { buttonVariants } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}

// about-us
// services"
// blog"
// contact"

const routeList: RouteProps[] = [
  {
    href: "about-us",
    label: "About",
  },
  {
    href: "services",
    label: "Services",
  },
  {
    href: "blog",
    label: "Blog",
  },
  {
    href: "contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <header className="border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background dark:bg-black overflow-hidden">
      <NavigationMenu className=" mx-auto">
        <NavigationMenuList className="h-14 w-screen container px-4 max-w-full flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img
                src={isDarkMode ? amplifyWhitelogo : amplifyBlacklogo}
                alt="Amplify Logo"
                width={87}
                height={40}
              />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
            <div className="hidden md:flex gap-2">
              <ModeToggle />
            </div>
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
