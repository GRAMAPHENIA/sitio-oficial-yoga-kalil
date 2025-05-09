// src/components/sections/Hero.jsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[500px] flex items-center justify-center overflow-hidden max-w-6xl mx-auto my-20 md:rounded-2xl shadow-lg"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/header-flower-cream.png"
          alt="Fondo de yoga pacífico"
          fill
          className="object-cover brightness-75 object-center opacity-90 md:rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 via-indigo-800/20 to-indigo-950/80" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6">
          Reconecta con tu ser interior
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-6xl mx-auto">
          Encontra equilibrio, paz y fortaleza a través de la práctica
          consciente del yoga
        </p>
        <Link
          href="#clases"
          className="inline-block px-8 py-3 bg-indigo-600/20 hover:bg-indigo-700/40 text-white rounded-full transition-colors text-lg backdrop-blur-sm"
        >
          Unite a una clase
        </Link>
      </div>
    </section>
  );
}
