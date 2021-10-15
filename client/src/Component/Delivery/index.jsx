import react, {useState} from "react";

//import components 
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../restaurantCard";




const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: [
                     "https://b.zmtcdn.com/data/pictures/chains/2/18603822/d67669910644acdf79ee7fe9d850c388_o2_featured_v2.jpg",
                    ],
            name: "The Pizza Bakery",
            cuisine: ["Italian", "Fast Food", "Dessert"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 40,
            restaurantReviewValue: 4.1,

        },

        {
            _id: "123456-2",
            photos: [
                     "https://b.zmtcdn.com/data/pictures/chains/3/18343993/c0fba8fbbd5bdac58e0e5d3b277a5cd4_o2_featured_v2.jpg",
                    ],
            name: "Behrouz Biriyani",
            cuisine: ["Biriyani", "North Indian", "Mughlai"],
            averageCost: 200,
            isPro: false,
            isOff: 50,
            durationOfDelivery: 38,
            restaurantReviewValue: 4.0,

        },

        {
            _id: "12345678",
            photos: [
                     "https://b.zmtcdn.com/data/pictures/8/19421268/f6281f44d580e5641490cde851ee8e35_o2_featured_v2.jpg",
                    ],
            name: "The Fatty Bao",
            cuisine: ["Asian", "Japanese", "Sushi"],
            averageCost: 200,
            isPro: true,
            isOff: 85,
            durationOfDelivery: 55,
            restaurantReviewValue: 4.1,

        },
    ])

    return <>
    <DeliveryCarousel/>
   {/** <Brand/> */}
   

  <div className="flex jusify-between flex-wrap">
        {
                restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id}/>
                )
            )
        }
   
  </div>
    </>
}

export default Delivery;