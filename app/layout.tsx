"use client"
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Goblin_One } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Image  from "next/image";


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
                src="/../public/images/image_background-friperie.jpg" 
                alt=""
                className=" top-0 z-0"
                width={1600}
                height={500}
                // En commentant le width et height qui sont obligatoires
                // Je peux ajouter le prop fill={true} en dessous : 
                // l'image remplira automatiquement l'espace du parent
                // fill={true}
                // priority={true}
            />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
 