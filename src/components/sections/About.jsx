// src/components/sections/About.jsx
import Image from "next/image"

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-stone-100 max-w-7xl mx-auto rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Sobre Mí</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
              <Image src="/image.webp" alt="Melina Khalil" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-serif mb-4">Melina Khalil</h3>
            <p className="text-stone-600 mb-4">
              Descubrí el yoga durante un momento difícil de mi vida, y transformó mi relación con mi cuerpo y mente.
              Durante más de 10 años, he compartido el poder curativo del yoga con estudiantes de todas las edades y habilidades.
            </p>
            <p className="text-stone-600 mb-4">
              Mi estilo de enseñanza combina el yoga Hatha tradicional con prácticas de atención plena, creando un espacio donde puedes
              moverte a tu propio ritmo mientras desarrollas fuerza, flexibilidad y calma interior.
            </p>
            <p className="text-stone-600">
              Creo que el yoga es para todos, independientemente de la edad, tipo de cuerpo o nivel de experiencia. Mis clases son entornos
              inclusivos y de apoyo donde puedes explorar, crecer y reconectar con tu auténtico ser.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}