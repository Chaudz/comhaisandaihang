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
    >,
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
        "Đặt bàn thành công! Chúng tôi sẽ liên hệ xác nhận sớm.",
      );
    } catch (error) {
      console.error("Error submitting booking:", error);
      setSubmitMessage(
        "Đã có lỗi xảy ra khi đặt bàn. Vui lòng thử lại hoặc gọi điện trực tiếp.",
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
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                ĐẶT BÀN ONLINE
              </h1>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                Trải nghiệm hương vị hải sản tươi ngon tại Lý Sơn. Vui lòng điền
                thông tin bên dưới để đặt bàn trước.
              </p>
            </div>

            {/* Contact Information */}
            <div className="p-5 rounded-xl sm:rounded-2xl border-slate-800">
              <div className="space-y-6 sm:space-y-8">
                {/* Message */}
                <div className="text-center">
                  <p className="text-slate-300 text-base sm:text-lg md:text-xl mb-2">
                    Để đặt bàn, vui lòng liên hệ với chúng tôi qua:
                  </p>
                </div>

                {/* Contact Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Zalo Contact */}
                  <a
                    href="https://zalo.me/0941390279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-br from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {/* Zalo Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#2962ff"
                            d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
                          ></path>
                          <path
                            fill="#eee"
                            d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
                          ></path>
                          <path
                            fill="#2962ff"
                            d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
                          ></path>
                          <path
                            fill="#2962ff"
                            d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
                          ></path>
                          <path
                            fill="#2962ff"
                            d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
                          ></path>
                          <path
                            fill="#2962ff"
                            d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                          Liên hệ qua Zalo
                        </h3>
                        <p className="text-sky-100 text-sm font-medium">
                          0941 390 279
                        </p>
                      </div>
                      <div className="text-sky-100 text-xs sm:text-sm flex items-center gap-2">
                        <span>Nhấn để chat ngay</span>
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>

                  {/* Phone Contact */}
                  <a
                    href="tel:0941390279"
                    className="group bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 p-5 sm:p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {/* Phone Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <PhoneIcon className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                          Gọi điện thoại
                        </h3>
                        <p className="text-teal-100 text-sm font-medium">
                          0941 390 279
                        </p>
                      </div>
                      <div className="text-teal-100 text-xs sm:text-sm flex items-center gap-2">
                        <span>Nhấn để gọi ngay</span>
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Additional Info */}
                <div className="bg-slate-800/50 p-4 sm:p-6 rounded-lg border border-slate-700">
                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Giờ phục vụ:
                      </h4>
                      <p className="text-slate-300 text-sm sm:text-base">
                        Sáng: 10:00 - 13:30
                      </p>
                      <p className="text-slate-300 text-sm sm:text-base">
                        Chiều: 17:00 - 21:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 sm:p-6 rounded-lg border border-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Địa chỉ:
                      </h4>
                      <p className="text-slate-300 text-sm sm:text-base">
                        Thôn Đông, Xã An Vĩnh, Huyện Đảo Lý Sơn, Quảng Ngãi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
