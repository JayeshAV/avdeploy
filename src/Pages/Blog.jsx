import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import headerbg from "../assets/images/header-bg.jpg";
import blogImg1 from "../assets/images/blog-img-1.jpg";
import blogImg2 from "../assets/images/blog-img-2.jpg";
import blogImg3 from "../assets/images/blog-img-3.jpg";
import PortfolioSection from "../Components/PortfolioSection";
import BlogSlider from "../Components/Blogslider";
import TechSection from "../Components/TechSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Blog = () => {
  const sectionStyle = {
    background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center'
  };

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
      title: "App Development: Native vs Cross-Platform – What's Best for Your Business?",
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
      title: "App Development: Native vs Cross-Platform – What's Best for Your Business?",
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
              Our Latest Blogs
            </motion.h2>
            <motion.p
              className="fs-5 mx-auto"
              style={{ maxWidth: '600px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Stay updated with the latest industry trends, expert insights, and company updates.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="py-5 " style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="container px-0">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">Insights & Innovations</h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Discover our latest thinking on design, technology and business transformation
            </p>
          </motion.div>

          <div className=" g-4 m-0 p-0" style={{display:'flex',justifyContent:'space-evenly',alignItems:"center",flexWrap:"wrap"}}>
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="col-12 col-md-6 col-lg-4 p-4"
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
                <Link to={post.link} className="text-decoration-none">
                  <motion.div
                    className="card h-100 border-0 shadow-sm overflow-hidden"
                    whileHover={{ y: -8 }}
                  >
                    <div className="ratio ratio-16x9 overflow-hidden">
                      <motion.img 
                        src={post.img} 
                        alt={post.title}
                        className="object-fit-cover w-100"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    <div className="card-body p-4">
                      <span className="badge bg-primary bg-opacity-10 text-primary mb-2">
                        {post.category || 'Technology'}
                      </span>

                      <h3 className="h5 fw-bold mb-3">{post.title}</h3>
                      <p className="text-muted mb-4">
                        {post.desc.length > 100 ? `${post.desc.substring(0, 100)}...` : post.desc}
                      </p>

                      <div className="d-flex align-items-center text-primary fw-medium">
                        Read more
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ms-2">
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