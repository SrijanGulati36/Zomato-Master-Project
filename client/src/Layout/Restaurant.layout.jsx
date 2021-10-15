import react from "react";
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";
import {TiStarOutline} from "react-icons/ti";
import {RiDirectionLine, RiShareForwardLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";








//components
import RestaurantNavBar from "../Component/Navbar/restaurantNavbar"
import ImageGrid from "../Component/restaurant/ImageGrid";
import InfoButtons from "../Component/restaurant/InfoButtons";
import RestaurantInfo from "../Component/restaurant/Restaurantinfo";
import TabContainer from "../Component/restaurant/Tabs";
import CartContainer from "../Component/Cart/CartContainer";


const RestaurantLayout = (props) => {
    return <>
    {""}
        
        <RestaurantNavBar/>
        <div className="container mx-auto px-4 lg:px-20 ">
            <ImageGrid images={["https://b.zmtcdn.com/data/pictures/chains/7/19358777/eb8abfd46d4e09506a45f101ba16de7e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/7/19358777/eb8abfd46d4e09506a45f101ba16de7e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/7/19358777/eb8abfd46d4e09506a45f101ba16de7e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/7/19358777/eb8abfd46d4e09506a45f101ba16de7e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/7/19358777/eb8abfd46d4e09506a45f101ba16de7e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/7/19358777/eb8abfd46d4e09506a45f101ba16de7e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",]}/>
       
    
        <RestaurantInfo name="Mumbai Xpress" 
                        restaurantRating="3.5" 
                        deliveryRating="3.2"
                        cuisine="North Indian, Fast Food, Chinese"
                        address="Basavanagudi, Banglore"/>

        <div className="my-4 flex flex-wrap gap-3">

           <InfoButtons isActive>
            <TiStarOutline/> Add Review 
            </InfoButtons>

            <InfoButtons >
            <RiDirectionLine/> Direction
            </InfoButtons>

            <InfoButtons >
            <BiBookmarkPlus/>Bookmark
            </InfoButtons>

            <InfoButtons>
                <RiShareForwardLine/>Share
            </InfoButtons>

        </div>

        <div className="my -10">
            
        <TabContainer></TabContainer>
        </div>

        <div className="relative">{props.children}</div>

    </div>

        <CartContainer/>

    </>
}

export default RestaurantLayout;