// src/components/sections/Benefits.jsx
import { FiHeart, FiSun, FiUsers } from "react-icons/fi";

const benefitItems = [
  {
    icon: <FiHeart className="w-8 h-8 text-teal-600" />,
    title: "Flexibilidad y Fuerza",
    description:
      "Movimientos suaves que aumentan gradualmente tu flexibilidad mientras fortalecen el núcleo, creando un cuerpo y mente equilibrados.",
  },
  {
    icon: <FiSun className="w-8 h-8 text-teal-600" />,
    title: "Paz Interior",
    description:
      "Aprende técnicas de respiración y prácticas de atención plena que reducen el estrés y aportan una sensación de calma a tu vida diaria.",
  },
  {
    icon: <FiUsers className="w-8 h-8 text-teal-600" />,
    title: "Todos los Niveles Bienvenidos",
    description:
      "Ya seas principiante o practicante experimentado, las clases están adaptadas para encontrarte donde estés en tu camino de yoga.",
  },
];

export default function Benefits() {
  return (
    <section id="clases" className="py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Descubre los beneficios de mis clases
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {benefitItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-50 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
