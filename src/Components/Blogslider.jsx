import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import blogImg1 from '../assets/images/blog-img-1.jpg';
import blogImg2 from '../assets/images/blog-img-2.jpg';
import blogImg3 from '../assets/images/blog-img-3.jpg';
import { motion } from 'framer-motion';

const blogData = [
  {
    img: blogImg1,
    title: 'Unlocking Growth: How IT Solutions Empower Small and Medium Businesses',
    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
    link: '/blog-details-1'
  },
  {
    img: blogImg2,
    title: 'App Development: Native vs Cross-Platform – What’s Best for Your Business?',
    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
    link: '/blog-details-2'
  },
  {
    img: blogImg3,
    title: 'Top Web Development Trends to Watch for in 2025',
    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
    link: '/blog-details-3'
  },
  {
    img: blogImg1,
    title: 'Unlocking Growth: How IT Solutions Empower Small and Medium Businesses',
    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
    link: '/blog-details-1'
  },
  {
    img: blogImg2,
    title: 'App Development: Native vs Cross-Platform – What’s Best for Your Business?',
    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
    link: '/blog-details-2'
  },
  {
    img: blogImg3,
    title: 'Top Web Development Trends to Watch for in 2025',
    desc: 'In today\'s fast-paced digital world, technology is no longer a luxury reserved for large corporations. Historically, implementing IT...',
    link: '/blog-details-3'
  }
];

const BlogSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const updateNavButtons = () => {
      const swiper = swiperRef.current?.swiper;
      if (!swiper) return;

      const prevBtn = document.querySelector('.blog-swiper-prev');
      const nextBtn = document.querySelector('.blog-swiper-next');

      if (prevBtn) prevBtn.style.opacity = swiper.isBeginning ? '0' : '1';
      if (nextBtn) nextBtn.style.opacity = swiper.isEnd ? '0' : '1';
    };
    setTimeout(updateNavButtons, 1000);
  }, []);

  return (
    <section
      className="section section-blog"
      style={{
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Montserrat, sans-serif',
        width: '100%',
        maxWidth: '1400px',
        margin: 'auto',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}
    >

      <div className="container" style={{ zIndex: 1, position: 'relative' ,width:"93%",marginTop:"80px"}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className='case-heading'>
            Our Latest Blogs
          </h2>
          <p className='case-subtitle mx-auto'>
            Discover insights and innovations that shape the digital landscape. Our thoughts on design, technology and business transformation.
          </p>
        </motion.div>

        <div className="position-relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.blog-swiper-next',
              prevEl: '.blog-swiper-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={false}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              const prevBtn = document.querySelector('.blog-swiper-prev');
              const nextBtn = document.querySelector('.blog-swiper-next');

              if (prevBtn) prevBtn.style.opacity = swiper.isBeginning ? '0' : '1';
              if (nextBtn) nextBtn.style.opacity = swiper.isEnd ? '0' : '1';
            }}
            breakpoints={{
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10 mb-5"
            style={{width:'98%'}}
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%' }}
                >
                  <Link to={blog.link} className="d-block text-decoration-none">
                    <div style={{
                      background: 'white',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      border: '1px solid rgba(0,0,0,0.03)',
                      transition: 'all 0.3s ease',
                      height: '100%',
                    }}>
                      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                        <img
                          src={blog.img}
                          alt={blog.title}
                          className="w-100 h-100 object-cover"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '60%',
                          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                        }} />
                        <span style={{
                          position: 'absolute',
                          top: '16px',
                          left: '16px',
                          backgroundColor: '#f59e0b',
                          color: '#111827',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600',
                          zIndex: 2
                        }}>
                          {blog.category || 'Technology'}
                        </span>
                      </div>

                      <div className="p-4 d-flex flex-column" style={{ height: 'auto' }}>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <small style={{ color: '#6b7280' }}>Jul 24, 2025</small>
                          <span style={{ color: '#6b7280' }}>•</span>
                          <small style={{ color: '#6b7280' }}>5 min read</small>
                        </div>

                        <h3 className="h5 mb-2" style={{ color: '#111827', flex: 1 }}>{blog.title}</h3>
                        <p style={{ color: '#6b7280', fontSize: '15px' }}>
                          {blog.desc.length > 120 ? `${blog.desc.substring(0, 120)}...` : blog.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="blog-swiper-prev swiper-button-prev" style={{ opacity: 0 }}></div>
          <div className="blog-swiper-next swiper-button-next" style={{ opacity: 1 }}></div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
