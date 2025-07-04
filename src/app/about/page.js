export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-charcoal mb-4">
        Sobre Grovi
      </h1>
      <p className="text-lg text-charcoal mb-8">
        Tu Socio Estratégico para el Crecimiento de E-commerce.
      </p>

      <div className="prose lg:prose-xl max-w-none">
        {/* Replace this with your own "About" text */}
        <h2 className="text-2xl font-semibold">Nuestra Misión</h2>
        <p>
          En Grovi, no somos una agencia de marketing tradicional. Nos convertimos en una extensión de tu equipo, un verdadero Growth Partner dedicado a construir un ecosistema de crecimiento predecible y rentable para tu marca de e-commerce.
        </p>
        <p>
          Entendemos que el crecimiento real no proviene de tácticas aisladas, sino de un sistema completo que funciona en armonía. Nuestra misión es diseñar, implementar y optimizar ese sistema para ti, liberándote para que te concentres en lo que mejor sabes hacer: crear productos increíbles.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Nuestra Metodología</h2>
        <p>
          Basamos nuestro trabajo en tres pilares fundamentales:
        </p>
        <ul>
          <li><strong>Diagnóstico y Estrategia:</strong> Todo comienza con un análisis profundo para identificar las oportunidades ocultas en tu negocio.</li>
          <li><strong>Construcción del Motor de Adquisición:</strong> Creamos embudos de venta automatizados (EVA) que atraen, convierten y fidelizan clientes de alto valor.</li>
          <li><strong>Optimización y Escalado:</strong> Monitoreamos y mejoramos constantemente cada pieza del sistema para asegurar un crecimiento eficiente y rentable.</li>
        </ul>
      </div>
    </main>
  );
}