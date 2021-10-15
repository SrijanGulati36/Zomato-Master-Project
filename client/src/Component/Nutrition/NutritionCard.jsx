import react from "react";
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {



    return <>
        <div className=" w-full md:w-1/2 lg:w-1/3 p-4">
           <div className="w-full h-full bg-white rounded-2xl mt-5 shadow-lg">
             <div className={`w-full h-56 rounded-t-2xl bg-${props.bg}-100`}>
                <img src={props.image}
                     alt="suppliments"
                     className="w-full h-full rounded-full mb-2"
                     />
            </div>
            
        <div className="flex items-center gap-2 my-1 px-4">
            <div className="w-4 h-4">
                <img src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
                     alt="veg"
                     className="w-full h-full"
                        />
            </div>

            <ReactStars
        count={5}
        //onChange={ratingChanged}
        size={16}
        isHalf={true}
        value={3}
        emptyIcon={<BsStar/>}
        halfIcon={<BsStarHalf/>}
        fullIcon={<BsStarHalf/>}
        activeColor="#ffd700"
            />
        <span className="text-gray-400">
            15
        </span>
        </div>

        <h3 className="text-xl font-bold text-gray-700 pl-4 my-2">Burn - Weight Balance</h3>
        <p className="text-sm font-light text-gray-500 pl-4">
        An advanced timed-release formula that helps you fall asleep faster and wake up feeling fresher.
        </p>

        <div className="mt-4">
            <hr/>
        </div>

        <div className="pl-4">
            <span>
            <s  className="text-gray-300 mr-3">₹ 600</s> <strong>320</strong>
            </span>

            <p className="text-gray-500">
                monthly packs - 30 tablets
            </p>
            
            </div>
        </div>
    </div>    
    </>
}

export default NutritionCard;