import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Or 'next/link' if using Next.js
import headerbg from '../assets/images/header-bg.jpg';
import '../assets/css/scss/style.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    {
      question: "What services does your company offer?",
      answer:
        "We offer a wide range of IT services, including mobile app development, web development, software development, UI/UX design, and more. Explore our services page for detailed information.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with clients across various industries, including healthcare, finance, retail, education, hospitality, and more. Our team has experience delivering solutions tailored to specific industry needs.",
    },
    {
      question: "Can you provide maintenance and support after the project is completed?",
      answer:
        "Yes, we offer maintenance and support services post-launch to ensure optimal performance, security updates, and enhancements as needed. Our support team is available to assist you after project completion.",
    },
    {
      question: "What sets your software development company apart from others?",
      answer:
        "Our focus on innovation, quality assurance, and customer-centric solutions, backed by over 10 years of experience and 800+ successful projects, distinguishes us in the market.",
    },
    {
      question: "How does your app development company ensure project success?",
      answer:
        "Our app development process includes comprehensive planning, UI/UX design, development, rigorous testing, and post-launch support to ensure top-tier product quality.",
    },
  ];

  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <section className="section-hero" style={sectionStyle}>
        <div className="container container-1400px">
          <h1 className="text-center text-white">FAQS</h1>
          <p className="text-center text-white text-22">
            Get answers to the most common questions about our services, process, and offerings.
          </p>
        </div>
      </section>

      <section className="faq-section" style={{marginBottom:"130px"}} id="faqs">
        <div className="faq-container">
          <h2 className="faq-title text-center">Frequently Asked Questions</h2>

          <div className="faq-items">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                key={index}
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

          
        </div>
      </section>
    </>
  );
};

export default Faq;
