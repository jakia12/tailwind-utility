"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

export default function MainPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const features = [
    {
      icon: "\u{1F4BC}",
      title: "Professional Service",
      description: "We deliver high-quality services that exceed expectations.",
    },
    {
      icon: "\u{1F4A1}",
      title: "Innovative Solutions",
      description: "Creative approaches tailored to your unique challenges.",
    },
    {
      icon: "\u{1F3C6}",
      title: "Award-Winning",
      description: "Recognized for excellence in our industry.",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#", label: "Facebook" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaInstagram />, url: "#", label: "Instagram" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-light)]">
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <FaArrowRight className="transform rotate-180" />
      </Link>

      <div className="container-custom py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-60 bg-gradient-header overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute w-96 h-96 -top-48 -left-48 bg-secondary rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute w-96 h-96 -bottom-48 -right-48 bg-accent rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 flex items-center justify-center mb-4"
              >
                <span className="text-3xl font-bold">YB</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="title"
              >
                Your Business
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm opacity-90 mt-1"
              >
                Your compelling tagline goes here
              </motion.p>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="section-title">
                <div className="section-divider"></div>
                <h2 className="titleb">About Us</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras volutpat, urna in ultrices tincidunt, massa dui
                    volutpat nisl, in condimentum dui magna id eros.
                  </p>
                  <div className="mt-4">
                    <h3 className="subtitle mb-2">Our Mission</h3>
                    <p className="text-gray-600 text-sm">
                      Praesent non erat vel ligula facilisis lobortis. Aliquam
                      erat volutpat. Mauris molestie varius sem.
                    </p>
                  </div>
                </div>
                <div className="relative h-[230px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/abt.png"
                    alt="About our business"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.target.style.backgroundColor = "#e2e8f0";
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="section-title">
                <div className="section-divider"></div>
                <h2 className="titleb">Our Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="subtitle mb-2">{feature.title}</h3>
                    <p className="paragraph text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="section-title">
                <div className="section-divider"></div>
                <h2 className="titleb">Contact Us</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full mr-3">
                      <FaPhone className="text-primary" size={14} />
                    </div>
                    <div>
                      <h4 className="text-tMain font-semibold text-sm">
                        Phone
                      </h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full mr-3">
                      <FaEnvelope className="text-primary" size={14} />
                    </div>
                    <div>
                      <h4 className="text-tMain font-semibold text-sm">
                        Email
                      </h4>
                      <p className="text-gray-600">info@yourbusiness.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full mr-3">
                      <FaMapMarkerAlt className="text-primary" size={14} />
                    </div>
                    <div>
                      <h4 className="text-tMain font-semibold text-sm">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        123 Business St, City Name
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-tMain font-semibold text-[16px] mb-3">
                      Connect with us
                    </h4>
                    <div className="flex space-x-3">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          aria-label={link.label}
                          className="bg-gray-100 p-2 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  {/* Contact Form updated styles */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-medium mb-1 flex items-center"
                      >
                        <FaUser className="mr-2 text-secondary" size={12} />{" "}
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-medium mb-1 flex items-center"
                      >
                        <FaEnvelope className="mr-2 text-secondary" size={12} />{" "}
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-medium mb-1 flex items-center"
                      >
                        <FaPaperPlane
                          className="mr-2 text-secondary"
                          size={12}
                        />{" "}
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="input-field"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message{" "}
                          <FaPaperPlane className="ml-2" size={12} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
            {/* Footer */}
          </div>
          <div className="bg-light-gray p-6 border-t border-gray-200 text-center">
            <p className="text-dark-gray text-sm">
              &copy; {new Date().getFullYear()} Your Business. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
