import React from "react";

const certificates = [
  "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606326608796-4e9a6f7f3e9a?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop",
];

const CertificationPage = () => {
  return (
    <section className="w-full bg-gray-50">
      {/* Banner */}
      <div
        className="relative flex items-center mt-24 justify-center h-[45vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Our Certifications
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-gray-200">
            Recognized certifications that reflect our professional expertise
            and commitment to excellence.
          </p>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="max-w-6xl px-4 py-16 mx-auto">
        <h2 className="mb-10 text-3xl font-semibold text-center text-gray-800">
          Professional Achievements
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl group"
            >
              <img
                src={img}
                alt={`Certificate ${index + 1}`}
                className="object-cover w-full h-[280px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                <span className="px-4 py-2 text-sm font-medium text-white border border-white rounded-full">
                  View Certificate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationPage;
