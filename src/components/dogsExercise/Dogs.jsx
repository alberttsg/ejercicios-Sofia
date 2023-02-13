import axios from 'axios'
import { useState, useEffect } from 'react'

export const Dogs = () => {

  const [breeds, setBreeds] = useState([])

  const response = async()=>{
    const res = await axios.get('https://dog.ceo/api/breeds/list/all')
    const x = res.data.message
    console.log(x)

    const keys = Object.keys(x)
    console.log(keys)
    setBreeds(keys)
  }
  useEffect(() => {
    response()

  }, [])

  return (
    <>
      {
        breeds.map((e, index)=>(
          <div key={`breeds${index}`}>{e}</div>
        ))
      }
    </>
  )
}

