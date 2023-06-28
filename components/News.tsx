"use client"
import React from 'react'
import Image  from "next/image"

// Library to make a gallery / caroussel of images
import ImageGallery from 'react-image-gallery';


// Array of objects
const images = [
    {
        link:"/../public/images/image_gallery1.jpg",
        id: 1
    },
    {
        link:"/../public/images/image_gallery2.jpg",
        id: 2
    },
    {
        link:"/../public/images/image_gallery3.jpg",
        id: 3
    },
    // {
    //     link:"/../public/images/image_gallery2.jpg",
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
                {
                    images.map((image, id) => {
                        return (
                            <div key={id}>
                                <div> 
                                    <Image 
                                        src={image.link}
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
            </div>
        </section>  
    )
}

export default News