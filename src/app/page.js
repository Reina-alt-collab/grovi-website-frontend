// src/app/page.js

// --- CORRECTED IMPORTS ---
import Link from 'next/link';
import { client } from '../lib/sanity';
import { urlFor } from '../lib/image';
import Image from 'next/image';
import './PortfolioGrid.css';
// --- END OF CORRECTIONS ---

async function getProjects() {
  const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc)`);
  return projects;
}

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main>
      <section id="work" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Mi Portafolio</h2>
          <div className="portfolio-grid">
            {projects.map((project) => (
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
    </main>
  );
}