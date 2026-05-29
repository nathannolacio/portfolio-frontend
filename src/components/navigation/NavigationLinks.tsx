"use client";

import Link from "next/link";
import { navItems } from "../../data/navigation";
import { useTranslations } from "next-intl";

type NavigationLinksProps = {
  activeSection?: string;
  setActiveSection?: React.Dispatch<React.SetStateAction<string>>;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
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
  activeLinkClassName
}: NavigationLinksProps) {
  const t = useTranslations("Navbar");

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
            {t(item.label)}
          </Link>
        </li>
      ))}
    </ul>
  );
}