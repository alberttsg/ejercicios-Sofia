import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Characters = () => {

  const [ characters, setCharacters ] = useState([])

  useEffect(()=>{
    const getCharacters = async () =>{

      try{
        const res = await axios.get('')
        setCharacters(res.data)

      } catch(error) {
        console.error(error)
      }

    }

  },[])


  return (
    <div>
      { characters.map((e)=> {
        return(
          <div>
            { e.name }
            <img src={ e.image }/>
          </div>
        )
      }) }
    </div>
  )
}
