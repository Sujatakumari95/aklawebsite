import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const services = ["Makeup", "Hair", "Skin", "Nails", "Bridal Package"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItem =
    "relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-4/5 hover:after:left-[10%]";

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 w-full z-50 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-[#FDF9F3]/90 backdrop-blur-xl shadow-lg"
            : "bg-[#FDF9F3]/70 backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">

          {/* LOGO */}
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-[#1F3B28]">Alika</span>
            <span className="text-[#D4AF37]">Parlor</span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-[#1F3B28]">

          <Link to="/" className={navItem}>Home</Link>
<Link to="/about-us" className={navItem}>About</Link>


            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`${navItem} flex items-center gap-1`}>
                Services <ChevronDown size={16} />
              </button>

              {servicesOpen && (
                <div className="absolute top-8 left-0 w-56 rounded-xl bg-[#FDF9F3] shadow-xl py-3">
                  {services.map(item => (
                    <Link
                      key={item}
                      to="#"
                      className="block px-6 py-2 text-sm rounded-md hover:bg-[#EFE6D8]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

           <Link to="/certification" className={navItem}>Certification</Link>
<Link to="/gallery" className={navItem}>Gallery</Link>
<Link to="/contact-us" className={navItem}>Contact Us</Link>


            <motion.button
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              className="ml-4 px-7 py-2.5 rounded-full
              bg-[#1F3B28] text-[#FFD700]
              border border-[#D4AF37] font-semibold"
            >
              Customize Your Package
            </motion.button>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-[#1F3B28]"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* SLIDE PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm
              bg-[#FDF9F3] shadow-2xl px-6 py-8"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="text-2xl font-bold">
                  <span className="text-[#1F3B28]">Alika</span>
                  <span className="text-[#D4AF37]">Parlor</span>
                </div>
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* ✅ MOBILE MENU ORDER FIXED */}
              <nav className="flex flex-col gap-6 text-[#1F3B28]">

                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="#" onClick={() => setOpen(false)}>About</Link>

                {/* SERVICES AFTER ABOUT */}
                <details>
                  <summary className="font-medium cursor-pointer">
                    Services
                  </summary>
                  <div className="flex flex-col gap-2 mt-3 ml-4 text-sm">
                    {services.map(item => (
                      <Link key={item} to="#">
                        {item}
                      </Link>
                    ))}
                  </div>
                </details>

                <Link to="#" onClick={() => setOpen(false)}>Certification</Link>
                <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
                <Link to="#" onClick={() => setOpen(false)}>Contact Us</Link>

                <button
                  className="mt-6 px-6 py-3 rounded-full
                  bg-[#1F3B28] text-[#FFD700]
                  border border-[#D4AF37]"
                >
                  Customize Package
                </button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
