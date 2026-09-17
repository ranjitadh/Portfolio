import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ranjit Adhikari — Fullstack Developer",
  description:
    "Portfolio of Ranjit Adhikari, a Fullstack Developer crafting high-performance web experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${syne.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
