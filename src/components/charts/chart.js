import "./chart.css"
import React from 'react'
import ChartBar from "./chart.bar"

const Chart = (props) => {
  

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximam = Math.max(...dataPointValues);

  console.log(props.dataPoints);


  return (
    <div className="chart">

      { props.dataPoints.map(( dataPoint)  => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximam} label={dataPoint.label}/>)}
    </div>
  )
}

export default Chart
