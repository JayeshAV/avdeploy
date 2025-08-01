// src/components/Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const styles = {
    section: {
      marginTop:"80px" ,
      backgroundColor: '#F0F4FF',
fontFamily: 'Montserrat, sans-serif' 
    },
    statsNumber: {
      fontSize: '4rem',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '10px',
      lineHeight: '1'
    },
    statsTitle: {
      fontSize: '1.8rem',
      color: '#2c3e50',
      fontWeight: '600'
    },
   testimonialCard: {
  background: 'white',
  borderRadius: '12px',
  padding: '30px',
  minHeight: '300px', 
  maxHeight: '400px', 
  height: 'auto', 
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between' 
},
    testimonialCardHover: {
      transform: 'translateY(-5px)'
    },
    testimonialMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '15px',
      color: '#7f8c8d',
      fontSize: '0.9rem'
    },
    testimonialText: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#34495e',
      marginBottom: '25px',
      fontStyle: 'italic'
    },
    clientInfo: {
      borderTop: '1px solid #ecf0f1',
      paddingTop: '20px'
    },
    stars: {
      color: '#f39c12',
      fontSize: '1.2rem',
      marginBottom: '8px'
    },
    clientName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '5px',
      color: '#2c3e50'
    },
    clientPosition: {
      fontSize: '0.9rem',
      color: '#7f8c8d',
      margin: '0'
    },
    userStats: {
      fontSize: '1.4rem',
      color: '#2c3e50',
      marginBottom: '30px',
      fontWeight: '600'
    },
    ctaPrimary: {
      backgroundColor: 'rgb(224, 166, 59)',
      color: 'white',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
  
    ctaSecondary: {
      backgroundColor: 'transparent',
      color: 'rgb(224, 166, 59)',
      border: '2px solid gray',
      padding: '10px 30px',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    ctaSecondaryHover: {
      backgroundColor: '#f8f9fa'
    }
  };

const testimonials = [
  {
    text: "The team did a great job developing our product that can be scaled across categories and geographies. Whether it was providing direct development support or giving us suggestions to make features better/scalable, their work was top notch! Highly Recommended.",
    name: "Amr Noureldin",
    position: "Development Lead, Munich, Germany",
    rating: 5
  },
  {
    text: "Working with Avatara Technobiz was so amazing. They not only understand your needs and wants, but can execute it in an amazing way. Being a small business owner, it's invaluable to work with a company that is fair, honest, and understands your needs. Look no further, I will be using them again in the future.",
    name: "Hiranmoy Talukdar",
    position: "CEO, Trishita Enterprises",
    rating: 5
  },
  {
    text: "Avatara Technobiz is a budget- and timeline-oriented team. Their dedicated work ethic and expertise have resulted in innovative solutions that brim with marketable and customer-oriented potentials.",
    name: "Richard Cruz",
    position: "Project Owner, WSI Priority Media",
    rating: 5
  },
  {
    text: "Avatara Technobiz team has been doing the job that needs to be done rather than just trying to make a profit. They have remained engaged and responsive throughout the partnership & wish this business relations continues to grow together.",
    name: "Damith Weerakoon",
    position: "Director of Sales, Damithmb",
    rating: 5
  },
  { 
    text: "We started small, but Avatara Technobiz has consistently exceeded our expectations and continues to support our app post-development without overcharging. They have been a great value, and we highly recommend them.",
    name: "Swapnil Doijode",
    position: "Marketing Head, OPPO",
    rating: 5
  }
];


  return (
    <section style={styles.section} className="py-5">
      <div className="container">
        <div className="text-center">

  
 
          <h2 className='case-heading'>Whats <span style={{color:"#e0a63b"}}> Our Valuable Clients</span> Say About Us</h2>
        <p 
           className=" text-center mb-0  sub-titles-text case-subtitle w-100"
          
         >
   We appreciate our clients' trust and take pride in exceeding expectations. See their feedback
         </p>   
        </div>

        <div className="testimonials-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3500 }}
            breakpoints={{
              768: {
                slidesPerView: 1
              }
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div 
                  style={styles.testimonialCard} 
                  className="testimonial-card"
                  onMouseEnter={e => e.currentTarget.style.transform = styles.testimonialCardHover.transform}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
              
                  <p style={styles.testimonialText} className="mb-4">"{testimonial.text}"</p>
                  <div style={styles.clientInfo} className="client-info">
                    <div style={styles.stars} className="stars">★★★★★</div>
                    <h4 style={styles.clientName} className="mb-1">{testimonial.name}</h4>
                    <p style={styles.clientPosition} className="mb-0">{testimonial.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

   
      </div>
    </section>
  );
};

export default Testimonials;