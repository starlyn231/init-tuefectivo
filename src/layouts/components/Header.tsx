import img from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleUser,
  LogOut,
  Menu,
  MoreHorizontal,
  Settings
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { sidebarItems } from "./sidebar";
import { SidebarButton } from "./sidebar-button";

function Header() {

  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {}, []);

  function handleLogout() {}
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[58px] lg:px-6 w-full">
      <Sheet isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" 
          className="fixed top-3 left-3 h-12 w-12 md:hidden text-tertiary "
          onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={30} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-3 py-4 bg-primary" hideClose>
          <SheetHeader className="flex flex-row justify-between items-center space-y-0">
            <span className="text-lg font-semibold text-foreground mx-3">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <img src={img} alt=" Group" className="h-10 w-auto" />
              </Link>
            </span>
            {/* <SheetClose asChild>
              <Button className="h-7 w-7 p-0" variant="ghost">
                <X size={15} />
              </Button>
            </SheetClose> */}
          </SheetHeader>
          <div className="h-full">
            <div className="mt-5 flex flex-col w-full gap-1">
              {sidebarItems.links.map((link, idx) => (
                <Link key={idx} to={link.href}>
                  <SidebarButton
                    variant={pathname === link.href ? "secondary" : "ghost"}
                    icon={link.icon}
                    className="w-full"
                  >
                    {link.label}
                  </SidebarButton>
                </Link>
              ))}
              {sidebarItems.extras}
            </div>
            <div className="absolute w-full  bottom-4 px-1 left-0">
              <Separator className="absolute -top-3 left-0 w-full" />
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-2">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src="https://github.com/max-programming.png" />
                          <AvatarFallback>Max Programming</AvatarFallback>
                        </Avatar>
                        <span>example</span>
                      </div>
                      <MoreHorizontal size={20} />
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="mb-2 p-2">
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link to="/">
                      <SidebarButton
                        size="sm"
                        icon={Settings}
                        className="w-full"
                      >
                        Account Settings
                      </SidebarButton>
                    </Link>
                    <SidebarButton size="sm" icon={LogOut} className="w-full">
                      Log Out
                    </SidebarButton>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* {isAuthenticated && <div>{userProfile?.username}</div>} */}
      <div className="flex-grow"></div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-primary"
          >
            <CircleUser className="h-5 w-5 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={`/users/profile/star`}>
              Opciones
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* {isAuthenticated ? (
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          ) : (
            ''
          )} */}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Header;
