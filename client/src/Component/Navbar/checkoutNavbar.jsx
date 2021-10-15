import react from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import {AiOutlineArrowLeft} from "react-icons/ai"








const Navbar = () => {
    return(
        <>
         <nav className="p-4 flex items-center bg-white shadow-md lg:shadow-none">
          <div className="container px-4 md:px-20 mx-auto">
            <div className="flex w-full items-center justify-between">
            <AiOutlineArrowLeft/>
            <div className="w-28 ">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                     alt ="logo"
                     className="w-full h-full"
                
                />
            </div>

            <div className="flex items-center gap-3">
                
                <span className="border p-2 flex items-center gap-2 border-gray-500 text-zomato-300 rounded-full">
                    <FaUserAlt/> 
                </span>
                    Srijan
            </div>
        </div>
            </div>
           
            
        </nav>
       
        </>
    )

}; 

export default Navbar;