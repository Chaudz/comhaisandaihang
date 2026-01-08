"use client";

import { useState } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const BookingPage = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: today,
    time: "18:00",
    guests: 2,
    requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "guests" && parseInt(value, 10) < 1) {
      return;
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    console.log("Booking data submitted:", formData);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitMessage(
        "Đặt bàn thành công! Chúng tôi sẽ liên hệ xác nhận sớm."
      );
    } catch (error) {
      console.error("Error submitting booking:", error);
      setSubmitMessage(
        "Đã có lỗi xảy ra khi đặt bàn. Vui lòng thử lại hoặc gọi điện trực tiếp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableTimes = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Main Booking Form Section */}
      <section className="py-16 md:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
                ĐẶT BÀN ONLINE
              </h1>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                Trải nghiệm hương vị hải sản tươi ngon tại Lý Sơn. Vui lòng điền
                thông tin bên dưới để đặt bàn trước.
              </p>
            </div>

            {/* Booking Form */}
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date and Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Ngày
                    </label>
                    <div className="relative">
                      <CalendarDaysIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white pointer-events-none z-10" />
                      <input
                        type="date"
                        name="date"
                        id="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        style={{
                          colorScheme: "dark",
                        }}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:brightness-0 [&::-webkit-calendar-picker-indicator]:contrast-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
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
                      placeholder="Nhập họ tên đầy đủ"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Email and Guests Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Số Khách
                    </label>
                    <div className="relative">
                      <UserGroupIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="number"
                        name="guests"
                        id="guests"
                        required
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Time and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Giờ Đến
                    </label>
                    <div className="relative">
                      <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none z-10" />
                      <select
                        name="time"
                        id="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition cursor-pointer"
                      >
                        {availableTimes.map((time) => (
                          <option
                            key={time}
                            value={time}
                            className="bg-slate-800"
                          >
                            {time}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-slate-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Số Điện Thoại
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0941 390 279"
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="requests"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Yêu Cầu Đặc Biệt
                  </label>
                  <div className="relative">
                    <ChatBubbleLeftRightIcon className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <textarea
                      name="requests"
                      id="requests"
                      rows={4}
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Nhập yêu cầu đặc biệt của bạn..."
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                      maxLength={1000}
                    ></textarea>
                    <div className="absolute bottom-3 right-3 text-xs text-slate-500">
                      {formData.requests.length}/1000
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-full hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "ĐANG XỬ LÝ..." : "XÁC NHẬN ĐẶT BÀN →"}
                  </button>
                </div>

                {/* Submission Message */}
                {submitMessage && (
                  <p
                    className={`mt-4 text-center font-medium ${
                      submitMessage.includes("lỗi")
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
