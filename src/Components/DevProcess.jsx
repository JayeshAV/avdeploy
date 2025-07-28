import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/DevProcess.css'; // ✅ Custom CSS file
// DevProcess.jsx
import { Link } from 'react-router-dom';

const DevProcess = () => {

  useEffect(() => {
    const boxes = document.querySelectorAll('.timeline-box');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.4 }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => {
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []);


  const steps = [{
    title: '01. Discovery & Consultation',
    desc: 'We start by understanding your unique needs and challenges. Through in-depth discussions, we assess your goals and identify areas for improvement.',
    color: '#8e44ad',
  },
  {
    title: '02. Solution Design',
    desc: 'We craft a customized IT strategy that aligns with your business objectives, combining the right technologies to deliver optimal results.',
    color: '#16a085',
  },
  {
    title: '03. Implementation',
    desc: 'Our team works seamlessly to implement the solution, ensuring minimal disruption to your operations and maximum efficiency.',
    color: '#e67e22',
  },
  {
    title: '04. Testing & Optimization',
    desc: 'We rigorously test the solution to ensure it works as intended, making any necessary adjustments to fine-tune performance.',
    color: '#2980b9',
  },
  {
    title: '05. Ongoing Support & Maintenance',
    desc: 'We provide continuous support and maintenance to ensure your systems are always running smoothly, with proactive monitoring and timely updates.',
    color: '#27ae60',
  }]

  return (
 <section className="dev-process-section py-5" >
  <div className="container">
    <h2 className="text-center mb-3 display-6"  style={{fontSize: '39px'}}> How We Work ?</h2>
      <motion.p 
           className="text-20 text-center mb-0 text-gray"
           style={{color:'gray'}}
           variants={{once:true,amount:0.3}}
         >
           <b>Our Proven Process for Success</b>
         </motion.p>
    <div className="timeline">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className={`timeline-box ${index % 2 === 0 ? 'left' : 'right'} `}
          initial={{ opacity: 0, y  : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="timeline-card bg-white shadow">
            <div
              className="timeline-icon mb-3"
              style={{
                color: step.color,fontSize:"25px"
              }}
            >
              {step.icon}
            </div>
            <h2 className=" mb-2 " style={{fontSize:'28px'}}>{step.title}</h2>
            <p className="text-muted small">{step.desc}</p>
            {step.hasButton && (
              <Link
                to="/contact"
                className="btn btn-sm mt-2"
                style={{
                  color: 'white',
                  fontWeight: '500',
                  borderRadius: '20px',
                  padding: '6px 18px',fontSize:'10px',
                  backgroundColor:'#e0a63b'
                }}
              >
                Let’s Build Together
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
)};

export default DevProcess;
