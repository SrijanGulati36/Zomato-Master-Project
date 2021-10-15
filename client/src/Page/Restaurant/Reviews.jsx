import React, {useState} from "react";
import Rating from "react-rating-stars-component";

//components
import ReviewCard from "../../Component/restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Component/restaurant/Reviews/AddReviewCard";


const Reviews = () => {


    const [reviews, setReviews] = useState(["", "", ""]);

    const handleRating = (value) => console.log(value);


    return <>

   <div className="w-full flex md:fle-row relative">
 
        <div className="w-full md:w-8/12 flex flex-col">

        <div className="md:hidden">
                <AddReviewCard/>
        </div>
                {reviews.map((review) => (
                <ReviewCard {...review}/>
                ))}
        </div>

        <aside  
            style={{height: "fit-content"}}
            className="hidden md:w-4/12 md:flex items-start p-3 sticky top-2 bg-white rounded-xl shadow-md shadow-xl flex flex-col gap-3"
            >
                    <AddReviewCard/>
   

        </aside>
   </div>
   
    
    
    </>
}

export default Reviews;
