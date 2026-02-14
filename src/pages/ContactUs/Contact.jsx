import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from 'react-icons/fa'; 
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaClock,
  FaUsers,
  FaRocket,
  FaHeart,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaGlobe,
} from "react-icons/fa";

const ContactPage = () => {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  service: '',
  stylist: '',
  date: '',
  time: '',
  requests: ''
});
 const [focusedField, setFocusedField] = useState(null);
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [openFaq, setOpenFaq] = useState(null);
const [isStreetView, setIsStreetView] = useState(false);



const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ 
          name: "", 
          email: "", 
          phone: "",
          service: "",
          stylist: "",
          date: "",
          time: "",
          requests: ""
        });
      }, 3000);
    }, 1500);
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

 

const teamMembers = [

  {
    name: "Alka",
    role: "Makeup & Bridal Artist",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
    bio: "Specialist in HD & Airbrush bridal makeup with 200+ happy brides."
  },
  {
    name: "Alka Sachan",
    role: "Skin & Beauty Expert",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
    bio: "Certified skincare professional offering advanced facials & skin therapies."
  },
  {
    name: "Monika Sachan",
    role: "Nail & Extension Specialist",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    bio: "Creative nail artist known for luxury nail art & gel extensions."
  }
];


  return (
       <div className="relative overflow-x-hidden font-sans bg-gray-50">
      {/* DECORATIVE BACKGROUND BLOBS - Updated to forest green and golden */}
      <div className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full  w-96 h-96 bg-gradient-to-r from-[#2F432A]/30 to-amber-600/30 blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 rounded-full  w-96 h-96 bg-gradient-to-l from-amber-500/30 to-[#2F432A]/30 blur-3xl translate-x-1/4 translate-y-1/4 animate-pulse"></div>
      
      {/* HERO SECTION - Updated to forest green theme */}
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden bg-[#2F432A]">
        <div className="absolute inset-0 bg-gradient-150 from-[#1a2b17] via-[#2F432A] to-amber-950 animate-gradient"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-3 h-3 rounded-full bg-amber-200 top-20 left-1/4 animate-float-slow"></div>
          <div className="absolute w-2 h-2 rounded-full bg-amber-100 top-40 left-3/4 animate-float"></div>
          <div className="absolute w-4 h-4 rounded-full bg-amber-300 bottom-32 left-1/3 animate-float-slower"></div>
          <div className="absolute w-2 h-2 rounded-full bg-amber-200 bottom-40 right-1/4 animate-float"></div>
          <div className="absolute w-3 h-3 rounded-full top-60 right-1/3 bg-amber-100 animate-float-slow"></div>
        </div>

        <div className="relative z-10 px-6 text-center animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-amber-300 uppercase bg-white/10 backdrop-blur-sm rounded-full border border-amber-500/30">
            ✦ Let's connect
          </span>
          <h1 className="mb-6 text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl animate-slide-up">
            Get in touch
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-amber-100/80 md:text-xl animate-slide-up animation-delay-200">
            We're excited to hear about your project. 
            <br className="hidden sm:block" /> 
            Drop us a line and let's create something extraordinary.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* MAIN CONTACT CARD */}
      <section className="relative z-20 px-4 pb-28 -mt-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            
            {/* LEFT SIDE - INFO CARD */}
            <div className="group relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-4xl p-10 shadow-2xl shadow-indigo-500/10 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-indigo-500/20 animate-fade-in-left">
              <div className="absolute inset-0 transition-opacity duration-700 opacity-0 rounded-4xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-100 blur-xl"></div>
              
              <div className="relative">
                <div className="inline-flex p-4 mb-8 text-white shadow-lg rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-400">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                
                <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                  Let's talk
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-600">
                  Have a question or a project in mind? We're all ears. Our team is ready to bring your ideas to life.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-5 p-4 transition-all duration-300 border border-gray-100 rounded-2xl bg-gray-50/80 backdrop-blur-sm hover:bg-white hover:shadow-md hover:border-indigo-100">
                    <div className="p-3 text-white shadow-md bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">Call us</p>
                      <Link to="tel:+918595808780" className="text-lg font-semibold text-gray-800 transition hover:text-indigo-600">+91 8595808780</Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 p-4 transition-all duration-300 border border-gray-100 rounded-2xl bg-gray-50/80 backdrop-blur-sm hover:bg-white hover:shadow-md hover:border-indigo-100">
                    <div className="p-3 text-white shadow-md bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">Email</p>
                      <Link to="mailto:makeupbyalikasachan@gmail.com" className="text-lg font-semibold text-gray-800 transition hover:text-indigo-600">makeupbyalikasachan@gmail.com</Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 p-4 transition-all duration-300 border border-gray-100 rounded-2xl bg-gray-50/80 backdrop-blur-sm hover:bg-white hover:shadow-md hover:border-indigo-100">
                    <div className="p-3 text-white shadow-md bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">Studio</p>
                      <p className="text-lg font-semibold text-gray-800">Hazipur, Sector 104, Noida, Uttar Pradesh 201304, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Social links */}
                <div className="pt-8 mt-12 border-t border-gray-200/60">
  <p className="mb-4 text-lg font-medium text-gray-500">Follow us</p>
  
  {/* Instagram Section Header */}
  <div className="flex items-center gap-2 mb-3">
    <FaInstagram className="text-2xl text-pink-600" />
    <span className="font-semibold text-gray-700">Instagram</span>
  </div>
  
  {/* Instagram Accounts in Grid */}
  <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2">
    {/* Account 1 */}
    <Link 
      to="https://instagram.com/makeupbyalika" 
      target="_blank"
      className="flex items-center gap-3 p-3 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:border-pink-300 hover:shadow-md"
    >
      <div className="flex items-center justify-center w-10 h-10 text-pink-600 bg-pink-100 rounded-full">
        <FaInstagram />
      </div>
      <div className="truncate">
        <p className="font-semibold text-gray-800">@makeupbyalika</p>
      </div>
    </Link>
    
    {/* Account 2 */}
    <Link 
      to="https://instagram.com/alikastudio" 
      target="_blank"
      className="flex items-center gap-3 p-3 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:border-pink-300 hover:shadow-md"
    >
      <div className="flex items-center justify-center w-10 h-10 text-pink-600 bg-pink-100 rounded-full">
        <FaInstagram />
      </div>
      <div className="truncate">
        <p className="font-semibold text-gray-800">@alikastudio</p>
      </div>
    </Link>
  </div>
  
  {/* WhatsApp Section */}
  <div>
    <div className="flex items-center gap-2 mb-3">
      <FaWhatsapp className="text-2xl text-green-600" />
      <span className="font-semibold text-gray-700">WhatsApp</span>
    </div>
    <Link 
      to="https://wa.me/918595808780" 
      target="_blank"
      className="flex items-center gap-3 p-3 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-md"
    >
      <div className="flex items-center justify-center w-12 h-12 text-green-600 bg-green-100 rounded-full">
        <FaWhatsapp className="text-xl" />
      </div>
      <div>
        <p className="font-semibold text-gray-800">+91 85958 08780</p>
        <p className="text-sm text-gray-500">Click to chat on WhatsApp</p>
      </div>
    </Link>
  </div>
</div>
              </div>
            </div>

            {/* RIGHT SIDE - FORM CARD */}
            <div className="p-10 transition-all duration-500 transform border shadow-2xl bg-white/95 backdrop-blur-sm rounded-4xl shadow-gray-600/10 border-gray-100/80">
              <div className="relative">
                <h3 className="mb-2 text-3xl font-bold text-gray-800"id="appointment">
                  Book Your Appointment 💅
                </h3>
                <p className="mb-8 text-lg text-gray-500">
                  Choose your service and schedule your visit
                </p>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 mb-6 text-green-700 border border-green-200 bg-green-50 rounded-xl animate-slide-down">
                    <p className="font-medium">✓ Booking request sent successfully!</p>
                    <p className="text-sm">We'll confirm your appointment shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" >
                  {/* Full Name - Full Width */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-colors border-2 border-gray-100 rounded-xl focus:border-indigo-600 focus:outline-none"
                      placeholder="Enter your full name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  {/* Email and Phone - 2 Columns */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-colors border-2 border-gray-100 rounded-xl focus:border-indigo-600 focus:outline-none"
                        placeholder="Enter your email"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-colors border-2 border-gray-100 rounded-xl focus:border-indigo-600 focus:outline-none"
                        placeholder="Enter your phone number"
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>

                  {/* Service Selection - Full Width */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-colors border-2 border-gray-100 rounded-xl focus:border-indigo-600 focus:outline-none"
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="">Choose a service</option>
                      <option value="Hair Cut">Hair Cut</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Party Makeup">Party Makeup</option>
                      <option value="Facial Treatment">Facial Treatment</option>
                      <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                      <option value="Hair Spa">Hair Spa</option>
                    </select>
                  </div>

                  {/* Date and Time - 2 Columns */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Appointment Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-colors border-2 border-gray-100 rounded-xl focus:border-indigo-600 focus:outline-none"
                        onFocus={() => setFocusedField('date')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-600">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 transition-colors border-2 border-gray-100 rounded-xl focus:border-indigo-600 focus:outline-none"
                        onFocus={() => setFocusedField('time')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>

                  {/* Preferred Stylist - Full Width */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Preferred Stylist (Optional)
                    </label>
                    <select
                      name="stylist"
                      value={formData.stylist}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-colors border-2 border-gray-100 rounded-xl focus:border-indigo-600 focus:outline-none"
                      onFocus={() => setFocusedField('stylist')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="">No preference</option>
                      <option value="Senior Stylist">Senior Stylist</option>
                      <option value="Makeup Artist">Makeup Artist</option>
                      <option value="Hair Expert">Hair Expert</option>
                    </select>
                  </div>

                  {/* Notes - Full Width */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Special Requests
                    </label>
                    <textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 transition-colors border-2 border-gray-100 rounded-xl focus:border-indigo-600 focus:outline-none"
                      placeholder="Tell us about your look preference..."
                      onFocus={() => setFocusedField('requests')}
                      onBlur={() => setFocusedField(null)}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Confirm Booking ✨'
                    )}
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
        <section className="relative px-4 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-[#2F432A] uppercase bg-amber-100 rounded-full">
              Meet the team
            </span>
            <h2 className="mb-4 text-4xl font-bold text-[#2F432A] md:text-5xl">
              The creative minds behind the magic
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              A passionate team of designers, developers, and strategists dedicated to bringing your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative overflow-hidden transition-all duration-500 bg-white shadow-xl group rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:shadow-amber-500/20">
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-[#2F432A]/70 via-[#2F432A]/20 to-transparent group-hover:opacity-100"></div>
                </div>
                <div className="p-8">
                  <h3 className="mb-1 text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mb-3 text-lg font-medium text-amber-600">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP/LOCATION SECTION - Updated with forest green theme */}
<section className="relative px-4 py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
      <div className="animate-fade-in-left">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-[#2F432A] uppercase bg-amber-100 rounded-full">
          Visit Our Salon
        </span>
        <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Your Beauty Destination in Noida
        </h2>
        <p className="mb-8 text-xl leading-relaxed text-gray-600">
          Step into our luxurious salon where beauty meets relaxation. 
          We're conveniently located in Sector 104, Noida, with easy access and ample parking.
        </p>
        
        <div className="mb-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-xl text-[#2F432A]">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">Salon Address</p>
              <p className="text-gray-600">Hazipur, Sector 104, Noida, Uttar Pradesh 201304, India</p>
              <p className="mt-1 text-sm text-gray-500">Landmark: Near Hazipur Market</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-xl text-[#2F432A]">
              <FaClock className="text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">Opening Hours</p>
              <p className="text-gray-600">Monday - Saturday: 10:00 AM - 11:00 PM</p>
              <p className="text-gray-600">Sunday: 11:00 AM - 10:00 PM</p>
              <p className="flex items-center gap-2 mt-2 font-medium text-amber-600">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Flexible timings available - We're available early morning or late night according to your requirements!
              </p>
                </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-xl text-[#2F432A]">
              <FaGlobe className="text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">Virtual Consultations</p>
              <p className="text-gray-600">Available via WhatsApp or Audio/Video Call</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            to="https://www.google.com/maps/dir/?api=1&destination=28.5392,77.3633" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold cursor-pointer text-white transition-colors duration-300 bg-[#2F432A] rounded-xl hover:bg-[#1f2f1b]"
          >
            Get directions
          </Link>
          <Link to="#appointment" className="px-6 py-3 font-semibold transition-colors duration-300 cursor-pointer border-2 border-[#2F432A] text-[#2F432A] rounded-xl hover:bg-amber-50">
            Book appointment
          </Link>
        </div>
      </div>
      
 <div className="relative h-[400px] lg:h-[500px] rounded-4xl overflow-hidden shadow-2xl animate-fade-in-right">
  {/* Gradient Overlay - Always visible but subtle */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#2F432A]/10 to-amber-900/10 mix-blend-overlay z-10 "></div>
  
  {/* Map Container */}
  <div className="relative w-full h-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.606737038787!2d77.3633!3d28.5392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce60f6012c32b%3A0x638475f65c926529!2sHazipur%2C%20Sector%20104%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Salon location in Noida"
      className="w-full h-full"
    ></iframe>
  </div>
  
  {/* Location Marker - Always visible */}
  <div className="absolute z-30 flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full shadow-lg top-4 left-4 bg-white/95 backdrop-blur-sm">
    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
    <span className="text-sm font-medium text-gray-700">Alika's Makeup Studio</span>
  </div>
  
  {/* Bottom Bar with Quick Actions - Always visible - Z-index increased to 40 */}
  <div className="absolute bottom-0 left-0 right-0 z-40 flex items-center justify-between p-3 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
    <div className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-[#2F432A] text-sm" />
      <span className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[150px] sm:max-w-none">
        Hazipur, Sector 104, Noida
      </span>
    </div>
    <div className="flex gap-2">
      <a 
        href="https://www.google.com/maps/dir/?api=1&destination=28.5392,77.3633"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-[#2F432A] text-white text-xs rounded-lg hover:bg-[#1f2f1b] transition-colors flex items-center gap-1 shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <FaMapMarkerAlt className="text-xs" /> Directions
      </a>
      <a 
        href="https://www.google.com/maps/search/?api=1&query=Hazipur+Sector+104+Noida+Uttar+Pradesh+201304"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-white text-gray-700 text-xs rounded-lg hover:bg-gray-100 transition-colors border border-gray-300 flex items-center gap-1"
        onClick={(e) => e.stopPropagation()}
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
        Full Screen
      </a>
    </div>
  </div>
  
  {/* Street View Button - Floating on right - Z-index increased to 30 */}
  <a 
    href="https://www.google.com/maps/@28.5392,77.3633,3a,75y,90t/data=!3m6!1e1!3m4!1s!2e10!7i5376!8i2688"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[#2F432A] hover:text-white transition-colors duration-300 border border-gray-200"
    onClick={(e) => e.stopPropagation()}
    title="Street View"
  >
    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21v-7M19 21v-7" />
    </svg>
  </a>
  
  {/* Click anywhere to open in Google Maps - Z-index increased to 25 */}
  <a 
    href="https://www.google.com/maps/search/?api=1&query=Hazipur+Sector+104+Noida+Uttar+Pradesh+201304"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 cursor-pointer z-25"
    aria-label="Open in Google Maps"
  ></a>
</div>

<style jsx>{`
  @keyframes bounce-slow {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-5px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }
`}</style>
    </div>
  </div>
</section>


    

     
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatSlower 10s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .rounded-4xl {
          border-radius: 2rem;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;