import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Button from '@mui/material/Button'
import './GetItinerary.css'

function GenItinerary({ placename, placeId }) {
  const [days, setDays] = useState(3)
  const [nearbytourist, setNearbyTourist] = useState()
  const [itinerary, setItinerary] = useState('')
  const [restaurants, setRestaurants] = useState()
  const [lat, setLat] = useState()
  const [long, setLong] = useState()
  const [daySelected, setDayselected] = useState(3)
  const apikey = 'AIzaSyBGLMyzr3R54gibvOc1VuqJ1bodvB58z7c'

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apikey}`

        const response = await fetch(url)
        const data = await response.json()

        if (data.status === 'OK') {
          setLat(data.result.geometry.location.lat)
          setLong(data.result.geometry.location.lng)
          // console.log(data.result.geometry.location.lat)
          // console.log(data.result.geometry.location.lng)
          console.log('lattitude')
          console.log(lat)
          console.log(long)
        } else {
          console.error('Error fetching place details:', data.status)
        }
      } catch (error) {
        console.error('Error fetching place details:', error)
      }
    }

    fetchPlaceDetails()
    const fetchTouristPlaces = async () => {
      try {
        const type = 'tourist_attraction'
        const radius = 10000

        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=${type}&key=${apikey}`

        const response = await fetch(url)
        const data = await response.json()

        if (data.status === 'OK') {
          console.log('ok')
          setNearbyTourist(data.results)
        } else {
          console.error('Error fetching nearby tourist places:', data.status)
        }
      } catch (error) {
        console.error('Error fetching nearby tourist places:', error)
      }
    }
    fetchTouristPlaces()
    console.log(nearbytourist)
  }, [lat])
  useEffect(() => {
    const apikey = 'AIzaSyBGLMyzr3R54gibvOc1VuqJ1bodvB58z7c'
    const fetchRestaurants = async () => {
      try {
        const radius = 1000
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurants&key=${apikey}`

        const response = await fetch(url)
        const data = await response.json()

        if (data.status === 'OK') {
          console.log('ok')
          setRestaurants(data.results)
        } else {
          console.error('Error fetching nearby restos:', data.status)
        }
      } catch (error) {
        console.error('Error fetching nearby restos:', error)
      }
    }
    fetchRestaurants()
  }, [lat])
  const attractionsByDay = nearbytourist
    ? nearbytourist.reduce((acc, attraction, index) => {
        const dayNumber = Math.floor(index / 2) + 1
        if (!acc[dayNumber]) {
          acc[dayNumber] = []
        }
        acc[dayNumber].push(attraction)
        return acc
      }, {})
    : {}
  const handleChange = (event) => {
    setDayselected(event.target.value)
  }
  return (
    <div>
      <h1>{placename}</h1>
      <div className='buttons'>
        <div className='changeDays'>
          <Box sx={{ minWidth: 120, maxWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Days</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={daySelected}
                label='Age'
                onChange={handleChange}
              >
                <MenuItem value={1}>{1}</MenuItem>
                <MenuItem value={2}>{2}</MenuItem>
                <MenuItem value={3}>{3}</MenuItem>
                <MenuItem value={4}>{4}</MenuItem>
                <MenuItem value={5}>{5}</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Button variant='contained' className='choose'>
          Add destination
        </Button>
      </div>

      {/* <p>{itinerary}</p> */}
      <div className='itis'>
        <div className='tour'>
          <h2>nearby tourist attractions</h2>
          {Object.keys(attractionsByDay).map(
            (dayNumber, index) =>
              index < daySelected && (
                <div key={dayNumber}>
                  <h3>Day {dayNumber}</h3>
                  <ul style={{ listStyleType: 'none' }}>
                    {attractionsByDay[dayNumber].map((attraction) => (
                      <li key={attraction.name}>{attraction.name}</li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
        <div className='restos'>
          <h2>nearby restaurants</h2>
          {restaurants && restaurants.map((head) => <div>{head.name}</div>)}
        </div>
      </div>
    </div>
  )
}

export default GenItinerary
