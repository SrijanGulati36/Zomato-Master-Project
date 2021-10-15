 import react from "react";

const FoodItem = (props) => {

 
    return <>
    
    <div className="flex flex-col gap-2 ">
                    <div className="flex items-center justify-between">
                      <h5>{props.name}</h5>
                        <div className="flex flex-col items-end">
                            <small> ₹ {parseInt(props.price) * parseInt(props.quantity)}</small>
                             <div className="px-1 bg-zomato-400 text-white rounded flex items-center gap-1">
                                     <button  className="p-1 bg-zomato-400 text-white rounded">-</button>
                                     <small>20</small>
                                     <button  className="p-1 bg-zomato-400 text-white rounded">+</button>
                             </div>
                        </div>
                    </div>
                 
    </div>

    <hr className="my-2"/>
    </>
}

export default FoodItem;
