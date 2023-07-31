"use client"
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer"

// Import des modules next
import { ThemeProvider } from 'next-themes'
import { Goblin_One } from 'next/font/google'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
