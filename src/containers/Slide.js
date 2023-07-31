import React from 'react'
import './Slide.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
// import { Carousel } from 'react-responsive-carousel';

const Slide = ({ placeId, photos }) => {
  return (
    <div className='slide'>
      {console.log(photos)}
      {/* {photos.map((photo)=>{
            <img src={photo} />
        })} */}
      <div style={{ display: "flex", }}>
        {/* {placeId && <button className='add btn btn-primary' style={{ width: "200px" }}>click here to add</button>} */}
      </div>
      {/* <Carousel> */}
      {/* <div className='photos'>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt='IMG not found so do something ' />
        ))}
      </div> */}
      {/* </Carousel> */}
      {/* {placeId} */}

      <div style={{ display: "flex", justifyContent: "center", }}>
        {/* {placeId && <button className='add btn btn-primary' style={{ width: "200px" }}>click here to add</button>} */}
        {photos.length > 0 &&
          <div style={{ display: "flex", overflowX: "auto", gap: "16px", width: "84vw" }}>
            {photos.map((photo, index) => (

              <div key={index} >
                <img style={{ height: "40vh" }} src={photo} alt="..." />
              </div>
            ))}
          </div>
        }
      </div>

    </div>
  )
}

export default Slide