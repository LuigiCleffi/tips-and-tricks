// Definição das props para NavItem
interface NavItemProps {
  title: string;
  href: string;
}

interface ProfilePicProps {
  src: string;
  alt?: string;
}
// Enum para as tags de navegação
export enum AnchorTag {
  Home = 'Home',
  About = 'About',
  Contact = 'Contact'
}

export type { NavItemProps, ProfilePicProps};