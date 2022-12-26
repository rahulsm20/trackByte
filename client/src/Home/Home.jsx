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
  const [loaded,setLoaded]=useState(false)
  const [loaded1,setLoaded1]=useState(false)
  const [loading, setLoading] = useState(true);
  const [loading1,setLoading1]=useState(true)
  const [favArtist,setFavArtist]=useState('');
  const [userData,setUserData]=useState({})
  const [pieChartData,setPieChartData]=useState({})
  const loadGif="https://acegif.com/wp-content/uploads/loading-11.gif"
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
            backgroundColor: 'rgba(0, 0, 54.5, 1)'
          }
        ]
      });
    },)
    .then((res)=>setLoaded(true))
    .catch((err)=>console.log(err)
    )
    .finally(() => {
      setLoading(false);
    });
},[])
  const option = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'right',
      },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
        scales:{
          yAxes:{
            ticks:{
              color:'white'
            },
          }
        }
      },
    };

  //To get Pie Chart Data
  useEffect(()=>{
    setLoading1(true);
    axios.get("http://localhost:3000/getpiedata")
      .then((res)=>{for (const Obj of res.data) {
        pieLabelData.push(Obj.albumName);
        pieData.push(Obj.seconds);
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
    .then((res)=>setLoaded1(true))
    .catch((err)=>console.log(err)
    )
    .finally(() => {
      setLoading1(false);
    });
},[])
  // console.log(pieChartData.datasets[0].data[0])
  useEffect(()=>{
    axios.get("http://localhost:3000/getFavArt")
    .then((res)=>setFavArtist(res.data[0]))
    .catch((err)=>console.log(err))
  },[])

  return (
    <div className='p-5'>
      <Navbar/>
      <h1 className='mt-5 '> Analytics</h1>
      <hr/>
      <div className=' p-4 mt-5 text-white d-flex justify-content-center align-items-center flex-row '>
      <div className='p-4 col-6 chart'>
      <h2 className='p-5'>
        Your favorite genres
        </h2> 
        {
          loading ? <img src={loadGif}/> : 
          <BarChart data={userData} options={option}/>
        } 
        </div>
        <div className='mx-3 col-6 p-5'>
          <h2>
          Your favorite genre is {loaded ? <p className='text-warning'>{userData.labels[0]}</p>:<></>}
          </h2>
          <h2>
            You listened to {loaded ? userData.datasets[0].data[0]:<></>} seconds of it!
          </h2>
        </div>
      </div>
      <div className='p-4 mt-5 text-white d-flex justify-content-center align-items-center flex-row'>
        <div className='mx-3 col-6'>
          <h2>Your favorite album is {loaded1 ? <p className='text-danger'>{pieChartData.labels[0]}</p>:<></>}</h2>
          <h2>You listened to {loaded1 ? pieChartData.datasets[0].data[0]: <></>} seconds of it!</h2>
        </div>
        <div className='mx-4 p-5  justify-content-center align-items-center col-5 chart'>
          <h2 className='mt-2'>
            Your favorite albums
          </h2>
{
          loading1 ? <img src={loadGif} className='col-5'/> :
<PieChart piedata={pieChartData}/>
        } 
        </div>
        </div>
      <div className='mt-5  p-5 justify-content-center align-items-center'>
        <h1>Artist</h1>
        <hr/>
        <div className='d-flex flex-row align-items-center justify-content-center'>
        <img src={favArtist.link} className='mt-5 col-5 albumCover'/>
        <div className='mx-5  mt-5 d-flex flex-column p-5'>
        <h2>Your favorite artist is 
          <p className='text-primary'>
            {favArtist.artName}
            </p>
            </h2>
        <h2 className='m-5'>You listened to {loaded ? favArtist.seconds : <></>} seconds of their music!</h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
