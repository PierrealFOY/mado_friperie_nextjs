"use client"
import  Image  from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" bg-cover bg-top sticky bg-no-repeat">
        <Image 
          src="/../public/images/_image_background_friperie.jpg" 
          alt=""
          width="auto"
          height="auto"
        />
      </div>

      <div>
        <title className="text-black"> Friperie Mado </title>
      </div>

    </main>
  )
}
