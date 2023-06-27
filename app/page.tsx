"use client"
import  Image  from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="object-cover bg-cover bg-top bg-no-repeat">
        <Image 
          src="/../public/images/image_background-friperie.jpg" 
          alt=""
          // width={1600}
          // height={900}
          fill={true}
        />
      </div>

      <div>
        <title className="text-black"> Friperie Mado </title>
      </div>

    </main>
  )
}
