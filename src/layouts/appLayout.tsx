import { FunctionComponent, useState } from "react";

import { Outlet } from "react-router-dom";
import { Link } from "lucide-react";
import { Sidebar } from "./components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./components/Header";

//import { Outlet } from 'react-router-dom';

const Layout: FunctionComponent<ILayoutProps> = function ({ children }) {
  //const [sidebarState, setSidebarState] = useState<boolean>(false);

  return (
    <SidebarProvider>
    <div className="grid min-h-screen w-full min-w-[360px]  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
      <div className="hidden  md:block ">
        <div className="flex h-full max-h-screen  flex-col ">
          
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col items-center overflow-auto w-full ">
        <Header />
        <main className="flex flex-col  items-center  flex-grow  w-[95%] my-2">
          <Outlet />
          
        </main>
       
      </div>
    </div>
  </SidebarProvider>
  );
};

interface ILayoutProps {
  children: React.ReactNode;
}

export default Layout;
