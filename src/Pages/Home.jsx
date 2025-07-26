import React, { useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/js/custom"
import BlogSlider from '../Components/Blogslider';
import PortfolioSection from '../Components/PortfolioSection';
import TechSection from '../Components/TechSection';
import { Link } from 'react-router-dom'
import curvedArrow from "../assets/images/dash-curved-arrow.svg";
import headerbg from "../assets/images/header-bg.jpg";
import DevProcess from '../Components/DevProcess';
import Testimonials from '../Components/Testimonials';
import "../../src/assets/css/FaqSection.css";
import { Loader } from 'lucide-react';


const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.6)",
      "0 0 20px rgba(59, 130, 246, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const useScrollAnimation = (threshold = 0.1) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    once: true,
    threshold,
    margin: "-50px"
  })
  return [ref, isInView]
}
const faqs = [

  {
    icon: "📈",
    question: "How do you handle scaling for high traffic web applications?",
    answer:
      "We use cloud-based auto-scaling, caching, load balancing, and microservices to scale web apps efficiently.",
  },
  {
    icon: "🔌",
    question: "How do you integrate third-party services into a web app?",
    answer:
      "We integrate services like payment gateways, email APIs, CRMs, and analytics tools using secure APIs.",
  },
  {
    icon: "💰",
    question: "What is the cost of developing a web application?",
    answer:
      "Costs depend on complexity, features, and timeline. We offer tailored quotes after understanding your needs.",
  },
];

const industries = [
  {
    icon: "🛒",
    title: "Ecommerce & Retail",
    color: "#ff6b35"
  },
  {
    icon: "🏠",
    title: "Real Estate",
    color: "#e91e63"
  },
  {
    icon: "🏛️",
    title: "Fintech",
    color: "#9c27b0"
  },
  {
    icon: "❤️",
    title: "Healthcare",
    color: "#e91e63"
  },
  {
    icon: "✈️",
    title: "Travel & Hospitality",
    color: "#ff9800"
  },
  {
    icon: "🎓",
    title: "Education",
    color: "#4caf50"
  },
  {
    icon: "📺",
    title: "Media & Entertainment",
    color: "#00bcd4"
  },
  {
    icon: "⚽",
    title: "Sports",
    color: "#2196f3"
  },
  {
    icon: "💪",
    title: "Fitness & Wellness",
    color: "#009688"
  },
  {
    icon: "🚚",
    title: "Transport & Logistics",
    color: "#ff9800"
  },
  {
    icon: "💧",
    title: "Lifestyle",
    color: "#03a9f4"
  },
  {
    icon: "🏢",
    title: "Nonprofits",
    color: "#607d8b"
  }
];


