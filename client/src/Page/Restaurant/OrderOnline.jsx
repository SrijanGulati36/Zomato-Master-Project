import react from "react";
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";

//comps 
import FloatMenuButton from "../../Component/restaurant/Order-Online/FloatMenuButton";
import MenuListContainer from "../../Component/restaurant/Order-Online/MenuListContainer";
import FoodItem from "../../Component/restaurant/Order-Online/FoodItem";
import FoodList from "../../Component/restaurant/Order-Online/FoodList";





const OrderOnline = () => {
    return <>
    
    <div className="w-full flex h-screen ">
            <aside className="hidden md:flex flex-col gap-3 w-1/4 border-r h-screen overflow-y-scroll border-gray-200">
                    <MenuListContainer/>  
                     <MenuListContainer/>  
                      <MenuListContainer/>           
                       <MenuListContainer/>  
            </aside>
            <div className="w-full md:w-3/4 px-3 h-screen">

            <div className="pl-3 mb-4">
                <h2 className="text-xl- font-semibold">Order online</h2>
                <h4 className="flex items-center gap-2 font-light text-gray-500">
                      <AiOutlineCompass/>
                      live track your order | 
                      
                      <BiTimeFive/> 
                      30 mins
                </h4>
             </div>
            
               

                <section className="flex h-screen overflow-y-scroll flex-col -gap-3 md:gap-5 rounded-lg">

                    <FoodList title="Recommended"
                             items={[
                                 {
                                    price:"1000",
                                    rating:3,
                                     description:"Andhra mutton biriyani will  be an unforgettable memory",
                                     title:"tasty food",
                                     image: "https://b.zmtcdn.com/data/pictures/chains/9/19196479/bd30df0436d73ca5f0c1ebdcac7c74c6_o2_featured_v2.jpg?output-format=webp"
                                 },

                               
                             ]}/>

                           

                    
                    
                </section>
            
            </div>
    </div>
       <FloatMenuButton/>
    </>
}

export default OrderOnline;