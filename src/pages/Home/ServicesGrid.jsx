const services = [
  { title: "SKIN SERVICES", image: "https://i.pinimg.com/736x/0a/9c/6d/0a9c6de51ff64f2e8b2ab70dbfd554fd.jpg" },
  { title: "NAIL ART", image: "https://i.pinimg.com/736x/2c/56/de/2c56dea2774ea169f84c5cf6264f59c2.jpg" },
  { title: "BRIDAL MAKEUP", image: "https://i.pinimg.com/1200x/6a/20/eb/6a20eb5bb6f95f180aec1d60037b2c56.jpg" },
  { title: "HAIR SERVICE", image: "https://i.pinimg.com/1200x/0f/47/e2/0f47e2b839611ca4ca9107a6794eb973.jpg" },
  { title: "FACIAL", image: "https://i.pinimg.com/736x/9b/14/ec/9b14ec1cb0d4be5ed6cf870f9d5708d7.jpg" },
  { title: "MANICURE PEDICURE", image: "https://i.pinimg.com/736x/77/73/b7/7773b7c3d3ca874ffed88e58a8846198.jpg" },
];

const ServicesGrid = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50 md:py-16">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">Our Premium Services</h2>
          <p className="mt-2 text-gray-600 md:text-lg">Experience luxury and excellence in beauty</p>
        </div>

        {/* Mobile View - Single Column Stack */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-2xl h-72 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full transition-all duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/0 via-black/0 to-transparent group-hover:from-black/85 group-hover:via-black/40"></div>
              
              {/* Service Title with Rating - HIDDEN by default */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-center text-white">
                  {service.title}
                </h3>
                {service.title === "BRIDAL MAKEUP" ? (
                  <div className="flex flex-col items-center mt-2">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <button className="px-5 py-2 text-sm font-medium text-white transition-all duration-300 bg-pink-600 rounded-full hover:bg-pink-700">
                      Book Now
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Enhanced Shine Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-[-150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:left-[200%]"></div>
              </div>
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 transition-all duration-700 opacity-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Desktop View - Enhanced 3-Column Layout */}
        <div className="hidden grid-cols-3 gap-3 md:grid">
          
          {/* LEFT COLUMN */}
          <div className="grid grid-rows-2 gap-3">
            {/* TOP PART: split into 2 columns */}
            <div className="grid grid-cols-2 gap-3">
              {services.slice(0, 2).map((service, idx) => (
                <div 
                  key={idx} 
                  className="relative overflow-hidden rounded-2xl group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full transition-all duration-700 ease-out h-52 lg:h-60 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/0 via-black/0 to-transparent group-hover:from-black/80 group-hover:via-black/40"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 transition-all duration-500 transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-center text-white lg:text-2xl">
                      {service.title}
                    </h3>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced Shine Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-[-150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:left-[200%]"></div>
                  </div>
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 transition-all duration-700 opacity-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>

            {/* BOTTOM PART: one full row */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src={services[5].image}
                alt={services[5].title}
                className="object-cover w-full transition-all duration-700 ease-out h-52 lg:h-60 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/0 via-black/0 to-transparent group-hover:from-black/80 group-hover:via-black/40"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-end p-5 transition-all duration-500 transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <h3 className="text-xl font-bold text-center text-white lg:text-2xl">
                  {services[5].title}
                </h3>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-[-150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:left-[200%]"></div>
              </div>
              
              <div className="absolute inset-0 transition-all duration-700 opacity-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* CENTER COLUMN - Special Bridal Makeup Card */}
          <div className="relative overflow-hidden rounded-2xl h-[500px] lg:h-[540px] group">
            <img
              src={services[2].image}
              alt={services[2].title}
              className="object-cover w-full h-full transition-all duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/0 via-black/0 to-transparent group-hover:from-black/85 group-hover:via-black/50"></div>
            
            {/* Special Content for Bridal Makeup - ALWAYS VISIBLE (you can change this if you want) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="mb-4">
                <div className="inline-block px-4 py-1 mb-3 text-xs font-semibold tracking-wider text-white uppercase bg-pink-600 rounded-full lg:text-sm">
                  Most Popular
                </div>
              </div>
              
              <h3 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
                {services[2].title}
              </h3>
              
              <p className="mb-4 text-sm text-gray-200 lg:text-base">Premium Bridal Packages Available</p>
              
              {/* Star Rating */}
              <div className="flex mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-lg font-semibold text-white">5.0</span>
              </div>
              
              {/* Book Now Button */}
              <button className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-105 hover:shadow-2xl hover:from-pink-700 hover:to-purple-700">
                Book Now
              </button>
              
              {/* Additional Info */}
              <p className="mt-4 text-xs text-gray-300 lg:text-sm">+100 Happy Brides • Free Trial Available</p>
            </div>
            
            {/* Enhanced Shine Effect for Center */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-[-200%] w-[70%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] transition-all duration-1200 opacity-0 group-hover:opacity-100 group-hover:left-[250%]"></div>
            </div>
            
            {/* Special Glow Effect for Center */}
            <div className="absolute inset-0 transition-all duration-1000 opacity-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 group-hover:opacity-100"></div>
            
            {/* Floating Elements Animation */}
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
                SPECIAL OFFER
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-rows-2 gap-3">
            {services.slice(3, 5).map((service, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden rounded-2xl group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full transition-all duration-700 ease-out h-52 lg:h-60 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/0 via-black/0 to-transparent group-hover:from-black/80 group-hover:via-black/40"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5 transition-all duration-500 transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-center text-white lg:text-2xl">
                    {service.title}
                  </h3>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 left-[-150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:left-[200%]"></div>
                </div>
                
                <div className="absolute inset-0 transition-all duration-700 opacity-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        /* Enhanced hover effect with smooth transitions */
        .group {
          transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .group:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
      
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;