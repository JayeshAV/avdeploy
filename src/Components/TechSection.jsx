import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import headerbg from "../assets/images/header-bg.jpg";
import logo1 from '../assets/images/logo 1.png';
import logo2 from '../assets/images/logo 2.png';
import logo3 from '../assets/images/logo 3.png';
import logo4 from '../assets/images/logo 4.png';
import logo5 from '../assets/images/logo 5.png';
import logoPython from '../assets/images/logo-python.png';
import logoNode from '../assets/images/logo-node.png';
import logo6 from '../assets/images/logo 6.png';
import logo7 from '../assets/images/logo 7.png';
import logoGoogleCloud from '../assets/images/google-cloud.png';
import logoAWS from '../assets/images/icon-32-aws.svg';
import logo8 from '../assets/images/logo 8.png';
import logo9 from '../assets/images/logo 9.png';
import logoDjango from '../assets/images/logo-django.png';
import logoRedis from '../assets/images/redis.png';
import logoDynamo from '../assets/images/dynamo.png';

const techLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logoPython,
  logoNode,
  logo6,
  logo7,
  logoGoogleCloud,
  logoAWS,
  logo8,
  logo9,
  logoDjango,
  logoRedis,
  logoDynamo,
];

const TechSection = () => {
  const sectionStyle = {
      background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginTop:"80px"
    };

  return (
    <section className="section section-home  bg-content " style={sectionStyle}>
      <div className="d-flex flex-column gap-4 " style={{ padding: '60px 0' }}>
        <div className="mw-800px d-flex flex-column align-items-center px-4 gap-2 m-auto">
          <h2 className="mb-2   ts-0 text-center text-white case-heading"  >
            Technologies We Work On
          </h2>
          <p className="text-center text-white case-subtitle w-100" >
            Here are some of the latest technologies and frameworks we master in.
          </p>
        </div>

        <div className="home-logo-slider d-flex gap-2 align-items-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={true}
            slidesPerGroup={true}

            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 6 },
              1200: { slidesPerView: 8 },
            }}
            className='mt-5'
          >
            {techLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img src={logo} alt={`Tech logo ${index + 1}`} style={{
    maxHeight: '70px',
    objectFit: 'contain',
    margin: 'auto',
    marginBottom:"80px"
  }}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
