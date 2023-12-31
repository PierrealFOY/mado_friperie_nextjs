"use client"
import React from 'react'
import Image  from "next/image"

// Library to make a gallery / caroussel of images
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

// Array of objects
const images = [
    {
        image:"/image_gallery1.jpg",
        id: 1
    },
    {
        image:"/image_gallery2.jpg",
        id: 2
    },
    {
        image:"/image_gallery3.jpg",
        id: 3
    },
    {
        image:"/image_gallery4.jpg",
        id: 4
    },
    {
        image:"/image_gallery5.jpg",
        id: 5
    },
    // {
    //     image:"/image_gallery2.jpg",
    //     id: 6
    // },
]

const News = () => {
    return (
        <section className="flex flex-col my-8 pb-18 md:pt-16 md:pb-30">
            <div className='w-1/2 self-center '>
                <h1 className="hover:animate-bounce my-6 text-center font-bold text-4xl dark:text-white text-black">Les dernières nouveautés</h1>
            </div>
            <div className='md:w-2/4 md:mx-auto mx-auto w-3/4'>
                <Carousel transition={{ duration: 2 }}
                    className="rounded-xl"
                    prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-1/4 -translate-y-2/4 !left-1 rounded-full"
                    >
                        <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
                    </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-1/4 -translate-y-2/4 !right-1 rounded-full"
                    >
                        <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
                    </IconButton>
                        )}
                >
                    {
                        images.map((image) => {
                            return (
                                <div 
                                    className=""
                                    key={image.id}
                                >
                                    <div className="md:px-2">
                                        <div className=""> 
                                            <Image 
                                                src={image.image}
                                                alt=""
                                                width={400}
                                                height={400}
                                                className={"hover:shadow-lg hover:shadow-orange-500 h-full w-full object-cover rounded-xl shadow-xl hover:opactity-60"}                                                
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </section>  
    )
}

export default News