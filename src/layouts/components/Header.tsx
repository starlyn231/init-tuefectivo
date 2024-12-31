import { Link } from 'react-router-dom';
import img from '@/assets/logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser, Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';


import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { sidebarItems } from './sidebar';


function Header() {
  const [userProfile, setUserProfile] = useState<any>();


  useEffect(() => {
  
  }, []);

  function handleLogout() {
  
  }

  const renderedLinks = sidebarItems.links.map((link) => {
    return (
      <div key={link.accessKey} className=" w-full">
        <div className="flex items-center gap-3 rounded-lg px-3 py-1 text-white transition-all ">
          {link?.label}
        </div>
        {link.subLinks && (
          <div className="ml-6">
            {link.subLinks.map((subLink) => {
              return (
                <Link
                  key={subLink.accessKey}
                  to={subLink.path}
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-white transition-all hover:text-sky-300 text-sm"
                >
                  <subLink.icon className="h-4 w-4" />
                  {subLink.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  });
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[58px] lg:px-6 w-full">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-[#264e72]">
          <nav className="grid gap-2 text-lg font-medium">
            <Link to="#" className="flex items-center gap-2 text-lg font-semibold">
              <img src={img} alt="WorldWide Group" className="h-8 w-auto" />
              {/* <img src={img} alt="WorldWide Group" className="h-6 w-auto" /> */}
              {/* <span className="">WorldWide Group</span> */}
              {/* <span className="sr-only">WorldWide Group</span> */}
              <span className="sr-only">WorldWide Group</span>
            </Link>
            {renderedLinks}
          </nav>
          <div className="mt-auto"></div>
        </SheetContent>
      </Sheet>
   
      {/* {isAuthenticated && <div>{userProfile?.username}</div>} */}
      <div className="flex-grow"></div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={`/users/profile/${userProfile?.localAccountId}`}>Opciones</Link>
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
