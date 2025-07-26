import React from 'react'
import headerbg from "../assets/images/header-bg.jpg";
import blogmainimg from "../assets/images/blog-detail-img-3-1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import blog1 from '../assets/images/blog-img-1.jpg';
import blog2 from '../assets/images/blog-img-2.jpg';
import blog3 from '../assets/images/blog-img-3.jpg';
import { Link } from 'react-router-dom';
import BlogSlider from './Blogslider';


const BlogDetails3 = () => {
       const sectionStyle = {
                background: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              };


              const blogs = [
                {
                  id: 1,
                  image: blog1,
                  link: '/blog-details-1',
                  title: 'Unlocking Growth: How IT Solutions Empower Small and Medium Businesses',
                  desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
                },
                {
                  id: 2,
                  image: blog2,
                  link: '/blog-details-2',
                  title: 'App Development: Native vs Cross-Platform – What’s Best for Your Business?',
                  desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
                },
                {
                  id: 3,
                  image: blog3,
                  link: '/blog-details-3',
                  title: 'Top Web Development Trends to Watch for in 2025',
                  desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
                },
                {
                    id: 1,
                    image: blog1,
                    link: '/blog-details-1',
                    title: 'Unlocking Growth: How IT Solutions Empower Small and Medium Businesses',
                    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
                  },
                  {
                    id: 2,
                    image: blog2,
                    link: '/blog-details-2',
                    title: 'App Development: Native vs Cross-Platform – What’s Best for Your Business?',
                    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
                  },
                  {
                    id: 3,
                    image: blog3,
                    link: '/blog-details-3',
                    title: 'Top Web Development Trends to Watch for in 2025',
                    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
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
        <div class="featured-image-wrap d-flex flex-column align-items-center mt-3">
            <img 
                src={blogmainimg} 
                alt="2025 Web Development Trends" 
                class="img-fluid rounded-4 border border-3 border-orange shadow"
                style={{maxHeight: "500px", objectFit: "cover"}}
                loading="lazy"
            />
        </div>

        <article class="blog-content d-flex flex-column pb-4 pb-md-5" style={{color: '#333'}}>
            <div class="intro-box p-4 mb-4 rounded-3"  style={{backgroundColor: '#fff8f0', borderLeft: '4px solid #e0a63b'}}>
                <p class="lead mb-0">As we move into 2025, the world of web development is evolving rapidly. From new technologies to user experience enhancements, staying on top of these trends can help businesses build more engaging, efficient, and innovative websites.</p>
            </div>
            
            <div class="trend-card p-4 mb-4 rounded-3"  style={{backgroundColor: '#fff', borderBottom: '3px solid #e0a63b'}}>
                <h3 class="d-flex align-items-center gap-2" style={{color:'black'}} >
                    <span class="trend-number rounded-circle d-flex align-items-center justify-content-center"  style={{width:"36px",height:"36px",backgroundColor:'#e0a63b',color:"white"}} >1</span>
                    <span>AI-Powered Websites</span>
                </h3>
                <p>Artificial Intelligence (AI) is set to revolutionize web development in 2025. AI tools are already being used to enhance user experiences through chatbots, personalized recommendations, and smart content generation.</p>
                <div class="example-box p-3 mt-3 rounded-2" style={{backgroundColor: '#f8f9fa', borderLeft: '3px solid #ffa057'}}>
                    <p class="mb-0"><b style={{color:"#e0a63b"}}>Example:</b> Websites like Amazon use AI for product recommendations based on browsing history and purchasing patterns, offering a personalized shopping experience.</p>
                </div>
            </div>

            <div class="trend-card p-4 mb-4 rounded-3" style={{backgroundColor: '#fff', borderBottom: '3px solid #e0a63b'}}>
                <h3 class="d-flex align-items-center gap-2"  style={{color:'black'}}>
                    <span class="trend-number rounded-circle d-flex align-items-center justify-content-center" style={{width:"36px",height:'36px',backgroundColor:"#e0a63b",color:"white"}} >2</span>
                    <span>Progressive Web Apps (PWAs)</span>
                </h3>
                <p>PWAs combine the best of web and mobile apps, offering users a fast, reliable, and engaging experience. Unlike traditional websites, PWAs can work offline and load quickly, even on slow networks.</p>
                <div class="example-box p-3 mt-3 rounded-2"  style={{backgroundColor: '#f8f9fa', borderLeft: '3px solid #ffa057'}}>
                    <p class="mb-0"><b  style={{color:"#e0a63b"}}>ample:</b> Twitter Lite is a PWA that delivers a fast and reliable experience for users in areas with slow internet connections.</p>
                </div>
            </div>

            <div class="trend-card p-4 mb-4 rounded-3"  style={{backgroundColor: '#fff', borderBottom: '3px solid #e0a63b',color:'black'}}>
                <h3 class="d-flex align-items-center gap-2" >
                    <span class="trend-number rounded-circle d-flex align-items-center justify-content-center"  style={{width:'36px',height:'36px',color:'white',backgroundColor:'#e0a63b'}}>3</span>
                    <span  style={{color:"black"}}>Voice Search Optimization</span>
                </h3>
                <p>Voice search is becoming increasingly popular, with devices like Alexa, Siri, and Google Assistant becoming a part of everyday life. By 2025, more users will interact with websites using voice commands.</p>
                <div class="example-box p-3 mt-3 rounded-2"  style={{backgroundColor: '#f8f9fa', borderLeft: '3px solid #ffa057'}}>
                    <p class="mb-0"><b  style={{color:"#e0a63b"}}>Example:</b> If you ask Google or Siri to find "best Italian restaurants near me," they will provide direct links to websites optimized for voice search.</p>
                </div>
            </div>


            <div class="conclusion-box p-4 mt-4 rounded-3" style={{backgroundColor: '#fff8f0', borderTop: '3px solid #e0a63b'}}>
                <h4 style={{color:"#e0a63b"}}>Conclusion</h4>
                <p>As technology continues to evolve, so too must the way we build and interact with websites. By staying ahead of these top web development trends for 2025, businesses can provide better user experiences, optimize performance, and create more innovative digital solutions.</p>
                <button class="btn mt-3 px-4 py-2"  style={{backgroundColor:"#e0a63b",color:"white",border:"none",borderRadius:"30px"}}>
                    Learn How to Implement These Trends
                </button>
            </div>
        </article>
    </div>
</section>




          <BlogSlider/>

    
    </>

  )
  
}



export default BlogDetails3