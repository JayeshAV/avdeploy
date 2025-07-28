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
  
      <section className="section-hero" style={sectionStyle}>
        <div className="container container-800px d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column">
            <h1 className="text-center">footmetrics.io</h1>
            <p className="text-22 text-white text-center">
               The solution for the Footmetics.io project involved utilizing a wide range of technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-md-5 py-4 px-3">
        <div className="container d-flex flex-column gap-5">

          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6">
              <img src={footmetricsImg} alt="Footmetrics" className="img-fluid rounded shadow w-100 h-25" />
            </div>
            <div className="col-12 col-md-6">
              <h3>Project Solution:</h3>
              <p>
                The solution for the Footmetics.io project involved utilizing a wide range of technologies, such as React, Python, Django, Flask, JavaScript, Microservices, AWS, Google Cloud Platform, BitBucket, Postman, Swagger, Redis, Celery, GitHub, GitLab, IoT, Data Science, Machine Learning, PostgreSQL, Selenium, Cloud, and CI/CD.
              </p>
              <p>
                My contributions included launching the Footmetics.io website, writing automated jobs to detect camera status, creating APIs, implementing ML algorithms, and improving platform performance by converting monolithic to microservices. These efforts led to significant growth and expansion to top brands across cities and globally.
              </p>
            </div>
          </div>

          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h3>Responsibilities:</h3>
              <ul className="ps-3">
                <li>Launched the Footmetics.io website and MVP for internal product.</li>
                <li>Wrote automated jobs to detect camera status, alarms, and downtime.</li>
                <li>Improved and created multiple data retrieval APIs.</li>
                <li>Implemented ML algorithms for sales forecasting and ghost count removal.</li>
                <li>Created dashboards mapping router footfall with camera data.</li>
                <li>Converted monolithic to microservices architecture.</li>
                <li>Designed pipelines for file storage in AWS S3 and retrieval via DataLake.</li>
                <li>Handled bug fixes and overall performance improvements.</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <img src={dImg} alt="Dashboard" className="img-fluid rounded shadow w-100" />
            </div>
          </div>

          <div className="bg-light rounded p-4 p-md-5 shadow">
            <h3 className="text-center mb-3">Achievements:</h3>
            <p>
              Grew the product from a few customers to onboarding top brands across Indian cities, Middle East, and Europe. Developed features like automated job systems, data APIs, pipelines for storage/retrieval, and migrated to microservices — enabling scalability and rapid growth.
            </p>
            <p>
              My work made it easier to configure hardware and get retail footfall insights through powerful, scalable backend and ML systems.
            </p>
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
