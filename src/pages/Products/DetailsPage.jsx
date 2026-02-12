import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaTimes } from "react-icons/fa";
import products from "../Products/product.json";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // Popup state

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="p-10">Product not found</div>;

  const images =
    product.img && product.img.length > 0
      ? product.img
      : ["https://via.placeholder.com/500"];

  const [activeImage, setActiveImage] = useState(product.mainImg || images[0]);

  useEffect(() => {
    setActiveImage(product.mainImg || images[0]);
  }, [product, images]);

  return (
    <div className="px-6 py-10 mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold">{product.title}</h1>

      <div className="grid gap-10 mb-8 lg:grid-cols-2">
        {/* LEFT IMAGES - Sticky */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className="object-cover w-20 h-20 border cursor-pointer"
              />
            ))}
          </div>

          {/* Main Image - Sticky */}
          <div className="sticky self-start flex-1 p-6 border top-20">
            <img
              src={activeImage}
              className="max-h-[500px] w-full object-contain"
              alt={product.title}
            />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <ul className="space-y-3">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="flex-shrink-0 mt-1 text-lg text-green-600" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          {product.table && (
            <div className="mt-6 overflow-x-auto border rounded">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    {product.table.head.map((head, i) => (
                      <th key={i} className="px-4 py-2 border">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.table.body.map((row, i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="px-4 py-2 border">{row.label}</td>
                      <td className="px-4 py-2 border">{row.unit}</td>
                      <td className="px-4 py-2 border">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 text-white bg-orange-400 rounded-full hover:bg-orange-500"
            >
              Enquiry Form
            </button>

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3 text-white bg-orange-400 rounded-full hover:bg-orange-500"
            >
              <FaArrowLeft />
              Back to product
            </button>
          </div>
        </div>
      </div>

{/* APPLICATIONS SECTION */}
{product.applications && product.applications.length > 0 && (
  <section className="py-14 bg-gray-50">
    
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-extrabold text-gray-800">
        Applications
      </h2>

      {/* Stylish underline */}
      <div className="flex items-center justify-center mt-4">
        <span className="w-32 h-[4px] bg-orange-500 rounded-full"></span>
        {/* <span className="w-6 h-[3px] mx-2 bg-gray-300 rounded-full"></span>
        <span className="w-6 h-[3px] bg-gray-300 rounded-full"></span> */}
      </div>
    </div>

    {/* Grid */}
    <div className="flex justify-center px-4">
      <div className="grid w-full max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-3">
        
        {product.applications.map((appImg, i) => (
          <div
            key={i}
            className="relative overflow-hidden transition-all duration-300 bg-white shadow-md rounded-2xl group hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={appImg}
              alt={`Application ${i + 1}`}
              className="object-cover w-full h-64 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:opacity-100"></div>

            {/* Text */}
            <div className="absolute bottom-0 w-full p-4 transition-all duration-300 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-lg font-semibold tracking-wide text-center text-white">
                Application {i + 1}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>

  </section>
)}




      {/* MODAL POPUP */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl rounded-3xl">
            {/* Header */}
            <div className="px-5 py-3 bg-gradient-to-r from-orange-400 to-orange-500">
              <h2 className="text-lg font-semibold text-center text-white">
                Enquiry Form
              </h2>
            </div>

            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute text-white top-3 right-3 hover:opacity-80"
            >
              <FaTimes size={18} />
            </button>

            {/* Form */}
            <form className="px-5 py-4 space-y-2.5 text-sm">
              <div>
                <label className="block mb-0.5 text-gray-600">Your Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="block mb-0.5 text-gray-600">Your Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="block mb-0.5 text-gray-600">Company</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block mb-0.5 text-gray-600">Country</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="block mb-0.5 text-gray-600">City</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-0.5 text-gray-600">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
                />
              </div>

              <div>
                <label className="block mb-0.5 text-gray-600">Message</label>
                <textarea
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none resize-none focus:border-orange-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-1 py-2.5 text-sm font-semibold text-white rounded-xl bg-orange-500 hover:bg-orange-600 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
