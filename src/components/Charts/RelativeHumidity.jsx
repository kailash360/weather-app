import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function RelativeHumidity({data}) {

    const newData = data.hourly.time.map((item,index) => ({
        Time: item.split('T')[1],
        'Relative Humidity': data.hourly.relativehumidity_2m[index]
    }))

  return (
    <LineChart width={1000} height={350} data={newData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="Time" height={50} allowDataOverflow/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Relative Humidity" stroke="#8884d8" />
    </LineChart>
  )
}

export default RelativeHumidity