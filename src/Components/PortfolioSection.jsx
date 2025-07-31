// import React, { useRef, useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Link } from 'react-router-dom';

import projectImg1 from "../assets/images/project-img-1.jpg";
import projectImg2 from "../assets/images/project-img-2.jpg";
import projectImg3 from "../assets/images/project-img-3.jpg";
import projectImg4 from "../assets/images/project-img-4.jpg";

// // 🔁 Portfolio Data
// const portfolioItems = [
//   {
//     image: projectImg1,
//     title: 'Leonardo',
//     description: 'Performance Management Software',
//     link: '/portfolio-details-1',
//   },
//   {
//     image: projectImg3,
//     title: 'HomeDoctor',
//     description: 'Personalized Home Equipment AI Recommendation',
//     link: '/portfolio-details-2',
//   },
//   {
//     image: projectImg4,
//     title: 'mightydigits.com',
//     description: 'Accounting and finance project',
//     link: '/portfolio-details-3',
//   },
//   {
//     image: projectImg2,
//     title: 'footmetrics.io',
//     description: 'The solution for the Footmetics.io project involved.',
//     link: '/portfolio-details-4',
//   },
//   {
//     image: projectImg1,
//     title: 'Leonardo',
//     description: 'Performance Management Software',
//     link: '/portfolio-details-1',
//   },
//   {
//     image: projectImg3,
//     title: 'HomeDoctor',
//     description: 'Personalized Home Equipment AI Recommendation.',
//     link: '/portfolio-details-2',
//   },
// ];

// const PortfolioSection = () => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const swiper = swiperRef.current?.swiper;
//     if (swiper) {
//       setIsBeginning(swiper.isBeginning);
//       setIsEnd(swiper.isEnd);
//     }
//   }, []);

//   const handleSlideChange = () => {
//     const swiper = swiperRef.current?.swiper;
//     if (swiper) {
//       setIsBeginning(swiper.isBeginning);
//       setIsEnd(swiper.isEnd);
//     }
//   };

//   return (
//     <section className="section section-home" style={{ background: 'linear-gradient(to bottom right, #6b4300, #000000)' }}>
//       <div className="d-flex flex-column" style={{ padding: '50px 0' }}>
//         <div className="mw-800px d-flex flex-column align-items-center px-4 gap-2 m-auto">
//           <h2 className="ts-0 text-center text-white"  style={{fontSize: '39px'}}>Our Recent Work</h2>
//           <p className="text-18 text-center text-white">
//             Whether you need a simple landing page, a complex e-commerce
//             platform, or a cutting-edge AI solution, we have the skills and
//             experience to deliver it.
//           </p>
//         </div>

//         <div className="container m-auto position-relative px-3">
//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation]}
//             navigation={{
//               nextEl: '.swiper-button-next-portfolio',
//               prevEl: '.swiper-button-prev-portfolio',
//             }}
//             spaceBetween={20}
//             loop={false}
//             onSlideChange={handleSlideChange}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               576: { slidesPerView: 2 },
//               992: { slidesPerView: 3 },
//             }}
//             className="portfolio-swiper"
//             style={{ borderRadius: '30px' }}
//             onInit={(swiper) => {
//               setIsBeginning(swiper.isBeginning);
//               setIsEnd(swiper.isEnd);
//             }}
//           >
//             {portfolioItems.map((item, index) => (
//               <SwiperSlide key={index}>
//   <Link
//     to={item.link}
//     className="portfolio-card text-decoration-none bg-white   d-flex flex-column gap-2 p-2" // padding changed from p-3 to p-2
//   >
//     <img
//       src={item.image}
//       alt={`Project ${index + 1}`}
//       className="object-fit-cover"
//       style={{
//         height: '390px',  // increased from 250px
//         width: '100%',    // ensure full width
//         borderRadius: '10px'
//       }}
//     />
//     <div className="d-flex flex-column gap-1">
//       <span className="h3 text-dark  mb-0 ">{item.title}</span>
//       <span className=" text-muted small">
//         {item.description}
//       </span>
//     </div>
//   </Link>
// </SwiperSlide>

//             ))}
//           </Swiper>

//          <div
//   className={` swiper-button-prev-portfolio ${
//     isBeginning ? 'd-none' : ''
//   }`}
//   style={{
//     width: '55px',
//     height: '55px',
//     border: '2px solid white',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     top: 'calc(50% - 50px)',
//     left: '-80px',
//     zIndex: 10,
//     cursor: 'pointer'
//   }}
// >
//   <i className="bi bi-chevron-left" style={{ color: 'white', fontSize: '1.5rem' }}></i>
// </div>

