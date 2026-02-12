import React, { useState } from "react";

const galleryData = {
  party: [
    "https://i.pinimg.com/736x/8d/2c/e6/8d2ce6db6411b69f095217ac4e0f2735.jpg",
    "https://i.pinimg.com/736x/df/45/3e/df453e06436b75890d90a6a0b48fcd19.jpg",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-dd23140edf6d?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&auto=format&fit=crop",
  ],
  bridal: [
    "https://i.pinimg.com/736x/7c/34/3e/7c343e0ee01272a575b7dc55d1179b8c.jpg",
    "https://i.pinimg.com/736x/89/42/5c/89425ca67cc0e546d1978e0912053a19.jpg",
    "https://i.pinimg.com/736x/43/03/04/430304625bed3728b8f7d91d56bd85e8.jpg",
    "https://i.pinimg.com/1200x/c6/c8/e8/c6c8e881a8e0a17a6346ff5291de5b2b.jpg",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop",
  ],
  celebrate: [
    "https://i.pinimg.com/1200x/95/f4/66/95f4668b79fd18b83b85da7687485287.jpg",
    "https://i.pinimg.com/736x/3e/d4/d6/3ed4d6a9ef874cc57871431fdfc2ae69.jpg",
    "https://i.pinimg.com/736x/ec/ed/81/eced8168d17ffaaf526f71d46be1506a.jpg",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&auto=format&fit=crop",
  ],
};

const GalleryPage = () => {
  const [active, setActive] = useState("party");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const images = galleryData[active];
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const images = galleryData[active];
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="w-full "
    style={{
    backgroundImage:
      "url('https://i.pinimg.com/1200x/82/66/84/826684acf14f6b80ff309a66b4f492c4.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
    
      {/* Banner */}
      <div
        className="relative flex items-center justify-center mt-20  h-[65vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/assets/images/banner/gallery-banner.png')",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        {/* <h1 className="relative z-10 text-4xl font-bold text-white md:text-5xl">
          Our Gallery
        </h1> */}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 px-4 py-10">
        {[
          { key: "party", label: "Party Look" },
          { key: "bridal", label: "Bridal Makeup" },
          { key: "celebrate", label: "Celebrate Makeup" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300
              ${
                active === item.key
                  ? "bg-green-800 text-white shadow-lg"
                  : "bg-white text-gray-600 border hover:bg-pink-50 hover:text-pink-600"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-6xl px-4 pb-20 mx-auto"
      >
        <div className="gap-4 space-y-4 columns-1 sm:columns-2 lg:columns-3">
          {galleryData[active].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-300 shadow-lg cursor-pointer break-inside-avoid rounded-2xl group"
              onClick={() => openImage(img, index)}
            >
              {/* Shine Effect Container */}
              <div className="relative overflow-hidden">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-full -left-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-x-full group-hover:translate-y-full" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:opacity-100" />
                
                {/* Zoom Icon */}
                <div className="absolute transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 group-hover:opacity-100">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute z-10 p-3 text-white transition-all duration-300 rounded-full top-4 right-4 bg-black/50 hover:bg-black/70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute z-10 p-3 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute z-10 p-3 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative max-w-4xl max-h-[80vh]">
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Image Counter */}
            <div className="absolute px-4 py-2 text-sm text-white transform -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/50">
              {currentIndex + 1} / {galleryData[active].length}
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeImage}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryPage;