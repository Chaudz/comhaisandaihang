"use client";

import Image from "next/image";
import {
  CheckCircleIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// Animation variants - giữ nguyên
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
      staggerChildren: 0.2,
    },
  },
};

const AboutPage = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section - Responsive Adjustments */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-center h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/about-us.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg tracking-tight">
            Về Chúng Tôi
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mt-4 md:mt-6 max-w-lg md:max-w-2xl mx-auto drop-shadow-md font-light">
            Câu chuyện đằng sau những hương vị biển cả tươi ngon.
          </p>
        </motion.div>
      </motion.section>

      {/* Our Story Section - Responsive Adjustments */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 md:mb-8 leading-tight">
              Câu Chuyện Nhà Hàng Vợ Chồng Đại Hàng
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Bắt nguồn từ tình yêu với biển cả và niềm đam mê ẩm thực, Nhà
                hàng Vợ Chồng Đại Hàng được thành lập với mong muốn mang đến
                những món hải sản tươi ngon nhất, được chế biến theo công thức
                gia truyền, giữ trọn hương vị tự nhiên.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Chúng tôi tin rằng mỗi bữa ăn là một hành trình khám phá. Tại
                đây, bạn không chỉ thưởng thức hải sản tươi sống được lựa chọn
                kỹ lưỡng mỗi ngày mà còn cảm nhận được sự ấm cúng, thân thiện
                như chính ngôi nhà của mình.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Từ những ngày đầu khó khăn đến hôm nay, sự ủng hộ của quý khách
                là động lực lớn nhất để chúng tôi không ngừng nỗ lực, cải thiện
                chất lượng món ăn và dịch vụ, mang đến trải nghiệm ẩm thực đáng
                nhớ.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2"
          >
            <Image
              src="/images/restaurant-interior2.png"
              alt="Không gian nhà hàng Vợ Chồng Đại Hàng"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values Section - Responsive Adjustments */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 md:mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <div className="w-16 md:w-24 h-1 bg-teal-500 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300 hover:shadow-xl text-center md:text-left"
            >
              <div className="bg-teal-50 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <CheckCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3 md:mb-4">
                Nguyên Liệu Tươi Ngon
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Cam kết sử dụng hải sản tươi sống nhập mới mỗi ngày, đảm bảo
                chất lượng và an toàn vệ sinh thực phẩm.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300 hover:shadow-xl text-center md:text-left"
            >
              <div className="bg-orange-50 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <SparklesIcon className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3 md:mb-4">
                Không Gian Ấm Cúng
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Thiết kế không gian gần gũi, thoải mái, phù hợp cho những buổi
                tụ họp gia đình, bạn bè hay đối tác.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300 hover:shadow-xl text-center md:text-left"
            >
              <div className="bg-cyan-50 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <UsersIcon className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3 md:mb-4">
                Phục Vụ Tận Tâm
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Đội ngũ nhân viên nhiệt tình, chu đáo, luôn sẵn sàng lắng nghe
                và phục vụ quý khách một cách tốt nhất.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
