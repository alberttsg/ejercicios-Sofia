import axios from 'axios'
import { useState, useEffect } from 'react'

export const Dogs = () => {

  const [breeds, setBreeds] = useState([])

  const response = async()=>{
    const res = await axios.get('https://dog.ceo/api/breeds/list/all')
    const x = res.data.message

    const keys = Object.keys(x)
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

