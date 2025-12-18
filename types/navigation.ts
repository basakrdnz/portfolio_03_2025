export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
] as const;

