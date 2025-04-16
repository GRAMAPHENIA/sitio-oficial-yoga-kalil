// src/components/sections/ContactForm.jsx
export default function ContactForm() {
    return (
      <section id="contacto" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Contacto</h2>
  
          <div className="max-w-2xl mx-auto">
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }