/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
// import Image  from "next/image"

function WelcomePicture() {
    return(
        <section className='w-full md:w-full md:mb-10 md:pb-10'>
            <div className="relative w-full">
                <img 
                    src="/image-accueil-haut-Copie.jpg"
                    alt="mado friperie"
                    className="w-full h-auto"      
                />
            </div>
        </section>
    )
}

export default WelcomePicture