const Home = () => {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'


  };

  const gridStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    backgroundPosition: 'center',
  };


  return (
    <>
      {/* Hero Section */}
      <section className="section-hero hero-height-fix m-0" style={sectionStyle}>

        <div className="container container-800px d-flex flex-column gap-3 gap-md-5">
          <motion.div
            className="d-flex flex-column section-sub-hero"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.25, 0.25, 0.75],
              delay: 0.3
            }}
          >
            <motion.h1
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.6
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Tailored Technology <br />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                for Growing Enterprises
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-22 text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.5
              }}
            >
              Empowering small and medium businesses with smart, efficient, reliable
              IT solutions. We're your trusted partner for streamlined operations and
              seamless digital transformation.
            </motion.p>
          </motion.div>

          <motion.div
            className="d-flex justify-content-center flex-column flex-md-row align-items-sm-center gap-2 gap-md-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.8
            }}
          >
            <div className="d-flex justify-content-center flex-column flex-md-row align-items-sm-center gap-2 gap-md-4">
              {/* <Link to="/contact" className="btn btn-secondary icon-arrow-b">
                CONTACT US
              </Link> */}
              <Link to="contact" className="btn btn-primary ">
                SCHEDULE A CALL
              </Link>
            </div>
            {/* <a
            href="tel:+919898442256"
            className="btn bg-black text-white  w-sm-auto"
            style={{ maxWidth: "260px", fontSize: "16px" }}
          ></a> */}
          </motion.div>
        </div>
      </section>

      
      <motion.section
        className="section section-home bg-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >

        <div className="container d-flex flex-column gap-4 gap-md-5" style={{ padding: '80px 0' }}>

          <motion.div
            className="d-flex flex-column align-items-center gap-2"
            variants={fadeInUp}
          >
            <motion.h2
              className="mb-2    ts-0 text-center"
              variants={staggerItem}
              style={{ fontSize: '35px' }}
            >
              Why Choose Avatara Technobiz?
            </motion.h2>

            <motion.p
              className="text-20 text-center"
              variants={staggerItem}
            >
              Unlock the Power of Technology with Our Expert IT Solutions
            </motion.p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            className="grid-5-col d-flex flex-xl-row flex-wrap flex-xl-nowrap justify-content-center gap-4 gap-xl-5"
            variants={staggerContainer}
          >
            {/* Feature Cards */}
            {[
              {
                icon: "💼",
                title: "Expertise in SMB Needs",
                desc: "Over 5 years of experience in delivering tailored IT solutions for small and medium businesses.",
                color: "#4caf50"
              },
              {
                icon: "📈",
                title: "Scalable Solutions",
                desc: "Solutions that grow with your business, ensuring you stay ahead in a fast-paced digital world.",
                color: "#2196f3"
              },
              {
                icon: "💰",
                title: "Affordable & Transparent Pricing",
                desc: "No hidden fees. Get high-quality IT services that fits your budget.",
                color: "#ff9800"
              },
              {
                icon: "📞",
                title: "24/7 Customer Support",
                desc: "Our team is always here for you, ensuring seamless operations and prompt assistance.",
                color: "#e91e63"
              },
              {
                icon: "📊",
                title: "Proven Track Record",
                desc: "Trusted by hundreds of businesses to solve their IT challenges and drive innovation",
                color: "#9c27b0"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="d-flex flex-column align-items-center gap-2 gap-md-3"
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: 'clamp(50px, 8vw, 70px)',
                    height: 'clamp(50px, 8vw, 70px)',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                  }}
                >
                  {item.icon}
                </div>
                <div className="d-flex flex-column text-center">
                  <h3 className="h4">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* offer Section */}
      <motion.section
        className="section section-home section-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container d-flex m-auto flex-column align-items-center   gap-4 gap-md-5" style={{ padding: '70px 0' }}>
          <motion.div
            className="d-block m-auto d-flex flex-column align-items-center gap-2"
            variants={fadeInUp}
          >
            <motion.h2
              className="mb-2 text-black    ts-0 text-center"
              variants={staggerItem}
              style={{ fontSize: '38px' }}
            >
              What We Offer?
            </motion.h2>
            <motion.p
              className="text-20 text-center mb-0"
              variants={staggerItem}
            >
              <b>Tailored IT Solutions for Your Business Needs</b>
            </motion.p>
            <motion.p
              className="text-18 text-center"
              variants={staggerItem}
            >
              "At Avatara Technobiz, we provide a comprehensive suite of IT
              services, designed to meet the unique challenges of small and medium
              businesses. Whether you need software development, cloud solutions,
              cybersecurity, or IT consulting, our expert team is here to deliver
              results that power your growth and streamline your operations."
            </motion.p>
          </motion.div>

          <motion.div
            className="row text-center ms-auto pt-5 d-flex  align-items-start justify-content-start"
            variants={staggerContainer}
          >
            {[
              {
                icon: "☁️",
                title: "Cloud Solutions",
                desc: "Secure and scalable cloud infrastructure to streamline operations, enhance collaboration, and reduce costs.",
                link: "/why-us",
                color: "#2196f3"
              },
              {
                icon: "💻",
                title: "Custom Software Development",
                desc: "Bespoke software solutions that are tailored to meet the unique needs of your business and industry.",
                link: "/why-us",
                color: "#9c27b0"
              },
              {
                icon: "🧠",
                title: "IT Consulting",
                desc: "Expert advice to help you make informed IT decisions that drive business efficiency and growth.",
                link: "/why-us",
                color: "#e91e63"
              },
              {
                icon: "🛠️",
                title: "Managed IT Services",
                desc: "24/7 monitoring and support to ensure your systems are always running smoothly and securely.",
                link: "/why-us",
                color: "#ff9800"
              },
              {
                icon: "💾",
                title: "Data Backup & Recovery",
                desc: "Reliable data backup solutions and recovery strategies to keep your business safe from unexpected disruptions.",
                link: "/why-us",
                color: "#607d8b"
              },
              {
                icon: "📱",
                title: "App Development",
                desc: "Innovative mobile and web application development to meet modern business demands and enhance user engagement.",
                link: "/why-us",
                color: "#4caf50"
              },
              {
                icon: "🌐",
                title: "Website Development & SEO",
                desc: "Custom website design with integrated SEO strategies to improve online visibility and drive traffic.",
                link: "/why-us",
                color: "#03a9f4"
              },
              {
                icon: "🤖",
                title: "Gen AI Chatbot Solutions",
                desc: "AI-powered chatbot solutions designed to enhance customer interactions, automate support, and provide intelligent, real-time assistance.",
                link: "/why-us",
                color: "#00bcd4"
              },
              {
                icon: "🧑‍💼",
                title: "AI Agents",
                desc: "Intelligent AI agents that automate tasks, optimize workflows, and enhance decision-making for seamless business operations",
                link: "/why-us",
                color: "#ff6b35"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6 col-12 d-flex justify-content-center p-3"
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Link
                  to={service.link}
                  className="grid-item text-center d-flex flex-column align-items-center justify-content-center gap-2 gap-md-3 mb-md-4 h-100"
                >
                  <div
                    className="mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: 'clamp(50px, 8vw, 70px)',
                      height: 'clamp(50px, 8vw, 70px)',
                      backgroundColor: service.color + '20',
                      borderRadius: '50%',
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      color: service.color
                    }}
                  >
                    {service.icon}
                  </div>

                  <span className="d-flex flex-column text-center align-items-center">
                    <h3 className=" text-dark m-0">{service.title}</h3>
                    <p className="text-18 text-muted m-0">{service.desc}</p>
                  </span>
                </Link>
              </motion.div>

            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Structure Process */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <DevProcess />
      </motion.div>

      {/* work Process Section
<motion.section 
  className="section section-home section-process  "style={{ padding: '50px 0' }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
>
  <div className="container d-flex flex-column gap-4 " >
    <motion.div 
      className=" m-auto d-flex flex-column align-items-center gap-2"
      variants={fadeInUp}
    >
      <motion.h2 
        className="mb-2 ts-0 text-center"
        style={{fontSize: '39px'}}
        variants={staggerItem}
      >
        How We Work?
      </motion.h2>
      <motion.p 
        className="text-20 text-center mb-0"
        variants={staggerItem}
      >
        <b>Our Proven Process for Success</b>
      </motion.p>
      <motion.p 
        className="text-18 text-center"
        variants={staggerItem}
      >
        At Avatara Technobiz, we believe in a transparent, collaborative
        process that ensures the best outcomes for your business. Our
        step-by-step approach is designed to provide you with tailored IT
        solutions that fit your needs, budge
      </motion.p>
    </motion.div>

    <div className="relative">
      <motion.div 
        className="grid-4-col d-flex flex-xl-row flex-wrap flex-xl-nowrap justify-content-center gap-4 ms-4 me-4"
        variants={staggerContainer}
      >
        {[
  { 
    icon: '🕵️‍♂️', 
    color: '#4A90E2', // Blue
    title: "Discovery & Consultation", 
    desc: "We start by understanding your unique needs and challenges. Through in-depth discussions, we assess your goals and identify areas for improvement." 
  },
  { 
    icon: '🧩', 
    color: '#50E3C2', // Mint Green
    title: "Solution Design & Strategy", 
    desc: "We craft a customized IT strategy that aligns with your business objectives, combining the right technologies to deliver optimal results." 
  },
  { 
    icon: '⚙️', 
    color: '#F5A623', // Orange
    title: "Implementation & efficiency", 
    desc: "Our team works seamlessly to implement the solution, ensuring minimal disruption to your operations and maximum efficiency." 
  },
  { 
    icon: '🧪', 
    color: '#9013FE', // Purple
    title: "Testing & Optimization", 
    desc: "We rigorously test the solution to ensure it works as intended, making any necessary adjustments to fine-tune performance." 
  },
  { 
    icon: '🔧', 
    color: '#D0021B', // Red
    title: "Ongoing Support & Maintenance", 
    desc: "We provide continuous support and maintenance to ensure your systems are always running smoothly, with proactive monitoring and timely updates." 
  }
]
.map((item, index) => (
          <motion.div
            key={index}
            className="bordered-box bg-white d-flex flex-column align-items-center gap-2 gap-md-3 p-3"
            variants={staggerItem}
            whileHover={{ 
              y: -15,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
             <div 
            className="mb-3 d-flex align-items-center justify-content-center"
            style={{
              width: 'clamp(50px, 8vw, 70px)',
              height: 'clamp(50px, 8vw, 70px)',
              backgroundColor: item.color + '20',
              borderRadius: '50%',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: item.color
            }}
          >
            {item.icon}
          </div>
            <div className="d-flex flex-column text-center">
              <h3 className="h4 pb-2" style={{fontSize:"25px",fontWeight:"500"}}>{item.title}</h3>
              <p style={{fontSize:"15px",fontWeight:"200"}}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.img 
        className="curved-arrow-1" 
        src={curvedArrow} 
        alt="arrow"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.img 
        className="curved-arrow-2" 
        src={curvedArrow} 
        alt="arrow"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />
      <motion.img 
        className="curved-arrow-3" 
        src={curvedArrow} 
        alt="arrow"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      />
      <motion.img 
        className="curved-arrow-4" 
        src={curvedArrow} 
        alt="arrow"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.1 }}
      />
    </div>
  </div>
</motion.section> */}

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <PortfolioSection />
      </motion.div>


      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Testimonials />
      </motion.div>


      {/* Blog Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <BlogSlider />
      </motion.div>

      {/* Tech Section */}


      {/* industrie section */}
      <div className="container-fluid  bg-gray" >
        <div className="container" style={{ padding: '70px 0' }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="text-center mb-5">


                <motion.h2
                  className="mb-2    ts-0 text-center"
                  variants={staggerItem}
                  style={{ fontSize: '35px' }}
                >
                  Industries We Specialize In
                </motion.h2>


                <motion.p
                  className="text-18 text-center mt-2"
                  variants={staggerItem}
                >
                  For over <strong>5 years</strong>, we have worked closely with{' '}
                  <strong>50+ clients all over the world</strong> across diverse fields.
                  Thus, we understand your industry's challenges and audience expectations,
                  enabling us to quickly identify your needs and develop tailored solutions.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="row g-3 g-md-4">
            {industries.map((industry, index) => (
              <div key={index} className="col-6 col-sm-4 col-lg-3 col-xl-2">
                <div
                  className="card h-100 border-0 shadow-sm text-center p-3 p-md-4"
                  style={{
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    borderRadius: '15px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                  }}
                >
                  <div className="card-body p-0 d-flex flex-column align-items-center justify-content-center text-center">
                    <div
                      className="mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: 'clamp(50px, 8vw, 70px)',
                        height: 'clamp(50px, 8vw, 70px)',
                        backgroundColor: industry.color + '20',
                        borderRadius: '50%',
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        color: industry.color
                      }}
                    >
                      {industry.icon}
                    </div>
                    <h6
                      className="card-title mb-0 fw-semibold"
                      style={{
                        color: '#2c3e50',
                        fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)',
                        lineHeight: '1.3',
                        textAlign: 'center',
                        maxWidth: '100%'  // ensure text doesn't overflow
                      }}
                    >
                      {industry.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>



        <style jsx>{`
        @media (max-width: 575px) {
          .card {
            min-height: 120px;
          }
        }
        
        @media (min-width: 576px) and (max-width: 767px) {
          .card {
            min-height: 140px;
          }
        }
        
        @media (min-width: 768px) {
          .card {
            min-height: 160px;
          }
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
      `}</style>
      </div>

      {/* ///faq Section */}
      <section className="faq-section" id="faqs" >

        <div className="container">
          <h2 className="text-center mb-5 " style={{ fontSize: '35px' }}>FAQ's</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item custom-item mb-4 shadow-sm" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button custom-btn d-flex gap-3 align-items-center ${index !== 0 ? "collapsed" : ""
                      }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    <div className="icon-box">{faq.icon}</div>
                    <span className="question-text">{faq.question}</span>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
            <Link to="/faq" className="btn text-white =" style={{backgroundColor:"#E0902C",margin:"auto",textAlign:"center",display:"block",width:"fit-content",padding:"10px 20px",borderRadius:"5px"}}>
              View All FAQs
            </Link>

          </div>
        </div>
      </section>

      <TechSection />

    </>
  )
}

export default Home

















{/* About Section */ }
{/* <motion.section 
  className="section section-home"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={staggerContainer}
>
  <div className="container d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5">
    <motion.div
      className="w-md-50 w-100 d-flex align-items-center justify-content-center px-sm-0 px-5"
      variants={fadeInLeft}
    >
      <motion.img 
        src={aboutimage} 
        alt="Avatara Technobiz"
        variants={floatingAnimation}
        animate="animate"
        whileHover={{ 
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 }
        }}
      />
    </motion.div>
    
    <motion.div
      className="w-md-50 w-100 d-flex flex-column align-items-start gap-md-3"
      variants={fadeInRight}
    >
      <motion.p 
        className="text-18"
        variants={staggerItem}
      >
        At Avatara Technobiz , we pride ourselves on delivering tailored IT
        solutions designed to empower Small and Medium Businesses. Backed by
        a team of seasoned professionals with over 5 years of industry
        experience, we bring a wealth of knowledge and a deep understanding
        of diverse industries.
      </motion.p>
      
      <motion.p 
        className="text-18"
        variants={staggerItem}
      >
        Our commitment to innovation and excellence allows us to craft
        solutions that not only meet your business needs but also position
        you for growth and success. With a passion for problem-solving and a
        track record of delivering results, we're here to partner with you
        on your journey to a smarter, more efficient future.
      </motion.p>
      
      <motion.p 
        className="text-18"
        variants={staggerItem}
      >
        Let us transform your challenges into opportunities. Together, we
        can build IT solutions that truly make a difference.
      </motion.p>

      <motion.div
        variants={staggerItem}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/about" className="btn btn-primary icon-arrow-w m-auto m-sm-0">
          About Us
        </Link>
      </motion.div>
    </motion.div>
  </div>
</motion.section> */}


{/* 
CTA Section
<motion.section 
  className="section section-home section-cta bg-primay"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  variants={fadeInUp}
>
  <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
    <motion.div 
      className="d-flex flex-column flex-1 gap-2 text-center text-md-start"
      variants={fadeInLeft}
    >
      <motion.h2 
        className="text-white mb-0"
        variants={staggerItem}
      >
        Ready to Transform Your Business?
      </motion.h2>
      <motion.p 
        className="text-22 text-white"
        variants={staggerItem}
      >
        <b>Get in Touch for a Free Consultation</b>
      </motion.p>
    </motion.div>
    
    <motion.div
      variants={fadeInRight}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/contact" className='btn btn-black icon-cal-w'> 
        SCHEDULE A CALL 
      </Link>
    </motion.div>
  </div>
</motion.section> */}


