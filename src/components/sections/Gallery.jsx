import Image from "next/image";

const galleryImages = [
  {
    src: "/meditacion-amanecer.jpg",
    alt: "Postura de yoga en meditación",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/grupal.jpg",
    alt: "Práctica grupal de yoga",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/al-amanecer.png",
    alt: "Meditación al amanecer",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/postura-avanzada.jpg",
    alt: "Postura de flexibilidad avanzada",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/estiramiento-de-espalda.jpg",
    alt: "Estiramiento de espalda",
    className: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Galería
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 grid-flow-dense">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.className} relative overflow-hidden rounded-lg group aspect-square`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="font-medium text-sm md:text-base">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
