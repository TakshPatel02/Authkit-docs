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
  title: "AuthKit - Express Auth Scaffolding CLI",
  description:
    "A CLI that scaffolds a production-ready Express + MongoDB auth backend. Basic, Role-Based, or OTP verification - in JavaScript or TypeScript.",
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
