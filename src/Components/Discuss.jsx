import React from 'react';
import CommonButton from './CommonButton';

const Discuss = () => {
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
            <CommonButton to="/contact" className="cta black-cta">
              SCHEDULE A CALL
            </CommonButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discuss;
