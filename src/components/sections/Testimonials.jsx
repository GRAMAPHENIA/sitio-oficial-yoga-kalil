// src/components/sections/Testimonials.jsx
import { FaQuoteLeft } from "react-icons/fa";

const testimonialItems = [
  {
    quote:
      "Las clases de Melina han transformado mi vida. No solo he ganado flexibilidad, sino también una paz interior que llevo conmigo todo el día.",
    name: "María González",
    position: "Estudiante por 2 años",
  },
  {
    quote:
      "Como principiante, tenía miedo de no poder seguir las clases, pero Melina crea un ambiente tan acogedor que me sentí cómodo desde el primer día.",
    name: "Carlos Rodríguez",
    position: "Principiante",
  },
  {
    quote:
      "Después de meses de dolor de espalda, las clases de Melina me han ayudado a fortalecer mi cuerpo y reducir el dolor. Su enfoque en la alineación correcta ha sido fundamental.",
    name: "Laura Martínez",
    position: "Estudiante por 6 meses",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Lo que dicen quienes practican conmigo
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialItems.map((item, index) => (
            <div key={index} className="bg-stone-50 p-6 rounded-lg shadow-sm">
              <FaQuoteLeft className="w-8 h-8 text-teal-200 mb-4" />
              <p className="text-stone-600 mb-4">{item.quote}</p>
              <div className="font-medium">
                <p>{item.name}</p>
                <p className="text-sm text-stone-500">{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
