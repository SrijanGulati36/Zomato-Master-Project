import react from "react";
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";


const ImageGrid = (props) => {

    return ( <>
        <div>
            <div className="w-full h-48 md:hidden">
            <img src={props.images[0]}
                 alt="restaurant image"
                 className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition duration-700"
            />
        </div>
        <div className="hidden w-full h-96 md:flex gap-1 ">
            <div className="w-full h-full overflow-hidden"> 
            <img src={props.images[0]}
                 alt="restaurant image"
                 className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition duration 700"/>

            </div>

           

           

            <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden"> 
                <img src={props.images[1]}
                 alt="restaurant image"
                 className="w-full h-full object-cover rounded-lg  transform hover:scale-110 transition duration-700"/>

                <img src={props.images[2]}
                 alt="restaurant image"
                 className="w-full h-full object-cover rounded-lg  transform hover:scale-110 transition duration-700"/>


            </div>

            <div className="w-1/4 h-full flex flex-col gap-1"> 
            

               <div className="w-full h-full relative">
                   <img src={props.images[3]}
                     alt="restaurant image"
                    className="w-full h-full object-cover rounded-lg"/>

                    <div className="absolute inset-0 bg-opacity-40 bg-black rounded-lg"/>
                    <h4 className="absolute inset-y-2/4 z-20 w-full h-full text-center text-white font-semibold">View Gallery</h4>
               </div>

                

               <div className="w-full h-full relative">
                   <img src={props.images[4]}
                     alt="restaurant image"
                    className="w-full h-full object-cover rounded-lg"/>

                    <div className="absolute inset-0 bg-opacity-90 bg-gray-400 rounded-lg"/>
                    <div className="absolute flex flex-col items-center inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold">
                        <div className="bg-black p-3 rounded-full bg-opacity-50">
                            <AiOutlineCamera/>
                        </div>
                      <h4 className="">View Gallery</h4>    
                    </div>
               </div>


            </div>
            
            
        </div>
        </div>

        </>
    )
}

export default ImageGrid;