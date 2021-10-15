import react, {useState}from "react";
import {HiMenu} from "react-icons/hi";
import {MdClose} from "react-icons/md";


//components
import MenuListContainer from "./MenuListContainer";

const FloatMenuButton = () => {

        const [isClicked, setIsClicked] = useState(false);

        const toggleMenu  = () => setIsClicked(prev => !prev);


    return <>
    
    <div className=" flex flex-col  items-end fixed z-30 gap-3 bottom-2 w-8/12 right-2 md:hidden">
           
            {
                    isClicked && (
                         <div className="bg-white rounded-lg p-3 h-48 overflow-y-scroll ">
                                 <MenuListContainer/>
                          </div>
                    )
            }

            <button onClick={toggleMenu} 
                    className=" z-30 bottom-2 right-2 text-white bg-yellow-900 flex items-center
                                 gap-2 px-3 py-2 rounded-full md:hidden">
                         
                        {isClicked ?  <MdClose/> :  <HiMenu/> } Menu
            </button>

            
    </div>


    
    
    </>
}

export default FloatMenuButton;