import react from "react";
import {Link, useParams} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import MenuCollection from "../../Component/restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Component/restaurant/MenuSimilarRestaurantCard";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../Component/carouselArrow";


//React Icons
import {MdContentCopy} from "react-icons/md";
import {FaDirections} from "react-icons/fa";

//rating star
import ReactStars from "react-rating-stars-component";

//ReviewCard
import ReviewCard from "../../Component/restaurant/Reviews/reviewCard";

//map component
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Overview = () => {

     const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
            }

            const ratingChanged = (newRating) => {
                console.log(newRating);
              };            


const {id} = useParams();

    return <>
    <div className="flex flex-col md:flex-row relative gap-4">
                <div className="md:w-8/12">
                   <h2 className="font-semibold text-lg md:text-xl my-4">
                            About this place
                   </h2>

                   <div className="flex justify-between items-center">
                       <h4 className="text-lg font-medium">Menu</h4>
                       <Link to={`/restaurant/${id}/menu`}>
                                    <span className="flex items-center gap-1 text-zomato-400">
                                        See all menu 
                                            <IoIosArrowForward/>
                                    </span>
                       </Link>
                    </div>


                    <div className="flex flex-wrap gap-3">
                           <MenuCollection menuTitle="Menu"
                            pages="3" 
                            image={[
                                "https://b.zmtcdn.com/data/menus/674/19707674/69a68d7bafdb03faef58a7eabaa9c3ad.jpg",
                                "https://b.zmtcdn.com/data/pictures/6/19084436/ec02653addc695c9b21d1208ffd20bb4_featured_v2.jpg?output-format=webp",
                                "https://b.zmtcdn.com/data/menus/674/19707674/69a68d7bafdb03faef58a7eabaa9c3ad.jpg"
                            ]}/>

                           


                            


                                
                    </div>
                   
                    <h4 className="text-lg font-medium">Cuisines</h4>
                    <div className="flex flex-wrap gap-2 ">
                        <span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">Street Food</span>
                        <span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">Fried chicken</span>
                        <span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">candies</span>
                    </div>
                   <div className="my-4">
                             <h4 className="text-lg font-medium my-4">Average Cost</h4>
                                 <h6>100 for one order(approx.)</h6>
                            <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                   </div>

            <div className="my-4">
                        <h4 className="text-lg font-medium my-4">Similar Restaurants</h4>
                        <Slider {...settings}>
                                <MenuSimilarRestaurantCard 
                        image="https://b.zmtcdn.com/data/pictures/6/19084436/ec02653addc695c9b21d1208ffd20bb4_featured_v2.jpg?output-format=webp"
                        title="Burger"
                                />

                        <MenuSimilarRestaurantCard 
                        image="https://b.zmtcdn.com/data/pictures/6/19084436/ec02653addc695c9b21d1208ffd20bb4_featured_v2.jpg?output-format=webp"
                        title="Burger"
                                />

                        <MenuSimilarRestaurantCard 
                        image="https://b.zmtcdn.com/data/pictures/6/19084436/ec02653addc695c9b21d1208ffd20bb4_featured_v2.jpg?output-format=webp"
                        title="Burger"
                                />

                        <MenuSimilarRestaurantCard 
                        image="https://b.zmtcdn.com/data/pictures/6/19084436/ec02653addc695c9b21d1208ffd20bb4_featured_v2.jpg?output-format=webp"
                        title="Burger"
                                />

                        <MenuSimilarRestaurantCard 
                        image="https://b.zmtcdn.com/data/pictures/6/19084436/ec02653addc695c9b21d1208ffd20bb4_featured_v2.jpg?output-format=webp"
                        title="Burger"
                                />
                        
                        </Slider>
                    </div >

                    <div className="my-4">
                            <h4 className="text-lg font-medium">Rate your delivery</h4>
                            <ReactStars
                                 count={5}
                                 onChange={ratingChanged}
                                 size={24}
                                 activeColor="#ffd700"
                            />
                    </div>

                <div className="my-4">
                    <ReviewCard/>
                    <ReviewCard/>
                </div>


            </div>
                <aside 
                        style={{height: "fit-content"}}
                        className="hidden md:w-4/12 md:flex p-3 sticky top-2 bg-white rounded-xl shadow-md shadow-xl flex flex-col gap-4">
                    
                    <div>
                            <h4 className="text-xl font-medium">
                                Call
                            </h4>

                            <h5 className="text-zomato-500 font-medium">+91 78965 76543</h5>
                    </div>

                    <div>
                         <h4 className="text-xl font-medium">
                            Direction
                        </h4>

                        <div  className="w-full h-48">
                                 
                        <MapContainer 
                            center={[12.98813402889283, 77.59405893120281]} 
                            zoom={13} 
                            scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                            <Marker position={[12.98813402889283, 77.59405893120281]}>
                                  <Popup>
                                           Mumbai Xpress
                                   </Popup>
                            </Marker>
                        </MapContainer>
                        </div>
                        <div>
                            <p>
                                15, Sigma Centre Mall, vasanth Nagar, Cunningham Road, Bangalore
                            </p>

                        <div className="flex gap-3 items-center">
                            <button className="my-3 flex flex-center gap-3 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
                               <MdContentCopy/> Copy
                            </button>

                            <button className="my-3 flex flex-center gap-3 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
                               
                                <span className="text-zomato-400">
                                    <FaDirections/>
                                </span> Directions
                            </button>
                        </div>
                    </div>



                    </div>


                </aside>


               
    </div>
    </>
}

export default Overview;