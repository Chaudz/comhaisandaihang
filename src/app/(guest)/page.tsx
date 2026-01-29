"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CheckBadgeIcon,
  MapPinIcon,
  SparklesIcon,
  PhoneIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "circOut",
    },
  },
};

export default function Home() {
  const phoneNumber = "0941 390 279";

  return (
    <main className="flex-grow overflow-x-hidden bg-white">
      {/* Hero Section - Dark with Food Photography */}
      <section className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-50 overflow-hidden flex items-center pt-16 sm:pt-24 md:pt-28">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-white z-10"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight"
              >
                <span className="text-sky-700">Cơm Hải Sản</span>
                <br />
                <span className="text-slate-900">Đại Hằng - Lý Sơn</span>
                <br />
                <span className="text-slate-700 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
                  Nhà Hàng Hải Sản
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-6 md:mb-8 max-w-xl leading-relaxed"
              >
                Trải nghiệm hương vị biển cả tươi ngon với các món cơm hải sản
                đặc sản, lẩu tươi sống được chế biến tại Lý Sơn. Không gian view
                biển tuyệt đẹp, phục vụ tận tâm.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
              >
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-sky-600 text-white font-semibold hover:bg-sky-700 transition duration-300 shadow-lg text-xs sm:text-sm md:text-base"
                >
                  Xem Thực Đơn
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 border-2 border-sky-600 text-sky-600 font-semibold hover:bg-sky-600 hover:text-white transition duration-300 text-xs sm:text-sm md:text-base"
                >
                  Đặt Bàn Ngay
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Food Images */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[700px] mt-4 sm:mt-8 lg:mt-0"
            >
              {/* Main Large Image */}
              <div className="absolute top-0 right-0 w-[85%] h-[55%] sm:h-[60%] overflow-hidden shadow-2xl">
                <Image
                  src="/images/thuc-don.png"
                  alt="Món hải sản đặc biệt"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Left Small Image */}
              <div className="absolute bottom-12 sm:bottom-20 left-0 w-[50%] h-[30%] sm:h-[35%] overflow-hidden shadow-2xl">
                <Image
                  src="/images/restaurant.png"
                  alt="Lẩu hải sản"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Bottom Right Small Image */}
              <div className="absolute bottom-0 right-0 w-[45%] h-[30%] sm:h-[35%] overflow-hidden shadow-2xl sm:border-4">
                <Image
                  src="/images/restaurant-interior.png"
                  alt="Cơm hải sản"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-sky-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-10 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-teal-500 rounded-full opacity-10 blur-2xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Ingredients Floating */}
        <div className="hidden md:block absolute top-10 left-10 opacity-30">
          <Image
            src="/images/decorative/tomato.png"
            alt=""
            width={60}
            height={60}
          />
        </div>
      </section>

      {/* Quick Booking Bar */}
      {/* <QuickBookingBar /> */}

      {/* About Section - Very Light Sky */}
      <section className="py-8 sm:py-16 md:py-20 lg:py-24 bg-sky-50">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
              className="relative h-[400px] md:h-[500px] overflow-hidden shadow-xl"
            >
              <Image
                src="/images/about-me.png"
                alt="Không gian nhà hàng"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl md:text-5xl font-bold text-slate-900 mb-4"
              >
                Về Chúng Tôi
                <br />
                <span className="text-sky-600">Quán Cơm Hải Sản Đại Hằng</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 text-sm md:text-lg leading-relaxed mb-4"
              >
                Tọa lạc tại đảo Lý Sơn xinh đẹp, Quán Cơm Hải Sản Đại Hằng tự
                hào mang đến những món ăn từ hải sản tươi sống được đánh bắt
                hàng ngày. Từ cơm hải sản đậm đà đến lẩu tươi ngon, mỗi món ăn
                đều được chế biến bằng công thức gia truyền kết hợp kỹ thuật
                hiện đại.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-sky-600 text-white font-semibold hover:bg-sky-700 transition duration-300 text-xs sm:text-sm md:text-base"
                >
                  Tìm Hiểu Thêm
                </Link>
                <button className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-slate-300 text-slate-700 font-semibold hover:border-sky-600 hover:text-sky-600 transition duration-300 text-xs sm:text-sm md:text-base">
                  <span className="mr-2">Hotline: 0941390279</span>
                  <PhoneIcon className="h-5 w-5 mr-2" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section - Dark Background */}
      {/* <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12"
          >
            Món Ngon <span className="text-teal-400">Nổi Bật</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div
              variants={cardVariant}
              className="bg-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/foods/canh-ca-2.png"
                  alt="Món ăn 1"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-3 left-3 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  5.0
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">
                  Canh cá tà ma{" "}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  Canh cá ngọt thanh với rau củ tươi ngon
                </p>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariant}
              className="bg-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/foods/cha-ca-chien.png"
                  alt="Món ăn 2"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-3 left-3 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  4.9
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">
                  Chả cá chiên{" "}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  Chả cá chiên thơm ngon, ăn kèm với cơm trắng
                </p>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariant}
              className="bg-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/foods/com-ran-hai-san-2.png"
                  alt="Món ăn 3"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-3 left-3 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  5.0
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">
                  Cơm ran hải sản{" "}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  Cơm ran hải sản với hải sản tươi ngon
                </p>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariant}
              className="bg-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/foods/rong-bien-tron-2.png"
                  alt="Món ăn 4"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-3 left-3 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  4.8
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">
                  Rong biển trọn{" "}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  Rong biển trọn tròn, thơm ngon
                </p>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Food Showcase Section */}
      <section className="py-8 sm:py-16 md:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl md:text-5xl font-bold text-slate-900 mb-4"
              >
                Đa Dạng Món Ăn
                <br />
                <span className="text-sky-600">Thực Đơn Phong Phú</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 text-sm md:text-lg leading-relaxed mb-4"
              >
                Lựa chọn đa dạng từ cơm hải sản nhiều loại, lẩu tươi ngon, đến
                các món chế biến đặc sản. Mỗi món ăn đều được trình bày đẹp mắt,
                đảm bảo vệ sinh an toàn thực phẩm tuyệt đối.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-6 mb-3 sm:mb-6"
              >
                <div className="flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-full">
                  <ClockIcon className="h-4 sm:h-5 w-4 sm:w-5 text-sky-600" />
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">
                    Mở 7h30AM
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                  <MapPinIcon className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">
                    Đảo Lý Sơn
                  </span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-sky-600 text-white font-semibold hover:bg-sky-700 transition duration-300 shadow-lg text-xs sm:text-sm md:text-base"
                >
                  Xem Món Ngon
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Food Image with Overlay Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
              className="relative h-[400px] md:h-[500px] order-1 lg:order-2"
            >
              <div className="absolute inset-0 overflow-hidden shadow-xl">
                <Image
                  src="/images/foods/thuc-don.png"
                  alt="Món ăn đặc sản"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Small dish overlay */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                <Image
                  src="/images/foods/thuc-don-2.png"
                  alt="Món phụ"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restaurant Gallery Section - Carousel */}
      <RestaurantGallery />

      {/* Customer Check-in Gallery Section */}
      <CustomerCheckinGallery />

      {/* Customer Testimonials Section */}
      <CustomerTestimonials />

      {/* CTA Section */}
      <section className="py-8 sm:py-16 md:py-20 bg-slate-950 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="container mx-auto px-3 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6"
          >
            Đặt Bàn Ngay Hôm Nay
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            Trải nghiệm hương vị hải sản tươi ngon tại Lý Sơn. Gọi ngay hoặc đặt
            bàn online để đảm bảo chỗ ngồi tốt nhất!
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-sky-600 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-sky-700 transition duration-300 shadow-lg"
            >
              Đặt Bàn Online
            </Link>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 border-2 border-white text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-white hover:text-slate-900 transition duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Gọi </span>
              {phoneNumber}
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

