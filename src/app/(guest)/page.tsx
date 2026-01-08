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
    <main className="flex-grow overflow-x-hidden bg-slate-900">
      {/* Hero Section - Dark with Food Photography */}
      <section className="relative min-h-screen bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-36">
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
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-red-500">Cơm Hải Sản</span>
                <br />
                <span className="text-white">Đại Hằng - Lý Sơn</span>
                <br />
                <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl">
                  Nhà Hàng Hải Sản
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-slate-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
              >
                Trải nghiệm hương vị biển cả tươi ngon với các món cơm hải sản
                đặc sản, lẩu tươi sống được chế biến tại Lý Sơn. Không gian view
                biển tuyệt đẹp, phục vụ tận tâm.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition duration-300 shadow-lg"
                >
                  Xem Thực Đơn
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition duration-300 shadow-lg"
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
              className="relative h-[500px] lg:h-[700px]"
            >
              {/* Main Large Image */}
              <div className="absolute top-0 right-0 w-[85%] h-[60%] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/thuc-don.png"
                  alt="Món hải sản đặc biệt"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Left Small Image */}
              <div className="absolute bottom-20 left-0 w-[50%] h-[35%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
                <Image
                  src="/images/restaurant.png"
                  alt="Lẩu hải sản"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Bottom Right Small Image */}
              <div className="absolute bottom-0 right-0 w-[45%] h-[35%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
                <Image
                  src="/images/restaurant-interior.png"
                  alt="Cơm hải sản"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-10 -left-4 w-32 h-32 bg-teal-500 rounded-full opacity-10 blur-2xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Ingredients Floating */}
        <div className="absolute top-10 left-10 opacity-30">
          <Image
            src="/images/decorative/tomato.png"
            alt=""
            width={60}
            height={60}
          />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <Image
            src="/images/decorative/onion.png"
            alt=""
            width={50}
            height={50}
          />
        </div>
      </section>

      {/* Quick Booking Bar */}
      {/* <QuickBookingBar /> */}

      {/* About Section - White Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
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
                className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                Về Chúng Tôi
                <br />
                <span className="text-red-600">Quán Cơm Hải Sản Đại Hằng</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 text-base md:text-lg leading-relaxed mb-6"
              >
                Tọa lạc tại đảo Lý Sơn xinh đẹp, Quán Cơm Hải Sản Đại Hằng tự
                hào mang đến những món ăn từ hải sản tươi sống được đánh bắt
                hàng ngày. Từ cơm hải sản đậm đà đến lẩu tươi ngon, mỗi món ăn
                đều được chế biến bằng công thức gia truyền kết hợp kỹ thuật
                hiện đại.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition duration-300"
                >
                  Tìm Hiểu Thêm
                </Link>
                <button className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section - Dark Background */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
          >
            Món Ngon <span className="text-red-500">Nổi Bật</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Dish Card 1 */}
            <motion.div
              variants={cardVariant}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/foods/canh-ca-2.png"
                  alt="Món ăn 1"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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

            {/* Dish Card 2 */}
            <motion.div
              variants={cardVariant}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/foods/cha-ca-chien.png"
                  alt="Món ăn 2"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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

            {/* Dish Card 3 */}
            <motion.div
              variants={cardVariant}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/foods/com-ran-hai-san-2.png"
                  alt="Món ăn 3"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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

            {/* Dish Card 4 */}
            <motion.div
              variants={cardVariant}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src="/images/foods/rong-bien-tron-2.png"
                  alt="Món ăn 4"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
      </section>

      {/* Food Showcase Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                Đa Dạng Món Ăn
                <br />
                <span className="text-red-600">Thực Đơn Phong Phú</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 text-base md:text-lg leading-relaxed mb-6"
              >
                Lựa chọn đa dạng từ cơm hải sản nhiều loại, lẩu tươi ngon, đến
                các món chế biến đặc sản. Mỗi món ăn đều được trình bày đẹp mắt,
                đảm bảo vệ sinh an toàn thực phẩm tuyệt đối.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="flex gap-6 mb-6">
                <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
                  <ClockIcon className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-slate-900">
                    Mở 7h30AM
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
                  <MapPinIcon className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-slate-900">
                    Đảo Lý Sơn
                  </span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/menu"
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition duration-300 shadow-lg"
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
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/foods/thuc-don.png"
                  alt="Món ăn đặc sản"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Small dish overlay */}
              <div className="absolute top-6 left-6 w-40 h-40 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
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

      {/* Customer Testimonials Section */}
      <CustomerTestimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Đặt Bàn Ngay Hôm Nay
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto"
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
              className="inline-flex items-center justify-center px-10 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition duration-300 shadow-lg"
            >
              Đặt Bàn Online
            </Link>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Gọi {phoneNumber}
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
      title: "View biển đẹp",
      description: "Ngắm cảnh biển Lý Sơn",
    },
    {
      src: "/images/spaces/khong-gian-5.png",
      title: "Bar và view biển",
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
    <section className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Không Gian <span className="text-red-500">Nhà Hàng</span>
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Carousel */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    {galleryImages[currentSlide].title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    {galleryImages[currentSlide].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-6 w-6 text-slate-900" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-6 w-6 text-slate-900" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentSlide === index
                    ? "ring-4 ring-red-500 scale-105"
                    : "ring-2 ring-slate-600 hover:ring-slate-400 opacity-60 hover:opacity-100"
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
            <p className="text-slate-400 text-sm">
              {currentSlide + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Khách Hàng <span className="text-red-600">Nói Gì?</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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
              className="bg-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-red-200" />
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
            className="inline-flex items-center px-8 py-3 border-2 border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-600 hover:text-white transition duration-300"
          >
            Xem Thêm Đánh Giá
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
