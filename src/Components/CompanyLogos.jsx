import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css"; // ✅ required
// ❌ remove this: import "swiper/css/autoplay"; (no such file)
import oppo from "../assets/images/oppo.png"
import lnt from "../assets/images/lnt.png"
import weighrot from  "../assets/images/weil.png"
import tata from  "../assets/images/tata.png"




const brandLogos = [
  {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
  {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
  {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },
    {
    img: oppo,
    alt: "oppo",
  },
  {
    img: lnt,
    alt: "L&T",
  },
  {
    img: weighrot,
    alt: "weichert",
  },
  {
    img: tata,
    alt: "TATA",
  },

];

const CompanyLogos = () => {
  return (
    <section className="brands-section">
      <div className="container">
 <Swiper
  slidesPerView={2}
  spaceBetween={20}
  loop={true}
  speed={900}
  autoplay={{
    delay: 1200,
    disableOnInteraction: false,
  }}
  breakpoints={{
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  }}
  modules={[Autoplay]}
>

          {brandLogos.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brands-logo">
                <a href={brand.link} target="_blank" rel="noreferrer">
                  <img src={brand.img} alt={brand.alt} loading="lazy" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompanyLogos;
