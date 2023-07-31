import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import CityPage from './CityPage';
import axios from 'axios';
import Footer2 from './Footer2';
import Footer1 from './Footer1';
function Home() {
  const [search, setSearch] = useState()
  const [options, setOptions] = useState([])
  const [place, setPlace] = useState()
  const [found, setFound] = useState(true)
  const [found1, setFound1] = useState(false)
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
  const handlebool=(data)=>{
    setFound(false)
  }
  return (
    <div className='Home'>
      {found&&<h1>Find your desired city</h1>}
      {found&&<Autocomplete
        disablePortal
        id='combo-box-demo'
        options={options}
        sx={{ width: 500 }}
        value={search}
        renderInput={(params) => (
          <TextField
            style={{ width: 500 }}
            {...params}
            label='Enter the City you would like to visit'
            onChange={handleInputChange}
          />
        )}
        onSelect={handleSelect}
        freeSolo
      />}
      <CityPage placeId={place} name={search} sendDataBack={handlebool}/>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home