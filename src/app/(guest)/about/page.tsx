"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
    <div className="bg-slate-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/view-nha-hang.png"
            alt="Dining Experience"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-6 tracking-wide leading-tight">
            TRẢI NGHIỆM ẨM THỰC
            <br />
            <span className="font-normal">ĐẲNG CẤP</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-8 font-light tracking-wide">
            Nơi hương vị biển cả hòa quyện cùng nghệ thuật ẩm thực tinh tế
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-slate-950 transition-all duration-300 tracking-wider text-sm"
          >
            KHÁM PHÁ THỰC ĐƠN
          </Link>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-red-500 text-sm tracking-widest mb-4">
                CÂU CHUYỆN CỦA CHÚNG TÔI
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8 leading-tight">
                QUÁN CƠM HẢI SẢN
                <br />
                ĐẠI HẰNG
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  Bắt nguồn từ tình yêu với biển cả và niềm đam mê ẩm thực, Quán
                  Cơm Hải Sản Đại Hằng được thành lập với mong muốn mang đến
                  những món hải sản tươi ngon nhất, được chế biến theo công thức
                  gia truyền.
                </p>
                <p>
                  Mỗi món ăn tại quán là sự kết hợp hoàn hảo giữa nguyên liệu
                  tươi sống từ biển Lý Sơn và tay nghề điêu luyện của đội ngũ
                  đầu bếp giàu kinh nghiệm.
                </p>
                <p>
                  Chúng tôi tự hào mang đến không chỉ bữa ăn ngon mà còn là trải
                  nghiệm ẩm thực đáng nhớ trong không gian ấm cúng, gần gũi.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-8 text-white border-b border-red-500 hover:text-red-500 transition-colors"
              >
                TÌM HIỂU THÊM →
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/restaurant-interior2.png"
                alt="Restaurant Interior"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section 1 - Dry-Aged Seafood */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[500px]">
            <Image
              src="/images/hai-san-tuoi.png"
              alt="Fresh Seafood"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-white flex items-center px-12 py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                HẢI SẢN TƯƠI SỐNG
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Tất cả hải sản tại quán đều được tuyển chọn kỹ lưỡng từ những
                nguồn cung cấp uy tín, đảm bảo độ tươi ngon nhất. Mỗi ngày,
                chúng tôi nhập về những con tôm, cua, ghẹ, cá tươi rói để phục
                vụ quý khách.
              </p>
              <button className="text-red-600 border-b border-red-600 hover:text-red-700 transition-colors">
                KHÁM PHÁ THÊM
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section 2 - Classic Flavour */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="bg-slate-950 flex items-center px-12 py-16 order-2 md:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                HƯƠNG VỊ TRUYỀN THỐNG
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Công thức gia truyền được truyền từ đời này sang đời khác, kết
                hợp với kỹ thuật nấu nướng hiện đại. Mỗi món ăn đều mang đậm dấu
                ấn riêng của ẩm thực miền biển, gợi nhớ hương vị thuở nhỏ.
              </p>
              <button className="text-red-500 border-b border-red-500 hover:text-red-600 transition-colors">
                XEM THỰC ĐƠN
              </button>
            </motion.div>
          </div>
          <div className="relative h-[500px] order-1 md:order-2">
            <Image
              src="/images/huong-vi-truyen-thong.png"
              alt="Grilled Seafood"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Section 3 - Wine/Drinks */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[500px]">
            <Image
              src="/images/do-uong.png"
              alt="Drinks"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-white flex items-center px-12 py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                ĐỒ UỐNG PHONG PHÚ
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Bổ sung trải nghiệm ẩm thực với danh mục đồ uống đa dạng từ nước
                ép tươi, bia các loại đến rượu vang cao cấp. Mỗi thức uống đều
                được chọn lọc kỹ càng để phù hợp với từng món ăn.
              </p>
              <button className="text-red-600 border-b border-red-600 hover:text-red-700 transition-colors">
                XEM THÊM
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Thay tên ảnh ở đây */}
            {[
              "/images/foods/com-ly-son-1.png", // Ảnh 1
              "/images/foods/com-ly-son-2.png", // Ảnh 2
              "/images/foods/com-ly-son-3.png", // Ảnh 3
              "/images/foods/com-ly-son-4.png", // Ảnh 4
            ].map((imageSrc, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative h-64 overflow-hidden group cursor-pointer"
              >
                <Image
                  src={imageSrc}
                  alt={`Gallery ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/dat-ban-ngay.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 text-center max-w-3xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
            Đặt Bàn Ngay Hôm Nay
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Trải nghiệm hương vị biển cả đích thực tại Quán Cơm Hải Sản Đại Hằng
          </p>
          <Link
            href="/booking"
            className="inline-block px-12 py-4 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 tracking-wider"
          >
            ĐẶT BÀN NGAY
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
