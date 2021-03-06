import react from "react";
import {TiStarFullOutline} from "react-icons/ti";


const RestaurantInfo = (props) => {
    return <>
    <div >
    <div className="my-4 ">
        <div className="flex flex-col  flex-col-reverse md:items-center md:flex-row justify-between gap-3">
            <h1 className="text-xl md:text-3xl font-semibold md:font-bold">{props.name}</h1>
        
        <div className="flex items-center gap-6 text-xs md:text-base">
            <div className="flex items-center gap-2" >
                <span className="flex items-center gap-1 text-white font-medium bg-green-400 rounded p-1">
                    {props.restaurantRating}<TiStarFullOutline/></span>

                <span>
                    <strong>2</strong>
                    <p className="border-dashed border-b">Dining Reviews</p>
                </span>
             </div>

            <div className="flex items-center gap-2" >
                <span className="flex items-center gap-1 text-white font-medium bg-green-400 rounded p-1">
                {props.deliveryRating}<TiStarFullOutline/></span>

                <span>
                    <strong>2</strong>
                    <p className="border-dashed border-b">Delivery Reviews</p>
                </span>
                </div>

               
            </div>
        </div>
    
           <div className="text-base md:text-lg text-gray-600">
              <h3>{props.cuisine}</h3> 
              <h3 className="text-gra-400">{props.address}</h3> 
              <h3 className="text-yellow-400"><span className="text-orange-700">Open Now </span>11:00 am - 8:00 pm</h3>
           </div> 
    </div>
    </div></>
}

export default RestaurantInfo;