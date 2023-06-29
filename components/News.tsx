"use client"
import React from 'react'
import Image  from "next/image"
import Carousel from './Carousel';

// Library to make a gallery / caroussel of images
// import { Carousel as CarouselNpmComponent} from 'react-responsive-carousel';


// Array of objects
const images = [
    {
        image:"/../public/images/image_gallery1.jpg",
        id: 1
    },
    {
        image:"/../public/images/image_gallery2.jpg",
        id: 2
    },
    {
        image:"/../public/images/image_gallery3.jpg",
        id: 3
    },
    // {
    //     image:"/../public/images/image_gallery2.jpg",
    //     id: 2
    // },
]

const News = () => {
    return (
        <section className="my-8 pb-18 md:pt-16 md:pb-30">
            <div>
                <h1 className="my-6 text-center font-bold text-4xl text-black">Les dernières nouveautés</h1>
            </div>
            <div className='flex flex-row space-x-3'>
                <Carousel >
                    {
                        images.map((image) => {
                            return (
                                <div key={image.id}>
                                    <div> 
                                        <Image 
                                            src={image.image}
                                            alt=""
                                            width={200}
                                            height={200}
                                            className={"rounded-xl shadow-xl hover:opactity-60"}
                                        />
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