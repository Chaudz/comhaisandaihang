"use client"; // Cần cho Framer Motion và các hook nếu có

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion
import {
  SparklesIcon, // Giữ lại từ About
  CheckBadgeIcon, // Icon mới: Chất lượng/Tươi
  MapPinIcon, // Icon mới: Không gian/Vị trí
  ChatBubbleBottomCenterTextIcon, // Icon mới: Đánh giá
  EyeIcon, // Icon mới cho nút xem thêm
  PhoneIcon, // Add PhoneIcon
} from "@heroicons/react/24/outline";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Khoảng cách animation giữa các children
    },
  },
};

// Thêm variant mới cho card
const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "circOut",
    },
  },
};

export default function Home() {
  // --- UPDATE LINKS HERE (from Footer, reuse here if needed) ---
  const facebookPageUrl = "https://facebook.com/YOUR_PAGE"; // Thay YOUR_PAGE
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_MAP_DATA"; // Thay bằng link embed Google Maps
  const phoneNumber = "0941 390 279"; // Thêm khoảng trắng cho dễ đọc
  // -------------------------------------------------------------

  return (
    <main className="flex-grow overflow-x-hidden">
      {" "}
      {/* Thêm overflow-x-hidden để tránh scroll ngang do animation */}
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden" // Tăng chiều cao mobile lên chút
        style={{
          backgroundImage: "url('/images/banner.png')",
        }} // Thay bằng ảnh nền phù hợp
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>{" "}
        {/* Darker overlay */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer} // Container cho stagger effect
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 drop-shadow-lg" // Giảm size chữ trên mobile
            variants={fadeInUp}
          >
            Hương Vị Biển Cả Tươi Ngon
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto drop-shadow-md" // Giảm size chữ và margin trên mobile
            variants={fadeInUp}
          >
            Trải nghiệm những món hải sản tươi sống, chế biến tinh tế trong
            không gian ấm cúng tại Nhà hàng Vợ Chồng Đại Hằng.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center" // Stack buttons vertically on small screens
            variants={fadeInUp}
          >
            <Link
              href="/menu"
              className="bg-white text-teal-700 px-6 py-3 sm:px-8 rounded-full font-semibold hover:bg-slate-100 transition duration-300 ease-in-out shadow-md inline-block w-full sm:w-auto" // Full width on mobile
            >
              Xem Thực Đơn
            </Link>
            <Link
              href="/booking"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 sm:px-8 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition duration-300 ease-in-out shadow-md inline-block w-full sm:w-auto" // Full width on mobile
            >
              Đặt Bàn Ngay
            </Link>
          </motion.div>
        </motion.div>
      </section>
      {/* Featured Dishes Section - Enhanced Animations */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center text-slate-800 mb-8 md:mb-12" // Giảm size chữ, margin bottom trên mobile
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp} // Giữ fadeInUp cho tiêu đề
          >
            Món Ngon Nổi Bật
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" // Giảm gap trên mobile nếu cần
            variants={staggerContainer} // Vẫn dùng stagger cho grid
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger sớm hơn một chút
          >
            {/* Dish Card 1 - Apply new variant */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 group"
              variants={cardVariant} // Sử dụng cardVariant mới
              // Bỏ whileHover ở đây để control từ CSS hoặc hiệu ứng khác nếu muốn
            >
              <div className="overflow-hidden relative w-full h-48">
                {" "}
                {/* Đặt chiều cao cố định cho ảnh trên mobile */}
                <Image
                  src="/images/foods/tomhum.png" // Thay bằng ảnh món ăn
                  alt="Tôm hùm nướng bơ tỏi"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500 ease-in-out" // Zoom ảnh khi hover thẻ
                />
              </div>
              <div className="p-4 md:p-6">
                {" "}
                {/* Giảm padding trên mobile */}
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  Tôm Hùm Nướng Bơ Tỏi
                </h3>
                <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4">
                  {" "}
                  {/* Giảm size chữ, margin trên mobile */}
                  Tôm hùm tươi ngon được nướng cùng bơ tỏi thơm lừng, giữ trọn
                  vị ngọt tự nhiên.
                </p>
                <Link
                  href="/menu#tom-hum"
                  className="text-teal-600 hover:text-teal-800 font-medium inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-teal-700 after:transition-all after:duration-300 hover:after:w-full text-sm md:text-base" // Giảm size chữ link
                >
                  Xem thêm
                </Link>
              </div>
            </motion.div>
            {/* Dish Card 2 - Apply new variant */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 group"
              variants={cardVariant}
            >
              <div className="overflow-hidden relative w-full h-48">
                <Image
                  src="/images/foods/cuahuynhde.png"
                  alt="Cua huỳnh đế hấp bia"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  Cua Huỳnh Đế Hấp Bia
                </h3>
                <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4">
                  Thịt cua hoàng đế chắc ngọt, hấp cùng bia và gia vị đặc trưng,
                  đậm đà khó quên.
                </p>
                <Link
                  href="/menu#cua-hoang-de"
                  className="text-teal-600 hover:text-teal-800 font-medium inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-teal-700 after:transition-all after:duration-300 hover:after:w-full text-sm md:text-base"
                >
                  Xem thêm
                </Link>
              </div>
            </motion.div>
            {/* Dish Card 3 - Apply new variant */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 group"
              variants={cardVariant}
            >
              <div className="overflow-hidden relative w-full h-48">
                <Image
                  src="/images/foods/canhca.png"
                  alt="Canh cá tà ma"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  Canh Cá Tà Ma
                </h3>
                <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4">
                  Nồi canh cá tà ma đầy đặn với đa dạng hải sản tươi ngon, nước
                  dùng chua cay đậm vị.
                </p>
                <Link
                  href="/menu#lau-hai-san"
                  className="text-teal-600 hover:text-teal-800 font-medium inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-teal-700 after:transition-all after:duration-300 hover:after:w-full text-sm md:text-base"
                >
                  Xem thêm
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- NEW SECTION: Why Choose Us? --- */}
      <section className="py-12 md:py-20 bg-white">
        {" "}
        {/* Nền trắng để xen kẽ */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center text-slate-800 mb-8 md:mb-12" // Giảm size chữ, margin
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Tại Sao Chọn Vợ Chồng Đại Hằng?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center" // Giảm gap
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Feature 1: Fresh Ingredients */}
            <motion.div variants={fadeInUp} className="p-4 md:p-6">
              <CheckBadgeIcon className="h-10 md:h-12 w-10 md:w-12 text-teal-600 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                Hải Sản Tươi Mỗi Ngày
              </h3>
              <p className="text-sm md:text-base text-slate-600">
                Nguồn nguyên liệu được tuyển chọn kỹ lưỡng, đảm bảo độ tươi ngon
                và chất lượng hảo hạng cho từng món ăn.
              </p>
            </motion.div>
            {/* Feature 2: Ambiance */}
            <motion.div variants={fadeInUp} className="p-4 md:p-6">
              <MapPinIcon className="h-10 md:h-12 w-10 md:w-12 text-orange-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                Không Gian Lý Tưởng
              </h3>
              <p className="text-sm md:text-base text-slate-600">
                Thiết kế ấm cúng, sang trọng nhưng không kém phần gần gũi, phù
                hợp cho mọi dịp gặp gỡ.
              </p>
            </motion.div>
            {/* Feature 3: Unique Recipes */}
            <motion.div variants={fadeInUp} className="p-4 md:p-6">
              <SparklesIcon className="h-10 md:h-12 w-10 md:w-12 text-cyan-600 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                Hương Vị Độc Đáo
              </h3>
              <p className="text-sm md:text-base text-slate-600">
                Công thức chế biến gia truyền kết hợp sáng tạo, mang đến những
                trải nghiệm ẩm thực khó quên.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- END NEW SECTION --- */}
      {/* --- NEW SECTION: Testimonials --- */}
      <section className="py-12 md:py-20 bg-slate-100">
        {" "}
        {/* Màu nền khác biệt */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center text-slate-800 mb-8 md:mb-12" // Giảm size chữ, margin
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Khách Hàng Nói Gì?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" // Giảm gap
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Testimonial 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-5 md:p-6 rounded-lg shadow-lg border-l-4 border-teal-500" // Giảm padding
            >
              <ChatBubbleBottomCenterTextIcon className="h-6 md:h-8 w-6 md:w-8 text-teal-400 mb-3 md:mb-4 opacity-50" />
              <p className="text-sm md:text-base text-slate-600 italic mb-3 md:mb-4">
                "Hải sản ở đây tươi rói, chế biến vừa miệng lắm. Không gian lại
                đẹp, thích hợp đi cả gia đình. Sẽ quay lại ủng hộ!"
              </p>
              <p className="font-semibold text-sm md:text-base text-slate-800">
                - Anh Minh Tuấn
              </p>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-5 md:p-6 rounded-lg shadow-lg border-l-4 border-teal-500"
            >
              <ChatBubbleBottomCenterTextIcon className="h-6 md:h-8 w-6 md:w-8 text-teal-400 mb-3 md:mb-4 opacity-50" />
              <p className="text-sm md:text-base text-slate-600 italic mb-3 md:mb-4">
                "Quán phục vụ rất nhiệt tình, món ăn lên nhanh. Lẩu hải sản ngon
                xuất sắc, đậm đà. Giá cả cũng hợp lý nữa."
              </p>
              <p className="font-semibold text-sm md:text-base text-slate-800">
                - Chị Thanh Hằng
              </p>
            </motion.div>
            {/* Testimonial 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-5 md:p-6 rounded-lg shadow-lg border-l-4 border-teal-500"
            >
              <ChatBubbleBottomCenterTextIcon className="h-6 md:h-8 w-6 md:w-8 text-teal-400 mb-3 md:mb-4 opacity-50" />
              <p className="text-sm md:text-base text-slate-600 italic mb-3 md:mb-4">
                "Mình đặt tiệc sinh nhật ở đây rất ưng ý. Đồ ăn ngon, nhân viên
                chu đáo, không gian riêng tư. Highly recommend!"
              </p>
              <p className="font-semibold text-sm md:text-base text-slate-800">
                - Bạn Thu Trang
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- END NEW SECTION --- */}
      {/* --- NEW SECTION: Restaurant Ambiance --- */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        {" "}
        {/* Ensure overflow is hidden for animations */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Column */}
            <motion.div
              className="relative h-[300px] sm:h-[400px] md:h-[500px]" // Giảm chiều cao trên mobile nhỏ nhất
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Image 1 (Larger, Background) */}
              <motion.div
                className="absolute inset-0 rounded-lg overflow-hidden shadow-xl"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }} // Smooth zoom out
              >
                <Image
                  src="/images/restaurant.png" // Ảnh tổng quan/view đẹp
                  alt="Không gian tổng quan nhà hàng"
                  layout="fill"
                  objectFit="cover"
                  className=""
                  sizes="(max-width: 768px) 100vw, 50vw" // Thêm sizes cho tối ưu
                />
              </motion.div>
              {/* Image 2 (Smaller, Foreground) */}
              <motion.div
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-2/5 h-2/5 md:w-1/2 md:h-1/2 rounded-md overflow-hidden shadow-2xl border-2 sm:border-4 border-white" // Giảm border
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <Image
                  src="/images/restaurant-interior.png" // Ảnh chi tiết nội thất
                  alt="Chi tiết nội thất nhà hàng"
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 768px) 40vw, 25vw" // Thêm sizes
                />
              </motion.div>
              {/* Optional: Image 3 (Another small one) */}
              {/* <motion.div 
                    className="absolute top-4 left-4 w-1/3 h-1/3 ... "
                    ... animation props ...
                >
                   <Image ... />
               </motion.div> */}
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="text-center md:text-left mt-8 md:mt-0" // Thêm margin top trên mobile khi stack
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight" // Giảm size chữ, margin
                variants={fadeInUp}
              >
                Không Gian <span className="text-teal-600">Sang Trọng</span> &{" "}
                <span className="text-orange-500">Ấm Cúng</span>
              </motion.h2>
              <motion.p
                className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg" // Giảm size chữ, margin
                variants={fadeInUp}
              >
                Thưởng thức hải sản tươi ngon trong một không gian được thiết kế
                tinh tế, kết hợp hài hòa giữa nét hiện đại và sự gần gũi, thoáng
                đãng của biển cả. Hoàn hảo cho mọi bữa ăn từ thân mật đến trang
                trọng.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start" // Giảm gap, stack vertically on small screens
                variants={fadeInUp}
              >
                <Link
                  href="/about" // Link tới trang Giới thiệu hoặc Gallery ảnh
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 border border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition duration-300 ease-in-out shadow-sm w-full sm:w-auto text-sm sm:text-base" // Giảm padding, size chữ
                >
                  <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Xem Thêm
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-full hover:from-teal-600 hover:to-cyan-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg w-full sm:w-auto text-sm sm:text-base" // Giảm padding, size chữ
                >
                  Đặt Bàn Ngay
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Call to Action Section - Updated */}
      <section
        className="relative py-12 md:py-20 bg-slate-800 text-white overflow-hidden" // Changed background to lighter dark slate
      >
        {/* Removed image background and overlay for simplicity, can be added back */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" // Slightly larger heading
            variants={fadeInUp}
          >
            Sẵn Sàng Trải Nghiệm?
          </motion.h2>
          <motion.p
            className="text-base md:text-xl mb-6 md:mb-10 max-w-xl md:max-w-2xl mx-auto text-slate-300" // Lighter text for contrast, more margin bottom
            variants={fadeInUp}
          >
            Đặt bàn ngay hôm nay để giữ chỗ và tận hưởng hương vị hải sản tươi
            ngon độc đáo cùng không gian ấm cúng tại Vợ Chồng Đại Hằng.
          </motion.p>
          {/* Buttons container */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4" // Flex layout for buttons
            variants={fadeInUp}
          >
            {/* Online Booking Button */}
            <Link
              href="/booking"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 ease-in-out shadow-lg transform hover:scale-105 inline-block w-full sm:w-auto"
              // Changed button style to gradient teal
            >
              Đặt Bàn Online
            </Link>
            {/* Phone Booking Link */}
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3.5 border border-teal-400 text-teal-300 font-semibold rounded-full hover:bg-teal-900/40 hover:text-white transition duration-300 ease-in-out shadow-sm w-full sm:w-auto text-sm sm:text-base"
              // Added phone call button/link
            >
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Gọi {phoneNumber}
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
