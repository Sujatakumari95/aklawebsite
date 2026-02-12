import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
  {
    title: "About Alika",
    description:
      "Alika is a passionate makeup artist known for enhancing natural beauty with elegant and flawless looks. Her work reflects creativity, precision, and a deep understanding of individual styles.",
  },
  {
    title: "Professional Makeup Services",
    description:
      "From bridal and party makeup to editorial and special occasions, Alika creates personalized looks that complement your features, outfit, and personality.",
  },
  {
    title: "Experience & Trust",
    description:
      "With hands-on experience and a client-focused approach, Alika ensures every client feels confident, comfortable, and beautiful on their special day.",
  },
];

const MakeupArtistSection = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5)), url('https://i.pinimg.com/1200x/82/66/84/826684acf14f6b80ff309a66b4f492c4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* RIGHT SIDE IMAGE */}
      <motion.img
        src="/assets/images/Artist/artist-img-1.png"
        alt="Salon"
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute right-12 top-5 bottom-0 -translate-y-1/2 z-20 hidden w-[380px] lg:block rounded-2xl "
      />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-12 text-4xl font-bold text-white"
        >
          Enhancing Your Special Moments with{" "}
          <span className=" bg-gradient-to-r
  from-[#f1d225]
  via-[#fff3a0]
  to-[#caa600]
  bg-clip-text
  text-transparent
  font-bold
  drop-shadow-md ">Alika</span>
        </motion.h2>

        {/* CONTENT BOX */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ 
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-rose-400 !opacity-60",
              bulletActiveClass: "!opacity-100 !w-8 !rounded-full"
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            className="pb-14"
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-10 transition-shadow duration-300 border border-gray-100 shadow-2xl bg-gradient-to-r
  from-[#f1d225]
  via-[#fff3a0]
  to-[#caa600] rounded-2xl hover:shadow-2xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-3 h-8 rounded-full bg-gradient-to-b from-rose-400 to-pink-500" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="pr-8 text-lg leading-relaxed text-gray-800 md:pr-32 lg:pr-36 ">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default MakeupArtistSection;