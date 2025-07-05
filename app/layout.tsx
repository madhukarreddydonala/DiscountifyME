import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DiscountifyME - Find Local Deals, Save Big!",
  description:
    "💰 Discover amazing discounts from nearby stores. Save money while supporting local businesses. Join 50K+ smart shoppers saving every day!",
  keywords: "local deals, discounts, savings, community shopping, local business, mobile deals, coupons, offers",
  authors: [{ name: "Donala Madhukar Reddy" }],
  openGraph: {
    type: "website",
    title: "DiscountifyME - Find Local Deals, Save Big!",
    description: "💰 Discover amazing discounts from nearby stores and start saving today!",
    siteName: "DiscountifyME",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiscountifyME - Find Local Deals, Save Big!",
    description: "💰 Discover amazing discounts from nearby stores and start saving today!",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
