// src/app/portfolio/[slug]/page.js
import { client } from "../../../../lib/sanity"; // Adjust path to sanity.js
import { urlFor } from "../../../../lib/image";  // Adjust path to image.js
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

async function getProject(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  const project = await client.fetch(query, { slug });
  return project;
}

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug);

  if (!project) {
    return <div>Proyecto no encontrado.</div>;
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-charcoal mb-4">{project.title}</h1>
      
      <Image 
        src={urlFor(project.coverImage).width(1200).height(600).url()}
        width={1200}
        height={600}
        alt={`Imagen de ${project.title}`}
        className="w-full h-auto object-cover rounded-lg mb-8"
      />

      <div className="prose lg:prose-xl max-w-none">
        <h2 className="text-2xl font-semibold">El Reto</h2>
        <PortableText value={project.theChallenge} />

        <h2 className="text-2xl font-semibold mt-8">La Metodología</h2>
        <PortableText value={project.theMethodology} />

        <h2 className="text-2xl font-semibold mt-8">Los Resultados</h2>
        <PortableText value={project.theResults} />
      </div>
    </main>
  );
}