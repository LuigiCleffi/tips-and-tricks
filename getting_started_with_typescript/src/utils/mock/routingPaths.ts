import { AnchorTag, NavItemProps } from "../../components/Navbar/types";

// Atributos das tags de navegação
const anchorTagAttributes: Record<keyof typeof AnchorTag, NavItemProps> = {
  [AnchorTag.Home]: {
    title: 'Home',
    href: '/'
  },
  [AnchorTag.About]: {
    title: 'About',
    href: '/about'
  },
  [AnchorTag.Contact]: {
    title: 'Contact',
    href: '/contact'
  }
} as const;

export { anchorTagAttributes };