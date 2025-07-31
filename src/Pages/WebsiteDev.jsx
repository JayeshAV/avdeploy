import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import headerbg from "../assets/images/header-bg.jpg";
import { motion } from "framer-motion";
import "../assets/css/scss/style.css"
import PortFolioSection from '../Components/PortfolioSection';
import Blogslider from '../Components/Blogslider';
import TechSection from '../Components/TechSection';


const services = [
  {
    id: "website-dev",
    icon: "🖥️",
    color: "#0d6efd", 
    label: "Website Dev & SEO",
    active: true,
    heading: "Website Development & SEO",
    subtext: "At Avatara Technobiz we deliver innovative IT solutions that drive efficiency, security, and scalability. With over 15 years of expertise, our team specializes in building high-performance web applications, robust backend systems, and cutting-edge digital solutions tailored to your needs.",
    items: [
      {
        icon: "💻",
        alt: "Avatara Technobiz",
        title: "Web Development & UI/UX Design",
        description: "A powerful online presence starts with a well-designed website. Our front-end development services leverage HTML, CSS, JavaScript, React, and Vue.js to create visually stunning, responsive, and user-friendly web applications. We focus on intuitive UI/UX design to enhance customer engagement and conversions.",
        color: "#E0A63B"
      },
      {
        icon: "🧠",
        alt: "Avatara Technobiz",
        title: "Backend Development & API Integration",
        description: "A strong backend is the backbone of any web application. Our backend development expertise includes technologies like PHP, Java, Python, Node.js, and .NET, ensuring high performance, security, and scalability. We build custom APIs and integrate third-party services to enhance your business operations.",
        color: "#E0A63B"
      },
      {
        icon: "🗃️",
        alt: "Avatara Technobiz",
        title: "Database Management & Optimization",
        description: "Your data is your most valuable asset. We provide robust database solutions tailored to your business needs, including SQL (MySQL, PostgreSQL, Microsoft SQL Server) and NoSQL (MongoDB, Firebase, CouchDB) databases. Our team optimizes database performance, ensures data security, and implements scalable architectures.",
        color: "#E0A63B"
      },
      {
        icon: "📈",
        alt: "Avatara Technobiz",
        title: "SEO & Digital Marketing",
        description: "A great website needs visibility. Our SEO and digital marketing strategies help you rank higher in search engines and attract organic traffic. From keyword optimization to content marketing and PPC advertising, we ensure your business reaches the right audience.",
        color: "#E0A63B"
      },
      {
        icon: "🔐",
        alt: "Avatara Technobiz",
        title: "IT Security & Support",
        description: "We provide cybersecurity solutions, including threat detection, vulnerability assessments, and proactive IT support to keep your business safe from cyber threats and ensure uninterrupted operations.",
        color: "#E0A63B"
      }
    ]
  },
  {
    id: "cloud-solutions",
    icon: "☁️",
    color: "#20c997", 
    label: "Cloud Solutions",
    active: false,
    heading: "Cloud Solutions",
    subtext: "Leverage the power of Amazon Web Services (AWS) to build a scalable, secure, and high-performance cloud infrastructure. Our expertise in AWS helps businesses optimize operations, enhance security, and drive innovation through cloud-native solutions.",
    items: [
      { icon: "🚀", title: "AWS Cloud Migration & Deployment", description: "Seamless migration of applications, databases, and workloads to AWS with minimal downtime.", color: "#E0A63B" },
      { icon: "🧮", title: "AWS Compute Services", description: "Scalable and flexible computing power with Amazon EC2 - Virtual servers tailored for your workloads.AWS Lambda - Serverless computing for automatic scaling and cost-efficiency.Amazon ECS & EKS - Containerized application deployment with Docker and Kubernetes.", color: "#E0A63B" },
      { icon: "🛠️", title: "AWS DevOps & Automation", description: "Streamline development and operations with:AWS CodePipeline & CodeDeploy - Automate CI/CD workflows.AWS CloudFormation & Terraform - Infrastructure as Code (IaC) for automated provisioning.AWS Systems Manager - Centralized management of AWS resources.", color: "#E0A63B" },
      { icon: "🛡️", title: "AWS Security & Compliance", description: "Robust security measures to protect your cloud environment:AWS Identity & Access Management (IAM) - Role-based access control and security policies.AWS Shield & WAF - Protection against DDoS and web-based attacks.AWS CloudTrail & AWS Security Hub - Real-time security monitoring and compliance tracking.", color: "#E0A63B" },
      { icon: "💾", title: "AWS Database Solutions", description: "Fully managed and scalable database services:Amazon RDS - SQL databases (MySQL, PostgreSQL, SQL Server, MariaDB, Oracle).Amazon DynamoDB - High-performance NoSQL database.Amazon Aurora - High-availability relational database with auto-scaling.", color: "#E0A63B" },
      { icon: "📊", title: "AWS Monitoring & Cost Optimization", description: "Maximize performance and minimize cloud expenses:Amazon CloudWatch - Real-time monitoring of logs, metrics, and alerts.AWS Trusted Advisor - Cost and performance optimization recommendations.AWS Auto Scaling - Automated scaling of EC2 instances and applications.", color: "#E0A63B" },
      { icon: "📦", title: "AWS Backup & Disaster Recovery", description: "Ensure business continuity with:AWS Backup - Centralized backup management for AWS workloads.AWS Disaster Recovery (DRS) - Failover and replication strategies for critical workloads.Amazon S3 Versioning & Cross-Region Replication - Data redundancy and protection.", color: "#E0A63B" },
      { icon: "🗄️", title: "AWS Storage Services", description: "Secure and scalable cloud storage solutions:Amazon S3 - Object storage for scalable, secure data storage.Amazon EBS - High-performance block storage for EC2 instances.Amazon EFS - Fully managed file storage for shared access.Amazon Glacier - Cost-effective cold storage for long-term archiving.", color: "#E0A63B" },
    ]
  },
  {
    id: "app-development",
    icon: "📱",
    color: "#6610f2", 
    label: "App Development",
    active: false,
    heading: "App Development",
    subtext: "We specialize in building high-performance mobile applications that engage users and drive business growth. Our team is skilled in developing native, hybrid, and cross-platform apps, delivering seamless user experiences on both iOS and Android. From concept to launch, we provide end-to-end mobile development services tailored to your business needs.",
    items: [
      { icon: "📲", title: "Native Mobile App Development", description: "Build robust, fast, and responsive apps for iOS and Android with platform-specific capabilities.", color: "#E0A63B" },
      { icon: "🔄", title: "Cross-Platform App Development", description: "Reach a wider audience with Flutter, React Native, and Xamarin for apps that run smoothly on both iOS and Android.", color: "#E0A63B" },
      { icon: "📡", title: "App Backend Development", description: "Scalable backend services to power your mobile app:API Integration - Seamlessly connect your app with external systems and data sources.Cloud Backend - Leverage AWS, Firebase, or Azure for secure and scalable backend infrastructure.Push Notifications & Messaging - Engage users in real-time with notifications and in-app messa", color: "#E0A63B" },
      { icon: "🔐", title: "Mobile App Security", description: "Ensure the security of your app and user data with:Encryption - Protect sensitive data both in transit and at rest.Secure Authentication - Implement multi-factor authentication (MFA) and OAuth for secure login.App Penetration Testing - Identify and mitigate security vulnerabilities.", color: "#E0A63B" },
      { icon: "🎨", title: "UI/UX Design for Apps", description: "Enhance user experience with intuitive, engaging designs:User-Centric Design - Focus on delivering seamless navigation and visually appealing interfaces.Prototyping & Wireframing - Create high-fidelity prototypes for better user feedback.App Store Optimization (ASO) - Improve your app's visibility and rankings in the App Store and Google Play.", color: "#E0A63B" },
      { icon: "🔧", title: "App Maintenance & Updates", description: "Ongoing support and updates to keep your app performing at its best:App Performance Monitoring - Track usage, crashes, and performance metrics to ensure optimal app health.Feature Updates - Continuously enhance your app with new features and functionalities.Bug Fixes & Optimizations - Regular updates to fix bugs, improve speed, and ensure compatibility with the latest OS versions.", color: "#E0A63B" },
    ]
  },
  {
    id: "custom-software-development",
    icon: "💼",
    color: "#fd7e14", 
    label: "Custom Software",
    active: false,
    heading: "Custom Software Development",
    subtext: "At Avatara Technobiz , we create custom software solutions that help small and medium businesses operate more efficiently, improve productivity, and reduce costs. Our team works closely with you to develop software that addresses your unique business challenges, ensuring it scales as your business grows.",
    items: [
      { icon: "⚙️",
         title: "Business Process Automation", 
         description: "Streamline manual processes to improve efficiency and reduce errors:Workflow Automation - Automate everyday tasks to save time and resources.Custom Dashboards & Reporting - Access key business insights through interactive dashboards and automated reports.", 
         color: "#E0A63B"
         },
      { icon: "📋", 
        title: "Custom Business Applications", 
        description: " Develop tailored applications to manage your specific business needs:Inventory Management - Custom solutions to track and manage inventory in real-time.Order Management Systems - Streamline order processing and improve customer service.Project Management Tools - Tools to track tasks, deadlines, and collaboration within your team. ", 
        color: "#E0A63B"
       },
      { icon: "🔗",
         title: "Software Integration",
          description: "Ensure smooth data flow across different systems and tools:System Integration - Connect your business tools (CRM, ERP, etc.) into one cohesive system.Data Integration - Centralize your data to make informed business decisions.", 
          color: "#E0A63B" 
        },
      { icon: "🌐",
         title: "Mobile & Web Applications",
          description: "Build solutions that connect with your customers and team on-the-go:Mobile Business Apps - Create apps for both iOS and Android to manage operations, engage customers, and provide services.Custom Web Solutions - Develop web applications tailored to your business needs, ensuring user-friendly and secure interfaces.",
           color: "#E0A63B"
           },
      { icon: "🔒",
         title: "Software Security & Compliance", 
         description: "Keep your business secure with custom security solutions:Data Protection - Safeguard sensitive business and customer data.Access Control & Authentication - oImplement role-based access and secure login methods.",
          color: "#E0A63B" 
        },
    ]
  },
  {
    id: "it-consulting",
    icon: "🧠",
    color: "#E0A63B", 
    label: "IT Consulting",
    active: false,
    heading: "IT Consulting Services",
    subtext: "We provide expert IT consulting services tailored to help small and medium businesses leverage technology for growth, efficiency, and security. Whether you're looking to optimize your IT infrastructure, enhance cybersecurity, or adopt cloud solutions, our experienced consultants guide you every step of the way.",
    items: [
      { icon: "📊", title: "IT Strategy & Planning", description: "Align your IT investments with your business goals for long-term success.", color: "#ffc107" },
      { icon: "☁️", title: "Cloud Consulting", description: "Guidance on cloud adoption, migration, and cost optimization using AWS and other cloud platforms.", color: "#E0A63B" },
      { icon: "🛡️", title: "Cybersecurity Consulting", description: "Assess risks, implement security best practices, and ensure compliance with industry standards.", color: "#E0A63B" },
      { icon: "🔌", title: "Infrastructure Optimization", description: "Improve performance and reliability of your IT systems, whether on-premise or in the cloud.", color: "#E0A63B" },
      { icon: "💡", title: "Software & Technology Selection", description: "Help in choosing the right software, tools, and technologies to enhance business operations.", color: "#E0A63B" },
      { icon: "🧰", title: "IT Support & Managed Services Consulting", description: "Identify areas for improvement in IT support, maintenance, and service management.", color: "#E0A63B" },
      { icon: "📈", title: "Data Management & Analytics", description: "Advise on database solutions, data security, and analytics for better decision-making.", color: "#E0A63B" },
    ]
  },
  {
    id: "managed-it",
    icon: "🛠️",
    color: "#dc3545", 
    label: "Managed IT",
    active: false,
    heading: "Managed IT Services",
    subtext: "Our Managed IT Services help small and medium businesses stay focused on their core operations while we handle their IT needs. We provide proactive monitoring, maintenance, and support to ensure your technology runs smoothly, securely, and efficiently—without the hassle of managing it yourself.",
    items: [
      { icon: "🆘", title: "IT Support & Helpdesk", description: "24/7 remote and on-site support to resolve technical issues quickly.", color: "#E0A63B" },
      { icon: "🌐", title: "Network Management", description: "Ensure fast, secure, and stable connectivity for your business operations.", color: "#E0A63B" },
      { icon: "☁️", title: "Cloud Management & Support", description: "Optimize and maintain your cloud infrastructure for peak performance.", color: "#E0A63B" },
      { icon: "🛡️", title: "Cybersecurity & Threat Management", description: "Protect your business from cyber threats with firewall management, endpoint security, and compliance monitoring.", color: "#E0A63B" },
      { icon: "📡", title: "System Monitoring & Maintenance", description: "Proactive monitoring to prevent downtime and ensure system health.", color: "#E0A63B" },
      { icon: "💽", title: "Data Backup & Disaster Recovery", description: "Automated backups and recovery solutions to safeguard your business data.", color: "#E0A63B" },
    ]
  },
  {
    id: "data-backup",
    icon: "💾",
    color: "#6c757d", 
    label: "Data Backup",
    active: false,
    heading: "Data Backup & Recovery",
    subtext: "Data is one of the most valuable assets of any business. Our Data Backup & Recovery services ensure that your critical business information is always protected, easily recoverable, and secure from threats like cyberattacks, accidental deletions, or hardware failures. We provide automated, reliable, and scalable backup solutions tailored for small and medium businesses.",
    items: [
      { icon: "📤", title: "Automated Backup Solutions", description: "Scheduled, secure backups of your files, databases, and applications to prevent data loss.", color: "#E0A63B" },
      { icon: "☁️", title: "Cloud & On-Premise Backup", description: "Flexible backup options, including AWS, Google Cloud, Azure, and on-site solutions.", color: "#E0A63B" },
      { icon: "🗄️", title: "File & Database Backup", description: "Secure storage and quick recovery for business-critical files and databases.", color: "#E0A63B" },
      { icon: "📉", title: "Disaster Recovery Solutions", description: "Rapid restoration of operations in case of system failure or cyber incidents.", color: "#E0A63B" },
      { icon: "📦", title: "Offsite & Multi-Location Backup", description: "Redundant storage across multiple locations for enhanced data protection.", color: "#E0A63B" },
    ]
  }
];

