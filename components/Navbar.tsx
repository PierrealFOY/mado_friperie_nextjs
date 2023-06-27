"use client"
import React from 'react'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import  Image  from "next/image"

// Types 
interface NavItems {
    label : string,
    page : string,
}

// Tableau des items de la navbar qui correspondent aux routes
const navItems = [
    {
        label : "Accueil",
        page : "home",
    },
    {
        label : "A propos",
        page : "about",
    },
    {
        label : "Produits",
        page : "products",
    },
    {
        label : "Contact",
        page : "contact",
    },
]

const Navbar = () => {

    // const { systemTheme, theme, setTheme }

    return (
        <header className='sticky top-0 z-10 bg-white'>
            <div className='justify-between md:items-center md:flex'>
                <div>
                    <div className='flex items-center py-3'>
                        <div className='md:py-5 md:px-2 md:block'>
                            <Image 
                                className='rounded-full '
                                src="/../public/images/logo_friperie.jpg" 
                                alt=''   
                                width={110}              
                                height={110}              
                                />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;