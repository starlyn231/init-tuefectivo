import { FunctionComponent } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Sidebar } from "./components/sidebar";

//import { Outlet } from 'react-router-dom';

const Layout: FunctionComponent<ILayoutProps> = function () {
  //const [sidebarState, setSidebarState] = useState<boolean>(false);

  return (
    <SidebarProvider>
    <div className="grid min-h-screen w-full min-w-[360px]  md:grid-cols-[230px_1fr] lg:grid-cols-[290px_1fr] ">
      <div className="hidden md:block min-h-screen h-full">
        <div className="flex h-full   flex-col bg-slate-300 ">
          
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col items-center overflow-auto w-full ">
        <Header />
        <main className="flex flex-col  items-center  flex-grow  w-[95%] my-2 ">
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
