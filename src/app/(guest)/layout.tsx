"use client"; // Cần cho AnimatePresence và usePathname

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ContactFAB from "@/src/components/ContactFAB";
import { motion, AnimatePresence } from "framer-motion"; // Import motion và AnimatePresence
import { usePathname } from "next/navigation"; // Import usePathname

const pageVariants = {
  initial: {
    opacity: 0,
    // y: 20, // Optional: slide up effect
  },
  in: {
    opacity: 1,
    // y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  out: {
    opacity: 0,
    // y: -20, // Optional: slide down effect
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Lấy key duy nhất cho mỗi trang

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {" "}
      {/* Đặt màu nền chung ở đây */}
      <Header />
      {/* AnimatePresence để quản lý component con ra/vào */}
      {/* `mode='wait'` đảm bảo component cũ animate xong mới đến component mới */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname} // Key thay đổi -> trigger animation
          className="flex-grow"
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ContactFAB />
    </div>
  );
};

export default GuestLayout;
