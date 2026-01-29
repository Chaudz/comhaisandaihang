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
      <section className="py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                ĐẶT BÀN ONLINE
              </h1>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                Trải nghiệm hương vị hải sản tươi ngon tại Lý Sơn. Vui lòng điền
                thông tin bên dưới để đặt bàn trước.
              </p>
            </div>

            {/* Booking Form */}
            <div className="bg-slate-900/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-slate-800">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 md:space-y-6"
              >
                {/* Date and Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2"
                    >
                      Ngày
                    </label>
                    <div className="relative">
                      <CalendarDaysIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400 pointer-events-none z-10" />
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
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition text-sm sm:text-base [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:brightness-0 [&::-webkit-calendar-picker-indicator]:contrast-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2"
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
                      className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Guests Row */}
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2"
                  >
                    Số Khách
                  </label>
                  <div className="relative">
                    <UserGroupIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                    <input
                      type="number"
                      name="guests"
                      id="guests"
                      required
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Time and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2"
                    >
                      Giờ Đến
                    </label>
                    <div className="relative">
                      <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400 pointer-events-none z-10" />
                      <select
                        name="time"
                        id="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2.5 sm:py-3 md:py-4 bg-slate-800 border border-slate-700 text-white appearance-none focus:outline-none focus:border-sky-500 transition cursor-pointer text-sm sm:text-base"
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
                          className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400"
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
                      className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2"
                    >
                      Số Điện Thoại
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0941 390 279"
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="requests"
                    className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5 sm:mb-2"
                  >
                    Yêu Cầu Đặc Biệt
                  </label>
                  <div className="relative">
                    <ChatBubbleLeftRightIcon className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                    <textarea
                      name="requests"
                      id="requests"
                      rows={4}
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Nhập yêu cầu đặc biệt của bạn..."
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-4 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition resize-none text-sm sm:text-base"
                      maxLength={1000}
                    ></textarea>
                    <div className="absolute bottom-3 right-3 text-xs text-slate-500">
                      {formData.requests.length}/1000
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-1 sm:pt-2 md:pt-4">
                  <button
                    type="submit"
                    // disabled={isSubmitting}
                    disabled
                    className={`w-full py-2.5 opacity-55 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 lg:px-12 bg-sky-600 text-white font-bold uppercase tracking-wider hover:bg-sky-700 transition-all duration-300 text-xs sm:text-sm md:text-base ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "ĐANG XỬ LÝ..." : "GỬI ĐẶT BÀN"}
                  </button>
                </div>

                {/* Submission Message */}
                {submitMessage && (
                  <p
                    className={`mt-4 text-center font-medium text-sm ${
                      submitMessage.includes("lỗi")
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
                <p className="mt-4 text-center font-medium text-sm text-red-400">
                  Vui lòng liên hệ hotline 0941 390 279 để được hỗ trợ.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
