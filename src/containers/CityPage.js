import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slide from './Slide';
const CityPage = ({ placeId }) => {
  const [map, setMap] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!map) {
      const script = document.createElement('script');
      const apikey = "AIzaSyBGLMyzr3R54gibvOc1VuqJ1bodvB58z7c"
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apikey}&libraries=places`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    }
    else if (placeId && map) {
      fetchPlaceDetails(placeId)
    }
    // eslint-disable-next-line
  }, [map, placeId]);

  const initMap = () => {
    const mapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 12,
    };

    const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    setMap(newMap);
  };


  const fetchPlaceDetails = async (placeId) => {
    try {
      const apikey = "AIzaSyBGLMyzr3R54gibvOc1VuqJ1bodvB58z7c"
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?key=${apikey}&place_id=${placeId}`
      );

      if (response.data.status === 'OK') {
        const place = response.data.result;
        const picData = response.data.result.photos
        if (picData) {
          const links = picData.map(photo => {
            const ref = photo.photo_reference
            return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${apikey}`;
          })
          setPhotos(links)
        }
        const location = place.geometry.location;

        map.setCenter(location);

        new window.google.maps.Marker({
          map,
          position: location,
          title: place.name,
        });
      } else {
        console.error('Error fetching place details:', response.data.status);
      }
    } catch (error) {
      console.error('Error fetching place details:', error.message);
    }
  };

  return (
    <div>
      {console.log({ placeId })}
      <Slide placeId={placeId} photos={photos} />
      {/* {console.log(photos)} */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "40px" }}>
        {placeId &&
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div id="map"
              style={{ height: '400px', width: '84vw' }}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default CityPage