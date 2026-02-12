import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBriefcase, 
  FaClock, 
  FaCheckCircle, 
  FaPaperPlane,
  FaUsers,
  FaChartLine,
  FaHeart,
  FaGlobe,
  FaGraduationCap,
  FaMedal,
  FaBuilding,
  FaUserTie,
  FaMapMarkerAlt,
  FaArrowRight,
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({
        ...formData,
        resume: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
      message: ""
    });
  };

  const jobCategories = [
    { id: "all", name: "All Positions" },
    { id: "production", name: "Production" },
    { id: "sales", name: "Sales & Marketing" },
    { id: "design", name: "Design" },
    { id: "quality", name: "Quality Assurance" }
  ];

  const jobs = [
    { 
      id: 1,
      title: "Production Manager", 
      type: "Full-time", 
      location: "Greater Noida, India",
      department: "production",
      experience: "5+ years",
      salary: "₹12-15 LPA",
      posted: "2 days ago",
      urgent: true
    },
    { 
      id: 2,
      title: "Quality Assurance Officer", 
      type: "Full-time", 
      location: "Greater Noida, India",
      department: "quality",
      experience: "3+ years",
      salary: "₹6-8 LPA",
      posted: "1 week ago",
      urgent: false
    },
    { 
      id: 3,
      title: "Sales Executive", 
      type: "Full-time", 
      location: "Remote",
      department: "sales",
      experience: "2+ years",
      salary: "₹5-7 LPA + Commission",
      posted: "3 days ago",
      urgent: false
    },
    { 
      id: 4,
      title: "Graphic Designer", 
      type: "Contract", 
      location: "Remote",
      department: "design",
      experience: "2+ years",
      salary: "₹4-6 LPA",
      posted: "5 days ago",
      urgent: false
    },
    { 
      id: 5,
      title: "Supply Chain Manager", 
      type: "Full-time", 
      location: "Greater Noida, India",
      department: "production",
      experience: "7+ years",
      salary: "₹15-18 LPA",
      posted: "1 day ago",
      urgent: true
    },
    { 
      id: 6,
      title: "Marketing Specialist", 
      type: "Full-time", 
      location: "Hybrid",
      department: "sales",
      experience: "4+ years",
      salary: "₹8-10 LPA",
      posted: "1 week ago",
      urgent: false
    },
  ];

  const benefits = [
    { 
      icon: FaHeart, 
      title: "Health Insurance", 
      desc: "Comprehensive medical coverage for you and your family",
      color: "bg-red-50 text-red-600"
    },
    { 
      icon: FaClock, 
      title: "Flexible Hours", 
      desc: "Work-life balance with flexible scheduling options",
      color: "bg-blue-50 text-blue-600"
    },
    { 
      icon: FaGraduationCap, 
      title: "Learning Budget", 
      desc: "Annual stipend for professional development courses",
      color: "bg-purple-50 text-purple-600"
    },
    { 
      icon: FaMedal, 
      title: "Performance Bonus", 
      desc: "Quarterly bonuses based on individual and team performance",
      color: "bg-yellow-50 text-yellow-600"
    },
    { 
      icon: FaGlobe, 
      title: "Remote Options", 
      desc: "Work from anywhere for eligible positions",
      color: "bg-green-50 text-green-600"
    },
    { 
      icon: FaUsers, 
      title: "Team Events", 
      desc: "Quarterly team-building activities and retreats",
      color: "bg-pink-50 text-pink-600"
    },
  ];

  const culturePoints = [
    "Innovation-driven environment",
    "Sustainability-focused initiatives",
    "Inclusive and diverse workplace",
    "Open-door policy with leadership",
    "Continuous learning culture",
    "Employee recognition programs"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Production Lead, 4 years at Amaya",
      content: "Amaya Group has provided me with incredible growth opportunities. The support for work-life balance is genuinely exceptional.",
      avatar: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?cs=srgb&dl=pexels-gabby-k-5876695.jpg&fm=jpg"
    },
    {
      name: "Rahul Verma",
      role: "Sales Manager, 3 years at Amaya",
      content: "The collaborative environment here is amazing. We're not just colleagues, we're a team working towards sustainable solutions.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-150"
    },
    {
      name: "Anjali Patel",
      role: "Quality Analyst, 2 years at Amaya",
      content: "Working at Amaya has been rewarding both professionally and personally. The company truly cares about its employees.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
    }
  ];

  const filteredJobs = activeTab === "all" 
    ? jobs 
    : jobs.filter(job => job.department === activeTab);

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white">
{/* Hero Section */}
<div className="relative w-full overflow-hidden">
  {/* Banner Image */}
  <img
    src="/assets/images/All-banner/carrer.jpg"
    alt="Banner"
    className="object-cover w-full"
  />
