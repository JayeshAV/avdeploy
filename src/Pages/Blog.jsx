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

    <motion.section
  className="section-hero"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="hero-container">
    <div className="hero-content">
      <h2>Our Latest Blogs</h2>
      <p>
       Stay updated with the latest industry trends, expert insights, and
              company updates.
      </p>
    </div>
  </div>
</motion.section>



      <section className="blog-posts">
        <div className="sub-posts">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="blog-posts-header"
        >
          <h2>Insights & Innovations</h2>
          <p>
            Discover our latest thinking on design, technology and business transformation
          </p>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className={`blog-card-wrapper ${index === 0 ? 'featured' : ''}`}
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
              <Link to={post.link} className="blog-card-link">
                <motion.div
                  className="blog-card"
                  whileHover={{ y: -8 }}
                >
                  {index === 0 && <div className="featured-badge">Featured</div>}

                  <div className="blog-card-image">
                    <motion.img 
                      src={post.img} 
                      alt={post.title}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <div className="blog-card-content">
                    <span className="blog-category">
                      {post.category || 'Technology'}
                    </span>

                    <h3>{post.title}</h3>
                    <p>
                      {post.desc.length > 100 ? `${post.desc.substring(0, 100)}...` : post.desc}
                    </p>

                    <div className="read-more">
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
