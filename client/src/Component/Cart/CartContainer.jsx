import react, {useState} from "react";
import {IoMdArrowDropdown,IoMdArrowDropright, IoMdArrowDropup} from "react-icons/io";
import {RiCloseLine} from "react-icons/ri";

//components
import FoodItem from "./FoodItem"




 const CartSm = ({toggle}) => {
     return <>
     
        <div className="flex items-center justify-between md:hidden ">
             <div className="flex flex-col items-start">
                <small className="flex items-center gap-1" 
                        onClick={toggle}>1 Item 
                        <IoMdArrowDropdown/>
                </small>
                <h4>
                ₹ 200 <sub>(plus taxes)</sub>
                </h4>
            </div>

            <button className="bg-zomato-400 flex items-center text-white gap-1 px-3 py-1 mx-2 rounded-lg ">
                    Continue <IoMdArrowDropright/>
            </button>
        </div>
     </>
 }

 const CartLg= ({toggle}) => {
    return <>
    
       <div className=" hidden md:flex items-center justify-between container px-20 mx-auto">
            <div className="flex text-xl gap-2 items-start">
               <span className="border bg-white border-gray-300 p-1 rounded "
                     onClick={toggle}>
                       
                       <IoMdArrowDropup/>
               </span>
               <h4>
               Your Orders (1)
               </h4>
           </div>

          <div className="flex items-center gap-1">

                <h4 className="text-xl gap-2">
               Subtoal: ₹ 250 <sub>(plus taxes)</sub>
               </h4>

                <button className="bg-zomato-400 flex text-xl font-light height-10 items-center text-white gap-1 px-3 py-1 mx-2 rounded-lg ">
                   Continue <IoMdArrowDropright/>
                </button>
          </div>
       </div>
    </>
}

const CartContainer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen((prev) => !prev);

    const closeCart = () => setIsOpen(false)

    return <>

        {isOpen &&
        <div className="fixed w-full bg-white z-10 p-2 bottom-16 px-3 h-48 overflow-y-scroll">
            <div className="flex items-center justify-between">
                 <h3 className="text-xl font-semibold">Your Order</h3>

                 <RiCloseLine onClick={closeCart}/>

             </div>

                <hr className="my-2"/>


            <div className="flex flex-col gap-2 ">
               <FoodItem name="Dominos Pizza" quantity="1" price="90"/>  

            </div>
           
          
          </div>
        }

        <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0 ">
            <CartSm toggle={toggleCart}/>
            <CartLg toggle={toggleCart}/>
          

        </div>
    </>
}

export default CartContainer;
