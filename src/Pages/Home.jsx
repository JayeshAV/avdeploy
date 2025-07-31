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
import HeroSection from '../Components/HeroSection';
import WhyChoose from '../Components/WhyChoose';
import Offer from '../Components/Offer';
import Discuss from '../Components/Discuss';
import CompanyLogos from '../Components/CompanyLogos';
import CommonButton from '../Components/CommonButton';



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
    question: "How do you handle scaling for high traffic web applications?",
    answer:
      "We use cloud-based auto-scaling, caching, load balancing, and microservices to scale web apps efficiently.",
  },
  {
    question: "How do you integrate third-party services into a web app?",
    answer:
      "We integrate services like payment gateways, email APIs, CRMs, and analytics tools using secure APIs.",
  },
  {
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

    const [activeIndex, setActiveIndex] = useState(null);
 const [openIndex, setOpenIndex] = useState(null); // 👈 This line fixes the error

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }; 

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

    <HeroSection />
    <CompanyLogos />
  <WhyChoose />
<Offer />
<Discuss />


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <PortfolioSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Testimonials />
      </motion.div>

       <section className="avia-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="section-heading">
            <h2 className="title-white">Ready to Transform Your Business?</h2>
          </div>
          <div className="sub-heading">
            <p className='sub-titles-text'>
              Get free consultation and let us know your project idea to turn it into an amazing digital product.
            </p>
          </div>
          <div className="avia-button-wrap">
            <CommonButton to="/contact" className="cta black-cta">
              SCHEDULE A CALL
            </CommonButton>
          </div>
        </div>
      </div>
    </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <BlogSlider />
      </motion.div>

    <div className="container-fluid bg-gray" style={{marginTop:"80px"}} >
  <div className="container py-5 p-0 " style={{maxWidth:'1400px'}}>
    <div className="row justify-content-center industrial-row-full" >
      <div className="col-12 col-lg-10 col-xl-12">
        <div className="text-center mb-5">
          <motion.h2
            className="mb-2 ts-0 text-center case-heading "
            variants={staggerItem}
       
          >
            Industries We Specialize In
          </motion.h2>
          <motion.p className="text-center mt-2  case-subtitle mx-auto"  variants={staggerItem}>
            For over 5 years, we have worked closely with
            50+ clients all over the world across diverse fields.
            Thus, we understand your industry's challenges and audience expectations,
            enabling us to quickly identify your needs and develop tailored solutions.
          </motion.p>
        </div>
      </div>
    </div>

          <style>
    {`
      .industrial-row-full {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
        justify-content: space-evenly !important;
      }
    `}
  </style>
    <div className="row justify-content-center g-3 g-md-4 industrial-row-full">
      {industries.map((industry, index) => (
        <div key={index} className="col-5 col-sm-4 col-lg-3 col-xl-2 d-flex justify-content-center p-0">
          <div
            className="card h-100 border-0 shadow-sm text-center  m-0 p-md-4.5"
            style={{
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              borderRadius: '15px',
              width: '100%',
              maxWidth: '220px',
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
            <div className="card-body p-0 d-flex flex-column align-items-center justify-content-center">
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  backgroundColor: industry.color + '20',
                  borderRadius: '50%',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: industry.color,
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
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
    }
  `}</style>
</div>

     <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQ`S</h2>

        <div className="faq-items p-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <Link to="/faq" className="btn view-all-faq">
          View All FAQs
        </Link>
      </div>
    </section>

      <TechSection />
    </>
  )
}
export default Home