const WebsiteDev = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

    const [activeTab, setActiveTab] = useState(services[0]?.id); 
  const activeService = services.find(service => service.id === activeTab);
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  }, []);

  const handleSlideChange = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };
  return (
    <>
              <section
            className="section-hero"
          >
            <div className="hero-container">
              <div className="hero-content">
                <h2>We Drive Innovation, <br />
              You Lead the Market.</h2>
                <p className="w-100">
                   At Avatara Technobiz, we harness the power of technology to fuel
              business innovation. From streamlining operations to unlocking new
              opportunities, we empower you with cutting-edge solutions so you
              can stay ahead of the competition and lead your market with
              confidence.
                </p>
              </div>
            </div>
          </section>

 <div className="portfolio-container">
      <div className="portfolio-header">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="swiper-container-wrapper">
            <button
              className={`swiper-nav-button prev ${isBeginning ? 'hidden' : ''}`}
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              &lt;
            </button>

            <div className="swiper-wrapper-container">
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next-portfolio',
                  prevEl: '.swiper-button-prev-portfolio',
                }}
                spaceBetween={16}
                loop={false}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                watchOverflow={true}
                centeredSlides={false}
                breakpoints={{
                  0: { slidesPerView: 1.3 },
                  360: { slidesPerView: 1.5 },
                  480: { slidesPerView: 2 },
                  576: { slidesPerView: 2.3 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 },
                }}
                className="portfolio-swiper"
                onInit={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
              >
                {services.map((item, index) => (
                  <SwiperSlide key={item.id} className="swiper-slide-item">
                    <motion.button
                      onClick={() => setActiveTab(item.id)}
                      className={`service-tab ${activeTab === item.id ? 'active' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 0.97 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`service-icon ${activeTab === item.id ? 'active' : ''}`}>
                        {item.icon}
                      </div>
                      <span className="service-label">{item.label}</span>
                    </motion.button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              className={`swiper-nav-button next ${isEnd ? 'hidden' : ''}`}
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              &gt;
            </button>
          </div>
        </motion.div>
      </div>

      {activeService && (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="service-content"
        >
          <motion.div
            className="service-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="case-heading">{activeService.heading}</h2>
            <p className="case-subtitle mx-auto w-100">{activeService.subtext}</p>
          </motion.div>

          <div className="timeline-container">
            <div className="timeline-content">
              {activeService.items.map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                >
                  <motion.div
                    className="timeline-card"
                    whileHover={{ y: -4 }}
                  >
                    <div className="desktop-layout">
                      <div className="card-icon" style={{ backgroundColor: `${item.color}90`, color: item.color }}>
                        {item.icon}
                      </div>
                      <div className="card-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>

                    <div className="mobile-layout">
                      <div className="card-icon" style={{ backgroundColor: `${item.color}90`, color: item.color }}>
                        {item.icon}
                      </div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>


      <PortFolioSection />
      <Blogslider />
      <TechSection />
    </>
  );
};

export default WebsiteDev;
