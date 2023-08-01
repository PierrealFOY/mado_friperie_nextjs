"use client"
import React from 'react';
import { Gallery } from 'react-grid-gallery';

const Categories = [
    {
        id: 1,
        src: "/image_gallery1.jpg",
        width: 320,
        height: 212,
        caption: "Vaisselle"
    }
]

const ShopCategories = () => {
    return (
        <div>
            <Gallery images={Categories} />
        </div>
    );
}

export default ShopCategories;