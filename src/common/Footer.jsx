import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import {Link} from "react-router-dom"

const Footer = () => {
  const quickLinks = ["Home", "About", "Gallery", "Contact Us"];
  const services = ["Makeup Artistry", "Hair Styling", "Skin Treatments", "Nail Art", "Bridal Packages", "Spa Services"];

  return (
    <footer className="relative bg-gradient-to-br from-[#0f2418] via-[#1a3325] to-[#152c1f] text-white overflow-hidden">
      {/* Premium background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2028&auto=format&fit=crop"
          alt="Luxury Beauty Background"
          className="object-cover w-full h-full opacity-20"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      <div className="relative z-20 px-6 py-12 mx-auto max-w-7xl">
        {/* Main content grid */}
        <div className="grid gap-12 mb-8 lg:grid-cols-4">
          {/* 1️⃣ Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <Link to="/" className="inline-block">
  <img
    src="/assets/images/Logo/alika-logo.jpeg"   // apni image ka path yaha do
    alt="Alika Parlour"
    className="object-contain w-auto h-20"
  />
</Link>
              <div className="w-16 h-1 mt-2 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            <p className="max-w-xs text-sm leading-relaxed text-gray-300">
              Where beauty meets elegance. Experience premium beauty services with our expert artists, 
              using only the finest products for your luxury transformation.
            </p>
            
            <div className="flex gap-3 mt-4">
              {[
                { icon: FaInstagram, color: "bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500" },
                { icon: FaFacebookF, color: "bg-blue-600" },
                { icon: FaTwitter, color: "bg-sky-500" },
                { icon: FaPinterestP, color: "bg-red-600" },
                { icon: FaWhatsapp, color: "bg-green-500" }
              ].map(({ icon: Icon, color }, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-10 h-10 flex items-center justify-center ${color} text-white rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* 2️⃣ Quick Links with icons */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold text-[#F4E4BC] mb-8 pb-3 border-b border-[#D4AF37]/30">
              <span className="text-[#D4AF37]">✦</span>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-gray-300 hover:text-[#F4E4BC] transition-all duration-300 hover:pl-2"
                  >
                    <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                    <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 group-hover:after:w-full">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3️⃣ Services */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold text-[#F4E4BC] mb-8 pb-3 border-b border-[#D4AF37]/30">
              <span className="text-[#D4AF37]">✦</span>
              Our Services
            </h3>
            <ul className="flex flex-col gap-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-gray-300 hover:text-[#F4E4BC] transition-all duration-300"
                  >
                    <span className="text-xs text-[#D4AF37]">○</span>
                    <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gradient-to-r after:from-[#D4AF37] after:to-transparent after:transition-all after:duration-300 group-hover:after:w-full">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4️⃣ Contact with enhanced styling */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold text-[#F4E4BC] mb-8 pb-3 border-b border-[#D4AF37]/30">
              <span className="text-[#D4AF37]">✦</span>
              Contact Info
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="group">
                <a href="#" className="flex items-start gap-3 p-3 transition-all duration-300 rounded-lg hover:bg-white/5">
                  <div className="p-2 rounded-full bg-[#D4AF37]/20 group-hover:bg-[#D4AF37]/30 transition">
                    <FaMapMarkerAlt className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#F4E4BC]">Our Location</p>
                    <p className="mt-1 text-sm text-gray-300">123 Luxury Street, Bandra West, Mumbai 400050</p>
                  </div>
                </a>
              </li>
              
              <li className="group">
                <a href="tel:+911234567890" className="flex items-start gap-3 p-3 transition-all duration-300 rounded-lg hover:bg-white/5">
                  <div className="p-2 rounded-full bg-[#D4AF37]/20 group-hover:bg-[#D4AF37]/30 transition">
                    <FaPhone className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#F4E4BC]">Call Us</p>
                    <p className="mt-1 text-sm text-gray-300">+91 85958 08780</p>
                    {/* <p className="text-xs text-[#D4AF37] mt-1 flex items-center gap-1">
                      <RiCustomerService2Fill /> 24/7 Customer Support
                    </p> */}
                  </div>
                </a>
              </li>
              
              <li className="group">
                <a href="mailto:makeupbyalikasachan@gmail.com" className="flex items-start gap-3 p-3 transition-all duration-300 rounded-lg hover:bg-white/5">
                  <div className="p-2 rounded-full bg-[#D4AF37]/20 group-hover:bg-[#D4AF37]/30 transition">
                    <FaEnvelope className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#F4E4BC]">Email Us</p>
                    <p className="mt-1 text-sm text-gray-300">makeupbyalikasachan@gmail.com</p>
                    {/* <p className="text-sm text-gray-300">bookings@alikaparlour.com</p> */}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2026 <span className="text-[#F4E4BC]">Alika Beauty Parlour</span>. All rights reserved.
              </p>
              {/* <p className="mt-1 text-xs text-gray-500">
                Premium beauty services since 2015 • ISO Certified • Award-winning salon
              </p> */}
            </div>
            
              {/* <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Cancellation Policy</a>
              </div> */}
          </div>
          
          {/* Decorative line */}
          {/* <div className="flex justify-center mt-8">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;