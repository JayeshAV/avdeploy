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


  return (
    <>


   <motion.section
        className="section-hero"
        style={sectionStyle}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mw-800px d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column">
            <h1 className="text-center">Our Latest Projects</h1>
            <p className="text-22 text-white text-center">
                            At Avatara Technobiz, we take pride in delivering cutting-edge projects tailored to the unique needs of small and medium businesses. From digital storefronts to service-based platforms, our expertise spans a wide range of industries. Explore our latest projects and see how we bring technology-driven success to businesses of all kinds.

            </p>
          </div>
        </div>
      </motion.section>


      {/* <section className="section-hero" style={sectionStyle}>
        <div className="container mw-1000px d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column">
            <h1 className="text-center"></h1>
            <p className="text-22 text-white text-center">
            </p>
          </div>
        </div>
      </section> */}

  <section className="section section-home pb-md-5" style={{ backgroundColor: '#f8f9fa' }}>
  <div className="container d-flex flex-column gap-4 gap-md-5">
    <div className="row g-4">
      <div className="col-md-6">
        <Link 
          to="/portfolio-details-1" 
          className="portfolio-item d-flex flex-column h-100 text-decoration-none"
          style={{
            borderRadius: '80px 10px 80px 0',
            border: '1.5px solid rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            height: '100%'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ overflow: 'hidden', height: '300px' }}>
            <img 
              src={projectImg1} 
              alt="Leonardo Project" 
              className="w-100 h-100 object-fit-cover"
              style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div className="p-4 d-flex flex-column" style={{ flex: 1 }}>
            <h3 className="mb-2" style={{ color: '#212529', fontWeight: 600 }}>Leonardo</h3>
            <p className="mb-0" style={{ color: '#6c757d', flex: 1 }}>Performance Management Software</p>
            <div className="mt-3 d-flex align-items-center" style={{ color: '#0d6efd' }}>
              <span>View Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                <path d="M5 3H13V11M13 3L3 13L13 3Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-md-6">
        <Link 
          to="/portfolio-details-2" 
          className="portfolio-item d-flex flex-column h-100 text-decoration-none"
          style={{
            borderRadius: '80px 10px 80px 0',
            border: '1.5px solid rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            height: '100%'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ overflow: 'hidden', height: '300px' }}>
            <img 
              src={projectImg3} 
              alt="HomeDoctor Project" 
              className="w-100 h-100 object-fit-cover"
              style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div className="p-4 d-flex flex-column" style={{ flex: 1 }}>
            <h3 className="mb-2" style={{ color: '#212529', fontWeight: 600 }}>HomeDoctor</h3>
            <p className="mb-0" style={{ color: '#6c757d', flex: 1 }}>Personalized Home Equipment AI Recommendation Platform</p>
            <div className="mt-3 d-flex align-items-center" style={{ color: '#0d6efd' }}>
              <span>View Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                <path d="M5 3H13V11M13 3L3 13L13 3Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-md-6">
        <Link 
          to="/portfolio-details-3" 
          className="portfolio-item d-flex flex-column h-100 text-decoration-none"
          style={{
            borderRadius: '80px 10px 80px 0',
            border: '1.5px solid rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            height: '100%'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ overflow: 'hidden', height: '300px' }}>
            <img 
              src={projectImg4} 
              alt="Mightydigits Project" 
              className="w-100 h-100 object-fit-cover"
              style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div className="p-4 d-flex flex-column" style={{ flex: 1 }}>
            <h3 className="mb-2" style={{ color: '#212529', fontWeight: 600 }}>mightydigits.com</h3>
            <p className="mb-0" style={{ color: '#6c757d', flex: 1 }}>Accounting and finance project</p>
            <div className="mt-3 d-flex align-items-center" style={{ color: '#0d6efd' }}>
              <span>View Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                <path d="M5 3H13V11M13 3L3 13L13 3Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-md-6">
        <Link 
          to="/portfolio-details-4" 
          className="portfolio-item d-flex flex-column h-100 text-decoration-none"
          style={{
            borderRadius: '80px 10px 80px 0',
            border: '1.5px solid rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            height: '100%'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ overflow: 'hidden', height: '300px' }}>
            <img 
              src={projectImg2} 
              alt="Footmetrics Project" 
              className="w-100 h-100 object-fit-cover"
              style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div className="p-4 d-flex flex-column" style={{ flex: 1 }}>
            <h3 className="mb-2" style={{ color: '#212529', fontWeight: 600 }}>footmetrics.io</h3>
            <p className="mb-0" style={{ color: '#6c757d', flex: 1 }}>The solution for the Footmetics.io project involved utilizing a wide range of technologies</p>
            <div className="mt-3 d-flex align-items-center" style={{ color: '#0d6efd' }}>
              <span>View Project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                <path d="M5 3H13V11M13 3L3 13L13 3Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>

    {/* Modern Pagination (commented out but enhanced) */}
    {/*
    <div className="pagination d-flex align-items-center justify-content-center gap-3 pb-md-5">
      <button className="btn btn-outline-primary rounded-circle p-2" style={{ width: '40px', height: '40px' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.34988 6.15287H14V7.90287H3.34988L8.04335 12.5963L6.80593 13.8337L0 7.02787L6.80593 0.221924L8.04335 1.45936L3.34988 6.15287Z" fill="currentColor"/>
        </svg>
      </button>
      <button className="btn btn-primary rounded-circle" style={{ width: '40px', height: '40px' }}>1</button>
      <button className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>2</button>
      <button className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>3</button>
      <button className="btn btn-outline-primary rounded-circle" style={{ width: '40px', height: '40px' }}>4</button>
      <button className="btn btn-outline-primary rounded-circle p-2" style={{ width: '40px', height: '40px' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6501 6.12503H0V7.87503H10.6501L5.95665 12.5684L7.19407 13.8059L14 7.00003L7.19407 0.194092L5.95665 1.43153L10.6501 6.12503Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
    */}
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
