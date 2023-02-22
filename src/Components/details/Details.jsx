import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Details = () => {
  const dataId= useParams().id
  console.log(dataId)
  const {data} = useSelector(state=>state.fetchingData)
  const dataa= data.find(el=> el.food.foodId===dataId)
  console.log(dataa)
  return (
    <center >
      <br/><br/><br/>
      <h2>{dataa.food.label}</h2>
      
      <img src={dataa.food.image ? dataa.food.image : "/default.jpg"} alt="Avatar" className="image imgvid imgbord"  />
      </center>
  )
}

export default Details