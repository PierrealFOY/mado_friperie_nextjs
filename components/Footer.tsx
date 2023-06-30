import { Typography } from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa" 
import { GrInstagram } from "react-icons/gr" 
import { SiGmail } from "react-icons/si" 
import Link from 'next/link'

 
export default function SimpleFooter() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center px-4 gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal">
                &copy; 2023 Pierre-Alexis Foy
            </Typography>
            
            <div className='flex flex-row space-x-3 items-center justify-center mb-2'>
                    <a href="https://www.facebook.com/madofriperie/" target="_blank" >
                        <FaFacebook 
                            size={30}
                            className="hover:animate-bounce"
                        />
                    </a>
                    <a href="https://www.instagram.com/madofriperie/" target="_blank" >
                        <GrInstagram 
                            size={30}
                            className="hover:animate-bounce"
                        />
                    </a>
                    <p>
                        <Link href="madofriperie.auray@gmail.com" target="_blank">                            
                            <SiGmail 
                                size={30}
                                className="hover:animate-bounce"
                            />
                        </Link>
                    </p>
                </div>
        </footer>
    );
}