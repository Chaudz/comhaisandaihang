"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";

// --- Placeholder Icons ---
// Bạn nên thay thế bằng SVG icons thực tế cho Zalo và Facebook
const ZaloIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M12.952 7.403c-.24-.944-1.088-1.65-2.137-1.65h-.174c-1.122 0-2.074.776-2.223 1.824l-.213 1.513c-.07.504.133.99.543 1.285.047.034.096.065.147.093a.5.5 0 0 0 .16.05.5.5 0 0 0 .162-.024c.107-.04.208-.093.3-.155.36-.23.79-.373 1.252-.373h.17c.755 0 1.39.46 1.62 1.112.177.494.58 1.16 1.053 1.89.192.298.58.466.94.466h.213c.64 0 1.16-.52 1.16-1.16 0-.34-.148-.656-.388-.873l-.003-.003a1.99 1.99 0 0 0-.21-.186c-.07-.053-.14-.107-.21-.16l-.004-.003c-.248-.188-.48-.394-.682-.618z" />
    <path
      fillRule="evenodd"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM3.35 4.124c-.247.96.134 1.966 1.05 2.514l.003.002.003.002.005.003c.02.01.04.02.06.03.04.018.08.036.12.052.4.177.83.274 1.28.274h.17c1.57 0 2.94-.92 3.44-2.286.09-.25.16-.51.21-.78.05-.27.07-.55.07-.84 0-1.14-.63-2.14-1.57-2.54-.32-.13-.66-.2-1.02-.2h-.168c-1.56 0-2.93.92-3.43 2.28C3.47 3.74 3.4 3.93 3.35 4.12z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.05C0 12.055 2.924 15.21 6.762 15.975V10.34H4.717V8.05h2.045V6.274c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.29H9.25V15.975A8.02 8.02 0 0 0 16 8.049z" />
  </svg>
);
// --- End Placeholder Icons ---

const ContactFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- Cập nhật link Zalo và Facebook của bạn tại đây ---
  const zaloLink = "https://zalo.me/0941390279";
  const facebookLink = "https://www.facebook.com/NhaNghiDaiHangLySon0941390279"; // Ví dụ: https://facebook.com/nhahangvochongdaihang
  // -----------------------------------------------------

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-center">
        {/* Contact Options */}
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-4 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 translate-y-4 scale-95"
        >
          <div className="flex flex-col items-center space-y-3 mb-3">
            {/* Facebook Link */}
            <Link
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </Link>
            {/* Zalo Link */}
            <Link
              href={zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 transition duration-200 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Zalo"
            >
              <ZaloIcon />
            </Link>
          </div>
        </Transition>

        {/* Main FAB Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-teal-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2`}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Đóng liên hệ" : "Mở liên hệ"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default ContactFAB;
