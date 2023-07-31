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
      {placeId && <button className='add'>click here to add</button>}
      {/* <Carousel> */}
      {/* <div className='photos'>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt='IMG not found so do something ' />
        ))}
      </div> */}
      {/* </Carousel> */}
      {/* {placeId} */}

      {/* bootstrap corousel */}
      {photos.length > 0 &&

        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div style={{ width: "50vw", height: "60vh" }} class="carousel-inner">

            {/* <div class="carousel-item active">
              <img src={photos[0]} class="d-block w-100" alt="..." />
            </div> */}

            {photos && photos.map((photo, index) => (

              <div key={index} class="carousel-item active">
                <img src={photo} class="d-block w-100" alt="..." />
              </div>

            ))}

            {/* <div class="carousel-item active">
              <img src="https://cdn.britannica.com/26/177326-050-162ABC79/temple-Naam-Yog-Sadhna-Mandir-Jaigurudev-Mathura.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2023/03/Holi-in-Vrindavan-Mathura-Barsana.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://www.holidify.com/images/bgImages/MATHURA.jpg" class="d-block w-100" alt="..." />
            </div> */}


          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      }
    </div>
  )
}

export default Slide