// Restaurant Gallery Carousel Component
const RestaurantGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      src: "/images/spaces/khong-gian-1.png",
      title: "Khu vực bàn ăn ngoài trời",
      description: "Không gian rộng rãi, thoáng mát",
    },
    {
      src: "/images/spaces/khong-gian-2.png",
      title: "Phòng tầng 1",
      description: "Phù hợp cho gia đình và nhóm lớn",
    },
    {
      src: "/images/spaces/khong-gian-3.png",
      title: "Phòng tầng 2",
      description: "Phù hợp cho gia đình và nhóm lớn",
    },
    {
      src: "/images/spaces/khong-gian-4.png",
      title: "Bar và view biển",

      description: "Ngắm cảnh biển Lý Sơn",
    },
    {
      src: "/images/spaces/khong-gian-5.png",
      title: "View biển đẹp",
      description: "Lãng mạn và lung linh",
    },
    {
      src: "/images/spaces/khong-gian-6.png",
      title: "Không gian ban đêm",
      description: "Lãng mạn và lung linh",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section className="lg:h-[calc(100vh-100px)] py-8 sm:py-12 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-6 sm:mb-10 md:mb-12"
        >
          Không Gian <span className="text-sky-600">Nhà Hàng</span>
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Carousel */}
          <div className="relative aspect-[16/9] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 md:p-8">
                  <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">
                    {galleryImages[currentSlide].title}
                  </h3>
                  <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
                    {galleryImages[currentSlide].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-5 sm:h-6 w-5 sm:w-6 text-slate-900" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-5 sm:h-6 w-5 sm:w-6 text-slate-900" />
            </button>
          </div>

          {/* Thumbnail Navigation - Hidden on mobile */}
          <div className="hidden sm:flex gap-3 mt-6 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden transition-all duration-300 ${
                  currentSlide === index
                    ? "scale-105"
                    : " hover:ring-slate-400 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                />
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6">
            <p className="text-slate-600 text-sm">
              {currentSlide + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Customer Check-in Gallery Component
const CustomerCheckinGallery = () => {
  const checkinPhotos = [
    {
      src: "/images/checkins/checkin-1.png",
      alt: "Khách hàng thưởng thức hải sản",
    },
    {
      src: "/images/checkins/checkin-2.png",
      alt: "Gia đình vui vẻ dùng bữa",
    },
    {
      src: "/images/checkins/checkin-3.png",
      alt: "Bạn bè check-in tại quán",
    },
    {
      src: "/images/checkins/checkin-4.png",
      alt: "Món ăn ngon miệng",
    },
    {
      src: "/images/checkins/checkin-5.png",
      alt: "Không gian ấm cúng",
    },
    {
      src: "/images/checkins/checkin-6.png",
      alt: "Khoảnh khắc đáng nhớ",
    },
    {
      src: "/images/checkins/checkin-7.png",
      alt: "View biển tuyệt đẹp",
    },
    {
      src: "/images/checkins/checkin-8.png",
      alt: "Bữa tiệc đặc biệt",
    },
  ];

  return (
    <section className="py-8 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-sky-50 via-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-4">
            Khách Hàng <span className="text-sky-600">Check-in</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Những khoảnh khắc đáng nhớ của khách hàng tại Cơm Hải Sản Đại Hằng
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {checkinPhotos.map((photo, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className={`relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer ${
                index % 7 === 0 || index % 7 === 4
                  ? "row-span-2"
                  : "row-span-1"
              }`}
            >
              <div
                className={`relative w-full ${
                  index % 7 === 0 || index % 7 === 4 ? "h-64 sm:h-80 md:h-96" : "h-32 sm:h-40 md:h-48"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <p className="text-white text-xs sm:text-sm font-medium">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram-style CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-slate-600 text-sm sm:text-base mb-4">
            Chia sẻ khoảnh khắc của bạn với hashtag{" "}
            <span className="font-bold text-sky-600">#ComHaiSanDaiHang</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Customer Testimonials Component
const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "Anh Minh Tuấn",
      avatar: "/images/avatars/avatar-1.png",
      rating: 5,
      date: "2 tuần trước",
      comment:
        "Hải sản ở đây tươi rói, chế biến vừa miệng lắm. Không gian lại đẹp, view biển tuyệt vời. Thích hợp đi cả gia đình. Sẽ quay lại ủng hộ!",
      image: "/images/testimonials/review-1.png",
    },
    {
      name: "Chị Thanh Hằng",
      avatar: "/images/avatars/avatar-2.png",
      rating: 5,
      date: "1 tháng trước",
      comment:
        "Quán phục vụ rất nhiệt tình, món ăn lên nhanh. Lẩu hải sản ngon xuất sắc, đậm đà. Giá cả cũng hợp lý nữa. Highly recommend!",
      image: "/images/testimonials/review-2.png",
    },
    {
      name: "Bạn Thu Trang",
      avatar: "/images/avatars/avatar-3.png",
      rating: 5,
      date: "3 tuần trước",
      comment:
        "Mình đặt tiệc sinh nhật ở đây rất ưng ý. Đồ ăn ngon, nhân viên chu đáo, không gian riêng tư. Đặc biệt cơm hải sản quá ngon!",
      image: "/images/testimonials/review-3.png",
    },
  ];

  return (
    <section className="py-8 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-4">
            Khách Hàng <span className="text-sky-600">Nói Gì?</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Những phản hồi thật sự từ khách hàng đã trải nghiệm dịch vụ của
            chúng tôi
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="bg-slate-50 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-600 leading-relaxed mb-4">
                "{testimonial.comment}"
              </p>

              {/* Quote Icon */}
              <div className="flex justify-end">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-sky-200" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to more reviews */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 border-2 border-sky-600 text-sky-600 font-semibold hover:bg-sky-600 hover:text-white transition duration-300"
          >
            Xem Thêm Đánh Giá
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
