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
      name: "Gỏi cuốn tôm thịt",
      description:
        "Bánh tráng cuốn tôm, thịt, bún, rau sống, chấm mắm nêm đặc biệt",
      price: "60.000 ₫",
      image: "/images/foods/canh-ca-2.png",
    },
    {
      name: "Chả giò hải sản",
      description:
        "Chả giò giòn rụm với nhân hải sản tươi ngon, rau củ thơm lừng",
      price: "85.000 ₫",
      image: "/images/foods/com-ly-son-1.png",
    },
    {
      name: "Chả giò hải sản",
      description:
        "Chả giò giòn rụm với nhân hải sản tươi ngon, rau củ thơm lừng",
      price: "85.000 ₫",
      image: "/images/foods/com-ly-son-2.png",
    },
    {
      name: "Chả giò hải sản",
      description:
        "Chả giò giòn rụm với nhân hải sản tươi ngon, rau củ thơm lừng",
      price: "85.000 ₫",
      image: "/images/foods/tomhum.png",
    },
    {
      name: "Chả giò hải sản",
      description:
        "Chả giò giòn rụm với nhân hải sản tươi ngon, rau củ thơm lừng",
      price: "85.000 ₫",
      image: "/images/foods/rong-bien-tron-2.png",
    },
    {
      name: "Chả giò hải sản",
      description:
        "Chả giò giòn rụm với nhân hải sản tươi ngon, rau củ thơm lừng",
      price: "85.000 ₫",
      image: "/images/foods/cuahuynhde.png",
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
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDrinkCategory, setActiveDrinkCategory] = useState("cocktails");
  const [currentDrinkSlide, setCurrentDrinkSlide] = useState(0);

  const currentItems = menuData[activeCategory as keyof typeof menuData] || [];
  const currentDrinks =
    drinksData[activeDrinkCategory as keyof typeof drinksData] || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(currentItems.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(currentItems.length / 2)) %
        Math.ceil(currentItems.length / 2)
    );
  };

  const nextDrinkSlide = () => {
    setCurrentDrinkSlide((prev) => (prev + 1) % currentDrinks.length);
  };

  const prevDrinkSlide = () => {
    setCurrentDrinkSlide(
      (prev) => (prev - 1 + currentDrinks.length) % currentDrinks.length
    );
  };

  // Get current pair of food items
  const leftItem = currentItems[currentSlide * 2];
  const rightItem = currentItems[currentSlide * 2 + 1];

  // Get current single drink (only 1 drink displayed at a time)
  const currentDrink = currentDrinks[currentDrinkSlide];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden pt-24 sm:pt-32 md:pt-40">
      {/* Dark texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/dark-texture.jpg')] opacity-30 mix-blend-multiply"></div>

      <div className="relative z-10 py-12 sm:py-16 md:py-20">
        {/* Menu Section */}
        <section className="mb-16 sm:mb-24 md:mb-32">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="h-px bg-gradient-to-r from-transparent to-yellow-500 w-12 sm:w-20 md:w-32"></div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 tracking-wider sm:tracking-widest">
                  THỰC ĐƠN
                </h1>
                <div className="h-px bg-gradient-to-l from-transparent to-yellow-500 w-12 sm:w-20 md:w-32"></div>
              </div>
            </motion.div>

            {/* Category Icons */}
            {/* <div className="flex justify-center gap-12 mb-16">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentSlide(0);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl transition-all ${
                      activeCategory === category.id
                        ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                        : "bg-white/10 backdrop-blur-sm"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <span
                    className={`text-sm font-medium uppercase tracking-wider ${
                      activeCategory === category.id
                        ? "text-yellow-500"
                        : "text-white/60"
                    }`}
                  >
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </div> */}

            {/* Main Carousel */}
            <div className="relative max-w-6xl mx-auto">
              {/* Background texture behind dishes */}
              <div className="absolute inset-0 -inset-x-8 sm:-inset-x-16 md:-inset-x-32 -inset-y-8 sm:-inset-y-12 md:-inset-y-16 bg-gradient-to-b from-slate-900/50 via-slate-800/50 to-slate-900/50 rounded-3xl blur-3xl -z-10"></div>

              {/* Scattered spices/ingredients decoration - Hidden on mobile */}
              <div className="hidden sm:block absolute top-0 left-10 w-2 h-2 bg-orange-600/30 rounded-full blur-sm"></div>
              <div className="hidden sm:block absolute top-20 right-20 w-1 h-1 bg-yellow-500/20 rounded-full"></div>
              <div className="hidden sm:block absolute bottom-10 left-20 w-1.5 h-1.5 bg-red-600/20 rounded-full blur-sm"></div>
              <div className="hidden sm:block absolute bottom-0 right-16 w-2 h-2 bg-green-600/20 rounded-full"></div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-16 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Dishes Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-6 sm:px-12 md:px-16 lg:px-0"
                >
                  {/* Left Dish */}
                  {leftItem && (
                    <div className="text-center">
                      <div className="relative mb-4 sm:mb-6 md:mb-8 max-w-[200px] sm:max-w-xs md:max-w-md mx-auto">
                        {/* Dish image - white plate background */}
                        <div className="w-full aspect-square bg-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden">
                          {leftItem.image ? (
                            <div className="w-full h-full relative">
                              <Image
                                src={leftItem.image}
                                alt={leftItem.name}
                                fill
                                className="object-cover rounded-full"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          ) : (
                            <div className="w-4/5 h-4/5 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                              <span className="text-sm">Hình ảnh món ăn</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <h3 className="text-2xl font-bold text-yellow-500 mb-3 uppercase">
                        {leftItem.name}
                      </h3> */}
                      {/* <p className="text-white/70 text-sm mb-4 px-4">
                        {leftItem.description}
                      </p> */}
                      {/* <p className="text-yellow-500 text-2xl font-bold">
                        {leftItem.price}
                      </p> */}
                    </div>
                  )}

                  {/* Right Dish */}
                  {rightItem && (
                    <div className="text-center">
                      <div className="relative mb-4 sm:mb-6 md:mb-8 max-w-[200px] sm:max-w-xs md:max-w-md mx-auto">
                        <div className="w-full aspect-square bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                          {rightItem.image ? (
                            <div className="w-full h-full relative">
                              <Image
                                src={rightItem.image}
                                alt={rightItem.name}
                                fill
                                className="object-cover rounded-full"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          ) : (
                            <div className="w-4/5 h-4/5 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                              <span className="text-sm">Hình ảnh món ăn</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <h3 className="text-2xl font-bold text-yellow-500 mb-3 uppercase">
                        {rightItem.name}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 px-4">
                        {rightItem.description}
                      </p>
                      <p className="text-yellow-500 text-2xl font-bold">
                        {rightItem.price}
                      </p> */}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: Math.ceil(currentItems.length / 2) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "bg-yellow-500 w-8"
                          : "bg-white/30"
                      }`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Drinks Section */}
        <section>
          <div className="container mx-auto px-4 sm:px-6">
            {/* Drinks Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="h-px bg-gradient-to-r from-transparent to-yellow-500 w-12 sm:w-20 md:w-32"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 tracking-wider sm:tracking-widest">
                  ĐỒ UỐNG
                </h2>
                <div className="h-px bg-gradient-to-l from-transparent to-yellow-500 w-12 sm:w-20 md:w-32"></div>
              </div>
            </motion.div>

            {/* Drink Category Icons */}
            {/* <div className="flex justify-center gap-8 mb-16">
              {drinksCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setActiveDrinkCategory(category.id);
                    setCurrentDrinkSlide(0);
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="text-3xl opacity-60 hover:opacity-100 transition">
                    {category.icon}
                  </div>
                  <span
                    className={`text-xs uppercase tracking-wider ${
                      activeDrinkCategory === category.id
                        ? "text-yellow-500"
                        : "text-white/50"
                    }`}
                  >
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </div> */}

            {/* Drinks Carousel */}
            <div className="relative max-w-6xl mx-auto">
              {/* Background texture behind drinks */}
              <div className="absolute inset-0 -inset-x-8 sm:-inset-x-16 md:-inset-x-32 -inset-y-8 sm:-inset-y-12 md:-inset-y-16 bg-gradient-to-b from-slate-900/40 via-slate-800/40 to-slate-900/40 rounded-3xl blur-3xl -z-10"></div>

              {/* Ice cubes decoration - Hidden on mobile */}
              <div className="hidden sm:block absolute top-10 left-16 w-3 h-3 bg-white/10 rounded blur-sm rotate-12"></div>
              <div className="hidden sm:block absolute top-32 right-24 w-2 h-2 bg-white/5 rounded blur-sm -rotate-45"></div>
              <div className="hidden sm:block absolute bottom-20 left-32 w-2.5 h-2.5 bg-white/8 rounded blur-sm rotate-45"></div>
              <button
                onClick={prevDrinkSlide}
                className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition active:scale-95"
                aria-label="Previous drink"
              >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <button
                onClick={nextDrinkSlide}
                className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-16 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition active:scale-95"
                aria-label="Next drink"
              >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDrinkSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center px-12 sm:px-16 md:px-0"
                >
                  {currentDrink && (
                    <div className="text-center max-w-md w-full">
                      <div className="relative mb-4 sm:mb-6 md:mb-8 h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 flex items-end justify-center">
                        {/* Actual drink image */}
                        {currentDrink.image ? (
                          <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-full relative">
                            <Image
                              src={currentDrink.image}
                              alt={currentDrink.name}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        ) : (
                          <div className="w-32 sm:w-40 md:w-48 h-48 sm:h-64 md:h-80 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                            <span className="text-white/50 text-sm">
                              Hình đồ uống
                            </span>
                          </div>
                        )}
                      </div>
                      {/* <h3 className="text-2xl font-bold text-yellow-500 mb-3 uppercase">
                        {currentDrink.name}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 px-4">
                        {currentDrink.description}
                      </p>
                      <p className="text-yellow-500 text-2xl font-bold">
                        {currentDrink.price}
                      </p> */}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-12">
                {currentDrinks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDrinkSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentDrinkSlide === index
                        ? "bg-yellow-500 w-8"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuPage;
