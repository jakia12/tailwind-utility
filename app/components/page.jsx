"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
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
              <div className="absolute w-96 h-96 -top-48 -left-48 bg-[var(--color-secondary)] rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute w-96 h-96 -bottom-48 -right-48 bg-[var(--color-accent)] rounded-full blur-3xl animate-pulse"
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
                <h2 className="title">About Us</h2>
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
                <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/about-image.jpg"
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
            {/* Continue rest of the sections similarly using title, subtitle, paragraph, btn-primary, input-field, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
}
