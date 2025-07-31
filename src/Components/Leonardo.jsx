import React from 'react'
import PortfolioSection from './PortfolioSection'
import headerbg from "../assets/images/header-bg.jpg";
import projectImg1 from "../assets/images/project-img-1.jpg";
import logoPython from "../assets/images/logo-python.png";
import logoDjango from "../assets/images/logo-django.png";
import logoNextjs from "../assets/images/nextjs-logo.png";
import logoDynamo from "../assets/images/dynamo.png";
import logoDocker from "../assets/images/docker.png";

const Leonardo = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
          <section
  className="section-hero"
>
  <div className="hero-container">
    <div className="hero-content">
      <h2>Leonardo247</h2>
      <p>
         A platform designed to streamline maintenance and operation workflows for property owners and operators.
      </p>
    </div>
  </div>
</section>

      <section className="section py-md-5">
        <div className="container bg-gray d-flex flex-column gap-4 gap-md-5 br-32 p-4 p-md-5">
          <div className="d-flex flex-column align-items-center gap-2">
            <img className="mb-4 br-20" src={projectImg1} alt="Leonardo Project" />
            <p className="text-20">
              As a software engineer for Leonardo247com, I was responsible for creating the back-end infrastructure of
              the platform using Python and Django, as well as the Django Rest Framework.
            </p>
            <p className="text-20">
              Leonardo247 is a platform designed to streamline maintenance and operation workflows for property owners
              and operators. The platform automates many time-consuming tasks and offers a unified interface that makes
              it easier and more accurate to manage tasks.
            </p>
            <p className="text-20">Leonardo247 is now serving millions of customers worldwide.</p>
          </div>
        </div>
      </section>

      <section className="section section-home pb-md-10 pb-md-5 mb-5"  >
        <div className="container bg-content d-flex flex-column gap-4 gap-md-5 py-md-5 br-32" style={{background: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' }}>
          <div className="d-flex flex-column align-items-center px-4 gap-2 m-auto">
            <h2 className="mb-2    ts-0 text-center text-white"  style={{fontSize: '35px'}}>Technologies</h2>
            <p className="text-20 text-white text-center">
              Technologies used for this project include Python, Django Rest Framework, NextJs, Amazon DynamoDB, Amazon
              Web Service, Docker.
            </p>
          </div>

          <div className="home-logo-slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{ marginRight: '40px' }}>
                <img src={logoPython} alt="Python" />
              </div>
              <div className="swiper-slide" style={{ marginRight: '40px' }}>
                <img src={logoDjango} alt="Django" />
              </div>
              <div className="swiper-slide" style={{ marginRight: '40px' }}>
                <img src={logoNextjs} alt="Next.js" />
              </div>
              <div className="swiper-slide" style={{ marginRight: '40px' }}>
                <img src={logoDynamo} alt="DynamoDB" />
              </div>
              <div className="swiper-slide" style={{ marginRight: '40px' }}>
                <img src={logoDocker} alt="Docker" />
              </div>
            </div>
          </div>
        </div>
      </section>
<section className='pb-5 mb-5'>
      <PortfolioSection /></section>
    </>
  );
};

export default Leonardo;
