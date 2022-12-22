import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS,BarElement, CategoryScale,LinearScale, Title, Tooltip, Legend} from 'chart.js'
ChartJS.register(
    CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
const BarChart = (props) => {
  return (
    <div>
    <Bar data={props.data}/> 
    </div>
  )
}

export default BarChart