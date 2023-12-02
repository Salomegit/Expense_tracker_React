import "./chart.css"
import React from 'react'
import chartBar from "./chart.bar"

const chart = (props) => {
  return (
    <div className="chart">

      { props.dataPoints.map(dataPoint => <chartBar key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label}/>)}
    </div>
  )
}

export default chart
