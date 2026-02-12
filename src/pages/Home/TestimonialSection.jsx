import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Bridal Client",
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    review:
      "My bridal makeup was dreamy. It enhanced my features so naturally — I felt confident and beautiful all day.",
    date: "December 2023",
  },
  {
    name: "Ritika Verma",
    role: "Regular Client",
    image:
      "https://cdn1.matadornetwork.com/blogs/1/2016/03/India4real.jpg",
    rating: 5,
    review:
      "The ambience, the staff, the detailing — everything feels luxurious and calming. My go-to beauty place now.",
    date: "January 2024",
  },
  {
    name: "Neha Kapoor",
    role: "Party Makeup",
    image:
      "https://www.gngmodels.com/wp-content/uploads/2025/05/DSC_5721-copy-a.jpg",
    rating: 5,
    review:
      "Absolutely loved the finesse. Makeup stayed flawless all night and felt super light on skin.",
    date: "February 2024",
  },
  {
    name: "Priya Singh",
    role: "Engagement Makeup",
    image:
      "https://www.shutterstock.com/image-photo/closeup-beauty-portrait-millennial-pretty-260nw-2379662977.jpg",
    rating: 5,
    review:
      "They truly understood my vision. The makeup was elegant, lasting, and perfectly matched my outfit.",
    date: "March 2024",
  },
  {
    name: "Shreya Patel",
    role: "Wedding Client",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBWDvW8T5quyeLd7zdxKKa68o-j6QrhGMdg&s",
    rating: 5,
    review:
      "Exceptional service from start to finish. The team made my wedding day absolutely perfect.",
    date: "April 2024",
  },
];

const TestimonialsSwiper = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* STATIC BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 bg-center bg-cover -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* SCROLLING CONTENT */}
      <div className="relative z-10 py-14">
        <div className="relative px-6 mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-[#B08D57]">
                Testimonials
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            <h2 className="mb-8 text-5xl font-light text-gray-900 md:text-6xl">
              <span className="font-serif italic text-[#B08D57]">Loved</span> by
              <span className="block font-semibold text-gray-900">
                Our Beautiful Clients
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Hear what our clients have to say about their beauty experience
            </p>
          </div>

          {/* SWIPER */}
          <div className="relative">
            {/* BIG QUOTE */}
            <div className="absolute -translate-x-1/2 pointer-events-none -top-10 left-1/2 opacity-5">
              <Quote className="w-72 h-72 text-[#D4AF37]" />
            </div>

            {/* DESKTOP ARROWS */}
            <div className="absolute right-0 z-10 hidden gap-3 lg:flex -top-6">
              <button className="testimonial-prev-custom w-14 h-14 rounded-full bg-white border shadow 
flex items-center justify-center 
hover:bg-[#D4AF37] hover:text-white transition">
  <ChevronLeft className="w-6 h-6" />
</button>

              <button className="testimonial-next-custom w-14 h-14 rounded-full bg-white border shadow 
flex items-center justify-center 
hover:bg-[#D4AF37] hover:text-white transition">
  <ChevronRight className="w-6 h-6" />
</button>

            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".testimonial-prev-custom",
                nextEl: ".testimonial-next-custom",
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col h-full p-10 bg-white border shadow-xl rounded-2xl">
                    <Quote className="w-8 h-8 mb-6 text-[#D4AF37]" />

                    <p className="flex-grow mb-10 text-lg italic text-gray-700">
                      "{item.review}"
                    </p>

                    <div className="pt-6 border-t">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600">{item.role}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                            <span className="text-sm font-medium text-[#B08D57]">
                              {item.rating}.0
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-gray-400">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* MOBILE ARROWS */}
            <div className="flex justify-center gap-4 mt-10 lg:hidden">
              <button className="w-12 h-12 bg-white border rounded-full shadow testimonial-prev-custom">
                <ChevronLeft />
              </button>
              <button className="w-12 h-12 bg-white border rounded-full shadow testimonial-next-custom">
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="mb-8 text-lg text-gray-600">
              Ready to experience luxury beauty services?
            </p>
            <button className="px-10 py-4 text-white rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B08D57] shadow-lg hover:scale-105 transition">
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSwiper;
