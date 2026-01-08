import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-white tracking-wider">
                ĐẠI HẰNG
              </h2>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Hương vị biển cả tươi ngon
              <br />
              tại đảo Lý Sơn
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Về Chúng Tôi
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-500 transition-colors"
                >
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-red-500 transition-colors"
                >
                  Thực Đơn
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="hover:text-red-500 transition-colors"
                >
                  Đặt Bàn
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Danh Mục
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/menu#appetizers"
                  className="hover:text-red-500 transition-colors"
                >
                  Khai Vị
                </Link>
              </li>
              <li>
                <Link
                  href="/menu#main"
                  className="hover:text-red-500 transition-colors"
                >
                  Món Chính
                </Link>
              </li>
              <li>
                <Link
                  href="/menu#hotpot"
                  className="hover:text-red-500 transition-colors"
                >
                  Lẩu
                </Link>
              </li>
              <li>
                <Link
                  href="/menu#drinks"
                  className="hover:text-red-500 transition-colors"
                >
                  Đồ Uống
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Liên Hệ
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400">
                Gần cảng cá cũ,
                <br />
                Đảo Lý Sơn, Quảng Ngãi
              </p>
              <p>
                <a
                  href="tel:0941390279"
                  className="hover:text-red-500 transition-colors"
                >
                  0941 390 279
                </a>
              </p>
              <p>
                <a
                  href="mailto:comhaisandaihang@gmail.com"
                  className="hover:text-red-500 transition-colors break-all"
                >
                  comhaisandaihang@gmail.com
                </a>
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-slate-500 hover:text-red-500 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-red-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-red-500 transition-colors"
                  aria-label="Youtube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-red-500 transition-colors"
                  aria-label="Zalo"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.738 4.304 1.985 5.977L2 22l4.148-1.905A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.77 0-3.416-.577-4.745-1.553l-.34-.235-2.817 1.287 1.312-2.759-.257-.362A7.958 7.958 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            Copyright © {currentYear} Quán Cơm Hải Sản Đại Hằng
          </p>
          <div className="flex gap-6 text-xs">
            <Link
              href="/privacy"
              className="text-slate-600 hover:text-red-500 transition-colors"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/terms"
              className="text-slate-600 hover:text-red-500 transition-colors"
            >
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
