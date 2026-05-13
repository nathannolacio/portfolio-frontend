import Link from "next/link";
import { navItems } from "../../data/navigation";

type NavigationLinksProps = {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
  setIsMenuOpen?: (isOpen: boolean) => void;
  listClassName?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
};

export default function NavigationLinks({
  activeSection,
  setActiveSection,
  setIsMenuOpen,
  listClassName,
  linkClassName,
  activeLinkClassName,
}: NavigationLinksProps) {
  return (
    <ul className={listClassName}>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={
              activeSection === item.section
                ? activeLinkClassName
                : linkClassName
            }
            onClick={() => {
              setActiveSection?.(item.section);
              setIsMenuOpen?.(false);
            }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}