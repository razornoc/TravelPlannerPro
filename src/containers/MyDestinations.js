import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Navbar from './Navbar';
import GenItinerary from './GenItinerary';
import './MyDestinations.css'
import GetDays from './GetDays';

function MyDestinations() {
    const placeIds = ['ChIJOwg_06VPwokRYv534QaPC8g', 'ChIJh5Z3Fw4gLG0RM0dqdeIY1rE', 'ChIJu-SH28MJxkcRnwq9_851obM'];
    const [placeDetails,setPlaceDetails]=useState()
    useEffect(() => {
        const fetchPlaceDetails = async () => {
          try {
            const apiKey = 'AIzaSyBGLMyzr3R54gibvOc1VuqJ1bodvB58z7c';
            const url = 'https://maps.googleapis.com/maps/api/place/details/json';
    
            const promises = placeIds.map(async placeId => {
              const response = await axios.get(`${url}?place_id=${placeId}&key=${apiKey}`);
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
    <div className='destin'>
        <Navbar/>
    <Grid container spacing={2} className="card-container">
    {placeDetails&&placeDetails.map((place,index) => (
      <Grid item xs={12} sm={6} md={4} key={place.place_id}>
        
        <Card>
        <div className='card'>
          <CardContent>
            <Typography variant="h6">{place.name}</Typography>
            <img src={place.photoUrl} alt={place.name} style={{}} />
            <GetDays placename={place.name} placeId={placeIds[index]}/>
          </CardContent>
          </div>
        </Card>
      </Grid>
    ))}
  </Grid>
  </div>
  )
}

export default MyDestinations