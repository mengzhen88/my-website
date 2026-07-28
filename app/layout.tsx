import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "邵梦贞 — 产品设计师",
  description:
    "邵梦贞的个人主页：Lark Design · APaaS 产品设计师，6 年产品设计经验。",
  openGraph: {
    title: "邵梦贞 — 产品设计师",
    description:
      "Lark Design · APaaS 产品设计师，关注复杂 B 端、AI 产品与用户体验。",
    images: ["/og-shao-mengzhen.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "邵梦贞 — 产品设计师",
    description:
      "Lark Design · APaaS 产品设计师，关注复杂 B 端、AI 产品与用户体验。",
    images: ["/og-shao-mengzhen.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-lang="zh">
      <body>
        {children}
        <script src="/site.js" defer />
      </body>
    </html>
  );
}
