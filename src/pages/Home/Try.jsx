import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BrandSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
const navigationPrevRef = useRef(null);
const navigationNextRef = useRef(null);

  const swiperRef = useRef(null);
  
  // Brand data - images only
  const brands = [
    {
      id: 1,
      logo: "https://cdn.worldvectorlogo.com/logos/apple-1.svg",
    },
    {
      id: 2,
      logo: "https://cdn.worldvectorlogo.com/logos/nike-6.svg",
    },
    {
      id: 3,
      logo: "https://cdn.worldvectorlogo.com/logos/samsung-2.svg",
    },
    {
      id: 4,
      logo: "https://cdn.worldvectorlogo.com/logos/adidas-2021.svg",
    },
    {
      id: 5,
      logo: "https://cdn.worldvectorlogo.com/logos/sony-3.svg",
    },
    {
      id: 6,
      logo: "https://cdn.worldvectorlogo.com/logos/lenovo.svg",
    },
    {
      id: 7,
      logo: "https://cdn.worldvectorlogo.com/logos/dell-4.svg",
    },
    {
      id: 8,
      logo: "https://cdn.worldvectorlogo.com/logos/hp-1.svg",
    },
    {
      id: 9,
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
    },
    {
      id: 10,
      logo: "https://cdn.worldvectorlogo.com/logos/intel-9.svg",
    },
    {
      id: 11,
      logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
    },
    {
      id: 12,
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg",
    }
  ];

  useEffect(() => {
  if (
    swiperRef.current &&
    navigationPrevRef.current &&
    navigationNextRef.current
  ) {
    swiperRef.current.params.navigation.prevEl =
      navigationPrevRef.current;
    swiperRef.current.params.navigation.nextEl =
      navigationNextRef.current;

    swiperRef.current.navigation.destroy();
    swiperRef.current.navigation.init();
    swiperRef.current.navigation.update();
  }
}, []);


  

  return (
    <div className="flex items-center justify-center px-4 py-8 bg-gradient-to-br sm:px-6 lg:px-8"
     style={{
    backgroundImage:
      "url('https://i.pinimg.com/1200x/ff/70/32/ff70321736078040390bc20295269a5e.jpg'    )",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      <div className="w-full max-w-7xl">
        {/* Heading Section */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl  bg-gradient-to-r
  from-[#f1d225]
  via-[#fff3a0]
  to-[#caa600]
  bg-clip-text text-transparent 
  font-bold
  drop-shadow-md  md:text-5xl">
            Premium Brands We Use
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Swiper Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
  spaceBetween={20}
  loop
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={800}
  navigation={{
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  }}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
           
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
            className="pb-12"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="px-2 py-3">
                  <BrandImageCard brand={brand} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* LEFT ARROW */}
<button
  ref={navigationPrevRef}
  className="absolute left-0 z-10 items-center justify-center hidden w-12 h-12 transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full shadow-xl lg:flex top-1/3 hover:bg-green-800 hover:text-white hover:scale-110 group"
  aria-label="Previous slide"
>
  <FaArrowLeft className="text-xl text-blue-600 transition-colors group-hover:text-white" />
</button>

{/* RIGHT ARROW */}
<button
  ref={navigationNextRef}
  className="absolute right-0 z-10 items-center justify-center hidden w-12 h-12 transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full shadow-xl lg:flex top-1/3 hover:bg-green-800 hover:text-white hover:scale-110 group"
  aria-label="Next slide"
>
  <FaArrowRight className="text-xl text-blue-600 transition-colors group-hover:text-white" />
</button>


      

          {/* Custom Pagination */}
          <div className="flex justify-center gap-2 mt-8 brand-pagination"></div>
        </div>
      </div>
    </div>
  );
};

// Brand Image Card Component - Images only
const BrandImageCard = ({ brand }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div
      className={`relative  bg-white rounded-xl shadow-lg p-4 h-48 w-full flex items-center justify-center transition-all duration-500 ${
        isCardHovered 
          ? 'shadow-2xl transform -translate-y-2 border-2 border-blue-500' 
          : 'border-2 border-transparent'
      }`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* Hover Border Effect */}
      <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
        isCardHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="absolute inset-[2px] rounded-xl bg-white"></div>
      </div>

      {/* Brand Logo Image */}
      <div className="relative z-10 flex items-center justify-center w-full h-full p-3">
        <img
          src={brand.logo}
          alt={`Brand logo ${brand.id}`}
          className={`max-w-full max-h-full object-contain transition-all duration-500 ${
            isCardHovered 
              ? 'filter-none transform scale-110' 
              : 'grayscale-[15%] opacity-90'
          }`}
        />
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-opacity duration-300 ${
        isCardHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default BrandSlider;