"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, Fragment } from "react";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Animation Variants for Mobile Menu Links
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

  // Scroll detection
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/98 backdrop-blur-lg shadow-2xl"
          : "bg-slate-950/95 backdrop-blur-md shadow-lg"
      }`}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(2, 6, 23, 0.98)"
          : "rgba(2, 6, 23, 0.95)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
            >
              <Image
                src="/images/image.png"
                alt="Quán Cơm Hải Sản Đại Hằng"
                width={isScrolled ? 55 : 65}
                height={isScrolled ? 55 : 65}
                className="object-contain transition-all duration-300 rounded-full w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px]"
                priority
              />
              <div className="hidden sm:block">
                <h1
                  className={`font-bold text-white transition-all duration-300 ${
                    isScrolled
                      ? "text-sm sm:text-base md:text-lg"
                      : "text-base sm:text-lg md:text-xl"
                  }`}
                >
                  Đại Hằng
                </h1>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Cơm Hải Sản Lý Sơn
                </p>
              </div>
            </Link>

            {/* Right Side: Navigation + Booking Button */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-10 text-sm md:text-base">
                <NavLink href="/" isActive={pathname === "/"}>
                  Trang Chủ
                </NavLink>
                <NavLink href="/menu" isActive={pathname === "/menu"}>
                  Thực Đơn
                </NavLink>
                <NavLink href="/about" isActive={pathname === "/about"}>
                  Giới Thiệu
                </NavLink>
                <NavLink href="/contact" isActive={pathname === "/contact"}>
                  Liên Hệ
                </NavLink>
              </nav>

              {/* Booking Button & Mobile Menu Toggle */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Animated Booking Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/booking"
                    className="hidden sm:inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 ease-in-out transform shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
                  >
                    Đặt Bàn
                  </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className="md:hidden p-2 text-white hover:text-red-500 transition-colors rounded-lg active:bg-slate-800/50"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Mở menu chính"
                >
                  <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <div className="fixed inset-0 bg-black bg-opacity-50" />
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
              <Dialog.Panel className="relative w-full max-w-xs bg-slate-950 shadow-xl h-full p-5 sm:p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6 sm:mb-8 flex-shrink-0">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5 flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      className="h-10 w-10 object-contain rounded-full"
                      src="/images/image.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                    <span className="text-white font-bold text-base sm:text-lg">
                      Đại Hằng
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-slate-300 hover:text-white transition-colors active:bg-slate-800/50"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Đóng menu"
                  >
                    <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                  </button>
                </div>

                {/* Animated Navigation Links */}
                <motion.div
                  className="flow-root flex-grow overflow-y-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="-my-6 divide-y divide-slate-800">
                    <div className="space-y-1 py-6">
                      <MobileNavLink
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={pathname === "/"}
                      >
                        Trang Chủ
                      </MobileNavLink>
                      <MobileNavLink
                        href="/menu"
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={pathname === "/menu"}
                      >
                        Thực Đơn
                      </MobileNavLink>
                      <MobileNavLink
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={pathname === "/about"}
                      >
                        Giới Thiệu
                      </MobileNavLink>
                      <MobileNavLink
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={pathname === "/contact"}
                      >
                        Liên Hệ
                      </MobileNavLink>
                    </div>
                    <div className="py-6">
                      <MobileNavLink
                        href="/booking"
                        onClick={() => setMobileMenuOpen(false)}
                        isButton={true}
                      >
                        Đặt Bàn
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
        isActive ? "text-white" : "text-slate-300 hover:text-white"
      }`}
    >
      {children}
      {/* Active underline */}
      {isActive && (
        <motion.span
          className="absolute left-0 bottom-[-8px] h-[2px] bg-red-500 w-full"
          layoutId="activeNav"
          transition={{ duration: 0.3 }}
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
        className={`block rounded-lg px-4 py-3 text-sm sm:text-base font-semibold leading-7 transition-colors duration-150 active:scale-95 ${
          isButton
            ? "bg-gradient-to-r from-red-600 to-red-700 text-white text-center hover:from-red-700 hover:to-red-800 shadow-lg"
            : isActive
            ? "bg-slate-800 text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Header;
