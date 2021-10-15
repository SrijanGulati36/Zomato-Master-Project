 import react from "react";
 import ReactStars from "react-rating-stars-component";

 import {AiOutlinePlus} from "react-icons/ai";

const FoodItem = (props) => {
    return <>
        <div className="flex items-start gap-2 rounded-lg">
            <div className="w-3/12 h-24 md:h-28 lg:h-36 px-2 md:px-3 rounded-lg">
                <img src={props.image}
                alt="menu images"
                className="w-full h-full rounded-lg"/>            
            </div>

            <div className="w-3/4 md:w-7/12 flex flex-col gap-1 ">
                
                <div className="flex flex-center justify between">
                    <h3 className="text-xl font-semibold">{props.title}</h3>

                    
                     <button className="md:hidden text-zomato-400 bg-zomato-50
                      flex items-center gap-3 border border-zomato-400 px-4 rounded-lg py-1">
                       <AiOutlinePlus/> Add
                    </button>


                </div>

                <ReactStars count={5} value={props.rating} />
                <h5>{props.price}</h5>
                <p className="truncate">Andhra mutton biriyani will  be an unforgettable memory
                 for your tongue and also for you. Andhra mutton biriyani is prepared with super
                 high quality rice and veggies which will make your want more</p>
            </div>       
            <div className="hidden w-2/12 md:block">
                <button className="text-zomato-400 bg-zomato-50 flex items-center gap-3 border bordeer-zomato-400 px-4 rounded-lg py-1">
                       <AiOutlinePlus/> Add
                </button>
            </div>


        </div>
    </>
}

export default FoodItem;