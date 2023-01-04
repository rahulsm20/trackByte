import React from 'react'

const Card = (props) => {
  return (
    <div className='card col-2 m-5'>
        <a href={"album/"+ props.albumName}>
        <img src={props.link} className='col-12 albumCover'/>
        <h4 className='card-caption mt-5 text-white'>{props.albumName}</h4>
        </a>
        <hr/>
        <p>{props.artName}</p>
    </div>
  )
}

export default Card