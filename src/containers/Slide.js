import React from 'react'
import './Slide.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  

const Slide=({placeId,photos})=> {
  return (
    <div className='slide'>
        {console.log(photos)}
        {/* {photos.map((photo)=>{
            <img src={photo} />
        })} */}
        {placeId&&<button className='add'>click here to add</button>}
        {/* <Carousel> */}
        <div className='photos'>
        {photos.map((photo, index) => (
      < img key={index} src={photo} alt={`Photo ${index}`} />
        ))}
        </div>
        {/* </Carousel> */}
        {placeId}
    </div>
  )
}

export default Slide