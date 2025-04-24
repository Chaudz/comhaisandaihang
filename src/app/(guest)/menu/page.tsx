"use client"; // Mark as Client Component

import Image from "next/image";
import { useState, useEffect } from "react"; // Import hooks
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

// Sample menu data (Bạn nên thay thế bằng dữ liệu thực tế từ CMS hoặc API)
const menuData = [
  {
    category: "Khai Vị",
    id: "khai-vi",
    items: [
      {
        name: "Gỏi cuốn tôm thịt",
        description: "Bánh tráng cuốn tôm, thịt, bún, rau sống, chấm mắm nêm",
        price: "60.000đ",
        imageUrl: "/images/dishes/goi-cuon.jpg",
      },
      {
        name: "Chả giò hải sản",
        description: "Chả giò giòn rụm với nhân hải sản tươi ngon",
        price: "85.000đ",
        imageUrl: "/images/dishes/cha-gio.jpg",
      },
      {
        name: "Salad rong biển trứng cua",
        description: "Salad tươi mát với rong biển, trứng cua và sốt mè rang",
        price: "95.000đ",
        imageUrl: "/images/dishes/salad-rong-bien.jpg",
      },
    ],
  },
  {
    category: "Món Chính - Hải Sản Tươi Sống",
    id: "hai-san-tuoi-song",
    items: [
      {
        name: "Tôm hùm nướng bơ tỏi",
        id: "tom-hum",
        description: "Tôm hùm baby tươi sống nướng bơ tỏi thơm lừng",
        price: "850.000đ/kg",
        imageUrl: "/images/dishes/tom-hum-nuong.jpg",
      },
      {
        name: "Cua hoàng đế hấp bia",
        id: "cua-hoang-de",
        description: "Cua hoàng đế Alaska hấp bia giữ trọn vị ngọt",
        price: "1.800.000đ/kg",
        imageUrl: "/images/dishes/cua-hoang-de.jpg",
      },
      {
        name: "Ghẹ hấp sả",
        description: "Ghẹ tươi chắc thịt hấp cùng sả thơm nồng",
        price: "450.000đ/kg",
        imageUrl: "/images/dishes/ghe-hap.jpg",
      },
      {
        name: "Hàu nướng mỡ hành",
        description: "Hàu sữa béo ngậy nướng cùng mỡ hành và đậu phộng",
        price: "120.000đ/phần",
        imageUrl: "/images/dishes/hau-nuong.jpg",
      },
      {
        name: "Cá mú hấp Hồng Kông",
        description: "Cá mú tươi ngon hấp xì dầu theo phong cách Hồng Kông",
        price: "600.000đ/kg",
        imageUrl: "/images/dishes/ca-mu-hap.jpg",
      },
    ],
  },
  {
    category: "Lẩu",
    id: "lau-hai-san",
    items: [
      {
        name: "Lẩu hải sản Thái chua cay",
        description:
          "Nước lẩu Tom Yum đậm đà cùng hải sản tươi (tôm, mực, nghêu, cá)",
        price: "350.000đ",
        imageUrl: "/images/dishes/lau-thai.jpg",
      },
      {
        name: "Lẩu cua đồng",
        description: "Lẩu riêu cua đồng quê dân dã, thơm ngon",
        price: "280.000đ",
        imageUrl: "/images/dishes/lau-cua-dong.jpg",
      },
    ],
  },
  {
    category: "Cơm - Mì",
    id: "com-mi",
    items: [
      {
        name: "Cơm chiên hải sản",
        description: "Cơm chiên vàng giòn với tôm, mực và rau củ",
        price: "120.000đ",
        imageUrl: "/images/dishes/com-chien.jpg",
      },
      {
        name: "Mì xào hải sản",
        description: "Mì trứng xào cùng hải sản tươi và rau cải",
        price: "130.000đ",
        imageUrl: "/images/dishes/mi-xao.jpg",
      },
    ],
  },
  {
    category: "Đồ Uống",
    id: "do-uong",
    items: [
      {
        name: "Nước ép trái cây",
        description: "Cam / Ổi / Dưa hấu / Thơm",
        price: "45.000đ",
        imageUrl: "/images/dishes/nuoc-ep.jpg",
      },
      {
        name: "Bia các loại",
        description: "Tiger / Heineken / Saigon Special",
        price: "25.000đ - 35.000đ",
        imageUrl: "/images/dishes/bia.jpg",
      },
      {
        name: "Nước ngọt",
        description: "Coca / Pepsi / 7Up / Sprite",
        price: "20.000đ",
        imageUrl: "/images/dishes/nuoc-ngot.jpg",
      },
    ],
  },
];

