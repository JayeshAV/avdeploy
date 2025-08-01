import React, { useState } from "react";
import offer1 from "../assets/images/offer.png";
import offer2 from "../assets/images/offer2.avif";
import offer3 from "../assets/images/offer3.jpg";

const Offer = () => {
 const [hoveredCard, setHoveredCard] = useState(null);


  const containerStyle = {
    width: "100%",
    maxWidth: "580px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  const cardBaseStyle = {
    background: "#355690",
    padding: "24px 30px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    transition: "transform 0.3s ease",
    color: "white",
    
  };

  const titleStyle = {
    fontSize: "22px",
    marginBottom: "10px",
    fontWeight:"600"
  };

  const paraStyle = {
    fontSize: "15px",
    lineHeight: "1.7",
  };

  const getCardStyle = (type) => ({
    ...cardBaseStyle,
    borderLeft:
      type === "cloud"
        ? "8px solid #00d4ff"
        : type === "managed"
        ? "8px solid #00e676"
        : "8px solid #ffca28",
    transform: hoveredCard === type ? "translateY(-5px)" : "none",
  });

  const pageStyle = {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    color: "white",
  
    borderRadius:"10px"
  };

  return (
    <div className="why-us-wrapper ">
      <div className="why-us-title">
        <h2>
          What <span style={{ color: "#E0A63B" }}>Avatara</span> offer ?
        </h2>
        < p className="case-subtitle w-100" >
Tailored IT Solutions That Drive Results
At Avatara Technobiz, we specialize in delivering smart, scalable, and secure IT services for small and medium businesses. From software development to cloud and cybersecurity, our expert team helps you streamline operations and accelerate growth.
 </p>
      </div>

      {/* Service Group 1 */}
<div className="why-us-row reverse">
        {/* <div className="why-us-text">
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
        </div> */}

          <div style={pageStyle}>
      <div style={containerStyle}>
        
        <div
          style={getCardStyle("cloud")}
          onMouseEnter={() => setHoveredCard("cloud")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>Custom Software Development</h2>
          <p style={paraStyle}>
            Bespoke software solutions tailored to your business and industry needs.
          </p>
        </div>

        <div
          style={getCardStyle("managed")}
          onMouseEnter={() => setHoveredCard("managed")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>App Development</h2>
          <p style={paraStyle}>
           Innovative mobile and web application development to meet modern business demands and enhance user engagement.
          </p>
        </div>

        <div
          style={getCardStyle("backup")}
          onMouseEnter={() => setHoveredCard("backup")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>Website Development & SEO</h2>
          <p style={paraStyle}>
          Custom website design with integrated SEO strategies to improve online visibility and drive traffic.
          </p>
        </div>
      </div>
    </div>
        <div className="why-us-img">
          <img
            src={offer2}
            alt="Software Development"
          />
        </div>
      </div>

      {/* Service Group 2 */}
      <div className="why-us-row ">
        {/* <div className="why-us-text">
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
        </div> */}
          <div style={pageStyle}>
      <div style={containerStyle}>
        <div
          style={getCardStyle("cloud")}
          onMouseEnter={() => setHoveredCard("cloud")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>Cloud Solutions</h2>
          <p style={paraStyle}>
            Secure and scalable cloud infrastructure to streamline operations,
            enhance collaboration, and reduce costs.
          </p>
        </div>

        <div
          style={getCardStyle("managed")}
          onMouseEnter={() => setHoveredCard("managed")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>Managed IT Services</h2>
          <p style={paraStyle}>
            24/7 monitoring and support to ensure your systems are always
            running smoothly and securely.
          </p>
        </div>

        <div
          style={getCardStyle("backup")}
          onMouseEnter={() => setHoveredCard("backup")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>Data Backup & Recovery</h2>
          <p style={paraStyle}>
            Reliable data backup solutions and recovery strategies to keep your
            business safe from unexpected disruptions.
          </p>
        </div>
      </div>
    </div>
        <div className="why-us-img">
          <img src={offer1} alt="Cloud Solutions" />
        </div>
      </div>


      

      {/* Service Group 3 */}
      <div className="why-us-row reverse">
       


         <div style={pageStyle}>
      <div style={containerStyle}>
        <div
          style={getCardStyle("cloud")}
          onMouseEnter={() => setHoveredCard("cloud")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>IT Consulting</h2>
          <p style={paraStyle}>
           Expert advice to help you make informed IT decisions that drive business efficiency and growth.
          </p>
        </div>

        <div
          style={getCardStyle("managed")}
          onMouseEnter={() => setHoveredCard("managed")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>Gen AI Chatbot Solutionss</h2>
          <p style={paraStyle}>
            AI-powered chatbot solutions designed to enhance customer interactions, automate support, and provide intelligent, real-time assistance.
          </p>
        </div>

        <div
          style={getCardStyle("backup")}
          onMouseEnter={() => setHoveredCard("backup")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h2 style={titleStyle}>AI Agents</h2>
          <p style={paraStyle}>
           Intelligent AI agents that automate tasks, optimize workflows, and enhance decision-making for seamless business operations.
          </p>
        </div>
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
