import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send data to a backend here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9am-6pm"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: "info@company.com",
      subtitle: "We reply within 24 hours"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Office",
      details: "123 Business Street",
      subtitle: "New York, NY 10001"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Hours",
      details: "9:00 AM - 6:00 PM",
      subtitle: "Monday to Friday"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: "#", color: "bg-blue-600" },
    { icon: <FaTwitter />, link: "#", color: "bg-sky-500" },
    { icon: <FaLinkedinIn />, link: "#", color: "bg-blue-700" },
    { icon: <FaInstagram />, link: "#", color: "bg-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="relative overflow-hidden text-white bg-gradient-to-r from-blue-900 to-indigo-800">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-blue-700 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 right-0 bg-indigo-600 rounded-full w-96 h-96 translate-x-1/3 translate-y-1/3 opacity-10"></div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Get in Touch With Us
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-blue-100">
              We're here to help and answer any questions you might have. 
              We look forward to hearing from you.
            </p>
            <a 
              href="#contact-form" 
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition duration-300 transform rounded-full shadow-lg bg-secondary hover:bg-secondary-dark hover:scale-105"
            >
              <FaPaperPlane /> Send Us a Message
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-blue-900">
              Brand<span className="text-secondary">Logo</span>
            </div>
            
            <div className="hidden space-x-8 md:flex">
              <a href="#" className="font-medium text-gray-700 transition hover:text-blue-900">Home</a>
              <a href="#" className="font-medium text-gray-700 transition hover:text-blue-900">About</a>
              <a href="#" className="font-medium text-gray-700 transition hover:text-blue-900">Services</a>
              <a href="#" className="font-semibold text-blue-900 border-b-2 border-blue-900">Contact</a>
              <a href="#" className="font-medium text-gray-700 transition hover:text-blue-900">Blog</a>
            </div>
            
            <button className="text-gray-700 md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl"
            >
              <div className="flex items-center justify-center mx-auto mb-4 text-blue-900 bg-blue-100 rounded-full w-14 h-14">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-center text-gray-800">{item.title}</h3>
              <p className="mb-1 text-lg font-semibold text-center text-blue-900">{item.details}</p>
              <p className="text-sm text-center text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div id="contact-form" className="p-8 bg-white shadow-xl rounded-2xl">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">Send Us a Message</h2>
            <p className="mb-8 text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            {formSubmitted && (
              <div className="p-4 mb-6 text-green-700 border border-green-200 rounded-lg bg-green-50">
                Thank you! Your message has been sent successfully. We'll contact you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-gray-700" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-gray-700" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium text-gray-700" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block mb-2 font-medium text-gray-700" htmlFor="message">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your inquiry in detail..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-6 py-4 font-bold text-white transition duration-300 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-800 hover:from-blue-800 hover:to-indigo-700"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
          
          {/* Map and Additional Info */}
          <div>
            {/* Map Container */}
            <div className="mb-8 overflow-hidden bg-gray-200 shadow-xl rounded-2xl h-96">
              {/* This would be a real map integration in a production app */}
              <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                  <div className="mb-4 text-6xl text-gray-400">📍</div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-700">Our Location</h3>
                  <p className="text-gray-600">123 Business Street, New York, NY 10001</p>
                  <button className="px-6 py-2 mt-4 font-semibold text-blue-900 transition bg-white border border-blue-200 rounded-lg hover:bg-blue-50">
                    Open in Maps
                  </button>
                </div>
              </div>
            </div>
            
            {/* Social Media & FAQ */}
            <div className="p-8 bg-white shadow-xl rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold text-gray-800">Connect With Us</h3>
              
              <div className="flex justify-center mb-8 space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    className={`${social.color} text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition transform hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <h4 className="mb-4 text-xl font-bold text-gray-800">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  <div className="py-1 pl-4 border-l-4 border-blue-500">
                    <p className="font-semibold text-gray-800">What is your response time?</p>
                    <p className="text-sm text-gray-600">We typically respond within 24 hours on business days.</p>
                  </div>
                  <div className="py-1 pl-4 border-l-4 border-blue-500">
                    <p className="font-semibold text-gray-800">Do you offer support 24/7?</p>
                    <p className="text-sm text-gray-600">Our support team is available Monday-Friday, 9am-6pm EST.</p>
                  </div>
                  <div className="py-1 pl-4 border-l-4 border-blue-500">
                    <p className="font-semibold text-gray-800">Can I schedule a call?</p>
                    <p className="text-sm text-gray-600">Yes! Please include your availability in your message.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 mt-16 text-white bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Brand<span className="text-secondary">Logo</span></h3>
              <p className="text-gray-400">We're dedicated to providing the best service and support for our customers.</p>
            </div>
            
            <div>
              <h4 className="mb-4 text-xl font-bold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 transition hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-xl font-bold">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 transition hover:text-white">Consulting</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">Development</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-xl font-bold">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt /> 123 Business Street, NY 10001
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone /> +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> info@company.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8 text-center text-gray-500 border-t border-gray-800">
            <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;