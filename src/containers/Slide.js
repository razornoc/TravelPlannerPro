import React from 'react'
import './Slide.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';

const Slide = ({ placeId, photos }) => {
  return (
    <div className='slide'>
      {/* {console.log(photos)} */}
      {/* {photos.map((photo)=>{
            <img src={photo} />
        })} */}
        {/* {console.log(placeId, "destination")}; */}
      <div style={{ display: "flex", }}>
         {placeId && localStorage.getItem("token") && <Link to={`/destination/${placeId}`} className="btn btn-outline-primary rounded-pill  mx-3 my-2" style={{ width: "200px" }}>Generate iternery</Link>}
         {placeId && !localStorage.getItem("token") && <Link className="btn btn-outline-primary rounded-pill  mx-3 my-2" to="/login" >Login to generate iternery</Link>}
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