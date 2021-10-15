import react from "react";
import {BsStarFill} from "react-icons/bs";

const RestaurantCard = (props) => {
    return <>
    <div className="bg-white  p-4 w-full md:w-1/2 lg:w-1/3 rounded-2xl transition duration-700 ease-in-out mb-4 mt-5 hover:shadow-lg">
        <div className="w-full h-56 relative lg:h-64">
           <div className=" absolute w-full flex items-end justify-between bottom-4">
              <div className="flex flex-col gap-2 items-start">
                    {
                        props.isPro && (
                            <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                                    Pro extra 10% off
                            </span>
                        )
                    }
                    {
                        props.isOff && (
                            <span className="bg-blue-400 text-white px-2 py-1 rounded text-sm">
                                ₹{`${props.isOff}`} OFF
                            </span>
                        )
                    }
               </div>
                <span className="bg-white bg-opacity-75 p-1 rounded mr-3 text-sm">
                   {props.durationOfDelivery} min
                </span>
           </div>
            <img src={props.photos.length && props.photos[0]}
                 alt="restaurant card"
                 className="w-full h-full rounded-2xl"/>
        </div>
        <div className="my-2 flex flex-col gap-2">
            <div className="flex items-center justify-between ">
                <h4 className="text-xl font-medium">{props.name}</h4>
                <span className="bg-green-800 text-white p-1 rounded text-sm flex gap-1">
                    {props.restaurantReviewValue}
                    <BsStarFill/>
                </span>
            </div>

            <div className="flex items-center justify-between text-gray-500">
                <p>{props.cuisine.join(", ")}</p>
                <p>₹ {props.averageCost} for one</p>
            </div>
        </div>

    </div>
    
    
    </>
}

export default RestaurantCard;