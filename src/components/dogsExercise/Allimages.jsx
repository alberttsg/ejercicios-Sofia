import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Allimages = () => {

const [ img, setImg ] = useState([])

const allimgs = async () =>{
  const res = await axios.get('https://dog.ceo/api/breed/hound/images')
  setImg(res.data.message)

}

useEffect(()=>{
  allimgs()
}, [])


  return (
    <div>
      {
        img.map((e, index)=>(
          <img src={e} key={`allimgs${index}`}/>
        ))
      }
    </div>
  )
}
