import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [

{
  message:
    "Rajan understood our requirements clearly and delivered the project with a professional approach.",
  quote:
    "The communication throughout the project was smooth, and the final product matched our requirements. He was responsive to our feedback and made the necessary improvements during development.",
  name: "Rahul",
  designation: "AwastraX SMM Panel",
},
{
  message:
    "The project was delivered with good attention to functionality and user experience.",
  quote:
    "Working with Rajan was a good experience. He handled the development and technical requirements properly and was available when we needed updates or changes.",
  name: "Krishna",
  designation: "E-Commerce",
}

];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 pt-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
