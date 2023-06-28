"use client"
import React from 'react'

// Library to make a gallery / caroussel of images
import ImageGallery from 'react-image-gallery';


// Array of objects
const images = [
    {
        link:"https://www.instagram.com/p/Cnzf7GiLKwR/?img_index=1",
        id: 1
    },
    {
        link:"https://www.instagram.com/p/Cnzf7GiLKwR/?img_index=1",
        id: 2
    },
]

const News = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            {
                images.map((image, id) => {
                    return (
                        <div key={id}>
                            {image.link}
                        </div>

                    )
                })
            }
        </section>  
    )
}

export default News