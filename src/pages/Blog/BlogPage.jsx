// src/pages/BlogPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Paper Straws: A Sustainable Alternative to Plastic",
      excerpt:
        "Why paper straws are becoming the preferred eco-friendly choice for beverages worldwide.",
      date: "December 10, 2025",
      readTime: "5 min read",
      image:
        "https://i.pinimg.com/736x/e1/a3/54/e1a354b36f96a5d7f3de13efaea482c9.jpg",
    },
    {
      title: "Paper Bags: Strength, Style & Sustainability",
      excerpt:
        "Discover how paper bags combine durability and eco-conscious design for modern packaging.",
      date: "December 05, 2025",
      readTime: "6 min read",
      image:
        "https://i.pinimg.com/1200x/77/a2/72/77a272271c1251040fff6fc76207afb3.jpg",
    },
    {
      title: "Why Businesses Are Switching to Face Masks",
      excerpt:
        "Face masks offer safety, comfort, and sustainability — a smarter alternative to synthetic masks.",
      date: "November 28, 2025",
      readTime: "4 min read",
      image:
        "https://i.pinimg.com/1200x/4a/d4/38/4ad4384f1ca8cea932e3aa5d3eff4064.jpg",
    },
    {
      title: "How Paper Straws Are Manufactured",
      excerpt:
        "A behind-the-scenes look at the eco-friendly process of making high-quality paper straws.",
      date: "November 20, 2025",
      readTime: "7 min read",
      image:
        "https://i.pinimg.com/1200x/f7/af/4f/f7af4fb22e56c4025d2b422b991d1be9.jpg",
    },
    {
      title: "Choosing the Right Paper Bag for Your Brand",
      excerpt:
        "Flat handle, twisted handle, or SOS bags — choosing the perfect paper bag for your business.",
      date: "November 15, 2025",
      readTime: "6 min read",
      image:
        "https://i.pinimg.com/736x/f1/a2/2f/f1a22fb9538ba8aabac1653f9ac28533.jpg",
    },
    {
      title: "Eco-Friendly Packaging: The Future Is Paper",
      excerpt:
        "Paper-based packaging solutions are shaping a cleaner and greener future.",
      date: "November 10, 2025",
      readTime: "5 min read",
      image:
        "https://i.pinimg.com/736x/7d/9d/ab/7d9dab86f90572ea01ffa42eae187ebc.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner (NO FIXED HEIGHT) */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/assets/images/All-banner/blog..jpg"
          alt="Paper products blog banner"
          className="object-cover w-full"
        />
      </section>

      {/* Blog Cards */}
      <section className="py-20">
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
            Latest Articles
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden bg-white shadow-lg rounded-2xl hover:shadow-2xl group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-contain w-full h-64 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-orange-400">
                    {post.title}
                  </h3>

                  <p className="mb-6 text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>

                  <button className="flex items-center gap-3 font-semibold text-orange-500 transition-all hover:gap-4">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
