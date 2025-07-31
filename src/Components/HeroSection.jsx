import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import bgimage from "../assets/images/hero.webp"

const TopRatedCompany = () => {

  const headlines = [
  "Digital Innovation ",
  "Business Growth",
  "Scalable Solutions",
  "Smart Technology",
  "Agile Transformation",
  "Cloud-Driven Strategy"
];
  
 const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
  <section
  className="hero-section"
  style={{
    backgroundImage: `linear-gradient(to right, #383838 0%, rgba(255, 255, 255, 0) 100%), url(${bgimage})`
  }}
>

      <div className="container">
        <div className="hero-left">
           <div className="headline-wrapper">
   <h1 className="headline-text highlight">
     <span>Empowering </span>
  <AnimatePresence mode="wait">
    
    <motion.span
      key={headlines[index]}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96], // smooth flick
      }}
      className="inline-block" // To prevent layout shift
    >
      {headlines[index]}
    </motion.span>
  </AnimatePresence>
  <br />
  <span style={{color:"white"}}>with a Leading Software Company</span>
</h1>
          <p>
           We are a future-focused software company delivering intelligent, scalable, and secure solutions that grow with your vision. From concept to launch, we turn ideas into high-performance technology that drives real business impact.
          </p>
          <button className="schedule-btn">Schedule A Call</button>
          <div className="stats">
            <div className="stat-box">
              <h3>5+</h3>
              <p>Year of Excellence</p>
            </div>
             <div className="stat-box">
              <h3>50+</h3>
              <p>Served Clients</p>
            </div>
            <div className="stat-box">
              <h3>200+</h3>
              <p>Tech Developers</p>
            </div>
            <div className="stat-box">
              <h3>ISO 27001</h3>
              <p>Certified Company</p>
            </div>
           
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TopRatedCompany;
