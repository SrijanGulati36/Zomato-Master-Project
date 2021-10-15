import React, {useState} from "react";
import ReviewModal from "./ReviewModal";




const  AddReviewCard= () => {


    const [isOpen, setIsOpen] = useState(false)


    const handleRating = (value) => console.log(value);


    const openModal = () => setIsOpen(true)
    return <>

    <div>

    <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>    
    <h3 className="text-xl font-medium">Rate your experiance</h3>
           
           <div className="flex items-center gap-3 ">
             <div className="flex items-center gap-1 ">
                  
                   <input 
                           type="radio" 
                           name="review"
                           id="dining">
                   </input>
   
                   <label 
                       htmlFor="dining">Dining
                  </label>
   
              </div>
   
              <div className="flex items-center gap-1">
                  
   
                   <input 
                           type="radio" 
                           name="review"
                           id="delivery">
                   </input>
   
                   <label 
                       htmlFor="delivery">Delivery
                  </label>
              </div>
   
             </div>
               
              
   
              <button onClick={openModal} className="text-zomato-400">
                  Write a Review
              </button>
    </div>
    </>

}

export default AddReviewCard;