import type React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import type { TestimonialItem } from "../types/index";

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Kushal's strategic approach to digital marketing transformed our B2B lead generation process. His data-driven insights helped us achieve a 150% increase in qualified leads.",
    author: "John Smith",
    position: "CEO, TechCorp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
  },
  {
    quote:
      "Working with Kushal has been transformative for our business. His LinkedIn outreach strategy helped us connect with key decision-makers and close major deals.",
    author: "Sarah Johnson",
    position: "Marketing Director, GrowthCo",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
  },
];

const Testimonials: React.FC = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container px-6 mx-auto">
        <motion.h2
          variants={fadeIn}
          className="mb-12 text-3xl font-bold text-center text-gray-900"
        >
          Testimonials
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white border border-gray-100 rounded-lg"
            >
              <p className="mb-6 text-gray-600">{item.quote}</p>
              <div className="flex items-center">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.author}
                  className="object-cover w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{item.author}</h4>
                  <p className="text-gray-500">{item.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
