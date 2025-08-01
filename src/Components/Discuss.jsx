import React, { useState } from 'react';
import CommonButton from './CommonButton';
import headerbg from "../assets/images/header-bg.jpg";


const Discuss = () => {
  const [hovered, setHovered] = useState(false);


    const spanStyle = {
    backgroundImage: hovered
      ? 'none'
      : `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerbg})`,
    backgroundColor: hovered ? 'white' : 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'inline-block',
    padding: '12px 15px',
    color: hovered ? 'black' : 'white',
    borderRadius: '4px',
    fontWeight: '800',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };
  return (
    <section className="avia-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="section-heading">
            <h2 className="title-white">Let’s Discuss Your Project</h2>
          </div>
          <div className="sub-heading">
            <p className='sub-titles-text'>
              Get free consultation and let us know your project idea to turn it into an amazing digital product.
            </p>
          </div>
     <div className="avia-button-wrap">
  <CommonButton to="/contact" className=" ">
    <span
  style={spanStyle}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  SCHEDULE A CALL
</span>

  </CommonButton>
</div>
          {/* <div className="avia-button-wrap">
            <CommonButton to="/contact" className="cta black-cta">
              SCHEDULE A CALL
            </CommonButton>
          </div> */}

          
        </div>
      </div>
    </section>
  );
};

export default Discuss;
