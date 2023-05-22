import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Api = () => {
const [data, setData]=useState([])

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        setData(response.data)
    })
    .catch(function(error){
        console.log(error)
    })
},[])
  return (
    data.map((item, index)=>{
        return(
<div key={item.id}>
    <h2>from Api Call</h2>
      {item.id}
      {item.name}
      {item.email}
      {item.address.city}
      {item.company.bs}
      </div>
        )
    })
  )
}

export default Api
