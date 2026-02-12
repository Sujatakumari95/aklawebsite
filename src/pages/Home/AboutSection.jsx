import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible && count < 5) {
      const timer = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  return (
    <section
      ref={sectionRef}
      className="py-20 overflow-hidden bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Image */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=900&auto=format&fit=crop"
              alt="beauty salon"
              className="shadow-xl rounded-3xl"
            />

            {/* Experience Badge */}
            <div className="absolute px-6 py-4 text-white bg-pink-500 shadow-lg -bottom-6 -right-6 rounded-2xl">
              <h4 className="text-3xl font-bold">{count}+</h4>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <h5 className="mb-3 font-semibold tracking-wide text-pink-500">
              ABOUT US
            </h5>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Where Beauty Meets{" "}
              <span className="text-pink-500">Perfection</span>
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              At our beauty parlour, we believe every individual deserves to
              feel confident, radiant, and beautiful. Our expert professionals
              use premium products and the latest techniques to enhance your
              natural charm.
            </p>

            <p className="mb-8 leading-relaxed text-gray-600">
              From bridal makeup to everyday styling, hair care, skin treatments
              and nail art — we offer complete beauty solutions under one roof.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 font-semibold text-white transition bg-pink-500 rounded-full hover:bg-pink-600">
                Learn More
              </button>

              {/* <button className="px-8 py-3 font-semibold text-pink-500 transition border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                Contact Us
              </button> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
