import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface CollapseItem {
  label: string;
  href: string;
}

interface LinkItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  collapse?: CollapseItem[];
}
export interface SidebarItems {
  links: LinkItem[];
  extras?: ReactNode;
}

