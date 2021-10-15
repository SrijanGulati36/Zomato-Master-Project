 import react from "react";
 import {TiStar} from "react-icons/ti"

const MenuSimilarRestaurantCard = (props) => {
    return <>
    

  <div className="mx-2">
                  
       <div className=" bg-white shadow rounded:md ">
         <div className="w-full h-48">
            <img src={props.image}
                alt="food photo"
                className="w-full h-full object-cover rounded-t-md"/> 
        </div>
        <div className="flex flex-col gap-2 p-3">
            <h3 className="font-light my-1">{props.title}</h3>
            <div className="flex items-center text-sm">
                    <span className="flex items-center  pr-2 ">
                            <span className="flex items-center gap-1 text-xs bg-green-700 text-white p-1 rounded">
                            30
                            <TiStar/>
                            </span>
                            Dining
                    </span>

                    <span className="w-2 h-6 border-r border-gray-500 mx-2"/>

                    <span className="flex items-center  pr-2 ">
                            <span className="flex items-center gap-1 text-xs bg-green-700 text-white p-1 rounded">
                            30
                            <TiStar/>
                            </span>
                            Rating
                    </span>
                    
                 
            </div>

            <h4>Street Food, Beverages, Tea</h4>
        </div>
     </div>
    

  </div>
    


    
    </>
}

export default MenuSimilarRestaurantCard;