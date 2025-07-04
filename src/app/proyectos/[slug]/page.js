// src/app/proyectos/[slug]/page.js

import { client } from "@/lib/sanity.js";
import { PortableText } from '@portabletext/react'; // The component to render rich text

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const project = await client.fetch(`*[_type == "project" && slug.current == $slug][0]{ title, summary }`, { slug });
  return {
    title: `${project.title} | Grovi Case Study`,
    description: project.summary,
  };
}
// This function fetches the data for ONLY ONE specific project
async function getCaseStudy(slug) {
  // This query uses a $slug parameter to find the correct project in Sanity
  const query = `*[_type == "project" && slug.current == $slug][0]{
    title,
    theChallenge,
    theMethodology,
    theResults
  }`;

  // We pass the slug from the URL to the query
  const data = await client.fetch(query, { slug });
  return data;
}

// This is the main component for the single project page
export default async function ProjectPage({ params }) {
  // The `params` object, passed by Next.js, contains the slug from the URL
  const caseStudy = await getCaseStudy(params.slug);

  return (
      <div className="container">
        <h1 className="case-study-title">{caseStudy.title}</h1>

        <div className="case-study-content">
          <section>
            <h2>El Reto</h2>
            <div className="portable-text-container">
              <PortableText value={caseStudy.theChallenge} />
            </div>
          </section>

          <section>
            <h2>La Metodología</h2>
            <div className="portable-text-container">
              <PortableText value={caseStudy.theMethodology} />
            </div>
          </section>

          <section>
            <h2>Los Resultados</h2>
            <div className="portable-text-container">
              <PortableText value={caseStudy.theResults} />
            </div>
          </section>
        </div>
      </div>
  );
}