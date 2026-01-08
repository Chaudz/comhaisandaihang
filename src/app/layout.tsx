import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nhà Hàng Hải sản Đại Hàng - Ẩm Thực Hải Sản Lý Sơn",
  description:
    "Nhà hàng hải sản ngon nổi tiếng tại Lý Sơn, mang đến trải nghiệm ẩm thực biển đảo tuyệt vời với không gian thoáng đãng, view đẹp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
