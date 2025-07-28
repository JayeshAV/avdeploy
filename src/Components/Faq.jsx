import React from 'react';
import headerbg from "../assets/images/header-bg.jpg";
import "../assets/css/style.css";

const Faq = () => {
  const faqs = [
    {
      icon: "📈",
      question: "How do you handle scaling for high traffic web applications?",
      answer:
        "We use cloud-based auto-scaling, caching, load balancing, and microservices to scale web apps efficiently.",
    },
    {
      icon: "🔌",
      question: "How do you integrate third-party services into a web app?",
      answer:
        "We integrate services like payment gateways, email APIs, CRMs, and analytics tools using secure APIs.",
    },
    {
      icon: "💰",
      question: "What is the cost of developing a web application?",
      answer:
        "Costs depend on complexity, features, and timeline. We offer tailored quotes after understanding your needs.",
    },
    {
      icon: "📱",
      question: "What services does your company offer?",
      answer:
        "We offer a wide range of IT services, including mobile app development, web development, software development, UI/UX design, and more. Explore our services page for detailed information.",
    },
    {
      icon: "🏢",
      question: "What industries do you specialize in?",
      answer:
        "We work with clients across various industries, including healthcare, finance, retail, education, hospitality, and more. Our team has experience delivering solutions tailored to specific industry needs.",
    },
    {
      icon: "🛠️",
      question: "Can you provide maintenance and support after the project is completed?",
      answer:
        "Yes, we offer maintenance and support services post-launch to ensure optimal performance, security updates, and enhancements as needed. Our support team is available to assist you after project completion.",
    },
    {
      icon: "🚀",
      question: "What sets your software development company apart from others?",
      answer:
        "Our focus on innovation, quality assurance, and customer-centric solutions, backed by over 10 years of experience and 800+ successful projects, distinguishes us in the market.",
    },
    {
      icon: "✅",
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
        <div className="container container-800px d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column">
            <h1 className="text-center">FAQS</h1>
            <p className="text-22 text-white text-center">
                           Get answers to the most common questions about our services, process, and offerings.
            </p>
          </div>
        </div>
      </section> 

      <section className="faq-section pt-5" id="faqs">
        <div className="container">
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item custom-item mb-4 shadow-sm" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button custom-btn d-flex gap-3 align-items-center ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    <div className="icon-box">{faq.icon}</div>
                    <span className="question-text">{faq.question}</span>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
