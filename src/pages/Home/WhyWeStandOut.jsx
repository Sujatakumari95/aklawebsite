import { motion } from "framer-motion";
import {
  Wallet,
  BadgeCheck,
  CalendarCheck,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Pocket Friendly",
    desc: "Premium beauty services thoughtfully priced for everyone.",
  },
  {
    icon: BadgeCheck,
    title: "Branded Products",
    desc: "We work exclusively with trusted, high-quality brands.",
  },
  {
    icon: CalendarCheck,
    title: "Convenient Booking",
    desc: "Book appointments effortlessly, anytime you want.",
  },
  {
    icon: ShieldCheck,
    title: "100% Hygienic",
    desc: "Clean tools, sanitized stations & complete safety.",
  },
  {
    icon: UserCheck,
    title: "Trained Professionals",
    desc: "Experienced artists delivering flawless results.",
  },
];

export default function WhyWeStandOut() {
  return (
    <section className="relative py-32 bg-[#fffafa] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-white" />

      <div className="relative grid items-center gap-24 px-6 mx-auto max-w-7xl lg:grid-cols-2">

        {/* LEFT – IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Soft background shape */}
          <div className="absolute -top-10 -left-10 w-full h-full bg-blue-100 rounded-[40px] -z-10" />

          <div className="overflow-hidden bg-white shadow-xl rounded-[32px] border border-blue-200">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
              alt="Professional Care"
              className="object-cover w-full h-[520px]"
            />
          </div>
        </motion.div>

        {/* RIGHT – CONTENT */}
        <div className="relative grid gap-20">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-6 text-xs tracking-[0.35em] uppercase text-pink-500">
              Experience the difference today
            </p>

            <h2 className="text-[56px] leading-[1.05] font-playfair font-semibold text-gray-900">
              Why We <br /> Stand Out
            </h2>

            <div className="mt-8 w-16 h-[1px] bg-pink-400" />
          </motion.div>

          {/* Feature List */}
          <div className="relative space-y-16">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-200 to-transparent" />

            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.8,
                  }}
                  className="relative flex gap-8"
                >
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 text-pink-500 bg-white border border-pink-200 rounded-full">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="max-w-md leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
