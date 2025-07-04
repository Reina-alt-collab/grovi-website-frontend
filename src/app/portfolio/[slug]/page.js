// src/app/portfolio/[slug]/page.js

// --- THIS IS THE FINAL, CORRECTED IMPORT BLOCK ---
import { client } from '../../../lib/sanity';
import { urlFor } from '../../../lib/image';
// --- END OF CORRECTIONS ---
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
    <article className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>
      
      <Image 
        src={urlFor(project.coverImage).width(1200).height(600).url()}
        width={1200}
        height={600}
        alt={`Imagen de ${project.title}`}
        className="w-full h-auto object-cover rounded-lg mb-12"
      />

      <div className="prose lg:prose-xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">El Reto</h2>
        <PortableText value={project.theChallenge} />

        <h2 className="text-3xl font-semibold mt-10">La Metodología</h2>
        <PortableText value={project.theMethodology} />

        <h2 className="text-3xl font-semibold mt-10">Los Resultados</h2>
        <PortableText value={project.theResults} />
      </div>
    </article>
  );
}