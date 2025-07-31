import React from 'react';
import { Link } from 'react-router-dom';
import headerbg from "../assets/images/header-bg.jpg";
import projectImg1 from "../assets/images/project-img-1.jpg";
import projectImg2 from "../assets/images/project-img-2.jpg";
import projectImg3 from "../assets/images/project-img-3.jpg";
import projectImg4 from "../assets/images/project-img-4.jpg";
import { motion } from "framer-motion"; // ✅ Add this import
import PortfolioSection from '../Components/PortfolioSection';
import Testimonials from '../Components/Testimonials';
import BlogSlider from '../Components/Blogslider';
import TechSection from '../Components/TechSection';


const Portfolio = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

  const projects = [
    {
      id: 1,
      link: "/portfolio-details-1",
      image: projectImg1,
      title: "Leonardo",
      description: "Performance Management Software"
    },
    {
      id: 2,
      link: "/portfolio-details-2",
      image: projectImg3,
      title: "HomeDoctor",
      description: "Personalized Home Equipment AI Recommendation Platform"
    },
    {
      id: 3,
      link: "/portfolio-details-3",
      image: projectImg4 ,
      title: "mightydigits.com",
      description: "Accounting and finance project"
    },
    {
      id: 4,
      link: "/portfolio-details-4",
      image: projectImg2,
      title: "footmetrics.io",
      description: "The solution for the Footmetics.io project involved utilizing a wide range of technologies"
    }
  ];


  return (
    <>


        <section
            className="section-hero"
          >
            <div className="hero-container">
              <div className="hero-content">
                <h2>Our Latest Projects</h2>
                <p>
                  At Avatara Technobiz, we take pride in delivering cutting-edge projects tailored to the unique needs of small and medium businesses. From digital storefronts to service-based platforms, our expertise spans a wide range of industries. Explore our latest projects and see how we bring technology-driven success to businesses of all kinds.
                </p>
              </div>
            </div>
          </section>


      {/* <section className="section-hero" style={sectionStyle}>
        <div className="container mw-1000px d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column">
            <h1 className="text-center"></h1>
            <p className="text-22 text-white text-center">
            </p>
          </div>
        </div>
      </section> */}
<section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-item-wrapper" key={project.id}>
              <Link to={project.link} className="portfolio-item">
                <div className="portfolio-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="portfolio-image"
                  />
                </div>
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="view-project">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5 3H13V11M13 3L3 13L13 3Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

      <PortfolioSection />
      <Testimonials />
      <BlogSlider />
      <TechSection />
    </>
  );
};

export default Portfolio;
