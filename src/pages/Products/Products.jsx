import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: "All Products" },
    { key: "paper-straw", label: "Paper Straws" },
    { key: "paper-bag", label: "Paper Bags" },
    { key: "mask", label: "Masks" },
  ];

  const products = [
   
    {
      id: 5,
      category: "paper-straw",
      title: "Straight Paper Straws",
      desc: "Eco-friendly straws ideal for parties & events.",
      img: "https://i.pinimg.com/1200x/66/d9/de/66d9de1b90475c14fd80315a305f732d.jpg",
    },
    {
      id: 6,
      category: "paper-straw",
      title: "U-Bend Paper Straw For Tetra Pack",
      desc: "Premium quality striped straws for beverages.",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/8/339022053/OW/HB/UQ/47484722/whatsapp-image-2023-08-26-at-12-48-40-1.jpeg",
    },
    {
      id: 7,
      category: "paper-straw",
      title: "Diagonal Cut Straight Straw for Tetra Pack/Boba Tea",
      desc: "Extra-wide straws perfect for thick drinks.",
      img: "https://image.made-in-china.com/2f0j00EkVWtyTaRpUS/100-Biodegradable-PLA-Straw-Disposable-PLA-Straws-Eco-Friendly-Straws-Quality-Customized-Paper-Straws.webp",
    },
     {
      id: 1,
      category: "paper-bag",
      title: "Twisted Handle Paper Bags",
      desc: "Strong & recyclable kraft paper bags for daily use.",
      img: "https://i.pinimg.com/1200x/ea/29/e3/ea29e378ca04b229c4bf7509b99a1524.jpg",
    },
    {
      id: 2,
      category: "paper-bag",
      title: "SOS Paper Bags",
      desc: "Clean, minimal & premium paper bags for stores.",
      img: "https://i.pinimg.com/1200x/96/9b/7a/969b7a6804bbeca9c59432e914bacfa5.jpg",
    },
    {
      id: 3,
      category: "paper-bag",
      title: "Flat Handle Paper Bags",
      desc: "Custom printing options for branding your business.",
      img: "https://i.pinimg.com/736x/f1/a2/2f/f1a22fb9538ba8aabac1653f9ac28533.jpg",
    },
    {
      id: 10,
      category: "mask",
      title: "3-Ply Face Mask",
      desc: "Comfortable 3-layer biodegradable mask.",
      img: "https://i.pinimg.com/1200x/03/98/2c/03982c534d0c70432870be21c703d4ea.jpg",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gray-50">
      {/* ================= TOP BANNER WITH IMAGE ================= */}
      <section className="relative w-full">
        {/* Background Image */}
        <img
          src="assets/images/All-banner/product-p-copy.jpg"
          alt="Products Banner"
          className="object-cover w-full"
        />
      
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="py-12">
        <div className="container px-6 mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2 rounded-full font-semibold transition
                  ${
                    activeCategory === cat.key
                      ? "bg-[#f3800e] text-white"
                      : "bg-white text-gray-700 border hover:bg-teal-50"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ================= PRODUCTS GRID ================= */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden bg-white shadow-lg rounded-2xl group"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="overflow-hidden h-60">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold">{product.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">{product.desc}</p>
                    <span className="inline-flex items-center gap-2 font-semibold text-[#f3800e]">
                      View Details <FaArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
