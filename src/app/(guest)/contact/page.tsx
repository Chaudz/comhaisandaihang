"use client";

import { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    console.log("Form data submitted:", formData);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitMessage(
        "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/lien-he-bg.png')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="border-4 border-white px-8 py-4">
            <h1 className="text-2xl md:text-2xl font-bold text-white tracking-widest">
              LIÊN HỆ
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-yellow-500 text-2xl font-serif italic mb-16"
          >
            Liên lạc với chúng tôi!
          </motion.p>

          {/* Contact Info Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20"
          >
            {/* Phone */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex justify-center mb-4">
                <PhoneIcon className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-white text-sm uppercase tracking-wider mb-3">
                ĐIỆN THOẠI
              </h3>
              <div className="h-px bg-yellow-500/50 w-16 mx-auto mb-3"></div>
              <p className="text-slate-400 text-sm">
                <a
                  href="tel:0941390279"
                  className="hover:text-yellow-500 transition"
                >
                  0941 390 279
                </a>
              </p>
            </motion.div>

            {/* Address */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex justify-center mb-4">
                <MapPinIcon className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-white text-sm uppercase tracking-wider mb-3">
                ĐỊA CHỈ
              </h3>
              <div className="h-px bg-yellow-500/50 w-16 mx-auto mb-3"></div>
              <p className="text-slate-400 text-sm">
                Gần cảng cá cũ Lý Sơn
                <br />
                Quảng Ngãi, Việt Nam
              </p>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex justify-center mb-4">
                <EnvelopeIcon className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-white text-sm uppercase tracking-wider mb-3">
                EMAIL
              </h3>
              <div className="h-px bg-yellow-500/50 w-16 mx-auto mb-3"></div>
              <p className="text-slate-400 text-sm">
                <a
                  href="mailto:comhaisandaihang@gmail.com"
                  className="hover:text-yellow-500 transition"
                >
                  comhaisandaihang@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                NẾU BẠN CÓ BẤT KỲ CÂU HỎI NÀO
              </p>
              <p className="text-white text-lg">
                Đừng ngần ngại gửi tin nhắn cho chúng tôi
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Tiêu đề"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition"
              />

              <textarea
                name="message"
                placeholder="Nội dung tin nhắn"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition resize-none"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-4 bg-yellow-600 text-slate-950 font-bold uppercase tracking-wider hover:bg-yellow-500 transition-all duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "ĐANG GỬI..." : "GỬI TIN NHẮN"}
                </button>
              </div>

              {submitMessage && (
                <p
                  className={`text-center text-sm ${
                    submitMessage.includes("lỗi")
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-yellow-500 text-xl font-serif italic mb-8">
              Kết nối với chúng tôi!
            </p>
            <div className="flex justify-center gap-6">
              {/* Facebook */}
              <a
                href="#"
                className="w-12 h-12 bg-yellow-600 flex items-center justify-center hover:bg-yellow-500 transition"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 text-slate-950"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-12 h-12 bg-yellow-600 flex items-center justify-center hover:bg-yellow-500 transition"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 text-slate-950"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Zalo */}
              <a
                href="#"
                className="w-12 h-12 bg-yellow-600 flex items-center justify-center hover:bg-yellow-500 transition"
                aria-label="Zalo"
              >
                <svg
                  className="w-6 h-6 text-slate-950"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.738 4.304 1.985 5.977L2 22l4.148-1.905A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.77 0-3.416-.577-4.745-1.553l-.34-.235-2.817 1.287 1.312-2.759-.257-.362A7.958 7.958 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.8599415896876!2d109.09432851487953!3d15.375917247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31683eb59a9c7a5b%3A0x3925c20d8aec67ad!2zTmbDgCBI4bqwTkcgQ8ahTSBI4bqiSSBT4bqiTiDEkOG6oEkgSOG6sE5H!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
