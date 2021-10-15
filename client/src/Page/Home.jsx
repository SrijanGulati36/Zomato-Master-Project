import React from "react";
import {useParams} from "react-router-dom";

//import components
import Delivery from "../Component/Delivery"
import Dining from "../Component/Dining";
import NightLife from "../Component/NightLife";
import Nutrition from "../Component/Nutrition";



const Home = () => {

    const {type} = useParams();
    return <> 
    
    <div className="mx-auto my-5">
        {type === "delivery" && <Delivery/>}
        {type ==="dining" && <Dining/>}
        {type ==="night" && <NightLife/>}
        {type ==="nutri" && <Nutrition/>}
    </div>
    
    </>
}

export default Home;