import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nguyễn Quang Huy - Full-Stack Developer | Portfolio",
  description:
    "Full-Stack Developer with hands-on experience developing RESTful APIs, business management systems, AI-integrated applications, and database-driven platforms. Experienced in Laravel, Next.js, MySQL, JavaScript, Redis, queues, API integration, and production deployment.",
  keywords: [
    "Nguyễn Quang Huy",
    "PHP Developer",
    "Laravel Developer",
    "Full-Stack Developer",
    "RESTful API",
    "MySQL",
    "Redis",
    "AI Integration",
    "Portfolio",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  authors: [{ name: "Nguyễn Quang Huy" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={jakarta.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
