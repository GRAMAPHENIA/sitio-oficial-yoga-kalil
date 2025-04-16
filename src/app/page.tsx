// src/app/page.js (o página principal)
"use client";

import Navbar from "@/components/layout/NavBar";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Testimonials />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
