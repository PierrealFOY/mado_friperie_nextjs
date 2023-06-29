// Composant custom. A garder pour plus tard si l'on veut un carousel
// plus personnalisé

// "use client"
// import React from 'react'
// import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

// // Nous n'avons pas besoin de passer les props images 
// // car nous allons les passer en tant qu'enfants
// // cela permet d'accepter n'importe quel type de composant en tant 
// // qu'enfant de Carousel
// interface CarouselProps {
//     children: React.ReactNode;
// }

// const Carousel = ({ children  }: CarouselProps ) => {
//     return (
//         <div className="overflow-hidden relative">
//             <div className="flex md:items-center items-center">
//                 <div className="flex-grow">{children}</div>
//             </div>
//             <div className="absolute inset-0 flex items-center justify-between">
//                 <button className="p-1 rounded-full shadow bg-slate-100 text-gray-800 hover:bg-white">
//                     <CgChevronLeft size={30} />
//                 </button>
//             </div>
//             <div className="absolute inset-0 flex items-center justify-end">
//                 <button className="p-1 rounded-full shadow bg-slate-100 text-gray-800 hover:bg-white">
//                     <CgChevronRight size={30} />
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Carousel;