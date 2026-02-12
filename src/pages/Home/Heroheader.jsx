import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://i.pinimg.com/1200x/50/3d/bc/503dbc9ee3e8714125f7fafe1146d3c2.jpg",
    title: "Reveal Your Inner Glow",
    subtitle: "Luxury Makeup & Beauty Studio",
  },
  {
    image:
      "https://i.pinimg.com/1200x/33/b0/2c/33b02c1c16cb7101ca5fb6012837d8d7.jpg",
    title: "Bridal Makeup Perfection",
    subtitle: "Because Every Bride Deserves Magic",
  },
  {
    image:
      "https://i.pinimg.com/1200x/89/79/96/89799649bb2ada0e68e756247671f633.jpg",
    title: "Hair • Skin • Nails",
    subtitle: "Complete Beauty Care Under One Roof",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[95vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt="beauty"
            className="object-cover w-full h-full"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/70 via-black/40 to-black/20">
            <div className="max-w-3xl px-6 text-center text-white">
              <h1 className="mb-4 text-4xl font-extrabold tracking-wide md:text-6xl">
                {slide.title}
              </h1>
              <p className="mb-8 text-lg font-light md:text-2xl">
                {slide.subtitle}
              </p>

              <div className="flex justify-center gap-4">
                <button className="px-8 py-3 text-sm font-semibold transition bg-pink-500 rounded-full md:text-base hover:bg-pink-600">
                  Customize Package
                </button>
                <button className="px-8 py-3 text-sm transition border border-white rounded-full md:text-base hover:bg-white hover:text-black">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute p-3 transition -translate-y-1/2 rounded-full left-6 top-1/2 bg-white/30 hover:bg-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute p-3 transition -translate-y-1/2 rounded-full right-6 top-1/2 bg-white/30 hover:bg-white"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute flex gap-3 -translate-x-1/2 bottom-8 left-1/2">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === i ? "bg-pink-500 scale-125" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
