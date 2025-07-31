import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/favicon.ico";
import "../assets/css/footer.css"
import headerbg from "../assets/images/header-bg.jpg";
import { text } from "framer-motion/client";
import { Col, Container, Row } from "react-bootstrap";
import CommonButton from "./CommonButton";

const Footer = () => {
  const sectionStyle = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e0e0e0",
    backgroundColor: "#f8f9fa",
  };

  const textStyle = { fontSize: "16px", color: "#6c757d", lineHeight: "1.6", fontFamily: 'Bricolage Grotesque', textDecoration: "none" };
  const headingStyle = { color: "black", fontWeight: 600, fontSize: "18px", fontFamily: 'Bricolage Grotesque' };

  return (

    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="footer bg-gray pt-lg-3"
      style={sectionStyle}
    >
      <div className="container d-flex flex-column gap-lg-0 gap-4">
        <div
          className="footer-cta bordered-box p-md-5 d-flex flex-column align-items-center gap-3 text-center"
          style={{
            background: '#FFC107',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
            
          }}
        >
          <h2 className="text-white case-subtitle mb-0 p-0" >
            <span style={{fontSize:"25px"}}>Get a Free IT Assessment Today!</span>
          </h2>
      <div className="avia-button-wrap m-0 p-0 ">
            <CommonButton to="/contact" className=" mb-1 cta black-cta">
              SCHEDULE A CALL
            </CommonButton>
          </div>
        </div>
      </div>
      < footer className="footer bg-light pt-5"  style={{width:"100%",margin:"0%",padding:"0%"}}>

          <style>
    {`
      .footer-row {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important;
        justify-content: start !important;
      }
    `}
  </style>
       <Container style={{width:"100%",padding:"0%"}}>
          <Row className=" mb-4 footer-row" style={{width:"100%",margin:"0%",padding:"0%"}}>
            <Col xs="auto" className="d-flex align-items-start gap-2 mb-4">
              <img
                src={logo}
                alt="Avatara Technobiz"
                style={{ width: '36px', height: '36px' }}
              />
              <h4 className="fw-bold mb-0 ps-2 text-dark" style={{fontSize:'30px'}}>Avatara Technobiz</h4>
            </Col>
          </Row>

          <style>
    {`
      .footer-row-full {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        display: flex !important; 
        justify-content: space-between !important;
      }
    `}
  </style>

<Row className="text-start footer-main-width footer-row-full">
  {/* Column 1 – Our Locations */}
  <Col xs={12} md={6} lg={2} className="p-2">
    <h5 className="fw-bold mb-3">INDIA</h5>
    <div style={{ color: "#6c757d", fontSize: "14px" }}>
      <a
        href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407758,72.8817269,17z"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#6c757d" }}
      >
        14th - 5th Floor<br />
        Madhuram Arcade 2 ,<br />
        Near Madhuram Circle<br />
        Dindoli , Surat
      </a>
    </div>
  </Col>

  {/* Column 2 – USA Location */}
  <Col xs={12} md={6} lg={2} className="p-2">
    <h5 className="fw-bold mb-3" style={{fontSize:"22px"}}>USA</h5>
    <div style={{ color: "#6c757d", fontSize: "14px" }}>
      <a
        href="https://www.google.com/maps/place/885+Gold+Hill+Rd+%23705,+Fort+Mill"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#6c757d" }}
      >
        885 Gold Hill<br />
        Rd #705,<br />
        Fort Mill,<br />
        SC 29708, USA
      </a>
    </div>
  </Col>

  {/* Column 2 – Services */}
  <Col xs={12} md={6} lg={3} className="p-2">
    <h5 className="fw-bold mb-3" style={{fontSize:"22px"}}>Services</h5>
    <ul className="list-unstyled text-muted mb-0">
      <li style={{ color: "gray", fontSize: "15px" }}>Web Development</li>
      <li style={{ color: "gray", fontSize: "15px" }}>Mobile App</li>
      <li style={{ color: "gray", fontSize: "15px" }}>Cloud Solutions</li>
      <li style={{ color: "gray", fontSize: "15px" }}>Digital Marketing</li>
      <li style={{ color: "gray", fontSize: "15px" }}>Ecommerce</li>
    </ul>
  </Col>

  {/* Column 3 – Get in Touch */}
  <Col xs={12} md={6} lg={3} className="p-2">
    <h5 className="fw-bold mb-3" style={{fontSize:"22px"}}>Get in Touch</h5>
    <p className="mb-1">
      <a href="mailto:avataratechnobiz@gmail.com" style={{ textDecoration: 'none', color: '#6c757d', fontSize: '15px' }}>
        <i className="fas fa-envelope" style={{ color: "gray", fontSize: "15px",marginRight:"5px" }}></i>  avataratechnobiz@gmail.com
      </a>
    </p>
    <p className="mb-1">
      <a href="tel:+919898442256" style={{ textDecoration: 'none', color: '#6c757d', color: "gray", fontSize: "15px"}}>
        <i className="fas fa-phone" style={{ color: "gray", fontSize: "15px",marginRight:'5px' }}></i>  +91 9898442256
      </a>
    </p>
    <div className="d-flex gap-3 mt-2">
      <a href="https://www.linkedin.com/company/avatara-technobiz-llp/" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "17px" }}>
        <i className="fab fa-linkedin-in" style={{ color: "gray", fontSize: "17px" }} ></i>
      </a>  
      <a href="https://www.instagram.com/avataratechnobiz/" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "17px" }}>
        <i className="fab fa-instagram" style={{ color: "gray", fontSize: "17px" }} ></i>
      </a>
      <a href="https://wa.me/919898442256" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "17px" }}>
        <i className="fab fa-whatsapp" style={{ color: "gray", fontSize: "17px" }}></i>
      </a>
    </div>
  </Col>

  {/* Column 4 – Quick Links */}
  <Col xs={12} md={6} lg={2}>
    <h5 className="fw-bold mb-3" style={{fontSize:"22px"}}>Quick Links</h5>
    <ul className="list-unstyled d-flex flex-column gap-2">
      <li>
        <Link to="/portfolio" className="text-decoration-none text-dark text-muted" style={{ color: "gray", fontSize: "16px" }}>Latest Projects</Link>
      </li>
      <li>
        <Link to="/why-us" className="text-decoration-none text-dark text-muted "style={{ color: "gray", fontSize: "16px" }}>Services</Link>
      </li>
      <li>
        <Link to="/about" className="text-decoration-none text-dark text-muted "style={{ color: "gray", fontSize: "16px" }}>About Us</Link>
      </li>
      <li>
        <Link to="/contact" className="text-decoration-none text-dark text-muted"style={{ color: "gray", fontSize: "16px" }}>Contact</Link>
      </li>
    </ul>
  </Col>
</Row>

        
        </Container>
      </footer>
  <div className="text-center py-4 border-top mt-4">
            <p className="mb-0" style={{fontSize: "14px", color: "#6c757d"}}>
              Copyright © 2025 <Link to="/" className="text-decoration-none" style={{color: "#6c757d"}}>Avatara Technobiz</Link> . All rights reserved.
            </p>
          </div>
    </motion.footer>
  );
};

export default Footer;