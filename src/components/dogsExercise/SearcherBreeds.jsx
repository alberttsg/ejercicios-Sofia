import axios from 'axios'
import { useState, useEffect } from 'react'
import Select from 'react-select'

export const SearcherBreeds = () => {

  const [ breed, setBreed ] = useState('')
  const [ breedsSelect, setBreedsSelect ] = useState([])

  useEffect(()=>{

    const response = async()=>{
      const res = await axios.get('https://dog.ceo/api/breeds/list/all')
      const x = res.data.message
      const keys = Object.keys(x)
      const options = keys.map((e)=>(
         { value: `${e}`, label: `${e}`}
      ))
      setBreedsSelect(options)
    }
    response()

  }, [])

  const imgRandomSearcher = async (e) =>{
    const res = await axios.get(`https://dog.ceo/api/breed/${e.value}/images/random`)
    setBreed(res.data.message)
  }

  return (
    <div>
      <p>SearcherBreeds</p>
        <Select onChange={(e)=>imgRandomSearcher(e)} options={breedsSelect} />
      <img src={breed}/>
    </div>
  )
}
