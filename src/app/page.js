// src/app/page.js
import Link from 'next/link';
import { client } from '../lib/sanity';
import { urlFor } from '../lib/image';
import Image from 'next/image';
import './PortfolioGrid.css'; // Make sure this CSS file is imported

async function getProjects() {
  const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc)`);
  return projects;
}

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main>
      {/* You can add a Hero/Intro section here later */}
      
      <section id="work" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Mi Portafolio</h2>
          
          <div className="portfolio-grid">
            {projects?.map((project) => (
              // The Link is the parent card element
              <Link key={project._id} href={`/portfolio/${project.slug.current}`} className="portfolio-card">
                
                {/* The Image is the background */}
                <Image
                  src={urlFor(project.coverImage).width(500).height(375).url()}
                  alt={`Imagen de portada para ${project.title}`}
                  width={500}
                  height={375}
                  className="portfolio-image"
                />
                
                {/* The Div is the text overlay */}
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