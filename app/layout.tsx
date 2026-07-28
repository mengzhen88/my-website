import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YOUR NAME — 个人网站",
  description: "设计师与创作者的个人主页：作品、思考和生活切片。",
  openGraph: {
    title: "YOUR NAME — 个人网站",
    description: "设计师与创作者的个人主页：作品、思考和生活切片。",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "YOUR NAME — 个人网站",
    description: "设计师与创作者的个人主页：作品、思考和生活切片。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
