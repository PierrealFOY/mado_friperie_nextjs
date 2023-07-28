"use client"
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Image  from "next/image";
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
            <Image 
                src="/image-accueil-haut-Copie.jpg" 
                alt=""
                className=" top-0 z-0 h-100 "
                width={1600}
                height={500}
                // En commentant le width et height qui sont obligatoires
                // Je peux ajouter le prop fill={true} en dessous : 
                // l'image remplira automatiquement l'espace du parent
                // fill={true}
                placeholder="blur"
                blurDataURL={'/image-accueil-haut-Copie.jpg'}            
              />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
 