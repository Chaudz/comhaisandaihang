import Link from "next/link";
import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// Placeholder Social Icons (Replace with actual SVGs/components)
const FacebookIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);
// --- End Placeholder Icons ---

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- UPDATE LINKS HERE ---
  const facebookPageUrl = "https://facebook.com/YOUR_PAGE";
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.0105089661465!2d109.09432847595875!3d15.375917185207593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31683eb59a9c7a5b%3A0x3925c20d8aec67ad!2zTkjDgCBIw4BORyBDxqBNIEjhuqJJIFPhuqJOIMSQ4bqgSSBI4bqwTkc!5e0!3m2!1svi!2s!4v1745501677411!5m2!1svi!2s"; // Thay link embed mới
  const googleMapsUrl =
    "https://www.google.com/maps/place/NH%C3%80+H%C3%80NG+C%C6%A0M+H%E1%BA%A2I+S%E1%BA%A2N+%C4%90%E1%BA%A0I+H%E1%BA%B0NG/@15.3759172,109.0943285,17z/data=!4m15!1m8!3m7!1s0x31683eb59a9c7a5b:0x3925c20d8aec67ad!2zTkjDgCBIw4BORyBDxqBNIEjhuqJJIFPhuqJOIMSQ4bqgSSBI4bqwTkc!8m2!3d15.3759172!4d109.0969034!10e1!16s%2Fg%2F11c48xfhcz!3m5!1s0x31683eb59a9c7a5b:0x3925c20d8aec67ad!8m2!3d15.3759172!4d109.0969034!16s%2Fg%2F11c48xfhcz?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D"; // Link xem bản đồ lớn
  const instagramUrl = "https://instagram.com/YOUR_PROFILE";
  const youtubeUrl = "https://youtube.com/YOUR_CHANNEL";
  // ------------------------

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left Side (Logo, Desc, Links, Contact) - Spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Logo & Description */}
              <div className="sm:col-span-1">
                <Link
                  href="/"
                  className="inline-block mb-4 p-1 rounded-full bg-white/90"
                >
                  <Image
                    src="/images/logo.png"
                    alt="Nhà hàng Vợ Chồng Đại Hàng"
                    width={140}
                    height={40}
                    className="object-contain h-auto"
                  />
                </Link>
                <p className="text-sm leading-relaxed text-slate-300">
                  Nơi hội tụ tinh hoa ẩm thực biển cả, mang đến những trải
                  nghiệm vị giác khó quên trong không gian ấm cúng.
                </p>
              </div>

              {/* Quick Links */}
              <div className="sm:col-span-1">
                <h3 className="text-base font-semibold text-white mb-4">
                  Khám Phá
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-teal-300 transition-colors"
                    >
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/menu"
                      className="hover:text-teal-300 transition-colors"
                    >
                      Thực Đơn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-teal-300 transition-colors"
                    >
                      Về Chúng Tôi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/booking"
                      className="hover:text-teal-300 transition-colors"
                    >
                      Đặt Bàn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-teal-300 transition-colors"
                    >
                      Liên Hệ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="sm:col-span-1">
                <h3 className="text-base font-semibold text-white mb-4">
                  Liên Hệ
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                    <MapPinIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Gần cảng cá cũ Lý Sơn
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
                    <a
                      href="tel:0123456789"
                      className="hover:text-teal-300 transition-colors text-slate-300"
                    >
                      0941390279
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
                    <a
                      href="mailto:info@vochongdaihang.com"
                      className="hover:text-teal-300 transition-colors text-slate-300"
                    >
                      comhaisandaihang@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side (Map) - Spans 1 col on lg */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-white mb-4">
              Tìm Chúng Tôi
            </h3>
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-10 lg:aspect-h-11 rounded-md overflow-hidden shadow-lg">
              <iframe
                src={googleMapsEmbedUrl}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí nhà hàng Vợ Chồng Đại Hàng"
                className="inset-0 w-full h-full"
              ></iframe>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-teal-400 hover:text-teal-300 text-xs mt-2 transition-colors duration-200"
            >
              Xem bản đồ lớn hơn
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            &copy; {currentYear} Nhà hàng Vợ Chồng Đại Hàng. Đã đăng ký Bản
            quyền.
          </p>
          <div className="flex space-x-5">
            <motion.a
              href={facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors duration-200"
              aria-label="Facebook"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors duration-200"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-300 transition-colors duration-200"
              aria-label="Youtube"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <YoutubeIcon />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
