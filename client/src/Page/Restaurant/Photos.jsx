import React, { useState } from "react";

//component
import PhotosCollection from "../../Component/restaurant/PhotosCollection";
import ImageViewer from "react-simple-image-viewer";


const Photos = () => {


    const [photos, setPhotos] = useState([
       "https://b.zmtcdn.com/data/pictures/1/903181/cd854537637de956802cc2e6d6feb385_o2_featured_v2.jpg?output-format=webp",
       "https://b.zmtcdn.com/data/pictures/chains/0/95360/7d14fcf0c054d05a4e0ffcd7905b457a_o2_featured_v2.jpg?output-format=webp",
       "https://b.zmtcdn.com/data/pictures/7/95147/ebb878bd9ead6e2e23e7ba06662b48b0_o2_featured_v2.jpg"
    ]);


    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const [CurrentImg, setCurrentImg] = useState(0); 


    const closeViewer = () => setIsMenuOpen(false);

    const openViewer = () => setIsMenuOpen(true);

    return <>

        {isMenuOpen && (
            <ImageViewer 
            src= {photos}
            currentIndex = {CurrentImg}
            disableScroll={false}
            onClose={closeViewer}
        
        />
        )}


       <div className="flex flex-wrap gap-3 my-3">
            {
              photos.map((photo) => (
                    <PhotosCollection image={photo} openViewer={openViewer}/>
             ))
             }
       </div>
    </>
}

export default Photos;
