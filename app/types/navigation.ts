export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
  description?: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface FooterNavigation {
  main: NavigationItem[];
  social: Array<NavigationItem & { icon: string }>;
  resources: NavigationItem[];
}
