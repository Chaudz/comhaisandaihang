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
  InformationCircleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const BookingPage = () => {
  const today = new Date().toISOString().split("T")[0]; // Lấy ngày hiện tại dạng YYYY-MM-DD

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: today,
    time: "18:00", // Giờ mặc định
    guests: 2, // Số khách mặc định
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
    // Đảm bảo số khách không âm
    if (name === "guests" && parseInt(value, 10) < 1) {
      return;
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // --- Xử lý gửi form đặt bàn tại đây ---
    console.log("Booking data submitted:", formData);
    try {
      // Ví dụ: Gửi đến API endpoint /api/booking
      // const response = await fetch('/api/booking', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Đặt bàn thất bại');

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mô phỏng

      setSubmitMessage(
        "Đặt bàn thành công! Chúng tôi sẽ liên hệ xác nhận sớm."
      );
      // Có thể không cần reset form ở đây, tùy yêu cầu
      // setFormData({ name: '', phone: '', email: '', date: today, time: '18:00', guests: 2, requests: '' });
    } catch (error) {
      console.error("Error submitting booking:", error);
      setSubmitMessage(
        "Đã có lỗi xảy ra khi đặt bàn. Vui lòng thử lại hoặc gọi điện trực tiếp."
      );
    } finally {
      setIsSubmitting(false);
    }
    // -------------------------------------
  };

  // Danh sách các khung giờ có thể chọn (Ví dụ)
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
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section - Responsive Adjustments */}
      <section
        className="relative bg-cover bg-center h-[40vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/booking-table.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg mb-3 md:mb-4">
            Đặt Bàn Online
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto drop-shadow-md">
            Giữ chỗ trước để có trải nghiệm ẩm thực tốt nhất tại nhà hàng chúng
            tôi
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Features Grid - Responsive Adjustments */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 md:mb-8">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-slate-200 text-center sm:text-left">
                <CalendarDaysIcon className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 mb-1 sm:mb-2 mx-auto sm:mx-0" />
                <h3 className="text-xs sm:text-sm font-semibold">
                  Đặt Bàn 24/7
                </h3>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-slate-200 text-center sm:text-left">
                <UserGroupIcon className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 mb-1 sm:mb-2 mx-auto sm:mx-0" />
                <h3 className="text-xs sm:text-sm font-semibold">
                  Phục Vụ Chuyên Nghiệp
                </h3>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-slate-200 text-center sm:text-left">
                <ClipboardDocumentListIcon className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 mb-1 sm:mb-2 mx-auto sm:mx-0" />
                <h3 className="text-xs sm:text-sm font-semibold">
                  Xác Nhận Ngay
                </h3>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-slate-200 text-center sm:text-left">
                <MapPinIcon className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 mb-1 sm:mb-2 mx-auto sm:mx-0" />
                <h3 className="text-xs sm:text-sm font-semibold">
                  Vị Trí Đắc Địa
                </h3>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-5 md:mb-6">
                Thông Tin Đặt Bàn
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Date, Time, Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                    >
                      Ngày
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-3 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                    >
                      Giờ
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 text-slate-500">
                        <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <select
                        name="time"
                        id="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none text-sm sm:text-base transition-all duration-300 ease-in-out"
                      >
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 text-slate-500 pointer-events-none">
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                    >
                      Số lượng khách
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 text-slate-500">
                        <UserGroupIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <input
                        type="number"
                        name="guests"
                        id="guests"
                        required
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div>
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
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                    >
                      Số Điện Thoại
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 text-slate-500">
                        <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                    >
                      Email (tùy chọn)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 text-slate-500">
                        <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base transition-all duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    htmlFor="requests"
                    className="block text-xs sm:text-sm font-medium text-slate-700 mb-1"
                  >
                    Yêu cầu đặc biệt (tùy chọn)
                  </label>
                  <div className="relative">
                    <span className="absolute top-2.5 sm:top-3 left-0 flex items-center pl-2 sm:pl-3 text-slate-500">
                      <ChatBubbleLeftRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <textarea
                      name="requests"
                      id="requests"
                      rows={3}
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Ví dụ: ghế trẻ em, ngồi gần cửa sổ,..."
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base transition-all duration-300 ease-in-out"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex justify-center py-2.5 px-5 sm:py-3 sm:px-6 border border-transparent shadow-sm text-base sm:text-lg font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Đang xử lý..." : "Xác Nhận Đặt Bàn"}
                  </button>
                </div>

                {/* Submission Message */}
                {submitMessage && (
                  <p
                    className={`mt-3 md:mt-4 text-xs sm:text-sm text-center ${
                      submitMessage.includes("lỗi")
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            {/* Opening Hours */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-200 mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <ClockIcon className="h-5 w-5 md:h-6 md:w-6 text-teal-600" />
                <h3 className="text-base md:text-lg font-semibold">
                  Giờ Mở Cửa
                </h3>
              </div>
              <div className="space-y-1.5 md:space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Thứ 2 - Chủ Nhật</span>
                  <span className="font-medium">10:00 - 23:00</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-200 mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-teal-600" />
                <h3 className="text-base md:text-lg font-semibold">Liên Hệ</h3>
              </div>
              <div className="space-y-2 md:space-y-3 text-xs sm:text-sm">
                <p className="flex items-center gap-1.5 sm:gap-2">
                  <PhoneIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                  <span>0941390279</span>
                </p>
                <p className="flex items-center gap-1.5 sm:gap-2">
                  <EnvelopeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                  <span>comhaisandaihang@gmail.com</span>
                </p>
                <p className="flex items-center gap-1.5 sm:gap-2">
                  <MapPinIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                  <span>Gần cảng cá cũ Lý Sơn</span>
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-teal-50 p-4 md:p-6 rounded-xl border border-teal-100">
              <div className="flex items-start gap-2 sm:gap-3">
                <InformationCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-teal-800">
                  <p className="font-medium mb-1 sm:mb-2">Lưu ý khi đặt bàn:</p>
                  <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-teal-700">
                    <li>Vui lòng đến đúng giờ đã đặt</li>
                    <li>Bàn sẽ được giữ trong vòng 15 phút</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