</div>



      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-orange-500">200+</div>
              <div className="mt-2 text-gray-600">Employees Worldwide</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-orange-500">15+</div>
              <div className="mt-2 text-gray-600">Years in Business</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-orange-500">40%</div>
              <div className="mt-2 text-gray-600">Women in Leadership</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-orange-500">95%</div>
              <div className="mt-2 text-gray-600">Employee Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      {/* Job Listings - Compact Design */}
<div id="job-listings" className="py-16 bg-gray-50">
  <div className="container px-4 mx-auto">
    <div className="mb-12 text-center">
      <h2 className="mb-3 text-3xl font-bold text-gray-900">Open Positions</h2>
      <p className="text-gray-600">Browse available roles in our organization</p>
    </div>
    
    {/* Category Tabs - Minimal */}
    <div className="flex flex-wrap gap-4 pb-4 mb-8 border-b border-gray-200 md:gap-2">
      {jobCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveTab(category.id)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === category.id
              ? "bg-gray-900 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>

    {/* Job Table View */}
    <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">Position</th>
              <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">Location</th>
              <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">Type</th>
              <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">Experience</th>
              <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredJobs.map((job) => (
              <motion.tr
                key={job.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ backgroundColor: "#f9fafb" }}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{job.title}</div>
                    <div className="text-sm text-gray-500">{job.department}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" />
                    {job.location}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    job.type === "Full-time" 
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {job.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">{job.experience}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      setFormData({...formData, position: job.title});
                      document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-900 rounded-lg hover:bg-gray-800"
                  >
                    Apply
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        
        {filteredJobs.length === 0 && (
          <div className="py-12 text-center">
            <FaBriefcase className="mx-auto mb-4 text-4xl text-gray-300" />
            <div className="text-gray-500">No positions available in this category</div>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

      {/* Company Culture */}
      <div className="py-10 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Our Culture & Values</h2>
              <p className="mb-8 text-lg text-gray-600">
                At Amaya Group, we foster an environment where innovation meets sustainability. 
                Our team is driven by a shared passion for creating eco-friendly paper solutions 
                while maintaining the highest standards of quality.
              </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  {culturePoints.map((point, index) => (
    <div key={index} className="flex items-center p-3 rounded-lg bg-gray-50">
      <FaCheckCircle className="mr-3 text-green-500" />
      <span>{point}</span>
    </div>
  ))}
</div>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="shadow-2xl rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 p-6 -mb-8 -ml-8 bg-white shadow-xl rounded-2xl">
                <div className="flex items-center">
                  <div className="p-4 bg-orange-100 rounded-xl">
                    <FaUsers className="text-3xl text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold">Collaborative</div>
                    <div className="text-gray-500">Team Environment</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-10 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-14">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Employee Benefits</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We invest in our team's well-being and professional growth
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className={`inline-flex p-4 rounded-2xl ${benefit.color} mb-6`}>
                  <benefit.icon className="text-2xl" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-10 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              <FaStar className="mr-2" /> Employee Stories
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Hear From Our Team</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-8 bg-gray-50 rounded-2xl"
              >
                <FaQuoteLeft className="absolute text-4xl text-orange-200 top-6 right-6" />
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="italic text-gray-700">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="apply-form" className="py-20 bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl p-8 mx-auto bg-white shadow-2xl rounded-3xl">
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              >
                <div className="p-8 text-center bg-white shadow-2xl rounded-2xl">
                  <FaCheckCircle className="mx-auto mb-4 text-6xl text-green-500 animate-bounce" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">Application Submitted!</h3>
                  <p className="text-gray-600">We'll review your application and get back to you within 3 business days.</p>
                </div>
              </motion.div>
            )}
            
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Ready to Join Us?</h2>
              <p className="text-gray-600">Submit your application and we'll contact you for the next steps</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Position *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-gray-700">Resume/CV *</label>
                <div className="relative">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 font-medium text-gray-700">Cover Letter / Additional Notes</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in joining Amaya Group..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:shadow-xl"
              >
                Submit Application <FaPaperPlane className="inline ml-2" />
              </motion.button>
              
              {/* <p className="text-sm text-center text-gray-500">
                By submitting this form, you agree to our privacy policy. We'll contact you within 3 business days.
              </p> */}
            </form>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-16 bg-gradient-to-r from-orange-400 to-orange-400">
        <div className="container px-4 mx-auto text-center text-white">
          <h2 className="mb-6 text-4xl font-bold">Questions About Working at Amaya?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-orange-100">
            Reach out to our HR team for more information about career opportunities
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-orange-600 bg-white rounded-full hover:bg-gray-50"
            >
              Email HR Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-white border-2 border-white rounded-full hover:bg-white/10"
            >
              +91 98111 30519
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;