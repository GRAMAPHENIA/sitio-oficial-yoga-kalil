"use client";

import { useState } from "react";
import Link from "next/link";

// 📌 Definimos tipos estrictos
type NavLink = {
  href: string;
  text: string;
};

type NavItem = {
  label: string;
  key: string;
  links: NavLink[];
};

// 📌 Datos de navegación
const navItems: NavItem[] = [
  {
    label: "CCRU",
    key: "CCRU",
    links: [
      { href: "/nosotros/equipo", text: "Team" },
      { href: "/nosotros/historia", text: "History" },
    ],
  },
  {
    label: "Aceleracionismo",
    key: "Aceleracionismo",
    links: [
      { href: "/servicios/diseno-web", text: "Design" },
      { href: "/servicios/gestion-redes", text: "Social Media" },
    ],
  },
  {
    label: "Esquizoanálisis",
    key: "Esquizoanálisis",
    links: [
      { href: "/servicios/diseno-web", text: "Design" },
      { href: "/servicios/gestion-redes", text: "Social Media" },
    ],
  },
];

// 📌 Componente reutilizable para cada ítem del menú
const NavItem = ({
  item,
  activeSection,
  setActiveSection,
}: {
  item: NavItem;
  activeSection: string | null;
  setActiveSection: (key: string | null) => void;
}) => {
  const isActive = activeSection === item.key;

  return (
    <li
      className="relative group"
      onMouseEnter={() => setActiveSection(item.key)}
      onMouseLeave={() => setActiveSection(null)}
    >
      <button
        className="flex items-center cursor-pointer hover:text-zinc-700"
        aria-expanded={isActive}
      >
        {item.label}
        <span className="ml-2 transition-transform transform group-hover:rotate-90 origin-center duration-300">
          &gt;
        </span>
      </button>

      <div
        className={`absolute top-full left-0 min-w-[200px] border border-zinc-400/50 rounded-md bg-background shadow-lg transition-all duration-300 transform ${
          isActive
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        aria-hidden={!isActive}
      >
        <ul className="py-2">
          {item.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-2 text-zinc-500 bg-background hover:text-zinc-700 hover:bg-[#c1c1c1] m-2 rounded-md"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

// 📌 Componente principal del navigation
const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <section className="rounded-md mt-4 mb-8">
      <div className="container mx-auto flex justify-between items-center p-4 gap-4">
        <nav aria-label="Main Menu">
          <ul className="flex space-x-6 text-zinc-500">
            {navItems.map((item) => (
              <NavItem
                key={item.key}
                item={item}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            ))}
            {/* <li>
              <Link href="/contacto" className="hover:text-zinc-700">
                Contacto
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
