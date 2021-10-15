import react from "react";
import FoodItem from "./FoodItem";



const FoodList = (props) => {
    return <>
    
    <div className="rounded-lg">
            <h2 className="text-xl top-0 font-semibold sticky bg-white w-full px-2 py-1">{props.title}</h2>

            <div className="flex flex-col gap-3 rounded-lg">
                
            {props.items.map((item) => 
            <FoodItem  {...item}
             />
            
            )}
            </div>

    </div>
    
    </>
}

export default FoodList;