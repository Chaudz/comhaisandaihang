"use client";

import { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// Animation Variants
const fadeInSlideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const ContactPage = () => {
  // State cho form (ví dụ đơn giản)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    // --- Xử lý gửi form tại đây ---
    // Ví dụ: Gửi đến API endpoint của bạn
    console.log("Form data submitted:", formData);
    // Thay thế bằng logic gọi API thực tế
    try {
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Gửi thất bại');

      // Mô phỏng thành công sau 2 giây
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitMessage(
        "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất."
      );
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
    // ------------------------------
  };

  return (
    <div className="bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[40vh] md:h-[45vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/lien-he.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            variants={fadeInSlideUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg"
          >
            Liên Hệ Với Chúng Tôi
          </motion.h1>
          <motion.p
            variants={fadeInSlideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto drop-shadow-md"
          >
            Chúng tôi luôn sẵn lòng lắng nghe và giải đáp mọi thắc mắc của bạn.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            <motion.h2
              variants={fadeInSlideUp}
              className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6"
            >
              Thông Tin Liên Hệ
            </motion.h2>

            <motion.div
              variants={fadeInSlideUp}
              className="flex items-start space-x-3 sm:space-x-4"
            >
              <MapPinIcon className="h-6 w-6 md:h-8 md:w-8 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Địa chỉ
                </h3>
                <p className="text-sm md:text-base text-slate-600 mt-0.5 md:mt-1">
                  Gần cảng cá cũ Lý Sơn
                </p>
                <a
                  href="https://www.google.com/maps/place/NH%C3%80+H%C3%80NG+C%C6%A0M+H%E1%BA%A2I+S%E1%BA%A2N+%C4%90%E1%BA%A0I+H%E1%BA%B0NG/@15.3759172,109.0943285,17z/data=!3m1!4b1!4m6!3m5!1s0x31683eb59a9c7a5b:0x3925c20d8aec67ad!8m2!3d15.3759172!4d109.0969034!16s%2Fg%2F11c48xfhcz?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline mt-1 inline-block text-sm md:text-base"
                >
                  Xem bản đồ
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInSlideUp}
              className="flex items-start space-x-3 sm:space-x-4"
            >
              <PhoneIcon className="h-6 w-6 md:h-8 md:w-8 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Điện thoại
                </h3>
                <p className="text-sm md:text-base text-slate-600 mt-0.5 md:mt-1">
                  <a href="tel:0941390279" className="hover:text-teal-700">
                    0941390279
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInSlideUp}
              className="flex items-start space-x-3 sm:space-x-4"
            >
              <EnvelopeIcon className="h-6 w-6 md:h-8 md:w-8 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Email
                </h3>
                <p className="text-sm md:text-base text-slate-600 mt-0.5 md:mt-1">
                  <a
                    href="mailto:comhaisandaihang@gmail.com"
                    className="hover:text-teal-700"
                  >
                    comhaisandaihang@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInSlideUp}
              className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-200"
            >
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 md:mb-3">
                Giờ mở cửa
              </h3>
              <p className="text-sm md:text-base text-slate-600">
                Thứ 2 - Chủ Nhật: 10:00 - 23:00
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">
              Gửi Lời Nhắn Cho Chúng Tôi
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-lg"
            >
              <motion.div
                variants={fadeInSlideUp}
                initial="hidden"
                animate="visible"
              >
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                >
                  Họ và Tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div
                  variants={fadeInSlideUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                  />
                </motion.div>
                <motion.div
                  variants={fadeInSlideUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                  >
                    Số Điện Thoại (tùy chọn)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={fadeInSlideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                >
                  Lời Nhắn
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                ></textarea>
              </motion.div>

              <motion.div
                variants={fadeInSlideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex justify-center py-2.5 px-5 sm:py-3 sm:px-6 border border-transparent shadow-sm text-sm sm:text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi Lời Nhắn"}
                </button>
              </motion.div>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-3 md:mt-4 text-xs sm:text-sm text-center ${
                    submitMessage.includes("lỗi")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
