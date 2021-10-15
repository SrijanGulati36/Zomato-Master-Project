import react, {useState} from "react";


import Slider from "react-slick";


//components
import NutritionCarouselCard from "../NutritionCarouselCard";
import { NextArrow, PrevArrow } from "../carouselArrow";



const NutritionCarousel = () => {

    const [heroBanners, setHeroBanners] = useState([

            "https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
            "https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png",
            "https://b.zmtcdn.com/web/nutrition/assets/f8da550c375c3bec2f6ba341336324561620108741.png",

    ])


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
                };

    return <>
    <Slider {...settings}>
             {heroBanners.map((image) => (
                  <NutritionCarouselCard image={image}/>
             ))
             }  
                
    </Slider></>
}

export default NutritionCarousel;