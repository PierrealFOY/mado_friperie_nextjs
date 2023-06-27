"use client"
import React from 'react'
// import { useState } from 'react'
// import { useTheme } from 'next-themes'
import  Image  from "next/image"
import  Link  from "next/link";
import { RiMacFill, RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from 'next-themes';


// Types 
interface navItems {
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

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme: theme;


    return (
        <header className='w-full mx-auto px-4 sm:px-20 sticky top-0 z-10 bg-transparent'>
            <div className='mx-3 justify-between md:items-center md:flex'>
                <div>
                    <div className='flex items-center justify-between py-3'>
                        <div className='md:w-full md:py-5 md:px-4 md:block pt-2 px-3'>
                            <Image 
                                className='rounded-full'
                                src="/../public/images/logo_friperie.jpg" 
                                alt=''   
                                width={110}              
                                height={110}              
                            />
                        </div>
                    </div>
                </div>
                <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                    {
                        navItems.map((item, id) => (
                            <Link 
                                key={id}
                                href={item.page}
                                className='block lg:inline-block text-neutral-800 dark:text-neutral-400'
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                    {/*
                        Here, we switch (toggle) the theme onClick on the button
                        We use a ternary expression : dark is true, we click on the button so
                        we switch in light theme. If not, dark is false so we are in light theme 
                    */}
                    { currentTheme === "dark" ? (
                        <button 
                            onClick={() => setTheme("light")}
                            className='bg-slate-100 p-2 rounded-xl'
                        >
                            <RiMoonFill size={25} color='black' />
                        </button>
                    )
                    : (
                        <button 
                            onClick={() => setTheme ("dark")}
                            className='bg-slate-100 p-2 rounded-xl'
                        >
                            <RiSunLine size={25} />
                        </button>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar;