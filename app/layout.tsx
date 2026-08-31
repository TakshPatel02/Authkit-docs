import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cookies } from "next/headers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  weight: ['400', '500', '600'],
  variable: "--font-inter",
  subsets: ["latin"],
})

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://authkit-docs.vercel.app"),
  title: {
    default: "AuthKit Docs - Auth you don't have to write again",
    template: "%s | AuthKit Docs",
  },
  verification: {
    google: "AIsWa1z2o3nSgk262N0vfNRxoKKcRw1gV59jGxLiGds",
  },
  description: "A CLI that scaffolds a production-ready Express + MongoDB auth backend - Basic, Role-Based, or OTP verification - in JS or TS.",
  keywords: [
    "authkit",
    "express auth",
    "nodejs authentication",
    "jwt authentication",
    "express boilerplate",
    "mongodb auth",
    "express rate limiting",
    "otp verification",
    "role based access control",
    "rbac express",
    "typescript express auth",
    "create-express-authkit",
    "auth scaffolding cli",
    "refresh token rotation",
  ],
  authors: [
    {
      name: "Taksh Patel",
      url: "https://takshpatel.vercel.app",
    }
  ],
  creator: "Taksh Patel",
  publisher: "Taksh Patel",
  category: "Documentation",
  openGraph: {
    type: "website",
    url: "https://authkit-docs.vercel.app",
    siteName: "AuthKit Docs",
    title: "AuthKit Docs",
    description: "A CLI that scaffolds a production-ready Express + MongoDB auth backend - Basic, Role-Based, or OTP verification - in JS or TS.",
    images: [
      {
        url: "https://res.cloudinary.com/portfolioblog/image/upload/v1788195200/authkit-banner_dmfdl.webp",
        width: 1920,
        height: 1080,
        alt: "AuthKit Docs - Auth you don't have to write again",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuthKit - Auth you don't have to write again",
    description: "A CLI that scaffolds a production-ready Express + MongoDB auth backend - Basic, Role-Based, or OTP verification - in JS or TS.",
    images: ["https://res.cloudinary.com/portfolioblog/image/upload/v1788195200/authkit-banner_dmfdl.webp"],
    creator: "@TakshPatel02"
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <html
      lang="en"
      className={`${theme === "dark" ? "dark" : ""} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider initialTheme={theme}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
