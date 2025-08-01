import React from 'react'
import headerbg from "../assets/images/header-bg.jpg";
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaHeadset, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Testimonials from '../Components/Testimonials';

const Contact = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
      subject: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('message', values.subject);

        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbztaiLD472ITPwg7jlNMBO30zul8cj_fp5fvybeRD3_-fceaH2mLdoJahU5wQJldf29hA/exec",
          {
            method: "POST",
            body: formData,
            mode: 'no-cors'
          }
        );

        toast.success('Form submitted successfully!');
        resetForm();
      } catch (error) {
        toast.error('Error submitting form');
        console.error('Error:', error);
      }
    }
  });


   const fadeUp = {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          };  
          
  return (
    <>
      
         
                      <motion.section
                                className="section-hero"
                                style={sectionStyle}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                              >
                                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
                                  <div className="hero-content text-center text-white">
                                    <motion.h2 
                                      className="display-4 fw-bold mb-3"
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.2 }}
                                    >
                                   Contact Us
                                    </motion.h2>
                                    <motion.p
                                      className="fs-5 mx-auto"
                                      style={{ maxWidth: '600px' }}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.4 }}
                                    >
                                    Get answer to your questions about our sales, services, and support.
                                    </motion.p>
                                  </div>
                                </div>
                              </motion.section>
          

      <section className=' container m-0 p-0 mx-auto bg-transparent' style={{ overflowX: 'hidden' }}>
        <Container className='m-0 p-0' style={{ 
          fontFamily: "'Poppins', sans-serif",
          width: '1400px',
          boxShadow:"none"
        }}>
          <Row className="mb-5 text-center">
            <Col>
              <h1 className='case-heading'>Get in Touch</h1>
              <p className='case-subtitle mx-auto'>We'd love to hear about your project!</p>
            </Col>
          </Row>

          <Row className="g-4 mb-5" style={{backgroundColor:"none", boxShadow:"none"}}>
            {/* India Office */}
            <Col xs={12} md={6}>
              <Card style={{ 
                border: 'none', 
                borderRadius: '15px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%'
              }}>
                <Card.Body style={{ padding: '20px' }}>
                  <Link style={{textDecoration:"none",color:"#6c757d"}} to={'https://www.google.com/maps/place/Avatara+Technobiz+LLP/@21.1407758,72.8817269,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0515a0f81fa81:0x4847daa352709464!8m2!3d21.1407758!4d72.8843018!16s%2Fg%2F11wtdy2fs9?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D'}>
                    <div style={{ 
                      backgroundColor: '#f0f7ff', 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginBottom: '15px'
                    }}>
                      <FaMapMarkerAlt style={{ color: 'black', fontSize: '1.2rem' }} />
                    </div>
                    <h4 style={{ color: 'black', marginBottom: '15px', fontSize: '1.2rem' }}>India (HQ)</h4>
                    <p style={{ color: '#555', marginBottom: '20px', fontSize: '0.9rem' }}>
                      Office No. 14, 5th Floor, Madhuram Arcade-2,<br />
                      Near Madhuram Circle, Dindoli,<br />
                      Surat, Gujarat – 394210
                    </p>
                  </Link>
                  <a 
                    href="tel:+919898442256" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: 'black',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}
                  >
                    📞 +91 9898442256
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card style={{ 
                border: 'none', 
                borderRadius: '15px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: '100%'
              }}>
                <Card.Body style={{ padding: '20px' }}>
                  <Link style={{textDecoration:"none",color:"#6c757d"}} to={'https://www.google.com/maps/place/885+Gold+Hill+Rd+%23705,+Fort+Mill,+SC+29708,+USA/@35.05957,-80.964227,16z/data=!4m5!3m4!1s0x88569ac9ee2c0c83:0xba3f1be750182c21!8m2!3d35.0595698!4d-80.964122?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D'}>
                    <div style={{ 
                      backgroundColor: '#f0f7ff', 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginBottom: '15px'
                    }}>
                      <FaMapMarkerAlt style={{ color: 'black', fontSize: '1.2rem' }} />
                    </div>
                    <h4 style={{ color: 'black', marginBottom: '15px', fontSize: '1.2rem' }}>USA Office</h4>
                    <p style={{ color: '#555', marginBottom: '20px', fontSize: '0.9rem' }}>
                      885 Gold Hill Rd #705,<br />
                      Fort Mill, SC 29708, USA
                    </p>
                  </Link>
                  <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.8rem' }}>
                    <FaClock style={{ marginRight: '8px' }} /> EST Business Hours
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4">
            <Col xs={12} md={7}>
              <Card style={{ 
                border: 'none', 
                borderRadius: '15px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                padding: '20px'
              }}>
                <h3 style={{ color: 'black', marginBottom: '20px', fontSize: '1.3rem' }}>Send Us a Message</h3>
                <form onSubmit={formik.handleSubmit}>
                  <Row className="mb-3">
                    {/* Name Field */}
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                      <Form.Control 
                        name="name"
                        placeholder="Your Name*" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                        style={{ 
                          padding: '12px 15px', 
                          borderRadius: '10px', 
                          border: '1px solid #ddd',
                          marginBottom: '5px',
                          fontSize: '0.9rem'
                        }} 
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: 'red', fontSize: '0.75rem', marginBottom: '10px' }}>
                          {formik.errors.name}
                        </div>
                      ) : <div style={{ height: '20px', marginBottom: '10px' }}></div>}
                    </Col>
                    
                    <Col xs={12} md={6}>
                      <Form.Control 
                        name="email"
                        placeholder="Email Address*" 
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                        style={{ 
                          padding: '12px 15px', 
                          borderRadius: '10px', 
                          border: '1px solid #ddd',
                          marginBottom: '5px',
                          fontSize: '0.9rem'
                        }} 
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div style={{ color: 'red', fontSize: '0.75rem', marginBottom: '10px' }}>
                          {formik.errors.email}
                        </div>
                      ) : <div style={{ height: '20px', marginBottom: '10px' }}></div>}
                    </Col>
                  </Row>

                  <Form.Control 
                    name="phone"
                    placeholder="Phone Number*" 
                    type="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    isInvalid={formik.touched.phone && !!formik.errors.phone}
                    style={{ 
                      padding: '12px 15px', 
                      borderRadius: '10px', 
                      border: '1px solid #ddd',
                      marginBottom: '5px',
                      fontSize: '0.9rem'
                    }} 
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div style={{ color: 'red', fontSize: '0.75rem', marginBottom: '15px' }}>
                      {formik.errors.phone}
                    </div>
                  ) : <div style={{ height: '20px', marginBottom: '15px' }}></div>}

                  <Form.Control 
                    as="textarea" 
                    name="subject"
                    rows={5} 
                    placeholder="Your Message*" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    isInvalid={formik.touched.subject && !!formik.errors.subject}
                    style={{ 
                      padding: '12px 15px', 
                      borderRadius: '10px', 
                      border: '1px solid #ddd',
                      marginBottom: '5px',
                      fontSize: '0.9rem'
                    }}
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <div style={{ color: 'red', fontSize: '0.75rem', marginBottom: '20px' }}>
                      {formik.errors.subject}
                    </div>
                  ) : <div style={{ height: '20px', marginBottom: '20px' }}></div>}

                  <button 
                    type="submit"
                    className='cta d-block mx-auto'
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? 'Submitting...' : 'Submit Message'}
                  </button>
                </form>
              </Card>
            </Col>

            <Col xs={12} md={5}>
              <Card style={{ 
                border: 'none', 
                borderRadius: '15px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                padding: '20px',
                height: '100%'
              }}>
                <h3 style={{ color: 'black', marginBottom: '20px', fontSize: '1.3rem' }}>Quick Connect</h3>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '20px'
                }}>
                  <div style={{ 
                    backgroundColor: '#f0f7ff', 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '12px',
                    flexShrink: '0'
                  }}>
                    <FaEnvelope style={{ color: 'black', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <h5 style={{ color: '#333', marginBottom: '5px', fontSize: '1rem' }}>Email Us</h5>
                    <a 
                      href="mailto:avataratechnobiz@gmail.com" 
                      style={{ color: '#555', textDecoration: 'none', fontSize: '0.85rem' }}
                    >
                      avataratechnobiz@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '20px'
                }}>
                  <div style={{ 
                    backgroundColor: '#f0f7ff', 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '12px',
                    flexShrink: '0'
                  }}>
                    <FaLinkedin style={{ color: '#0077B5', fontSize: '1.2rem' }} />
                  </div>
                  <div>
                    <h5 style={{ color: '#333', marginBottom: '5px', fontSize: '1rem' }}>Connect on LinkedIn</h5>
                    <a 
                      href="https://linkedin.com/company/your-linkedin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#555', textDecoration: 'none', fontSize: '0.85rem' }}
                    >
                      Avatar TechnoBiz
                    </a>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '20px'
                }}>
                  <div style={{ 
                    backgroundColor: '#f0f7ff', 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '12px',
                    flexShrink: '0'
                  }}>
                    <FaWhatsapp style={{ color: '#25D366', fontSize: '1.2rem' }} />
                  </div>
                  <div>
                    <h5 style={{ color: '#333', marginBottom: '5px', fontSize: '1rem' }}>WhatsApp</h5>
                    <a 
                      href="https://wa.me/919898442256" 
                      target="_blank" 
                      rel="noreferrer"
                      style={{ color: '#555', textDecoration: 'none', fontSize: '0.85rem' }}
                    >
                      +91 9898442256
                    </a>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  backgroundColor: '#fff8e6',
                  padding: '12px',
                  borderRadius: '10px'
                }}>
                  <div style={{ 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '12px',
                    flexShrink: '0'
                  }}>
                    <FaHeadset style={{ color: '#ff9800', fontSize: '1.2rem' }} />
                  </div>
                  <div>
                    <h5 style={{ color: '#333', marginBottom: '5px', fontSize: '1rem' }}>Support Hours</h5>
                    <p style={{ color: '#555', margin: '0', fontSize: '0.85rem' }}>
                      Mon-Sat: 9:00 AM - 6:30 PM IST<br />
                      <span style={{ fontSize: '0.8rem', color: '#888' }}>Closed on Saturday and Sunday</span>
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-home contact-cta p-0 pb-5">
        <motion.div
          className="container mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="row g-4">
            {/* India Map */}
            <div className="col-12 col-md-6">
              <h3 style={{ fontSize: '1.3rem' }}>INDIA</h3>
              <div className="map" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2919727276067!2d72.8843018!3d21.140775800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0515a0f81fa81%3A0x4847daa352709464!2sAvatara%20Technobiz%20LLP!5e0!3m2!1sen!2sin!4v1753161364454!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <h3 style={{ fontSize: '1.3rem' }}>USA</h3>
              <div className="map" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.885794419832!2d-80.9641819!3d35.0595943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569ac9ee2c0c83%3A0xba3f1be750182c21!2s885%20Gold%20Hill%20Rd%20%23705%2C%20Fort%20Mill%2C%20SC%2029708%2C%20USA!5e0!3m2!1sen!2sin!4v1753161494766!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;