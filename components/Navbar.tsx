"use client"
import React from 'react'

// Hooks
import { useState } from 'react'
import { useTheme } from 'next-themes'

// Next Components
import  Image  from "next/image"
import  Link  from "next/link";

// React Icons
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg"
import { AiOutlineCloseCircle } from "react-icons/ai"


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
    const [burgerMenu, setBurgerMenu] = useState(false);


    return (
        <header className='md:hover:border-b-2 md:shadow  md:hover:shadow-orange-500 w-full mx-auto px-4 sm:px-20 sticky top-0 z-10 bg-transparent'>
            <div className='mx-3 justify-between items-center md:flex'>
                    <div className='transition duration-1000 ease-in-out hover:rotate-180 flex items-center justify-between py-3'>
                        <Image 
                            className='rounded-full'
                            src="/logo_friperie.jpg" 
                            alt=''   
                            width={100}              
                            height={100}              
                        />
                    </div>

                    {/*
                        Here, we hide the menuBurger according on the screen size : 
                        Under the md screen size we show
                        If MD size or plus, the BurgerMenu is hidden
                        We use a ternary expression : burgerMenu is true, we displays a close button 
                        BurgerMenu is false, it changes to a burgermenu to open with three horinzontal lines                    
                        */}
                    <div className='md:hidden'>
                        <button 
                            className='p-2'
                            onClick={() => setBurgerMenu(!burgerMenu)}
                        >
                            {burgerMenu ? <AiOutlineCloseCircle size={30}/> : <CgMenuBoxed size={30} /> }
                        </button>
                    </div>

                    {/* 
                        we wrap our items in the div below : 
                        if the menu burger is true, we display the the items 
                        if not, we hide the items
                    */}
                    <div
                        className={'flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ' + (burgerMenu ? 'block' : 'hidden')}
                    >
                        <div className='items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0'>
                            {
                                navItems.map((item, id) => (
                                    <Link 
                                        key={id}
                                        href={item.page}
                                        className='text-lg block lg:inline-block text-neutral-800 dark:text-neutral-400 hover:text-neutral-500 hover:scale-125 dark:hover:text-neutral-100'
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
                </div>
        </header>
    )
}

export default Navbar;