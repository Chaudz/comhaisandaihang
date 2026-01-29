import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description:
    "Tìm hiểu về Nhà Hàng Hải Sản Đại Hằng - nhà hàng hải sản uy tín tại Lý Sơn với hơn 10 năm kinh nghiệm. Chuyên món hải sản tươi sống, công thức gia truyền, phục vụ tận tâm.",
  keywords: [
    "giới thiệu nhà hàng lý sơn",
    "về chúng tôi đại hàng",
    "lịch sử nhà hàng lý sơn",
    "nhà hàng uy tín lý sơn",
    "ẩm thực truyền thống lý sơn",
    "hải sản gia truyền",
  ],
  openGraph: {
    title: "Về Chúng Tôi - Nhà Hàng Hải Sản Đại Hằng Lý Sơn",
    description:
      "Câu chuyện về nhà hàng hải sản được yêu thích nhất tại Lý Sơn. Hải sản tươi ngon, công thức gia truyền.",
    images: ["/images/restaurant-interior2.png"],
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
