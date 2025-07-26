import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Portfolio from '../Components/PortfolioSection';

import headerbg from "../assets/images/header-bg.jpg";
import aboutImg from '../assets/images/img-about.svg';
import iconBrain from '../assets/images/icon-96--brain.svg';
import iconTarget from '../assets/images/icon-96--target.svg';
import iconUser from '../assets/images/icon-96--user.svg';
import iconCheck from '../assets/images/icon-96--check.svg';
import iconUsers from '../assets/images/icon-96--users.svg';
import PortfolioSection from '../Components/PortfolioSection';
import Testimonials from '../Components/Testimonials';
import BlogSlider from '../Components/Blogslider';
import TechSection from '../Components/TechSection';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const values = [
  {
    icon: "💡", // Innovation
    color: "#ff6f00",
    title: "Innovation",
    desc: "We embrace the latest technologies and continuously evolve to provide forward-thinking solutions that drive business success."
  },
  {
    icon: "🤝", // Integrity
    color: "#00796b",
    title: "Integrity",
    desc: "Trust is the foundation of our business. We are transparent, ethical, and accountable in everything we do."
  },
  {
    icon: "🎯", // Customer-Centric
    color: "#512da8",
    title: "Customer-Centric Approach",
    desc: "Our clients are at the heart of our operations. We prioritize their needs, ensuring tailored solutions and exceptional service."
  },
  {
    icon: "🏆", // Excellence
    color: "#d32f2f",
    title: "Excellence",
    desc: "We strive for the highest quality in our services, products, and customer experience, exceeding expectations at every step."
  },
  {
    icon: "🤝", // Collaboration
    color: "#1976d2",
    title: "Collaboration & Teamwork",
    desc: "Great solutions come from great teamwork. We work closely with our clients and partners to create seamless IT experiences."
  }
];


  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="section-hero"
        style={sectionStyle}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column">
            <h1 className="text-center">Innovate. Optimize. Grow. <br />Giving your Business a Digital Edge</h1>
            <p className="text-22 text-white text-center">
              Our team of skilled IT specialists combines innovation with technical expertise to deliver customized, future-ready solutions.
              From cloud services to app development and IT consulting, we empower businesses with the latest technology for efficiency and success.
            </p>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="section section-home"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container d-flex flex-column gap-4 gap-md-5">
          <h2 className="mw-800px m-auto mb-2    ts-0 text-center">Empowering Businesses with Smart, Secure, and Scalable IT Solutions</h2>

          <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5">
            <motion.div
              className="w-md-50 w-100 d-flex align-items-center justify-content-center px-sm-0 px-5"
              variants={fadeLeft}
            >
              <img src={aboutImg} alt="Avatara Technobiz" />
            </motion.div>

            <motion.div
              className="w-md-50 w-100 d-flex flex-column align-items-start gap-md-3"
              variants={fadeRight}
            >
              <p className="text-18">
                Avatara Technobiz is a leading IT solutions provider, dedicated to delivering innovative technology services that help businesses
                thrive in the digital age. With a team of experienced professionals, we specialize in providing cutting-edge software development,
                cloud computing, and IT consulting services tailored to meet the unique needs of our clients.
              </p>
              <Link to="contact" className='btn btn-primary icon-arrow-w m-auto m-sm-0'>Contact Us</Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Values Section */}
      <motion.section
        className="section section-home bg-gray"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mw-800px d-flex flex-column gap-4 gap-md-5">
          <motion.div className="d-flex flex-column mb-5" variants={fadeUp}>
            <h2 className="text-center    ts-0" >Our Mission</h2>
            <p className="text-22 text-center">
              We empower businesses with reliable, scalable, and cost-effective IT solutions that drive growth, enhance security,
              and improve operational efficiency. Our mission is to bridge the gap between technology and business success through
              innovative strategies and world-class expertise.
            </p>
          </motion.div>

          <motion.div className="d-flex flex-column mb-2" variants={fadeUp}>
            <h2 className="text-center    ts-0">Our Values</h2>
            <p className="text-22 text-center">
              At Avatara Technobiz, our core values define who we are and guide every decision we make. We are committed to delivering
              exceptional IT solutions with integrity, innovation, and customer focus.
            </p>
          </motion.div>

          <div className="values d-flex flex-column gap-4">
            {values.map((val, index) => (
              <motion.div
                key={index}
                className="d-flex flex-row align-items-center gap-3 gap-md-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
               <div
          className="mb-3 p-5 d-flex align-items-center justify-content-center"
          style={{
            width: 'clamp(50px, 8vw, 70px)',
            height: 'clamp(50px, 8vw, 70px)',
            backgroundColor: val.color + '20',
            borderRadius: '50%',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: val.color
          }}
        >
          {val.icon}
        </div>
                <div className="d-flex flex-column gap-1">
                  <h4 className="mb-0">{val.title}</h4>
                  <p className="text-18">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

            <PortfolioSection />
      <Testimonials />
      <BlogSlider />
      <div style={{paddingBottom:"130px"}}>
        <TechSection />
        </div>
    </>
  );
};

export default About;
