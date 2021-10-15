import react from "react";


const NutritionCard = ({image, title}) => {
    return <>
    <div className=" bg-white shadow rounded w-24 lg:w-48 mb-10 py-2 px-3 hover:shadow-lg">
        <div className="w-full  h-12 md:h-36 lg:h-36">
            <img src={image}
                alt="food photo"
                className="w-full h-full object-cover rounded-t-md"/> 
        </div>
        <div className="w-full">
            <h3 className="text-sm text-center font-light my-1 ">{title}</h3>
        </div>
    </div>
    </>
    };


  

const NutritionCarouselCard = (props) => {

    return <>
    <NutritionCard {...props}/>
   
    </>
}

export default NutritionCarouselCard;