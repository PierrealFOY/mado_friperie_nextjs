/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react"
import Image from "next/image"

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
        <section id="about" className="flex justify-center px-4 md:my-12 md:pt-10">
            <Card className="flex-row w-full max-w-[48rem]">
                <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                    <img 
                        src="/image_about_vitrine.jpg" 
                        alt="image" 
                        className="w-full h-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="orange" className="uppercase mb-4">C'est qui, c'est quoi ?</Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Mado Friperie, c'est une boutique de seconde main, avec des articles vintage 
                        située en plein coeur d'Auray
                    </Typography>
                    <Typography color="gray" className="font-normal mb-8">
                        Depuis janvier 2022, je me suis lancé dans un projet, un pari qui me tenait à coeur depuis longtemps:
                        ouvrir une frip' avec des produits de seconde main et de qualité, à petits prix.
                    </Typography>
                    <a href="#" className="inline-block ">
                        <Button variant="text" color="orange" className="flex items-center gap-2">
                            Tu veux en savoir plus ? Clique ici ! 
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </section>
    );
}

export default AboutSection;