import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const ImageRandom = () => {

const [ img, setImg ] = useState()

  const changeImg = async () =>{
    const res = await axios.get('https://dog.ceo/api/breeds/image/random')
      setImg(res.data.message)

  }

  return (
    <div>
      <button onClick={()=> changeImg()}>ImageRandom</button>
      <hr></hr>
      <img src={img}/>
    </div>
  )
}
