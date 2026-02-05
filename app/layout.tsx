import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Syne, Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const syne = Syne({ subsets: ["latin"], variable: "--font-heading" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Ranjit Adhikari - Frontend Developer",
  description:
    "Portfolio website of Ranjit Adhikari, a Frontend Developer with expertise in React.js, TypeScript, and modern frontend technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${syne.variable} font-sans antialiased selection:bg-purple-500/30`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

