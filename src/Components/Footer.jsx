import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/favicon.ico";

import headerbg from "../assets/images/header-bg.jpg";
import { text } from "framer-motion/client";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const sectionStyle = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e0e0e0",
    backgroundColor: "#f8f9fa",
  };


  // Increased font sizes
  const textStyle = { fontSize: "16px", color: "#6c757d", lineHeight: "1.6", fontFamily: 'Bricolage Grotesque', textDecoration: "none" };
  const headingStyle = { color: "black", fontWeight: 600, fontSize: "18px", fontFamily: 'Bricolage Grotesque' };

  return (
    //     <motion.footer
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       viewport={{ once: true }}
    //       className="footer bg-gray pt-lg-3"
    //       style={sectionStyle}
    //     >
    //       <div className="container d-flex flex-column gap-lg-0 gap-4">
    //         <div
    //           className="footer-cta bordered-box p-md-5 d-flex flex-column align-items-center gap-3 text-center"
    //           style={{background: '#e0a63b',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat' }}
    //         >
    //           <h2 className="text-white ts-4-4-15 mb-0" style={{ fontSize: "26px" }}>
    //             Get a Free IT Assessment Today!
    //           </h2> 
    //           <a
    //             href="tel:+919898442256"
    //             className="btn bg-black text-white  w-sm-auto"
    //             style={{ maxWidth: "260px", fontSize: "15px" }}
    //           >
    //             SCHEDULE A CALL <i className="fas fa-phone" style={{color:'white',fontSize:'20px'}}></i>

    //           </a>  
    //         </div>

    //            <motion.footer
    //         initial={{ opacity: 0, y: 30 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6 }}
    //         viewport={{ once: true }}
    //         className="footer py-5"
    //         style={{
    //           backgroundColor: "",
    //         }}
    //       >
    //         <div className="container">
    //           <div className="row gy-4">
    //             <div className="col-md-3">
    //               <h5 style={headingStyle}>Head Office</h5>
    //               <p style={textStyle}>
    //                 <Link style={{textDecoration:"none",color:"#6c757d"}} to={'https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407758,72.8817269,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D'}>
    //                 Office no - 14th, 5th Floor, Madhuram Arcade-2, near Madhuram circle Dindoli, Surat , Gujarat 394210
    //                 </Link>
    //               </p>
    //                   <p style={textStyle}>
    //                 <Link style={{textDecoration:"none",color:"#6c757d"}} to={'https://www.google.com/maps/place/885+Gold+Hill+Rd+%23705,+Fort+Mill,+SC+29708,+USA/@35.05957,-80.964227,16z/data=!4m5!3m4!1s0x88569ac9ee2c0c83:0xba3f1be750182c21!8m2!3d35.0595698!4d-80.964122?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D'}>
    //                USA
    // 885 Gold Hill
    // Rd #705,
    // Fort Mill,
    // SC 29708, USA
    //                 </Link>
    //               </p>
    //               <p style={textStyle}>📧 avataratechnobiz@gmail.com</p>
    //               <p style={textStyle}>📞 +91 9898442256</p>
    //               <div className="d-flex gap-3 mt-2">
    //                 <a href="https://www.linkedin.com/company/avatara-technobiz-llp/" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "18px" }}>
    //                   <i className="fab fa-linkedin-in"></i>
    //                 </a>
    //                 <a href="https://www.instagram.com/avataratechnobiz/" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "18px" }}>
    //                   <i className="fab fa-instagram"></i>
    //                 </a>
    //                 <a href="https://wa.me/919898442256" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "18px" }}>
    //                   <i className="fab fa-whatsapp"></i>
    //                 </a>
    //               </div>
    //             </div>

    //             <div className="col-md-3">
    //               <h5 style={headingStyle}>Services</h5>
    //               <ul className="list-unstyled">
    //                 {[
    //                   "Web Development",
    //                   "Mobile App",
    //                   "Cloud Solutions",
    //                   "Digital Marketing",
    //                   "Ecommerce",
    //                 ].map((item, i) => (
    //                   <li key={i}>
    //                     <Link to={`/contact`} style={textStyle}>
    //                       ▸ {item}
    //                     </Link>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>

    //             <div className="col-md-3">
    //               <h5 style={headingStyle}>Solutions</h5>
    //               <ul className="list-unstyled">
    //                 {[
    //                   "Full-Stack Development",
    //                   "Frontend Development",
    //                   "Backend Development",
    //                   "SaaS Platforms",
    //                   "API Integration",
    //                 ].map((sol, i) => (
    //                   <li key={i}>
    //                     <span style={textStyle}>▸ {sol}</span>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>

    //             <div className="col-md-3">
    //               <h5 style={headingStyle}>Company</h5>
    //               <ul className="list-unstyled">
    //                 {[
    //                   { label: "About Us", path: "/about" },
    //                   { label: "Our Team", path: "/team" },
    //                   { label: "Careers", path: "/career" },
    //                   { label: "Contact", path: "/contact" },
    //                   { label: "Blog", path: "/blog" },
    //                 ].map((link, i) => (
    //                   <li key={i}>
    //                     <Link to={link.path} style={textStyle}>
    //                       ▸ {link.label}
    //                     </Link>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>

    //           <div
    //             className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 mt-4 border-top"
    //             style={{ borderColor: "#ffffff33" }}
    //           >
    //             <p className="mb-2 mb-md-0" style={{ fontSize: "14px",fontFamily:'Bricolage Grotesque' }}>
    //               © 2025 <strong>Avatara Technobiz</strong>. All rights reserved.
    //             </p>

    //           </div>
    //         </div>
    //       </motion.footer>
    //       </div>
    //     </motion.footer>




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
            background: '#e0a63b',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2 className="text-white ts-4-4-15 mb-0" style={{ fontSize: "26px" }}>
            Get a Free IT Assessment Today!
          </h2>
          <a
            href="tel:+919898442256"
            className="btn bg-black text-white  w-sm-auto"
            style={{ maxWidth: "260px", fontSize: "15px" }}
          >
            SCHEDULE A CALL <i className="fas fa-phone" style={{ color: 'white', fontSize: '20px' }}></i>

          </a>
        </div>
      </div>
      < footer className="footer bg-light pt-5">
        <Container>
          {/* 🔶 Row 1: Logo + Name (Centered) */}
          <Row className="justify-content-start mb-4">
            <Col xs="auto" className="d-flex align-items-center gap-2">
              <img
                src={logo}
                alt="Avatara Technobiz"
                style={{ width: '36px', height: '36px' }}
              />
              <h4 className="fw-bold mb-0 text-dark">Avatara Technobiz</h4>
            </Col>
          </Row>

          {/* 🔷 Row 2: 4 Columns in One Row */}
          <Row className="gy-4 text-start">
            {/* Column 1 – Locations */}
            <Col xs={12} md={6} lg={3}>
              <h5 className="fw-bold mb-3">Our Locations</h5>
              <p style={{ color: "#6c757d", marginBottom: "10px" }}>
                <a
                  href="https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407758,72.8817269,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#6c757d" }}
                >
                  14th, 5th Floor, Madhuram Arcade-2,<br />
                  near Madhuram Circle, Dindoli, Surat, Gujarat 394210
                </a>
              </p>
              <p style={{ color: "#6c757d", marginBottom: 0 }}>
                <a
                  href="https://www.google.com/maps/place/885+Gold+Hill+Rd+%23705,+Fort+Mill"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#6c757d" }}
                >
                  885 Gold Hill Rd #705,<br />
                  Fort Mill, SC 29708, USA
                </a>
              </p>
            </Col>

            {/* Column 2 – Services */}
            <Col xs={12} md={6} lg={3}>
              <h5 className="fw-bold mb-3">Services</h5>
              <ul className="list-unstyled text-muted mb-0">
                <li>▸ Web Development</li>
                <li>▸ Mobile App</li>
                <li>▸ Cloud Solutions</li>
                <li>▸ Digital Marketing</li>
                <li>▸ Ecommerce</li>
              </ul>
            </Col>

            {/* Column 3 – Get in Touch */}
            <Col xs={12} md={6} lg={3}>
              <h5 className="fw-bold mb-3">Get in Touch</h5>
              <p className="mb-1">
                <a href="mailto:avataratechnobiz@gmail.com" style={{ textDecoration: 'none', color: '#6c757d' }}>
                  📧 avataratechnobiz@gmail.com
                </a>
              </p>
              <p className="mb-1">
                <a href="tel:+919898442256" style={{ textDecoration: 'none', color: '#6c757d' }}>
                  📞 +91 9898442256
                </a>
              </p>
              <div className="d-flex gap-3 mt-2">
                <a href="https://www.linkedin.com/company/avatara-technobiz-llp/" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "18px" }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/avataratechnobiz/" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "18px" }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/919898442256" target="_blank" rel="noopener noreferrer" style={{ color: "gray", fontSize: "18px" }}>
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </Col>

            {/* Column 4 – Quick Links */}
            <Col xs={12} md={6} lg={3}>
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <Link to="/portfolio" className="text-decoration-none text-dark">Latest Projects</Link>
                </li>
                <li>
                  <Link to="/why-us" className="text-decoration-none text-dark">Services</Link>
                </li>
                <li>
                  <Link to="/about" className="text-decoration-none text-dark">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-decoration-none text-dark">Contact</Link>
                </li>
              </ul>
            </Col>
          </Row>

          {/* 🔚 Copyright */}
          <div className="text-center py-4 border-top mt-4">
            <p className="mb-0">
              © 2025 <Link to="/" className="text-decoration-none">Avatara Technobiz</Link>. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>

    </motion.footer>
  );
};

export default Footer;