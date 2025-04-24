"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Animation Variants for Mobile Menu Links
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1, // Delay slightly before starting stagger
    },
  },
};

const mobileLinkVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut" } },
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const phoneNumber = "0941390279"; // Replace with actual phone
  const emailAddress = "comhaisandaihang@gmail.com"; // Replace with actual email
  const openingHours = "Mở cửa: 10:00 - 23:00"; // Thêm giờ mở cửa

  // --- Scroll detection ---
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50); // Set to true if scrolled more than 50px
  });
  // ----------------------

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-white/90 backdrop-blur-md shadow-md"
      }`}
      // Animation for background/shadow changes
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.9)",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(10px)",
        boxShadow: isScrolled
          ? "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
          : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* --- Top Bar --- */}
      <motion.div
        className={`bg-teal-700 md:block hidden text-white text-xs overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? "h-0 py-0" : "py-1.5"
        }`}
        // Animate height and padding based on scroll state
        animate={{
          height: isScrolled ? 0 : "auto",
          paddingTop: isScrolled ? 0 : "0.375rem", // py-1.5
          paddingBottom: isScrolled ? 0 : "0.375rem",
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex items-center justify-between">
          {/* Left Side: Phone & Opening Hours */}
          <div className="flex items-center space-x-6">
            {" "}
            {/* Tăng khoảng cách giữa các mục */}
            {/* Phone */}
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="flex items-center hover:text-teal-200 transition-colors"
            >
              <PhoneIcon className="h-3.5 w-3.5 mr-1.5" />
              <span>{phoneNumber}</span>
            </a>
            {/* Opening Hours */}
            <div className="flex items-center">
              {" "}
              {/* Không cần hover effect đặc biệt */}
              <ClockIcon className="h-3.5 w-3.5 mr-1.5" />
              <span>{openingHours}</span>
            </div>
          </div>
          {/* Right Side: Email */}
          <div className="flex items-center space-x-4">
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center hover:text-teal-200 transition-colors"
            >
              <EnvelopeIcon className="h-3.5 w-3.5 mr-1.5" />
              <span>{emailAddress}</span>
            </a>
            {/* Optional: Add Social Links Icon here */}
          </div>
        </div>
      </motion.div>
      {/* --- End Top Bar --- */}

      {/* --- Main Header Content --- */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "py-1" : "py-2"
        }`}
      >
        {/* Wrap main content to control its padding based on scroll */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between transition-height duration-300">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Nhà hàng hải sản Vợ Chồng Đại Hàng"
                width={isScrolled ? 60 : 70} // Slightly smaller logo when scrolled
                height={isScrolled ? 60 : 70} // Adjust height accordingly
                className="object-contain transition-all duration-300 rounded-full"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <NavLink href="/" isActive={pathname === "/"}>
                Trang chủ
              </NavLink>
              <NavLink href="/menu" isActive={pathname === "/menu"}>
                Thực đơn
              </NavLink>
              <NavLink href="/about" isActive={pathname === "/about"}>
                Giới thiệu
              </NavLink>
              <NavLink href="/contact" isActive={pathname === "/contact"}>
                Liên hệ
              </NavLink>
            </nav>

            {/* Booking Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {/* Animated Booking Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/booking"
                  className="hidden sm:inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-7 py-2.5 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 ease-in-out transform shadow-md hover:shadow-lg"
                >
                  Đặt bàn
                </Link>
              </motion.div>
              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Mở menu chính</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* --- End Main Header Content --- */}

      {/* Mobile Menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={setMobileMenuOpen}
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex justify-end">
            {/* Mobile Menu Panel */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative w-full max-w-xs bg-white shadow-xl h-full p-6 flex flex-col">
                <div className="flex items-center justify-between mb-8 flex-shrink-0">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Nhà hàng Vợ Chồng Đại Hàng</span>
                    <Image
                      className="h-8 w-auto object-contain"
                      src="/images/logo.png"
                      alt=""
                      width={80}
                      height={25}
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-slate-700 hover:text-slate-900 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Đóng menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* Animated Navigation Links */}
                <motion.div
                  className="flow-root flex-grow overflow-y-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="-my-6 divide-y divide-slate-200/60">
                    <div className="space-y-2 py-6">
                      <MobileNavLink
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={pathname === "/"}
                      >
                        Trang chủ
                      </MobileNavLink>
                      <MobileNavLink
                        href="/menu"
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={pathname === "/menu"}
                      >
                        Thực đơn
                      </MobileNavLink>
                      <MobileNavLink
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={pathname === "/about"}
                      >
                        Giới thiệu
                      </MobileNavLink>
                      <MobileNavLink
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={pathname === "/contact"}
                      >
                        Liên hệ
                      </MobileNavLink>
                    </div>
                    <div className="py-6">
                      <MobileNavLink
                        href="/booking"
                        onClick={() => setMobileMenuOpen(false)}
                        isButton={true}
                      >
                        Đặt bàn
                      </MobileNavLink>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </motion.header>
  );
};

// Helper component for Desktop NavLink styling
const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`relative font-medium transition-colors duration-200 ${
        isActive ? "text-teal-600" : "text-slate-700 hover:text-teal-600"
      }`}
    >
      {children}
      {/* Underline animation */}
      <motion.span
        className="absolute left-0 bottom-[-6px] h-[2px] bg-teal-500"
        style={{ width: isActive ? "100%" : "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
      {/* Hover effect (only shows if not active) */}
      {!isActive && (
        <motion.span
          className="absolute left-0 bottom-[-6px] h-[2px] bg-teal-500 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </Link>
  );
};

// Helper component for Mobile NavLink styling
const MobileNavLink = ({
  href,
  children,
  onClick,
  isActive,
  isButton = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  isButton?: boolean;
}) => {
  return (
    <motion.div variants={mobileLinkVariant}>
      <Link
        href={href}
        onClick={onClick}
        className={`block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition-colors duration-150 ${
          isButton
            ? "bg-teal-600 text-white text-center hover:bg-teal-700"
            : isActive
            ? "bg-teal-50 text-teal-700"
            : "text-slate-800 hover:bg-slate-100"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Header;
