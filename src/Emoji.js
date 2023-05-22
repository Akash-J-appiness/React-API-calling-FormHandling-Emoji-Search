import React, { useState, useEffect } from 'react'
import EmojiData from './Emoji.json'


const Emoji = () => {
    const [search, setSearch]= useState('')
    const [data, setData]=useState([])

    useEffect(()=>{
        const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
        setData(newData)
    },[search])
  return (
    <div>
      <h1>EMOJI SEARCH</h1>
      <input type='text' placeholder='Search for your Emoji...' name='search' value={search} 
      className='impouts' onChange={(e)=>setSearch(e.target.value)}/>
      {data.map(emoji =>
        <div key={emoji.title} className='cards' onClick={()=>{navigator.clipboard.writeText(emoji.symbol); alert("Copied Successfully")}}>{emoji.symbol}{emoji.title} </div>)}
    </div>
  )
}

export default Emoji