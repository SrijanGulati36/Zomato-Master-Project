import react, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {MdFreeBreakfast} from "react-icons/md";
import {BiDrink} from "react-icons/bi";
import {FaAppleAlt} from "react-icons/fa";
import {RiShoppingBag3Line} from "react-icons/ri";
import classnames from "classnames";



const MobileTabs = () => {

    const [allTypes] = useState([
        {
        id:`delivery`,
        icon: <RiShoppingBag3Line/>,
        name: "Delivery",
        },

        {
        id:`dining`,
        icon: <MdFreeBreakfast/>,
        name: "Dining Out",
       },

        {
        id:`night`,
        icon: <BiDrink/>,
        name: "Night Life",
        },

        {
        id:`nutri`,
        icon:<FaAppleAlt/>,
        name: "Nutrition",
        },

        ]);

    const {type} = useParams();

   

    return <>
    <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-gray-500 border md:justify-evenly ">
      
        {
            allTypes.map((items) => (
            <Link to={`/${items.id}`}>
            <div className={ 
                        type === items.id
                        ?  "flex flex-col relative items-center text-lg text-zomato-400" 
                        :  "flex flex-col items-center text-lg"}>

             <div className={
                     type === items.id
                    && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                    }/>           
          
            {items.icon}
           

             <h5 className="text-sm">{items.name}</h5>
            </div>
            </Link>
            ))};
            
    </div>
    </>;
};


const LargeTabs = () => {

    const [allTypes]  = useState([
       {
        id:`delivery`,
        imageDefault:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
        imageActive:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
        name: "Delivery",
        activeColor:"yellow",
        },

        {
        id:`dining`,
        imageDefault:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
        imageActive:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        name: "Dining Out",
        activeColor:"blue",
       },

        {
        id:`night`,
        imageDefault:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        imageActive:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        name: "Night Life",
        activeColor:"purple"
        },

        {
        id:`nutri`,
        imageDefault:"https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
        imageActive:"https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
        name: "Nutrition",
        activeColor: "yellow",
        },

        ]);

        const {type} = useParams();

      return <>

    <div className="hidden lg:flex gap-14 container px-20 mx-auto">
       

        
        {allTypes.map((items) => (
                 
            <Link to={`/${items.id}`}>
                 <div className={classnames("flex items-center gap-3 pb-2 transition duration-700 ease-in-out", {
                     "border-b-2 border-zomato-400" : type === items.id,}) }>

                 <div className={classnames("w-14 h-14 bg-gray-100 p-4 rounded-full", {
                           [ `bg-${items.activeColor}-100`] : type ===items.id
                        }
                        )}>
                        <img src={type === items.id ? items.imageActive : items.imageDefault}
                            alt="bike photo"
                            className="w-full h-full"
            />
           
            </div>
             <h3 className={type === items.id ? "text-zomato-400 text-xl" : "text-gray-700 text-xl" }>{items.name}</h3>
        </div> 
        </Link>
        )
    )};

       
    
    </div>
    </>
}
  


const FoodTab = () =>{
    return (<>
    
    <div>
    <MobileTabs/>
    <LargeTabs/>
    </div>
    </>);
}

export default FoodTab;