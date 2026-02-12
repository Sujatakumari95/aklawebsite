import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  {
    img: "https://i.pinimg.com/1200x/59/a3/34/59a334624ce6f7715e2d11840e80c868.jpg",
    title: "Bridal Makeup",
    category: "Makeup",
  },
  {
    img: "https://i.pinimg.com/1200x/68/54/0a/68540a244b3b0735d41d3588908411e2.jpg",
    title: "Party Makeup",
    category: "Makeup",
  },
  {
    img: "https://i.pinimg.com/736x/8a/a3/2c/8aa32c9529f976a6c8dcd1644bb8081a.jpg",
    title: "Hair Styling",
    category: "Hair",
  },
  {
    img: "https://i.pinimg.com/736x/e9/89/2b/e9892bf1ca5ee8cb5ba32cfc6ab6b92d.jpg",
    title: "Hair Cut",
    category: "Hair",
  },
  {
    img: "https://i.pinimg.com/736x/56/74/48/567448d37281ec365cfdda8247b1f0b8.jpg",
    title: "Engagement Look",
    category: "Makeup",
  },
  {
    img: "https://i.pinimg.com/736x/29/51/6e/29516e430bfe5964ac4d02d80296faee.jpg",
    title: "Hair Spa & Relaxation",
    category: "Spa",
  },
];

export default function GallerySection() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
   <section
  className="w-full py-10"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/1200x/82/66/84/826684acf14f6b80ff309a66b4f492c4.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <div className="px-4 mx-auto ">
        {/* Heading */}
        <div className="relative mb-12 text-center">
          <div className="absolute top-0 -translate-y-1/2 right-10 slate-x-1/2 righttransform left-1/2">
             <Sparkles className="absolute w-8 h-8 text-pink-400 -translate-x-1/2 -top-2 left-1/3" />
          </div>
          <h2 className="mb-4 text-5xl  text-white font-playfair  bg-gradient-to-r
  from-[#f1d225]
  via-[#fff3a0]
  to-[#caa600]
  bg-clip-text
  text-transparent
  font-bold
  drop-shadow-md">
            Our Beauty Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white">
            Explore our stunning transformations and beauty masterpieces
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"></div>
          </div>
        </div>

        {/* Gallery Container */}
        <div className="relative px-2">
          {/* Navigation Arrows */}
          <div className="absolute top-0 right-0 z-20 flex gap-3 -translate-y-1/2">
            <button className="flex items-center justify-center w-12 h-12 transition-all duration-300 border border-pink-200 rounded-full shadow-lg bg-gradient-to-r from-pink-50 to-white gallery-prev hover:shadow-xl hover:scale-105 hover:-translate-x-1 active:scale-95">
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 transition-all duration-300 border border-pink-200 rounded-full shadow-lg bg-gradient-to-r from-pink-50 to-white gallery-next hover:shadow-xl hover:scale-105 hover:translate-x-1 active:scale-95">
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".gallery-prev",
                nextEl: ".gallery-next",
              }}
              autoplay={{ 
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop
              spaceBetween={28}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="pb-12"
              onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
              {galleryImages.map((item, index) => (
                <SwiperSlide key={index}>
                  {/* Card Container */}
                  <div className="relative overflow-hidden transition-all duration-500 shadow-xl group rounded-2xl hover:shadow-2xl ">
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-[380px]">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-700 "
                      />
                      
                      {/* Gradient Overlay - Only on hover */}
                      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:opacity-100" />
                      
                      {/* Text - ONLY VISIBLE ON HOVER */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="mb-2 text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute -inset-[120px] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-25 animate-shine" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
      </div>

      {/* Shine Animation */}
      <style jsx>{`
        .animate-shine {
          animation: shine 1.4s ease-in-out forwards;
        }
        @keyframes shine {
          from {
            transform: translateX(-100%) translateY(-100%) rotate(25deg);
          }
          to {
            transform: translateX(100%) translateY(100%) rotate(25deg);
          }
        }
      `}</style>
    </section>
  );
}