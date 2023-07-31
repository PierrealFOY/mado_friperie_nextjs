/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react"

// modules et impots de Material Tailwind
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


function AboutSection() {
    return (
        <section id="about" className="flex justify-center px-4 md:my-12 md:pt-10 my-6 pt-7">
            <div className="flex flex-row w-full max-w-3xl">
                <div className="w-2/3">
                    <Typography variant="h6" color="orange" className="uppercase mb-4">Quelques infos sur la boutique</Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white">
                        Mado Friperie, c'est une boutique de seconde main, avec des articles vintage 
                        située en plein coeur d'Auray
                    </Typography>
                    <Typography color="gray" className="font-normal mb-8 dark:text-white">
                        Depuis janvier 2022, je me suis lancé dans un projet, un pari qui me tenait à coeur depuis longtemps:
                        ouvrir une frip' avec des produits de seconde main et de qualité, à petits prix.
                    </Typography>
                    <Typography color="gray" className="font-normal mb-8 dark:text-white">
                        Horaires d'ouverture :
                        <a className="flex flex-col">
                            Mardi - Samedi : 10:30-12:30 / 14:00-18:30 
                        </a>
                    </Typography>
                </div>
                <div className="w-1/3 m-0 rounded-r-none">
                    <img 
                        src="/image_about_vitrine.jpg" 
                        alt="image" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;