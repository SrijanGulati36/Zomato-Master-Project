import react from "react";
import {TiStarFullOutline} from "react-icons/ti";

const ReviewCard = () => {
    return <>
        <div className="flex flex-col gap-3 my-3">
            <div className="flex items-center justify-between"> 
               
               <div className="flex items-center gap-2 my-2">
                    <div className="w-10 h-10 rounded-full">
                        <img
                        src="https://b.zmtcdn.com/data/user_profile_pictures/d76/cc84183f68cc34027812bdf62585cd76.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                        alt="avatar"
                        className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                <div className="flex flex-col">
                   <h3 className="text-lg font-semibold">Name </h3>
                   <small>5 Reviews &#8226; 3 followers</small>
                </div>
               </div>

                <button className="text-zomato-400 border border-zomato-400 rounded px-4 py-1">Follow</button>

            </div>
        
            <div className="flex flex-col gap-3">
                <div className="flex itesm-center gap-3">
                        <span className="flex items-center text-xs text-white bg-green-700 px-2 py-1 rounded gap-1">
                           3 <TiStarFullOutline/>
                        </span>

                        <h5 className="font-regular uppercase">Delivery</h5>
                        <small className="font-regular uppercase">3 days ago</small>
                </div>

                <div className="w-full">
                    <p className="w-full text-gray-600 font-light text-base">I had the Australian baked chicken combo.
                         I really thought that the chicken would have skin since it said baked but it didn't have any.
                          I think the combo is worth a try.
                    </p>
                </div>

            </div>
        </div>
    </>
}

export default ReviewCard;