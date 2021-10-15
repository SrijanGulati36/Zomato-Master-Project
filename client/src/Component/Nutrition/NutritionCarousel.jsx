import react from "react";

import NutritionCarouselCard2 from "./NutritionCarouselCard2"

//components
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../carouselArrow";

const NutritionCarousel = () => {

    const categories = [
        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
        title:"Protein and Fitness"
        },

        {image: "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
        title:"Sleep and Stress"
        },

        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
        title:"Omegas and C0Q10"
        },

        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
        title:"Digestion and Weight Loss"
        },

        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
        title:"Beauty and Skin Care"
        },

        {
        image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp",
        title:"Immunity and Bones"
        },
    ];


    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    }


    return <>

        <div className="lg:hidden flex flex-wrap justify-between gap-3 md:gap-2 lg:gap-0">

        {
        categories.map((food) => (
        <NutritionCarouselCard2 {...food}/> 
            ) 
            )};
        </div>  



      <div className="hidden lg:block">
     <Slider {...settings}>
     {
            categories.map((food) => (
                <NutritionCarouselCard2 {...food}/>
            ) 
         )}
     </Slider>
     </div>
    </>
}

export default NutritionCarousel;