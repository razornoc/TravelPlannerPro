import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import CityPage from './CityPage';
import axios from 'axios';
import Footer2 from './Footer2';
import Footer1 from './Footer1';
import logotxt2 from './images/homelogotxt.png'


function Home() {
  const [search, setSearch] = useState()
  const [options, setOptions] = useState([])
  const [place, setPlace] = useState()
  const [found, setFound] = useState(false)
  // const [found1, setFound1] = useState(false)
  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }
  useEffect(() => {
    const fetchOptions = async () => {

      try {
        const apikey = "AIzaSyBGLMyzr3R54gibvOc1VuqJ1bodvB58z7c"
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search}&key=${apikey}`)
        if (response.data?.predictions) {
          const options = response.data.predictions.map((place) => place.description);
          setOptions(options);
          console.log(response.data)
          setPlace(response.data.predictions[0].place_id)
        }
      }
      catch (error) {
        console.log('error:', error)
      }
    }
    if (search) {
      fetchOptions()
    }

  }, [search])
  const handleSelect = (event) => {
    setSearch(event.target.value)
    setFound(true)
  }
  return (
    <div className='Home'
    style={{width: "86vw", marginLeft: "12vw" }}
    >
      <img style={{marginTop: "20px", marginBottom: "30px"}} src={logotxt2} alt='logo' />



      {/* <h1 style={{marginTop: "20px", marginBottom: "30px"}}>Find your desired city</h1> */}
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={options}
        sx={{ width: "100wh" }}
        value={search}
        renderInput={(params) => (
          <TextField
            style={{ width: "50vw", borderRadius: "50%", marginBottom: "72px" }}
            {...params}
            label='Enter the City you would like to visit'
            onChange={handleInputChange}
          />
        )}
        onSelect={handleSelect}
        freeSolo
      />
      <CityPage placeId={place} />
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home