import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css"; // ✅ required
// ❌ remove this: import "swiper/css/autoplay"; (no such file)


const brandLogos = [
  {
    img: "https://www.bigscal.com/wp-content/uploads/2023/03/bs-client-Walmart.webp",
    alt: "hubfleet",
  },
  {
    img: "https://www.bigscal.com/wp-content/uploads/2023/03/bs-client-BigInterview.webp",
    alt: "awakenedmind",
  },
  {
    img: "https://www.bigscal.com/wp-content/uploads/2023/03/bs-client-OpenCosmos.webp",
    alt: "growcurriculum",
  },
  {
    img: "https://www.bigscal.com/wp-content/uploads/2024/10/sbi-pantion-funds.webp",
    alt: "quicksolveplus",
  },
  {
    img: "https://www.bigscal.com/wp-content/uploads/2023/03/bs-client-one-RPM.webp",
    alt: "cami-app",
  },
   {
    img: "https://www.bigscal.com/wp-content/uploads/2023/03/bs-client-one-RPM.webp",
    alt: "cami-app",
  },
   {
    img: "https://www.bigscal.com/wp-content/uploads/2023/03/bs-client-one-RPM.webp",
    alt: "cami-app",
  },
   {
    img: "https://www.bigscal.com/wp-content/uploads/2023/03/bs-client-one-RPM.webp",
    alt: "cami-app",
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
  speed={800}
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
