const FranchiseSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-r from-purple-800 to-purple-600">
      <div className="grid items-center gap-10 px-6 mx-auto max-w-7xl md:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h2 className="mb-10 font-serif text-4xl text-white md:text-5xl">
            Franchise Opportunity <br /> with Naturals
          </h2>

          <div className="max-w-xl p-10 bg-white shadow-2xl rounded-3xl">
            <h3 className="mb-4 text-2xl font-semibold text-purple-700">
              Brand Value
            </h3>

            <p className="leading-relaxed text-gray-700">
              Step into a brand that already shines in the hearts of millions. 
              Naturals is not just a salon name — it’s a symbol of trust, quality 
              and consistent success across India. With a proven legacy and loyal 
              clientele, you don’t start from zero — you start ahead.
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">
              Join a network where your business grows with the strength of a 
              nationally loved brand backing you at every step.
            </p>
          </div>

          <button className="px-8 py-3 mt-8 font-semibold text-purple-700 transition bg-white rounded-full shadow hover:bg-purple-100">
            Enquire Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=900&auto=format&fit=crop"
            alt="Franchise"
            className="w-full max-w-md ml-auto shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
