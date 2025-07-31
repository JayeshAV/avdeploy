import React from "react";
import offer1 from "../assets/images/offer.png";
import offer2 from "../assets/images/offer2.avif";
import offer3 from "../assets/images/offer3.jpg";


const Offer = () => {
  return (
    <div className="why-us-wrapper ">
      <div className="why-us-title">
        <h2>
          What <span style={{ color: "#FFC107" }}>Avatara</span> offer ?
        </h2>
        < p className="case-subtitle w-100" >
Tailored IT Solutions That Drive Results
At Avatara Technobiz, we specialize in delivering smart, scalable, and secure IT services for small and medium businesses. From software development to cloud and cybersecurity, our expert team helps you streamline operations and accelerate growth.
 </p>
      </div>

      {/* Service Group 1 */}
      <div className="why-us-row">
        <div className="why-us-text">
          <div className="why-box">
            <h3>Cloud Solutions</h3>
            <p>Secure and scalable cloud infrastructure to streamline operations, enhance collaboration, and reduce costs.</p>
          </div>
          <div className="why-box">
            <h3>Managed IT Services</h3>
            <p>24/7 monitoring and support to ensure your systems are always running smoothly and securely.</p>
          </div>
          <div className="why-box">
            <h3>Data Backup & Recovery</h3>
            <p>Reliable data backup solutions and recovery strategies to keep your business safe from unexpected disruptions.</p>
          </div>
        </div>
        <div className="why-us-img">
          <img src={offer1} alt="Cloud Solutions" />
        </div>
      </div>

      {/* Service Group 2 */}
      <div className="why-us-row reverse">
        <div className="why-us-text">
          <div className="why-box">
            <h3>Custom Software Development</h3>
            <p>Bespoke software solutions tailored to your business and industry needs.</p>
          </div>
          <div className="why-box">
            <h3>App Development</h3>
            <p>Innovative mobile and web application development to meet modern business demands and enhance user engagement.</p>
          </div>
          <div className="why-box">
            <h3>Website Development & SEO</h3>
            <p>Custom website design with integrated SEO strategies to improve online visibility and drive traffic.</p>
          </div>
        </div>
        <div className="why-us-img">
          <img
            src={offer2}
            alt="Software Development"
          />
        </div>
      </div>

      {/* Service Group 3 */}
      <div className="why-us-row">
        <div className="why-us-text">
          <div className="why-box">
            <h3>IT Consulting</h3>
            <p>Expert advice to help you make informed IT decisions that drive business efficiency and growth.</p>
          </div>
          <div className="why-box">
            <h3>Gen AI Chatbot Solutions</h3>
            <p>AI-powered chatbot solutions designed to enhance customer interactions, automate support, and provide intelligent, real-time assistance.</p>
          </div>
          <div className="why-box">
            <h3>AI Agents</h3>
            <p>Intelligent AI agents that automate tasks, optimize workflows, and enhance decision-making for seamless business operations.</p>
          </div>
        </div>
        <div className="why-us-img">
          <img
            src={offer3}
            alt="IT Consulting"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
