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
    

                  <section
    className="section-hero"
  >
    <div className="hero-container">
      <div className="hero-content">
        <h2>Home Decor Store</h2>
        <p>
          An elegant and scalable e-commerce solution for home décor lovers across the globe.
        </p>
      </div>
    </div>
  </section>

      <section className="home-decor-section py-5 px-3 px-md-5">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className=" align-items-center mb-5 g-5" style={{display:'flex',justifyContent:"space-between",alignItems:'center',flexWrap:"wrap"}}>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <img
                className="img-fluid rounded-4 shadow-lg object-fit-cover w-100"
                src={homeDecorImg}
                alt="Home Decor Store"
                style={{ maxHeight: '500px', objectPosition: 'center' }}
              />
            </div>
            <div className="col-12 col-lg-6 ps-lg-5">
              <h3 className="h2 mb-4 fw-bold" style={{color:"#2265AB"}}>Project Solution</h3>
              <p className="text-muted fs-5">
                The solution for this home decor e-commerce platform involved creating a scalable architecture with modern web technologies. We implemented a responsive design that works seamlessly across all devices, from mobile phones to large desktop screens. The platform features product catalogs, user accounts, secure checkout, and inventory management.
              </p>
            </div>
          </div>

          <div  className="align-items-center g-5" style={{display:'flex',justifyContent:"space-between",alignItems:'center',flexWrap:"wrap"}}>
            <div className="col-12 col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img
                className="img-fluid rounded-4 shadow-lg object-fit-cover w-100"
                src={dImg}
                alt="Home Decor Store"
                style={{ maxHeight: '500px', objectPosition: 'center' }}
              />
            </div>
            <div className="col-12 col-lg-6 order-lg-1 pe-lg-5">
              <h3 className="h2 mb-4 fw-bold text-primary">Responsibilities</h3>
              <ul className="list-unstyled text-muted fs-5">
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Developed responsive UI components for optimal viewing on all devices</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Implemented product catalog with filtering and search functionality</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Created secure user authentication and checkout processes</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Optimized performance for mobile devices with limited bandwidth</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Integrated with payment gateways and shipping providers</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="me-2 text-success">✓</span>
                  <span>Implemented analytics to track user behavior across devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>




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
      <section className='mb-5 pb-5'>
        <BlogSlider />
      </section>
      </>
    );
  };

  export default HomeDecor;
