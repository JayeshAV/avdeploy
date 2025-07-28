import React from 'react'
import headerbg from "../assets/images/header-bg.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Blogmain from '../assets/images/blog-detail-img-1.jpg'
import blog1 from '../assets/images/blog-img-1.jpg';
import blog2 from '../assets/images/blog-img-2.jpg';
import blog3 from '../assets/images/blog-img-3.jpg';
import { Link } from 'react-router-dom';
import Blog from '../Pages/Blog';
import BlogSlider from './Blogslider';

const BlogDetails1 = () => {
     const sectionStyle = {
        background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    
      const blogData = [
        {
          id: 1,
          img: blog1,
          title: 'Unlocking Growth: How IT Solutions Empower Small and Medium Businesses',
          desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations...',
          link: '/blog-details-1'
        },
        {
          id: 2,
          img: blog2,
          title: 'App Development: Native vs Cross-Platform – What’s Best for Your Business?',
          desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations...',
          link: '/blog-details-2'
        },
        {
          id: 3,
          img: blog3,
          title: 'Top Web Development Trends to Watch for in 2025',
          desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations...',
          link: '/blog-details-3'
        },
        {
            id: 3,
            img: blog3,
            title: 'Top Web Development Trends to Watch for in 2025',
            desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations...',
            link: '/blog-details-3'
          }
      ];
  return (
   <>
  <section class="section-hero section-blog-hero" style={sectionStyle}>
        <div class="container mw-1000px d-flex flex-column gap-3 gap-md-5">
            <div class="d-flex flex-column">
                <h1 class="text-center">Unlocking Growth: How IT Solutions Empower Small and Medium Businesses</h1>
            </div>
        </div>
    </section> 

<section class="section section-blog-content" >
    <div class="container mw-1000px d-flex flex-column gap-4 gap-md-5">
        <div class="featured-image-wrap d-flex flex-column align-items-center mt-0">
            <img 
                src={Blogmain} 
                alt="Avatara Technobiz digital transformation solutions" 
                loading="lazy"
                class="rounded-3 shadow-lg"
                style={{maxHeight: '500px',objectFit: 'cover'}}
            />
        </div>

        <article class="blog-content d-flex flex-column pb-4 pb-md-5" itemscope itemtype="https://schema.org/BlogPosting">
            <meta itemprop="datePublished" content="2025-07-23"/>
            <meta itemprop="author" content="Avatara Technobiz"/>
            
            <p class="lead fs-4 mb-4">
                In today's fast-paced digital world, technology is no longer a luxury reserved for large corporations. 
                <span class="highlight-text">Historically expensive IT solutions are now accessible to SMBs</span> through 
                cloud computing, subscription models, and user-friendly platforms.
            </p>

            <section class="blog-section" aria-labelledby="productivity-heading">
                <h3 id="productivity-heading" class="section-title d-flex align-items-center gap-2">
                    <span class="icon-circle"><i class="bi bi-robot"></i></span>
                    <span>Enhanced Productivity Through Automation</span>
                </h3>
                
                <p>One of the greatest advantages of IT solutions is the ability to automate routine tasks:</p>
                
                <ul class="modern-list">
                    <li><i class="bi bi-check-circle-fill text-success"></i> Streamlining payroll processing for accurate payments</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> Automated appointment scheduling to reduce no-shows</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> AI-powered email responses for common inquiries</li>
                    <li><i class="bi bi-check-circle-fill text-success"></i> Scheduled marketing campaigns across channels</li>
                </ul>

                <div class="example-card p-4 my-3 bg-light rounded-3">
                    <h5 class="d-flex align-items-center gap-2">
                        <i class="bi bi-lightbulb"></i>
                        <span>Real-world Implementation</span>
                    </h5>
                    <p>Retailers using automated inventory systems can reduce stockouts by 65% while cutting carrying costs by 30% (Gartner, 2024). AI-powered CRM systems now predict customer needs with 89% accuracy.</p>
                </div>

                <div class="tools-showcase mt-4">
                    <h6>Recommended 2025 Tools:</h6>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="tool-badge">QuickBooks AI</span>
                        <span class="tool-badge">Xero Automation</span>
                        <span class="tool-badge">Salesforce Einstein</span>
                        <span class="tool-badge">HubSpot AI</span>
                    </div>
                </div>
            </section>

            <section class="blog-section" aria-labelledby="collaboration-heading">
                <h3 id="collaboration-heading" class="section-title d-flex align-items-center gap-2">
                    <span class="icon-circle"><i class="bi bi-people-fill"></i></span>
                    <span>Next-Gen Communication and Collaboration</span>
                </h3>
                
                <p>2025 collaboration tools go beyond basic video calls:</p>
                
                <div class="features-grid row g-3 my-3">
                    <div class="col-md-6">
                        <div class="feature-card h-100 p-3 rounded-3">
                            <i class="bi bi-cpu"></i>
                            <h6>AI Meeting Assistants</h6>
                            <p>Real-time transcription, action item extraction, and sentiment analysis during calls</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-card h-100 p-3 rounded-3">
                            <i class="bi bi-braces"></i>
                            <h6>Low-Code Workflows</h6>
                            <p>Drag-and-drop automation between apps without developer resources</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog-section" aria-labelledby="cloud-heading">
                <h3 id="cloud-heading" class="section-title d-flex align-items-center gap-2">
                    <span class="icon-circle"><i class="bi bi-cloud-arrow-up"></i></span>
                    <span>Cost Optimization with Edge Computing</span>
                </h3>
                
                <p>2025 cloud strategies blend centralized and edge computing:</p>
                
                <div class="comparison-table mt-4">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Solution</th>
                                <th>Cost Savings</th>
                                <th>Latency Improvement</th>
                                <th>2025 Adoption</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hybrid Cloud</td>
                                <td>35-45%</td>
                                <td>20%</td>
                                <td>68%</td>
                            </tr>
                            <tr>
                                <td>Edge Computing</td>
                                <td>50-60%</td>
                                <td>75%</td>
                                <td>42%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="blog-section" aria-labelledby="security-heading">
                <h3 id="security-heading" class="section-title d-flex align-items-center gap-2">
                    <span class="icon-circle"><i class="bi bi-shield-lock"></i></span>
                    <span>Quantum-Resistant Security</span>
                </h3>
                
                <p>2025 security requirements address post-quantum cryptography:</p>
                
                <div class="security-timeline mt-4">
                    <div class="timeline-item">
                        <div class="timeline-date">2024</div>
                        <div class="timeline-content">
                            <h6>NIST PQC Standardization</h6>
                            <p>Finalization of post-quantum cryptographic algorithms</p>
                        </div>
                    </div>
                    <div class="timeline-item current">
                        <div class="timeline-date">2025</div>
                        <div class="timeline-content">
                            <h6>Enterprise Migration Begins</h6>
                            <p>Early adopters implement quantum-resistant protocols</p>
                        </div>
                    </div>
                </div>
            </section>
             

            <div class="cta-section mt-5 p-4 p-md-5 rounded-4 bg-gray border-1 text-white " style={{background: `linear-gradient(to right, rgba(34, 33, 33, 0.4), rgba(51, 42, 29, 0.4)), url(${headerbg})`, backgroundSize: 'cover',
                                   backgroundPosition: 'center',
                                   backgroundRepeat: 'no-repeat' ,boxShadow:'5px 5px 25px gray'}} >
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h4 class="mb-3">Ready for 2025 Digital Transformation?</h4>
                        <p class="mb-md-0">Our AI-powered IT solutions can future-proof your business with quantum-resistant security, edge computing, and next-gen automation.</p>
                    </div>
                    <div class="col-md-4 text-md-end">
                        <button class="btn btn-light btn-lg px-4 py-3 rounded-pill pulse-animation">
                            Schedule Free Tech Audit <i class="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    </div>
</section>

{/*     
    <!-- Blogs --> */}
    {/* <section className="section section-home section-blog bg-gray pb-15">
      <div className="container flex flex-col gap-4">
        <h2 className="mb-2    ts-0 text-center" style={{fontSize: '35px'}}>Related Topics</h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-2',
              prevEl: '.swiper-button-prev-2',
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id} className="p-2 d-flex h-100">
                <Link
              to={blog.link}
              className="blog-item border bg-white d-flex flex-column p-3 w-100 h-100"
              style={{ minHeight: "100%", height: "100%" }}
            >
                  <img src={blog.img} alt={blog.title} className="img-fluid w-100"
                  style={{ height: "200px", objectFit: "cover", borderRadius: "8px" }} />
                  <div className="d-flex flex-column justify-content-between flex-grow-1" >
                    <h5 className="mb-2 mt-2 text-truncate">{blog.title}</h5>
                    <p className="text-muted mb-0 text-truncate-3">{blog.desc}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev swiper-button-prev-2" />
          <div className="swiper-button-next swiper-button-next-2" />
        </div>
      </div>
    </section> */}
    <BlogSlider />


   </>
  )
}

export default BlogDetails1


