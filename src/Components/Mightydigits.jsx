import React from "react";
import PortfolioSection from "./PortfolioSection";
import headerbg from "../assets/images/header-bg.jpg";
import mightydigits1 from "../assets/images/mightydigits-1.png";
import mightydigits5 from "../assets/images/mightydigits-5.png";
import logoPython from "../assets/images/logo-python.png";
import logoDjango from "../assets/images/logo-django.png";
import logoReact from "../assets/images/logo 9.png";
import logoAWS from "../assets/images/icon-32-aws.svg";
import logoGitlab from "../assets/images/gitlab.svg";

const Mightydigits = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
 

                <section
  className="section-hero"
>
  <div className="hero-container">
    <div className="hero-content">
      <h2>mightydigits.com</h2>
      <p>
           Accounting and finance project.
      </p>
    </div>
  </div>
</section>

      

      <section className="section py-md-5">
        <div className="container bg-gray d-flex flex-column gap-4 gap-md-5 br-32 p-4 p-md-5">
          <div className="d-flex flex-column align-items-center gap-2">
            <img className="mb-4 br-20" src={mightydigits1} alt="Mightydigits Screenshot 1" />
            <p className="text-20">
              This project is based on accounting and finance. I successfully
              finished this project and client provided me 5 star rating for
              this project. I worked as a backend developer. It provides
              automating of complex accounting calculations, documentations,
              excel files macro operations, csv files operations using python
              etc.
            </p>
            <img className="br-20" src={mightydigits5} alt="Mightydigits Screenshot 5" />
          </div>
        </div>
      </section>

      <section className="section section-home pb-md-10 pb-md-5 mb-5">
        <div className="container bg-content d-flex flex-column gap-4 gap-md-5 py-md-5 br-32" style={{background: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' }}>
          <div className="d-flex flex-column align-items-center px-4 gap-2 m-auto">
            <h2 className="mb-2    ts-0 text-center text-white"  style={{fontSize: '35px'}}>Technologies</h2>
            <p className="text-20 text-white text-center">
              Technologies used for this project include Python, Django, React,
              AWS
            </p>
          </div>

          <div className="home-logo-slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{ marginRight: "40px" }}>
                <img src={logoPython} alt="Python" />
              </div>

              <div className="swiper-slide" style={{ marginRight: "40px" }}>
                <img src={logoDjango} alt="Django" />
              </div>

              <div className="swiper-slide" style={{ marginRight: "40px" }}>
                <img src={logoReact} alt="React" />
              </div>

              <div className="swiper-slide" style={{ marginRight: "40px" }}>
                <img src={logoAWS} alt="AWS" />
              </div>

             
            </div>
          </div>
        </div>
      </section>

   <section className="mb-5 pb-5">
      <PortfolioSection />
   </section>

    </>
  );
};

export default Mightydigits;
