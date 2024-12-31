

import { SidebarButton } from './sidebar-button';

import img from '@/assets/logo.png'
import logoWhite from '@/assets/logo-white.png'
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, MoreHorizontal, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SidebarItems } from './types';
import { Link, useLocation } from 'react-router-dom';

import {  SidebarMenuSub, SidebarMenuSubItem } from '@/components/ui/sidebar';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import { CollapsibleContent } from '@radix-ui/react-collapsible';
interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}
//#264e72
export function SidebarDesktop(props: SidebarDesktopProps) {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <aside className='flex bg-primary h-full border-r border-gray-200 '  >
      <div className=' px-3 py-4'>
     
        <Link to="/" className="flex items-center gap-2 font-semibold">
              <img src={logoWhite} alt="WorldWide Group" className="h-10 w-auto" />
            </Link>
        <div className='mt-5'>
        {props.sidebarItems.links.map((link, index) => {
          return link.collapse ? (
            <Collapsible key={index} defaultOpen={false} className="group/collapsible">
        
              <CollapsibleTrigger asChild>
                <SidebarButton
                  variant={pathname === link.href ? 'primary' : 'ghost'}
                  icon={link.icon}
                  className="w-full hover:bg-secondary"
                         
                >
                  {/* <link.icon className="h-5 w-5" /> */}
                  {link.label}
                </SidebarButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="pl-6 ">
                  {link.collapse.map((sublink, subIndex) => (
                    <SidebarMenuSubItem key={subIndex} className='rounded hover:bg-secondary'>
                      <Link
                        to={sublink.href}
                        className={`block py-2 px-3 text-white  ${
                          pathname === sublink.href ? 'rounded bg-ligthblue' : ''
                        }`}
                      >
                        {sublink.label}
                      </Link>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
         
          </Collapsible>
          ) : (
            <Link key={index} to={link.href}>
              <SidebarButton
                variant={pathname === link.href ? 'secondary' : 'ghost'}
                icon={link.icon}
                className="w-full"
              >
                {link.label}
              </SidebarButton>
            </Link>
          );
        })}

{props.sidebarItems.extras && <div className="mt-5">{props.sidebarItems.extras}</div>}
          {/* <div className='absolute bottom-3 px-3'>
            <Separator className='absolute -top-3 left-0 w-full' />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant='ghost' className='w-full justify-start'>
                  <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-2'>
                      <Avatar className='h-5 w-5'>
                        <AvatarImage src='https://github.com/max-programming.png' />
                        <AvatarFallback>Max Programming</AvatarFallback>
                      </Avatar>
                      <span>Example</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='mb-2 w-56 p-3 rounded-[1rem]'>
                <div className='space-y-1'>
                  <Link to='/'>
                    <SidebarButton size='sm' icon={Settings} className='w-full'>
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <SidebarButton size='sm' icon={LogOut} className='w-full'>
                    Log Out
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div> */}
        </div>
      </div>
    </aside>
  );
}
