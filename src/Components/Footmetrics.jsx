import React from 'react';
import TechSection from './TechSection';
import PortfolioSection from './PortfolioSection';
import headerbg from "../assets/images/header-bg.jpg";
import footmetricsImg from '../assets/images/footmatrics.png';
import dImg from '../assets/images/d.png';
import pythonLogo from '../assets/images/logo-python.png';
import djangoLogo from '../assets/images/logo-django.png';
import nextjsLogo from '../assets/images/nextjs-logo.png';
import dynamoLogo from '../assets/images/dynamo.png';
import dockerLogo from '../assets/images/docker.png';

const Footmetrics = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <section className="section-hero" >
        <div className="hero-container">
          <div className="hero-content">
            <h2>footmetrics.io</h2>
            <p>
              The solution for the Footmetics.io project involved utilizing a wide range of technologies.
            </p>
          </div>
        </div>
      </section>

  <section className="section py-5 " style={{ maxWidth: '1400px', margin: '0 auto' }}>
  <div className="container-fluid px-0">
    {/* First Row - Project Solution */}
    <div className=" align-items-center g-5 mb-5" style={{display:'flex',justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
      <div className="col-12 col-lg-6">
        <img 
          src={footmetricsImg} 
          alt="Footmetrics" 
          className="img-fluid rounded-4 shadow-sm w-100" 
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </div>
      <div className="col-12 col-lg-6 ps-lg-5">
        <h2 className="h1 fw-bold  mb-4" style={{color:"#2265ab"}}>Project Solution</h2>
        <div className="fs-5 text-muted" style={{ lineHeight: '1.6' }}>
          <p className="mb-4">
            The solution for the Footmetics.io project leveraged cutting-edge technologies including:
          </p>
          <div className="d-flex flex-wrap gap-2 mb-4">
            <span className="badge bg-primary bg-opacity-10 fs-6 fw-normal p-2" style={{color:"#2265ab"}}>React</span>
            <span className="badge bg-primary bg-opacity-10 fs-6 fw-normal p-2" style={{color:"#2265ab"}}>Python</span>
            <span className="badge bg-primary bg-opacity-10 fs-6 fw-normal p-2" style={{color:"#2265ab"}}>Django</span>
            <span className="badge bg-primary bg-opacity-10 fs-6 fw-normal p-2" style={{color:"#2265ab"}}>AWS</span>
            <span className="badge bg-primary bg-opacity-10 fs-6 fw-normal p-2" style={{color:"#2265ab"}}>Microservices</span>
            <span className="badge bg-primary bg-opacity-10 fs-6 fw-normal p-2" style={{color:"#2265ab"}}>Machine Learning</span>
            <span className="badge bg-primary bg-opacity-10 fs-6 fw-normal p-2" style={{color:"#2265ab"}}>PostgreSQL</span>
            <span className="badge bg-primary bg-opacity-10 fs-6 fw-normal p-2" style={{color:"#2265ab"}}>CI/CD</span>
          </div>
          <p>
            My contributions included launching the platform, developing automated monitoring systems, creating APIs, implementing ML algorithms, and architecting the transition from monolithic to microservices - driving significant business growth and global expansion.
          </p>
        </div>
      </div>
    </div>

    {/* Second Row - Responsibilities */}
    <div className="align-items-center g-5 mb-5" style={{display:'flex',justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
      <div className="col-12 col-lg-6 order-lg-2">
        <img 
          src={dImg} 
          alt="Dashboard" 
          className="img-fluid rounded-4 shadow-lg w-100" 
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </div>
      <div className="col-12 col-lg-6 order-lg-1 pe-lg-5">
        <h2 className="h1 fw-bold mb-4" style={{color:"#2265ab"}}>Responsibilities</h2>
        <ul className="list-unstyled fs-5" style={{ lineHeight: '1.8' }}>
          <li className="mb-3 d-flex align-items-start">
            <span className="badge bg-success bg-opacity-10 text-success rounded-circle p-2 me-3 mt-1">✓</span>
            <span>Launched the Footmetics.io website and MVP for internal product</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <span className="badge bg-success bg-opacity-10 text-success rounded-circle p-2 me-3 mt-1">✓</span>
            <span>Developed automated monitoring for camera status, alarms, and downtime</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <span className="badge bg-success bg-opacity-10 text-success rounded-circle p-2 me-3 mt-1">✓</span>
            <span>Created optimized data retrieval APIs and ML algorithms for sales forecasting</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <span className="badge bg-success bg-opacity-10 text-success rounded-circle p-2 me-3 mt-1">✓</span>
            <span>Architected migration from monolithic to microservices</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <span className="badge bg-success bg-opacity-10 text-success rounded-circle p-2 me-3 mt-1">✓</span>
            <span>Designed AWS S3 pipelines and DataLake integration</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Achievements Card */}
    <div className="bg-light rounded-4 p-5 shadow-lg mb-5">
      <div className="d-flex justify-content-center">
        <div className="col-12 col-lg-10 text-center">
          <h2 className="text-center  case-heading  mb-4" style={{color:"#2265ab",textAlign:"center"}}>Key Achievements</h2>
          <div className="fs-5 text-muted" >
            <p className="mb-4 ">
              Transformed the product from a small customer base to serving top brands across India, Middle East, and Europe. Engineered core systems including automated job processing, scalable data APIs, and cloud storage pipelines - enabling 10x growth in platform usage.
            </p>
            <p>
              My technical leadership in the microservices migration and ML implementation provided the foundation for rapid international expansion and powerful retail analytics capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="section pb-md-5 pb-4">
        <div className="container">
          <div className="bg-dark text-white rounded p-4 p-md-5" style={{
            background: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className="text-center mb-4">
              <h2 style={{ fontSize: '35px' }}>Technologies</h2>
              <p className="fs-5">
                React, Python, Django, Flask, Microservice, AWS, GCP, PostgreSQL, Redis, Celery, Swagger, Postman, Bitbucket
              </p>
            </div>

            <div className="row justify-content-center align-items-center g-3">
              <div className="col-4 col-sm-2">
                <img src={pythonLogo} alt="Python" className="img-fluid" />
              </div>
              <div className="col-4 col-sm-2">
                <img src={djangoLogo} alt="Django" className="img-fluid" />
              </div>
              <div className="col-4 col-sm-2">
                <img src={nextjsLogo} alt="Next.js" className="img-fluid" />
              </div>
              <div className="col-4 col-sm-2">
                <img src={dynamoLogo} alt="DynamoDB" className="img-fluid" />
              </div>
              <div className="col-4 col-sm-2">
                <img src={dockerLogo} alt="Docker" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-5">
        <PortfolioSection />
      </div>
    </>
  );
};

export default Footmetrics;
