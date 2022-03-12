import React from 'react'
import RelativeHumidity from '../components/Charts/RelativeHumidity'

function Home({data}) {
  return (
    data?
    <RelativeHumidity data={data}/>
    : <p>Loading...</p>
  )
}

export default Home