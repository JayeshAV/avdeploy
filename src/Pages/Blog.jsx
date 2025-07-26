import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Add this import
import headerbg from "../assets/images/header-bg.jpg";
import blogImg1 from "../assets/images/blog-img-1.jpg";
import blogImg2 from "../assets/images/blog-img-2.jpg";
import blogImg3 from "../assets/images/blog-img-3.jpg";
import PortfolioSection from "../Components/PortfolioSection";
import BlogSlider from "../Components/Blogslider";
import TechSection from "../Components/TechSection";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Blog = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  // Blog data to simplify mapping
  const blogPosts = [
    {
      link: "/blog-details-1",
      img: blogImg1,
      title: "Unlocking Growth: How IT Solutions Empower Small and Medium Businesses",
      desc: "In today's fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT..."
    },
    {
      link: "/blog-details-2",
      img: blogImg2,
      title: "App Development: Native vs Cross-Platform – What’s Best for Your Business?",
      desc: "In today's fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT..."
    },
    {
      link: "/blog-details-3",
      img: blogImg3,
      title: "Top Web Development Trends to Watch for in 2025",
      desc: "In today's fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT..."
    },
    {
      link: "/blog-details-1",
      img: blogImg1,
      title: "Unlocking Growth: How IT Solutions Empower Small and Medium Businesses",
      desc: "In today's fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT..."
    },
    {
      link: "/blog-details-2",
      img: blogImg2,
      title: "App Development: Native vs Cross-Platform – What’s Best for Your Business?",
      desc: "In today's fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT..."
    },
    {
      link: "/blog-details-3",
      img: blogImg3,
      title: "Top Web Development Trends to Watch for in 2025",
      desc: "In today's fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT..."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="section-hero m-0 "
        style={sectionStyle}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mw-800px d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column">
            <h1 className="text-center">Our Latest Blogs</h1>
            <p className="text-22 text-white text-center">
              Stay updated with the latest industry trends, expert insights, and
              company updates.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Blogs */}
  <section className="section section-home py-5" style={{ backgroundColor: '#fafafa' }}>
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-5"
    >
      <h2 className="display-5 mb-3" >Insights & Innovations</h2>
      <p className="lead" style={{ color: '#636e72', maxWidth: '700px', margin: '0 auto' }}>
        Discover our latest thinking on design, technology and business transformation
      </p>
    </motion.div>

    <div className="row g-4 g-lg-5">
      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          className="col-12 col-md-6 col-lg-4"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link 
            to={post.link} 
            className="d-block text-decoration-none h-100"
          >
            <motion.div
              className="h-100"
              whileHover={{ y: -8 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.03)',
                position: 'relative'
              }}
            >
              {/* Featured badge */}
              {index === 0 && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  zIndex: '2'
                }}>
                  Featured
                </div>
              )}

              {/* Image with gradient overlay */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <motion.img 
                  src={post.img} 
                  alt={post.title}
                  className="w-100 h-100 object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
                }} />
              </div>

              {/* Content */}
              <div className="p-4 pb-5" style={{ position: 'relative' }}>
                {/* Category tag */}
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#f1f3f5',
                  color: '#495057',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  {post.category || 'Technology'}
                </span>

                <h3 className="h4 mb-3" style={{ color: '#2d3436', minHeight: '60px' }}>
                  {post.title}
                </h3>

                <p className="mb-4" style={{ color: '#636e72', fontSize: '15px' }}>
                  {post.desc.length > 100 ? `${post.desc.substring(0, 100)}...` : post.desc}
                </p>

                {/* Author and date */}
                {/* <div className="d-flex align-items-center" style={{ color: '#adb5bd' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#e9ecef',
                    marginRight: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#495057' }}>
                      {post.author || 'Team Member'}
                    </div>
                    <div style={{ fontSize: '12px' }}>
                      {post.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </div> */}

                {/* Read more arrow */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f3f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>


  </div>
</section>


       <PortfolioSection />
      <BlogSlider />
     
        <TechSection />

    </>
  );
};

export default Blog;
