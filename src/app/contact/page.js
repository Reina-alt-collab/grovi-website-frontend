// app/contact/page.js
"use client"; // Important: This makes it a client component

import React from 'react';
import { InlineWidget } from "react-calendly";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-charcoal mb-4">
        Hablemos de tu Crecimiento
      </h1>
      <p className="text-lg text-charcoal max-w-2xl mx-auto mb-8">
        El primer paso para escalar tu negocio es una conversación. Agenda una llamada de descubrimiento gratuita de 15 minutos directamente en mi calendario. Sin compromiso, solo valor.
      </p>

      {/* --- Calendly Inline Widget --- */}
      <div className="calendly-container min-h-[700px]">
        <InlineWidget
          url="https://calendly.com/soporte-grovi/llamada-de-descubrimiento-de-15-minutos" // <-- REPLACE THIS WITH YOUR CALENDLY LINK
        />
      </div>
    </main>
  );
}