import react from "react";
import {IoMdArrowDropright} from "react-icons/io";
const PictureCarouselCard = () => {
    return <>
    <div>
        <div className="w-full h-64 relative px-4 ">
           <div className="w-full h-full relative">
                <img src="https://b.zmtcdn.com/data/pictures/chains/8/51038/73c24387bf3e65ee01744f2abbe35963_featured_v2.jpg"
                alt="image"
                className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
                />

           

           <div  className="absolute inset-0 w-full h-full rounded-lg"
                     style={{
                         
                      background: 
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"
            }}/>

            </div>

            <div className="z-10 absolute left-8 w-full bottom-2 text-white ">
                
                <h4>Truffles</h4>
                <h6 className="z-10 flex items-center">Cafe Americano
                <IoMdArrowDropright/>
                </h6>
            </div>
        </div>
    </div>
    
    
    </>
}

export default PictureCarouselCard;