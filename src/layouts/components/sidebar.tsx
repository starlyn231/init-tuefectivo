import {
    BadgeDollarSign,
    Bell,
    File,
    Home,
    Mail,
    MoreHorizontal
} from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarButton } from './sidebar-button';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarMobile } from './sidebar-mobile';
import { SidebarItems } from './types';

export const sidebarItems: SidebarItems = {
    links: [
      { label: 'Inicio', href: '/home', icon: Home },
   
      {
        label: 'Ficheros',
        href: '/item/lists',
        icon: File,
        collapse: [
          { label: 'Cargar Ficheros', href: '/filesUpload' },
          { label: 'Consultar Ficheros', href: '/filesQuery' },
        ],
      },
      {
        label: 'Transaccciones',
        href: '/item/bookmarks',
        icon: BadgeDollarSign,
      },
      {
        label: 'Clientes',
        href: '/item/customers',
        icon: File,
        collapse: [
          { label: 'Consulta', href: '/customer/query' },
          { label: 'Registro', href: '/customer/register' },
        ],
      },
     
      { label: 'Notifications', href: '/item/notifications', icon: Bell },
      { label: 'Messages', href: '/item/messages', icon: Mail },
     
   
    ],
  extras: (
    <div className='flex flex-col gap-2'>
      <SidebarButton icon={MoreHorizontal} className='w-full'>
        More
      </SidebarButton>
      {/* <SidebarButton
        className='w-full justify-center text-white'
        variant='default'
      >
        Tweet
      </SidebarButton> */}
    </div>
  ),
};

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
