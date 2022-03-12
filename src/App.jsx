import React from 'react'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'

function App() {

  const [data,setData] = React.useState(null)

  const getWeather = async(latitude, longitude) =>{
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m`)
    console.log(response.data)
    setData(response.data)
  }

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log('Latitude: ',lat, 'Longitude: ',long)
      getWeather(long,lat)
    })
  },[])

  return (
    <Home data={data}/>
  )
}

export default App
