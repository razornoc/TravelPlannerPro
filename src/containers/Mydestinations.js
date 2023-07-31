import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Navbar2 from './Navbar2';
// import GenItinerary from './GenItinerary';
import './Mydestinations.css'
// import GetDays from './GetDays';
import Footer2 from './Footer2';
import Footer1 from './Footer1';
import logotxt2 from './images/homelogotxt.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import travelContext from '../context/travel/TravelContext';

const Mydestinations = () => {

  useEffect(() => {
    // window.location.reload();
    // window.location.reload();
  }, [])
  const host = "https://travel-backend-rho.vercel.app/api/place/fetchallplaces";
  const context = useContext(travelContext);
  const { showAlert } = context;
  // const placeIds = ['ChIJOwg_06VPwokRYv534QaPC8g', 'ChIJh5Z3Fw4gLG0RM0dqdeIY1rE', 'ChIJu-SH28MJxkcRnwq9_851obM'];



  const [placeIds, setPlaceIds] = useState([]);

  // Fetch all Notes
  const getNotes = async () => {
    // API Call

    try {
      const response = await fetch(`${host}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        }
      });

      const json = await response.json()
      // console.log(json)
      if (json.error === "Token not valid") {
        localStorage.clear();
        setPlaceIds([]);

        return
      } else {
        setPlaceIds(json.reverse())
        console.log(placeIds)
      }
    } catch (error) {
      // console.error("Error:", error);
      showAlert(error, "danger")
    }
  }

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])


  const [placeDetails, setPlaceDetails] = useState()
  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const apiKey = 'AIzaSyBGLMyzr3R54gibvOc1VuqJ1bodvB58z7c';
        const url = 'https://maps.googleapis.com/maps/api/place/details/json';

        const promises = placeIds.map(async placeId => {
          const response = await axios.get(`${url}?place_id=${placeId.place}&key=${apiKey}`);
          const placeDetails = response.data.result;
          const photoUrl = await getFirstPhotoUrl(placeDetails.photos[0].photo_reference);
          return { ...placeDetails, photoUrl };
        });

        const placeDetailsList = await Promise.all(promises);
        setPlaceDetails(placeDetailsList);
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };

    fetchPlaceDetails();
  }, [placeIds]);

  const getFirstPhotoUrl = async (photoReference) => {
    const apiKey = 'AIzaSyBGLMyzr3R54gibvOc1VuqJ1bodvB58z7c';
    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`;
    return photoUrl;
  };
  return (
    <>

      <div className='main'
        style={{ width: "100vw", }}
      >
        <Navbar2 />
        <div className='Home'
          style={{ width: "86vw", marginLeft: "12vw" }}
        >
          <img style={{ marginTop: "20px", marginBottom: "30px" }} src={logotxt2} alt='logo' />



          {/* <h1 className="display-4">User Id: {id}</h1> */}
          <hr />
          <div className='destin'>



            <Grid container spacing={2} className="card-container">
              {placeDetails && placeDetails.map((place, index) => (
                <Grid item xs={12} sm={6} md={4} key={place.place_id}>

                  <Link to={`/destination/${place.place_id}`}>
                    <Card>
                      <div className='card'>
                        <CardContent>
                          <Typography variant="h6">{place.name}</Typography>
                          <img src={place.photoUrl} alt={place.name} style={{ height: "200px" }} />
                          {/* <GetDays placename={place.name} placeId={placeIds[index]} /> */}
                        </CardContent>
                      </div>
                    </Card>
                  </Link>

                </Grid>
              ))}
            </Grid>
          </div>


          <Footer1 />
          <Footer2 />
        </div>
      </div>

    </>
  )
}

export default Mydestinations


