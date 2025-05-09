// src/components/layout/Footer.jsx
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

const socialLinks = [
  { icon: <FiInstagram className="h-6 w-6" />, label: "Instagram", href: "#" },
  { icon: <FiFacebook className="h-6 w-6" />, label: "Facebook", href: "#" },
  { icon: <FiYoutube className="h-6 w-6" />, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-10 bg-[#1B404C] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-serif font-medium">Melina Khalil</div>
            <p className="text-stone-300 mt-2">
              Profesora de Yoga & Guía de Bienestar
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-stone-300 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-stone-400 text-sm">
          <p>
          Melina Khalil  {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
