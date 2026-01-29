"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Menu categories with icons
// const categories = [
// { id: "appetizers", name: "Khai Vị", icon: "🥗" },
// { id: "main", name: "Món Chính", icon: "🍤" },
// { id: "desserts", name: "Tráng Miệng", icon: "🍰" },
// ];

// Menu items organized by category
const menuData = {
  appetizers: [
    {
      name: "Canh cá",
      description:
        "Canh cá tươi ngon nấu chua thanh mát, rau thơm đậm đà hương vị",
      price: "120.000 ₫",
      image: "/images/foods/canh-ca-2.png",
    },
    {
      name: "Cơm Lý Sơn",
      description:
        "Cơm hải sản Lý Sơn đặc sắc với tôm, mực, nghêu tươi ngon",
      price: "150.000 ₫",
      image: "/images/foods/com-ly-son-1.png",
    },
    {
      name: "Cơm Lý Sơn đặc biệt",
      description:
        "Phiên bản đặc biệt với hải sản cao cấp, nấu theo công thức truyền thống",
      price: "180.000 ₫",
      image: "/images/foods/com-ly-son-2.png",
    },
    {
      name: "Tôm hùm nướng",
      description:
        "Tôm hùm baby nướng bơ tỏi thơm phức, ăn kèm rau củ tươi",
      price: "850.000 ₫",
      image: "/images/foods/tomhum.png",
    },
    {
      name: "Rong biển trộn",
      description:
        "Rong biển tươi trộn dầu mè, tỏi phi giòn, vị thanh mát bổ dưỡng",
      price: "75.000 ₫",
      image: "/images/foods/rong-bien-tron-2.png",
    },
    {
      name: "Cua huỳnh đế hấp",
      description:
        "Cua huỳnh đế tươi sống hấp bia, giữ trọn vị ngọt tự nhiên",
      price: "450.000 ₫",
      image: "/images/foods/cuahuynhde.png",
    },
    {
      name: "Ba chỉ rang muối",
      description:
        "Ba chỉ heo rang muối ớt thơm nồng, giòn tan hấp dẫn",
      price: "95.000 ₫",
      image: "/images/foods/ba-chi-rang.png",
    },
    {
      name: "Cá chuyên giòn",
      description:
        "Cá chuyên tươi chiên giòn vàng, chấm mắm gừng cay nồng",
      price: "135.000 ₫",
      image: "/images/foods/ca-chuyen-gion.png",
    },
    {
      name: "Canh mồng tơi",
      description:
        "Canh mồng tơi nấu tôm khô, vị ngọt thanh đơn giản mà ngon",
      price: "65.000 ₫",
      image: "/images/foods/canh-mong-toi.png",
    },
    {
      name: "Canh cá",
      description:
        "Canh cá nấu chua cay, đậm đà hương vị miền Trung",
      price: "110.000 ₫",
      image: "/images/foods/canhca.png",
    },
    {
      name: "Chả cá chiên",
      description:
        "Chả cá tươi chiên vàng giòn, thơm lừng mùi thì là",
      price: "98.000 ₫",
      image: "/images/foods/cha-ca-chien.png",
    },
    {
      name: "Cơm Lý Sơn cao cấp",
      description:
        "Cơm hải sản Lý Sơn với tôm hùm, bào ngư, nghêu sò tươi sống",
      price: "320.000 ₫",
      image: "/images/foods/com-ly-son-3.png",
    },
    {
      name: "Cơm Lý Sơn truyền thống",
      description:
        "Cơm hải sản Lý Sơn theo công thức gia truyền, đậm vị biển",
      price: "165.000 ₫",
      image: "/images/foods/com-ly-son-4.png",
    },
    {
      name: "Cơm chiên hải sản đặc biệt",
      description:
        "Cơm chiên hải sản cao cấp với nguyên liệu tươi ngon chọn lọc",
      price: "145.000 ₫",
      image: "/images/foods/com-ran-hai-san-2.png",
    },
    {
      name: "Giá đậu ván xào",
      description:
        "Giá đậu ván xào tỏi tươi giòn ngọt, thanh mát bổ dưỡng",
      price: "55.000 ₫",
      image: "/images/foods/gia-dau-van.png",
    },
    {
      name: "Gỏi bạch tuộc trộn dừa",
      description:
        "Bạch tuộc tươi trộn dứa chua ngọt, rau thơm độc đáo",
      price: "155.000 ₫",
      image: "/images/foods/goi-bach-tuot-tron-dua.png",
    },
    {
      name: "Gỏi ốc trộn",
      description:
        "Ốc nhồi, ốc móng tay trộn rau răm, hành phi giòn thơm",
      price: "125.000 ₫",
      image: "/images/foods/goi-oc-tron.png",
    },
    {
      name: "Hàu nướng phô mai",
      description:
        "Hàu tươi nướng phô mai béo ngậy, hành lá thơm lừng",
      price: "185.000 ₫",
      image: "/images/foods/hau-nuong-pho-mai.png",
    },
    {
      name: "Lẩu gà nấu nấm",
      description:
        "Lẩu gà ta nấu nấm rơm, nấm hương thanh ngọt bổ dưỡng",
      price: "280.000 ₫",
      image: "/images/foods/lau-ga-nau-nam.png",
    },
    {
      name: "Mực lá chiên xù",
      description:
        "Mực lá tươi chiên xù giòn rụm, chấm muối ớt xanh",
      price: "165.000 ₫",
      image: "/images/foods/muc-la-chien-xu.png",
    },
    {
      name: "Mực xào tỏi non",
      description:
        "Mực tươi xào tỏi non thơm nồng, giòn ngọt đậm đà",
      price: "145.000 ₫",
      image: "/images/foods/muc-xao-toi-non.png",
    },
    {
      name: "Nhum nướng mỡ hành",
      description:
        "Nhum biển nướng mỡ hành phi thơm béo, đậm vị biển",
      price: "195.000 ₫",
      image: "/images/foods/nhum-nuong-mo-hanh.png",
    },
    {
      name: "Ốc xà cừ xào xả ớt",
      description:
        "Ốc xà cừ tươi xào xả ớt cay nồng, thơm lừng hấp dẫn",
      price: "135.000 ₫",
      image: "/images/foods/oc-xa-cu-xao-xa-ot.png",
    },
  
    {
      name: "Thực đơn đặc biệt",
      description:
        "Set menu hải sản cao cấp cho 2-4 người, đa dạng món ngon",
      price: "1.200.000 ₫",
      image: "/images/foods/thuc-don.png",
    },
    {
      name: "Thực đơn combo",
      description:
        "Combo món ăn phong phú với hải sản tươi ngon, đủ mặn ngọt",
      price: "980.000 ₫",
      image: "/images/foods/thuc-don-2.png",
    },
  ],
  // main: [
  //   {
  //     name: "Tôm hùm nướng bơ tỏi",
  //     description:
  //       "Tôm hùm baby tươi sống nướng bơ tỏi thơm lừng, kèm rau củ nướng",
  //     price: "850.000 ₫",
  //     image: "/images/dishes/tom-hum-nuong.jpg",
  //   },
  //   {
  //     name: "Cua hoàng đế hấp bia",
  //     description:
  //       "Cua hoàng đế Alaska hấp bia giữ trọn vị ngọt, chấm muối tiêu chanh",
  //     price: "1.800.000 ₫",
  //     image: "/images/dishes/cua-hoang-de.jpg",
  //   },
  // ],
  // desserts: [
  //   {
  //     name: "Bánh flan caramel",
  //     description: "Bánh flan mịn màng với caramel đắng nhẹ, kem tươi mát lạnh",
  //     price: "45.000 ₫",
  //     image: "/images/dishes/flan.jpg",
  //   },
  //   {
  //     name: "Chè tổ yến",
  //     description:
  //       "Yến sào Nha Trang cao cấp, nấu cùng đường phèn, hạt sen tươi",
  //     price: "120.000 ₫",
  //     image: "/images/dishes/che-yen.jpg",
  //   },
  // ],
};