// Extract categories for filtering + Add 'All' option
const categories = [
  { id: "all", name: "Tất cả" },
  ...menuData.map((cat) => ({ id: cat.id, name: cat.category })),
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each item animation
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredMenuData, setFilteredMenuData] = useState(menuData);

  // Effect to filter data when selectedCategory changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredMenuData(menuData);
    } else {
      setFilteredMenuData(
        menuData.filter((cat) => cat.id === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="bg-white">
      {/* Hero Section for Menu - Enhanced */}
      <section
        className="relative bg-cover bg-center h-[40vh] md:h-[50vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/thuc-don.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-xl mb-2 md:mb-3"
          >
            Khám Phá Thực Đơn
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl mt-2 md:mt-4 max-w-lg md:max-w-3xl mx-auto drop-shadow-lg font-light"
          >
            Tinh hoa hải sản tươi ngon và hương vị độc đáo đang chờ bạn.
          </motion.p>
        </div>
      </section>

      {/* Filter Section - Updated for Mobile Scroll */}
      <div className="sticky top-[60px] sm:top-[68px] md:top-[84px] z-30 bg-white/95 backdrop-blur-lg shadow-sm py-2.5 md:py-4 mb-4 md:mb-8">
        {/* Adjusted sticky top value and padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enable horizontal scroll on mobile */}
          <div className="flex overflow-x-auto whitespace-nowrap space-x-2 sm:space-x-3 md:space-x-0 md:flex-wrap md:justify-center md:gap-2 lg:gap-4 scrollbar-hide">
            {/* Added scrollbar-hide utility if you have it configured in tailwind.config.js, otherwise remove */}
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ease-in-out flex-shrink-0 ${
                  // Added flex-shrink-0
                  selectedCategory === category.id
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content - Use filteredMenuData */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24 pt-2 md:pt-8">
        {" "}
        {/* Adjusted padding */}
        <AnimatePresence mode="wait">
          {" "}
          {/* Use mode='wait' for smoother transitions when filtering */}
          {filteredMenuData.length > 0 ? (
            filteredMenuData.map((category, categoryIndex) => (
              <motion.section
                key={category.id} // Key needs to be stable for AnimatePresence
                id={category.id}
                className={`mb-10 md:mb-20 scroll-mt-24 md:scroll-mt-40 ${
                  // Adjusted margins and scroll-mt
                  categoryIndex > 0 && selectedCategory === "all"
                    ? "pt-4 md:pt-8"
                    : ""
                }`}
                // Add initial/animate only if you want the whole section to animate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Category Heading */}
                {selectedCategory === "all" && (
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-800 mb-6 md:mb-12 pb-1 sm:pb-2 border-b-2 border-teal-500 inline-block">
                    {/* Adjusted heading size */}
                    {category.category}
                  </h2>
                )}

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden" // Add exit variant
                >
                  {" "}
                  {/* Adjusted gap */}
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name} // Unique key for each item
                      id={item.id}
                      className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden"
                      variants={itemVariants}
                      whileHover="hover"
                      layout // Add layout for smooth repositioning when filtering
                    >
                      {/* Image Section */}
                      <div className="relative w-full h-48 sm:h-56">
                        {" "}
                        {/* Adjusted image height for mobile */}
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      {/* Text Content Section */}
                      <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col justify-between">
                        {" "}
                        {/* Adjusted padding */}
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-900 mb-1 md:mb-2">
                            {/* Adjusted title size */}
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-slate-600 mt-1 text-xs sm:text-sm mb-2 md:mb-4">
                              {/* Adjusted margin */}
                              {item.description}
                            </p>
                          )}
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-teal-600 mt-1 md:mt-3 self-end">
                          {/* Adjusted price size */}
                          {item.price}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            ))
          ) : (
            // Restore the 'No results' message JSX
            <motion.div // Wrap the 'No results' message in motion.div for exit animation
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12 md:py-16"
            >
              <p className="text-lg md:text-xl text-slate-600">
                Không tìm thấy món ăn phù hợp.
              </p>
              {/* Optional: Add an image or icon here */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MenuPage;