// <div
//   className={` swiper-button-next-portfolio ${
//     isEnd ? 'd-none' : ''
//   }`}
//   style={{
//     width: '55px',
//     height: '55px',
//     border: '2px solid white',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     top: 'calc(50% - 50px)',
//     right: '-80px',
//     zIndex: 10,
//     cursor: 'pointer'
//   }}
// >
//   <i className="bi bi-chevron-right" style={{ color: 'white', fontSize: '1.5rem' }}></i>
// </div>

//         </div>

//         <div className="d-flex justify-content-center mb-5 pb-5">
//           <Link to="/portfolio" style={{backgroundColor:"#e0a63b",color:'white'}} className="btn">
//             View Portfolio
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const bestWorkData = [
//   {
//     id: 1,
//     title: "Real Estate Loan Application Portal",
//     category: "Salesforce",
//     number: "01",
//     description: "An experienced commercial real estate finance company with secure upload of financial documents from users.",
//     points: [
//       "Easy-to-use platform for analyzing and automating govt programs.",
//       "SBA APIs integrated with third-party tools.",
//     ],
//     link: "/portfolio/real-estate-loan-application-portal.html",
//     image: projectImg1,
//   },
//   {
//     id: 2,
//     title: "eLearning Platform",
//     category: ".NET",
//     number: "02",
//     description: "Client from sales domain wanted to take their training system online.",
//     points: [
//       "Track students via reports and remarks.",
//       "Schedule notifications at set intervals.",
//     ],
//     link: "/portfolio/e-learning-platform.html",
//     image: projectImg2,
//   },
//   {
//     id: 3,
//     title: "Investor Information App",
//     category: "Mobile",
//     number: "03",
//     description: "Unique funding solution for public transportation projects.",
//     points: [
//       "Login with Microsoft Active Directory.",
//       "Video content via JW Player.",
//     ],
//     link: "/portfolio/investor-information-app.html",
//     image: projectImg3,
//   },
// ];

// const PortfolioSection = () => {
//   return (
//     <Container className="my-5">
//       <Row className="justify-content-center">
//         <Col md={12}>
//           <Swiper
//             modules={[Navigation, Pagination]}
//             navigation
//             pagination={{ clickable: true }}
//             loop={true}
//             spaceBetween={50}
//             slidesPerView={1}
//           >
//             {bestWorkData.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <Row className="align-items-center">
//                   <Col md={6}>
//                     <h3>{item.number}</h3>
//                     <h4 className="text-muted">{item.category}</h4>
//                     <h2>{item.title}</h2>
//                     <p>{item.description}</p>
//                     <ul>
//                       {item.points.map((point, idx) => (
//                         <li key={idx}>{point}</li>
//                       ))}
//                     </ul>
//                     <a href={item.link} className="btn btn-outline-primary mt-2">
//                       Read more
//                     </a>
//                   </Col>
//                   <Col md={6}>
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="img-fluid rounded"
//                     />
//                   </Col>
//                 </Row>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default PortfolioSection;

import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

// import projectImg1 from './path-to-your-image1.jpg'; // Update with your actual image path
// import projectImg2 from './path-to-your-image2.jpg'; // Update with your actual image path
// import projectImg3 from './path-to-your-image3.jpg'; // Update with your actual image path

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from "react-router-dom";
import headerbg from "../assets/images/header-bg.jpg";
import { useEffect, useRef } from "react";

const PortFolioSection = () => {

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Manually update swiper to bind custom buttons
      swiperRef.current.swiper.params.navigation.prevEl = '.custom-swiper-prev';
      swiperRef.current.swiper.params.navigation.nextEl = '.custom-swiper-next';
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);


  const projects = [
    {
      id: 1,
      number: "01",
      title: "Leonardo247",
      description: "A platform designed to streamline maintenance. ",
      features: [
        "Built backend using Python, Django.",
        "Integrated SBA APIs with 3rd-party services.",
      ],
      image: projectImg1,
      path: "/portfolio-details-1",
    },
    {
      id: 2,
      number: "02",
      title: "footmetrics.io",
      description: "Tech solution involving React, Python, Django, Flask, JS.",
      features: [
        "Launched Footmetrics.io web platform.",
        "Enabled hardware configuration analytics.",
      ],
      image: projectImg2,
      path: "/portfolio-details-4",
    },
    {
      id: 3,
      number: "03",
      title: "HomeDoctor",
      description: "Helps users select appliances using AI-based suggestions.",
      features: [
        "Dynamic questionnaire for tailored product picks.",
        "Built-in expert advice system.",
      ],
      image: projectImg3,
      path: "/portfolio-details-2",
    },
    {
      id: 4,
      number: "04",
      title: "mightydigits.com",
      description: "Accounting automation & macro-based finance solutions.",
      features: [
        "Client gave 5⭐ for advanced finance tools.",
        "Automated Excel macros + calculations.",
      ],
      image: projectImg4,
      path: "/portfolio-details-3",
    },
  ];
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: "80px",
    marginTop:"80px",
    paddingBottom:"20px"
  };

  return (
    <>
    <style>{`
        .swiper-pagination {
          opacity:0;
        }
      `}</style>



       <section style={sectionStyle} >
         <section >
  <h2 className="case-heading text-center text-white">
    Case Studies that showcase our expertise.
  </h2>
  <p className="case-subtitle text-center mx-auto text-white">
    Our Projects that reflect our skills, proven methods, and technical excellence.
  </p>
</section>
<Container className="position-relative" style={{ position: "relative",paddingBottom:"60px" }}>
 <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1500}
          pagination={{ clickable: true }}
        >
    {projects.map((project) => (
      <SwiperSlide key={project.id}>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "-10px",
            width: "76%",
            height: "95%",
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
            marginLeft: "30px",
            zIndex: 0,
          }}
          className="shadow d-none d-md-block"
        ></div>
        
        <Row
          className="align-items-center position-relative g-4 p-3 p-md-5 shadow bg-white mx-2 mx-md-0"
          style={{
            borderRadius: "14px",
            zIndex: 1,
            marginBottom: "30px",
            minHeight: "540px",
            width: "auto",
            marginTop: "0px",
            marginLeft: "0px",
          }}
        >
          {/* Content Column - First on mobile, left on desktop */}
          <Col xs={12} md={7} className="order-1 order-md-1">
            <h5 className="fw-bold" style={{ color: "#E0902C" }}>
              {project.number}
            </h5>
            <h3 className="fw-bold mb-3" style={{ color: "#E0902C" }}>
              {project.title}
            </h3>
            <p className="mb-4">{project.description}</p>
            <ul className="ps-4 mb-4">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="d-flex flex-wrap gap-2">
              <Link
                to={project.path}
                style={{
                  textDecoration: "none",
                  background: "white",
                  padding: "8px 20px",
                  borderRadius: "25px",
                  border: "1px solid #ccc",
                  color: "#444",
                  fontWeight: 500,
                }}
              >
                View More
              </Link>
            </div>
            
                  <div className="d-flex justify-content-start mt-4 mt-md-5">
                    <button className="custom-swiper-prev btn rounded-circle shadow-sm px-3 py-2" style={{ color: "#226AB3" }}>
                      ❮
                    </button>
                    <button className="custom-swiper-next btn rounded-circle shadow-sm px-3 py-2 ms-2" style={{ color: "#226AB3" }}>
                      ❯
                    </button>
                  </div>
          </Col>
          
          {/* Image Column - Second on mobile, right on desktop */}
          <Col xs={12} md={5} className="order-2 order-md-2 mt-3 mt-md-0">
  <div
  className="w-100 h-100 d-flex img-fluid align-items-center justify-content-center custom-padding"
  style={{ position: "relative", minHeight: "250px" }}
>


              <img
                src={project.image}
                alt={project.title}
                className="w-100 rounded-3 object-fit-cover responsive-img"
                style={{ 
                  height: "auto"
                }}
              />
            </div>
          </Col>
         
        </Row>
        
      </SwiperSlide>
    ))}
    
  </Swiper>
  
 
</Container>
</section>

<style jsx>{`
  @media (max-width: 767.98px) {
    .swiper-slide {
      padding: 0 10px;
    }
    
    .custom-swiper-prev,
    .custom-swiper-next {
      padding: 10px 12px !important;
      font-size: 14px;
    }
  }
  
  @media (max-width: 575.98px) {
    .swiper-slide {
      padding: 0 5px;
    }
    
    .row {
      margin-left: 10px !important;
      margin-right: 10px !important;
      width: calc(100% - 20px) !important;
    }
  }
  
  @media (min-width: 768px) {
    .row {
      width: 78% !important;
      margin-left: 40px !important;
    }
    
    .col-md-5 > div {
      position: absolute !important;
      top: 0% !important;
      left: 50% !important;
      padding: 130px !important;
    }
      
    }
  }
`}</style>

    </>
  );
};

export default PortFolioSection;
