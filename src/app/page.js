// src/app/page.js
import Link from 'next/link';
import { client } from '../lib/sanity'; // Correct relative path
import { urlFor } from '../lib/image';   // Correct relative path
import Image from 'next/image';
import './PortfolioGrid.css';          // The stylesheet for this page

// This is a Server Component function to fetch data
async function getProjects() {
  // The GROQ query to get all documents of type "project"
  const query = `*[_type == "project"] | order(_createdAt desc)`;
  const projects = await client.fetch(query);
  return projects;
}

// This is your main HomePage component
export default async function HomePage() {
  const projects = await getProjects();

  return (
    // We removed the extra <main> tag because it's already in layout.js
    <section id="work" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Mi Portafolio</h2>
        <div className="portfolio-grid">
          {/* We safely map over the projects. The ?. prevents errors if projects is null */}
          {projects?.map((project) => (
            <Link key={project._id} href={`/portfolio/${project.slug.current}`} className="portfolio-card">
              <Image
                src={urlFor(project.coverImage).width(500).height(375).url()}
                alt={`Imagen de portada para ${project.title}`}
                width={500}
                height={375}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-summary">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}