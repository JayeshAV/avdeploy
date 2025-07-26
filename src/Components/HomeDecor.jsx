import React from 'react';
import headerbg from "../assets/images/header-bg.jpg";
import homeDecorImg from "../assets/images/1.png";
import logoPython from "../assets/images/logo-python.png";
import logoDjango from "../assets/images/logo-django.png";
import logoNextjs from "../assets/images/nextjs-logo.png";
import logoDynamo from "../assets/images/dynamo.png";
import logoDocker from "../assets/images/docker.png";
import PortfolioSection from './PortfolioSection';
import dImg from "../assets/images/d.png";
import BlogSlider from './Blogslider';

const sectionStyle = {
  background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const HomeDecor = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
      

        <section className="section-hero" style={sectionStyle}>
        <div className="container container-800px d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column">
            <h1 className="text-center">Home Decor Store</h1>
            <p className="text-22 text-white text-center">
               An elegant and scalable e-commerce solution for home décor lovers across the globe.
            </p>
          </div>
        </div>
      </section>

        {/* Project Solution Section */}
        <section className="py-5 px-3 px-md-4">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <img 
                  className="img-fluid rounded shadow object-fit-cover w-100"
                  src={homeDecorImg} 
                  alt="Home Decor Store" 
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <div className="col-12 col-md-6">
                <h3 className="h3 mb-3">Project Solution:</h3>
                <p className="text-secondary">
                  The solution for this home decor e-commerce platform involved creating a scalable architecture with modern web technologies. We implemented a responsive design that works seamlessly across all devices, from mobile phones to large desktop screens. The platform features product catalogs, user accounts, secure checkout, and inventory management.
                </p>
              </div>
            </div>

            {/* Responsibilities Section */}
            <div className="row align-items-center">
              <div className="col-12 col-md-6 order-2 order-md-1">
                <h3 className="h3 mb-3">Responsibilities:</h3>
                <ul className="list-unstyled text-secondary ps-3">
                  <li className="mb-2">✅ Developed responsive UI components for optimal viewing on all devices</li>
                  <li className="mb-2">✅ Implemented product catalog with filtering and search functionality</li>
                  <li className="mb-2">✅ Created secure user authentication and checkout processes</li>
                  <li className="mb-2">✅ Optimized performance for mobile devices with limited bandwidth</li>
                  <li className="mb-2">✅ Integrated with payment gateways and shipping providers</li>
                  <li className="mb-2">✅ Implemented analytics to track user behavior across devices</li>
                </ul>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                <img 
                  className="img-fluid rounded shadow object-fit-cover w-100"
                  src={dImg} 
                  alt="Home Decor Store" 
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="section section-home mb-5 pb-md-5">
          <div 
            className="container bg-content d-flex flex-column gap-4 gap-md-5 py-md-5 br-32 text-white text-center"
            style={{
              background: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="d-flex flex-column align-items-center px-4 gap-2 mx-auto">
              <h2 className="mb-2" style={{ fontSize: '35px' }}>Technologies</h2>
              <p className="fs-5">
                Technologies used for this project include Python, Django, React, AWS
              </p>
            </div>

            <div className="row justify-content-center align-items-center g-4 px-3">
              <div className="col-4 col-sm-3 col-md-2">
                <img src={logoPython} alt="Python" className="img-fluid" />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <img src={logoDjango} alt="Django" className="img-fluid" />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <img src={logoNextjs} alt="React" className="img-fluid" />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <img src={logoDocker} alt="AWS" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <PortfolioSection />
      <BlogSlider />
    </>
  );
};

export default HomeDecor;