// Drinks data
// const drinksCategories = [
//   { id: "beer", name: "Bia", icon: "🍺" },
//   { id: "wine", name: "Rượu vang", icon: "🍷" },
//   { id: "cocktails", name: "Cocktail", icon: "🍹" },
//   { id: "soft", name: "Nước ngọt", icon: "🥤" },
// ];

const drinksData = {
  cocktails: [
    {
      name: "Long Island Iced Tea",
      description:
        "Vodka, Rum, Gin, Tequila, Triple Sec, nước cốt chanh, Coca Cola",
      price: "150.000 ₫",
      image: "/images/do-uong.png",
    },
    {
      name: "Mojito Bạc Hà",
      description: "Rum trắng, lá bạc hà tươi, nước cốt chanh, đường, soda",
      price: "120.000 ₫",
      image: "/images/drinks/beerken.png",
    },
    {
      name: "Long Island Iced Tea",
      description:
        "Vodka, Rum, Gin, Tequila, Triple Sec, nước cốt chanh, Coca Cola",
      price: "150.000 ₫",
      image: "/images/drinks/aqua.png",
    },
    {
      name: "Long Island Iced Tea",
      description:
        "Vodka, Rum, Gin, Tequila, Triple Sec, nước cốt chanh, Coca Cola",
      price: "150.000 ₫",
      image: "/images/drinks/bohuc.png",
    },
  ],
};

