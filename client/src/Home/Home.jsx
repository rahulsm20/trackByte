import React, { useState,useEffect} from 'react'
import Navbar from './Navbar'
import BarChart from './BarChart'
import axios from 'axios'
import PieChart from './PieChart'
const Home = () => {
  let labelData=[];
  let barData=[];
  let pieLabelData=[];
  let pieData=[];
  const [loading, setLoading] = useState(true);
  const [loading1,setLoading1]=useState(true)
  const [userData,setUserData]=useState({})
  const [pieChartData,setPieChartData]=useState({})
  
  //To get Bar Chart Data
  useEffect(()=>{
    setLoading(true);
    axios.get("http://localhost:3000/getbardata")
      .then((res)=>{for (const Obj of res.data) {
        labelData.push(Obj.genre);
        barData.push(Obj.seconds);
      }
      setUserData({
        labels:labelData,
        datasets:[
          {
            label:"Seconds",
            data:barData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          }
        ]
      });
    },)
    .catch((err)=>console.log(err)
    )
    .finally(() => {
      setLoading(false);
    });
},[])
  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  //To get Pie Chart Data
  useEffect(()=>{
    setLoading1(true);
    axios.get("http://localhost:3000/getpiedata")
      .then((res)=>{for (const Obj of res.data) {
        pieLabelData.push(Obj.albumName);
        pieData.push(Obj.seconds/2);
      }
      setPieChartData({
        labels:pieLabelData,
        datasets:[
          {
            label:"Seconds",
            data:pieData,
            backgroundColor: [
              'rgba(	167, 199, 231)',
              'rgba(43, 101, 236)',
              'rgba( 255, 165, 0)',
              'rgb(128, 67, 50)',
              'rgba(241, 211, 179)'
            ]
          }
        ]
      });
    },)
    .catch((err)=>console.log(err)
    )
    .finally(() => {
      setLoading1(false);
    });
},[])
  // console.log(pieChartData)
  return (
    <div>
      <Navbar/>
      <h1 className='mt-5'> Your Analytics</h1>
      <div className=' p-4 mt-5 text-white d-flex'>
      <div className='p-4 chart bg-black'>
      <h5 className='p-5 mx-auto'>
        Your favorite genres
        </h5> 
        {
          loading ? <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"/> : 
          <BarChart data={userData} options={option}/>
        } 
        </div>
        <div className='bg-black mx-5 p-3 chart'>
          <h5>
            Your favorite albums
          </h5>
{
          loading1 ? <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"/> : 
<PieChart piedata={pieChartData}/>
        } 
        </div>
      </div>
    </div>
  )
}

export default Home
