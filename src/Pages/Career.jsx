"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Briefcase, Globe, Clock, Rocket, Users, Layers } from "lucide-react";
import headerbg from "../assets/images/header-bg.jpg";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TechSection from "../Components/TechSection";
import { motion } from 'framer-motion';

const Career = () => {
  const [file, setFile] = useState(null);

   const fadeUp = {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }; 

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2
      }
    })
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      job: "",
      resume: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone is required").max(10, "Phone number must be 10 digits"),
      job: Yup.string().required("Please select a job role"),
      resume: Yup.mixed().required("Resume is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const resumeBase64 = await fileToBase64(values.resume);

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("job", values.job);
        formData.append("resume", resumeBase64);

        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbx71PCv2zT5XtXapvk7lPvCdtLoSMQX46NT44pbsr7YxqoYnSuollrOU8jYNcv1U_9ENg/exec",
          {
            method: "POST",
            body: formData,
          }
        );

        if (res.ok) {
          toast.success("Application submitted successfully ", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          resetForm();
          setFile(null);

          const fileInput = document.querySelector('input[name="resume"]');
          if (fileInput) {
            fileInput.value = "";
          }
        } else {
          toast.error("Failed to submit application ❌", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        toast.error("Server error ❌ Please try again later", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error("Submission error:", error);
      }
    },
  });

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#1e1e1e'
  };

  const inputStyle = (isError) => ({
    padding: '0.75rem 0.5rem',
    borderRadius: '10px',
    border: isError ? '1px solid #dc3545' : '1px solid #ced4da',
    backgroundColor: '#fdfdfd',
    width: '90%',
    transition: 'all 0.2s ease-in-out',
  });

  const ErrorText = ({ msg }) => (
    <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
      {msg}
    </div>
  );

  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',  
  };

  const jobRoles = [
    { title: "Frontend Developer", location: "Surat", type: "Full-Time", remote: true, description: "Build beautiful, responsive interfaces using React and modern CSS frameworks." },
    { title: "Python Developer", location: "Surat", type: "Full-Time", remote: false, description: "Develop robust backend systems and APIs with Python and Django/Flask." },
    { title: "Backend Developer", location: "Surat", type: "Part-Time", remote: true, description: "Work on server architecture, databases, and system integrations." },
    { title: "UI/UX Designer", location: "Surat", type: "Internship", remote: true, description: "Create intuitive user experiences and visually stunning interfaces." },
  ];

  const benefits = [
    {
      icon: <Clock size={32} className="mb-2" style={{ color: '#e0a63b' }} />,
      title: "Flexible Hours",
      desc: "Work when you're most productive. We value outcomes, not timesheets.",
    },
    {
      icon: <Globe size={32} className="mb-2" style={{ color: '#e0a63b' }} />,
      title: "Remote Work",
      desc: "Join us from anywhere. We're a remote-first company.",
    },
    {
      icon: <Rocket size={32} className="mb-2" style={{ color: '#e0a63b' }} />,
      title: "Fast Growth",
      desc: "Accelerate your learning and take ownership from day one.",
    },
    {
      icon: <Users size={32} className="mb-2" style={{ color: '#e0a63b' }} />,
      title: "Team Culture",
      desc: "Collaborative, supportive, and always evolving together.",
    },
    {
      icon: <Layers size={32} className="mb-2" style={{ color: '#e0a63b' }} />,
      title: "Modern Tech",
      desc: "Work with latest tools & stacks in real-world projects.",
    },
    {
      icon: <Briefcase size={32} className="mb-2" style={{ color: '#e0a63b' }} />,
      title: "Career Mentorship",
      desc: "Learn from experienced mentors and industry leaders.",
    },
  ];

  return (
    <div style={{ overflowX: 'hidden' }}>
     

          <motion.section
        className="section-hero"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="hero-container">
          <div className="hero-content">
            <h2>Join Our Team</h2>
            <p>
               Be a part of something meaningful. We build, learn, and grow together
            </p>
          </div>
        </div>
      </motion.section>
      

      <div style={{ backgroundColor: '#f8f9fa' }}>
        <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem' }}>
          <div style={{ color: 'white', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
         <div className="d-flex flex-column flex-md-row align-items-center gap-4" style={{ fontSize: '23px' }}>
              <div style={{ width: '100%', maxWidth: '600px' }}>
                <h1 className="case-heading" style={{ color: '#1e1e1e' }}>
                  Build Your Career <span style={{ color: '#e0a63b' }}>With Us</span>
                </h1>
                <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '2rem', color: 'gray' }}>
                  Join our team of innovators and help shape the future of technology.
                </p>
                <a href="#open-positions" style={{ textDecoration: "none",fontWeight:'800' }} className="cta">
                  Explore Opportunities
                </a>
              </div>
              <div style={{ width: '100%', maxWidth: '900px' }}>
                <div style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}></div>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <motion.section
            id="open-positions"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ padding: '2rem 0' }}
          >
            <div>
              <motion.div className="text-center mb-5" variants={fadeUp}>
                <h2 className="case-heading" style={{ color: '#1e1e1e' }}>
                  Open Positions
                </h2>
                <p className="case-subtitle mx-auto" >
                  We're looking for talented individuals to join our growing team
                </p>
              </motion.div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                {jobRoles.map((job, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                  >
                    <div style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      padding: '2rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        border: '1px solid #e0a63b',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                      }}>
                        <Briefcase size={24} color="#e0a63b" />
                      </div>

                      <h3 style={{ color: '#1e293b', marginBottom: '1rem', fontWeight: '600' }}>{job.title}</h3>

                      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{
                          backgroundColor: '#f1f5f9',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '50px',
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <Globe size={12} color="#64748b" />
                          {job.location}
                        </span>
                        <span style={{
                          backgroundColor: '#f1f5f9',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '50px',
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <Clock size={12} color="#64748b" />
                          {job.type}
                        </span>
                        {job.remote && (
                          <span style={{
                            backgroundColor: 'rgba(224, 166, 59, 0.1)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            color: '#e0a63b'
                          }}>
                            <Globe size={12} color="#e0a63b" />
                            Remote
                          </span>
                        )}
                      </div>

                      <p style={{ color: '#64748b', marginBottom: '1.5rem', flexGrow: '1' }}>
                        {job.description}
                      </p>

                      <a href="#apply-now" style={{ textDecoration: 'none', textAlign: "center",fontWeight:"800" }} className="cta">
                        Apply Now
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </section>

        {/* Benefits Section */}
        <section style={{backgroundColor: 'white'}}>
        <section style={{maxWidth: '1400px',margin:'auto'}}>
        <section style={{ paddingTop: '80px', margin: '0 auto',paddingBottom:'80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="case-heading"
              style={{ color: '#1e1e1e' }}
            >
              Why Join Our Team?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="case-subtitle mx-auto"
            >
              We're committed to creating an environment where our team can thrive both professionally and personally.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}
                  style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    padding: '2rem',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '70px', height: '70px', backgroundColor: 'rgba(224, 166, 59, 0.1)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}>
                    {item.icon}
                  </div>
                  <h4 style={{ color: '#1e293b', marginBottom: '1rem', fontWeight: '600' }}>{item.title}</h4>
                  <p style={{ color: '#64748b' }}>{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
        </section>
</section>

        <motion.section
          id="apply-now"
          style={{ marginTop: '80px', maxWidth: '1200px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.div
              className="text-center mb-5 pt-5"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="case-heading" style={{ color: '#1e1e1e' }}>
                Ready to <span style={{ color: '#e0a63b' }}>Join Us?</span>
              </h2>
              <p className="case-subtitle mx-auto">
                Take the first step towards an exciting career. Fill out the form below and let's start a conversation.
              </p>
            </motion.div>

            <motion.div
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.05)',
                maxWidth: '800px',
                margin: '0 auto'
              }}
              className="p-sm-5 p-3 p-md-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={formik.handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                  {/* Name Field */}
                  <div>
                    <label style={labelStyle}>
                      Full Name <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      style={inputStyle(formik.touched.name && formik.errors.name)}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <ErrorText msg={formik.errors.name} />
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label style={labelStyle}>
                      Email Address <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      style={inputStyle(formik.touched.email && formik.errors.email)}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <ErrorText msg={formik.errors.email} />
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label style={labelStyle}>
                      Phone Number <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      style={inputStyle(formik.touched.phone && formik.errors.phone)}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <ErrorText msg={formik.errors.phone} />
                    )}
                  </div>

                  {/* Job Role Field */}
                  <div>
                    <label style={labelStyle}>
                      Position Applying For <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <select
                      name="job"
                      style={inputStyle(formik.touched.job && formik.errors.job)}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.job}
                    >
                      <option value="">Select a position</option>
                      {jobRoles.map((job, index) => (
                        <option key={index} value={job.title}>
                          {job.title} - {job.location} ({job.type})
                        </option>
                      ))}
                    </select>
                    {formik.touched.job && formik.errors.job && (
                      <ErrorText msg={formik.errors.job} />
                    )}
                  </div>
                </div>

                {/* Resume Upload Field */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>
                    Resume/CV <span style={{ color: '#dc3545' }}>*</span>
                  </label>
                  <div style={{
                    border: formik.touched.resume && formik.errors.resume ? '2px dashed #dc3545' : '2px dashed #e0a63b',
                    borderRadius: '12px',
                    padding: '2rem',
                    textAlign: 'center',
                    backgroundColor: '#fefefe',
                    transition: 'all 0.3s ease'
                  }}>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      style={{ display: 'none' }}
                      id="resume-upload"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        setFile(file);
                        formik.setFieldValue('resume', file);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    <label
                      htmlFor="resume-upload"
                      style={{
                        cursor: 'pointer',
                        display: 'block',
                        width: '100%'
                      }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(224, 166, 59, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem auto'
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0a63b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                      </div>
                      
                      {file ? (
                        <div>
                          <p style={{ color: '#e0a63b', fontWeight: '600', marginBottom: '0.5rem' }}>
                            File Selected: {file.name}
                          </p>
                          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0' }}>
                            Click to change file
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p style={{ color: '#1e293b', fontWeight: '600', marginBottom: '0.5rem' }}>
                            Click to upload your resume
                          </p>
                          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0' }}>
                            PDF, DOC, or DOCX files only (Max 5MB)
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                  {formik.touched.resume && formik.errors.resume && (
                    <ErrorText msg={formik.errors.resume} />
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <motion.button
                    type="submit"
                    disabled={formik.isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cta"
                    style={{ display: 'block', width: '100%', maxWidth: '300px', margin: '0 auto' }}
                  >
                    {formik.isSubmitting ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTop: '2px solid white',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
                        Submitting Application...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' ,fontWeight:"800"}}>
                        Submit Application
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Additional Info */}
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: '1px solid rgba(224, 166, 59, 0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(224, 166, 59, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e0a63b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                  <div>
                    <h5 style={{ color: '#1e293b', marginBottom: '0.5rem', fontWeight: '600' }}>
                      What happens next?
                    </h5>
                    <p style={{ color: '#64748b', margin: '0', fontSize: '0.95rem' }}>
                      Our HR team will review your application within 2-3 business days. If your profile matches our requirements, we'll reach out to schedule an initial conversation. We appreciate your interest in joining our team!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section style={{ padding: '4rem 0rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="case-heading p-1" style={{ color: '#1e1e1e' }}>
                Our <span style={{ color: '#e0a63b' }}>Culture</span>
              </h2>
              <p className="case-subtitle" style={{textAlign:'left'}}>
                We believe in creating a workplace where people feel valued, challenged, and excited to come to work every day. Our culture is built on collaboration, innovation, and a shared passion for what we do.
              </p>
              <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                {["Flat hierarchy with open communication", "Continuous learning and growth opportunities", "Work-life balance and flexible arrangements"].map((text, index) => (
                  <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ backgroundColor: 'rgba(224, 166, 59, 0.1)', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', flexShrink: '0' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e0a63b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span style={{ color: '#1e293b' }}>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <div style={{
                  paddingBottom: '75%',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Team Retreat 2024</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0' }}>Our annual gathering to celebrate achievements and plan for the future</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <TechSection />
    </div>
  );
};

export default Career;