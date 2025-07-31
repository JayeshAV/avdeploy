import React from "react";

import call from "../assets/images/phone-call (3).svg";
import briefcase from "../assets/images/briefcase (1).svg";
import dollar from "../assets/images/dollar-sign (2).svg";
import chart from "../assets/images/bar-chart (1).svg";
import solution from "../assets/images/rss (1).svg";

const services = [
  {
    icon: briefcase,
    title: "Expertise in SMB Needs",
    desc: "Over 5 years of experience in delivering tailored IT solutions for small and medium businesses.",
    color: "#2265AB"
  },
  {
    icon: solution,
    title: "Scalable Solutions",
    desc: "Solutions that grow with your business, ensuring you stay ahead in a fast-paced digital world.",
    color: "#2265AB"
  },
  {
    icon: dollar,
    title: "Affordable & Transparent Pricing",
    desc: "No hidden fees. Get high-quality IT services that fits your budget.",
    color: "#2265AB"
  },
  {
    icon: call,
    title: "24/7 Customer Support",
    desc: "Our team is always here for you, ensuring seamless operations and prompt assistance.",
    color: "#2265AB"
  },
  {
    icon: chart,
    title: "Proven Track Record",
    desc: "Trusted by hundreds of businesses to solve their IT challenges and drive innovation",
    color: "#2265AB"
  }
]

const WhyChoose = () => {
  return (
    <div className="our-services">
      <div className="our-services-title">
        <h2>Why Choose <span style={{color:'#FFC107'}}>Avatara</span> ?</h2>
        <p className=" case-subtitle w-100">At Avatara, we don't just build software — we build trust, innovation, and long-term value. Here's what sets us apart and why businesses choose us with confidence.</p>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div className="our-ser-box" key={index}>
            <div className="our-ser-box-icon" style={{ color: service.color }}>
              <img src={service.icon} style={{height:"50px"}} alt={service.title} />
            </div>
            <div className="our-services-web-title">
              <a href="#!" rel="noopener noreferrer">
                {service.title}
              </a>
            </div>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;