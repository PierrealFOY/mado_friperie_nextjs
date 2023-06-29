import React from 'react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

interface CarouselProps {
    children: React.ReactNode;
}

const Carousel = ( { children  }: CarouselProps ) => {
    return (
        <div className='overflow-hidden relative'>
            {/* We pass the props images */}
            <div className='flex'>{children }</div>
            <div className='absolute inset-0'>
                <button>
                    <CgChevronLeft size={30} />
                </button>
            </div>
            <div>
                <button>
                    <CgChevronRight size={30} />
                </button>
            </div>
        </div>
    )
}

export default Carousel;