const MenuPage = () => {
  const allFoodItems = menuData.appetizers || [];
  const allDrinks = drinksData.cocktails || [];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden pt-24 sm:pt-32 md:pt-40">
      {/* Dark texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/dark-texture.jpg')] opacity-30 mix-blend-multiply"></div>

      <div className="relative z-10 py-12 sm:py-16 md:py-20 pb-24">
        {/* Menu Section */}
        <section className="mb-16 sm:mb-24 md:mb-32">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                <div className="h-px bg-gradient-to-r from-transparent to-sky-600 w-12 sm:w-20 md:w-32"></div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sky-600 tracking-wider sm:tracking-widest">
                  THỰC ĐƠN
                </h1>
                <div className="h-px bg-gradient-to-l from-transparent to-sky-600 w-12 sm:w-20 md:w-32"></div>
              </div>
              <p className="text-slate-400 text-sm sm:text-base mt-4">
                Hải sản tươi sống, chế biến tinh tế
              </p>
            </motion.div>

            {/* Food Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"
            >
              {allFoodItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square bg-slate-800/50 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <span className="text-sm">Hình ảnh món ăn</span>
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-5 lg:p-6">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-sky-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Drinks Section */}
        <section>
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            {/* Drinks Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                <div className="h-px bg-gradient-to-r from-transparent to-sky-600 w-12 sm:w-20 md:w-32"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sky-600 tracking-wider sm:tracking-widest">
                  ĐỒ UỐNG
                </h2>
                <div className="h-px bg-gradient-to-l from-transparent to-sky-600 w-12 sm:w-20 md:w-32"></div>
              </div>
              <p className="text-slate-400 text-sm sm:text-base mt-4">
                Thức uống cao cấp, phục vụ tận tâm
              </p>
            </motion.div>

            {/* Drinks Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
            >
              {allDrinks.map((drink, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10"
                >
                  {/* Image Container */}
                  <div className="relative h-32 sm:h-48 lg:h-56 bg-slate-800/50 flex items-end justify-center p-3 sm:p-6">
                    {drink.image ? (
                      <div className="w-full h-full relative">
                        <Image
                          src={drink.image}
                          alt={drink.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <span className="text-sm">Hình đồ uống</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-5">
                    <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-sky-600 transition-colors">
                      {drink.name}
                    </h3>
                    <p className="text-slate-400 text-[10px] sm:text-xs lg:text-sm line-clamp-2">
                      {drink.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuPage;
