import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";

const playfairDisplay = Playfair_Display({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const SITE_URL = "https://comhaisandaihang.com";
const SITE_NAME = "Nhà Hàng Hải Sản Đại Hằng Lý Sơn";
const SITE_DESCRIPTION =
  "Nhà hàng hải sản tươi sống ngon nổi tiếng tại Lý Sơn, Quảng Ngãi. Chuyên các món hải sản tươi ngon, view biển đẹp, đặt bàn online. Địa chỉ: Gần cảng cá cũ Lý Sơn.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "nhà hàng hải sản lý sơn",
    "quán ăn lý sơn",
    "hải sản tươi sống lý sơn",
    "đặt bàn nhà hàng lý sơn",
    "du lịch ẩm thực lý sơn",
    "cơm hải sản đại hàng",
    "nhà hàng view biển lý sơn",
    "hải sản quảng ngãi",
    "món ngon lý sơn",
    "ăn gì ở lý sơn",
  ],
  authors: [{ name: "Nhà Hàng Hải Sản Đại Hằng" }],
  creator: "Nhà Hàng Hải Sản Đại Hằng",
  publisher: "Nhà Hàng Hải Sản Đại Hằng",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/view-nha-hang.png",
        width: 1200,
        height: 630,
        alt: "Nhà Hàng Hải Sản Đại Hằng - View nhà hàng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/view-nha-hang.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here after registering with search engines
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for Restaurant
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": SITE_URL,
    name: SITE_NAME,
    alternateName: "Quán Cơm Hải Sản Đại Hằng",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: "+84941390279",
    email: "comhaisandaihang@gmail.com",
    image: `${SITE_URL}/images/view-nha-hang.png`,
    priceRange: "$$",
    servesCuisine: ["Seafood", "Vietnamese"],
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gần cảng cá cũ Lý Sơn",
      addressLocality: "Lý Sơn",
      addressRegion: "Quảng Ngãi",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.3759172,
      longitude: 109.0943285,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    sameAs: ["https://www.facebook.com/NhaNghiDaiHangLySon0941390279"],
  };

  return (
    <html lang="vi">
      <head>
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
      </head>
      <body className={playfairDisplay.className}>{children}</body>
    </html>
  );
}
