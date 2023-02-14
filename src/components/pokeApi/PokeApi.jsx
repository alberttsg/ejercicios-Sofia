import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const PokeApi = () => {

  const [ namePokemon, setnamePokemon ] = useState('')
  const [ imgPokemon, setImgPokemon ] = useState('')

    const onePokemon = async () => {
      const id = Math.floor(Math.random() * (152 - 1)) + 1
      console.log(id)
      const randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      console.log(randomPokemon.data.species.name)
      console.log(randomPokemon.data.sprites.front_shiny)

      setnamePokemon(randomPokemon.data.species.name)
      setImgPokemon(randomPokemon.data.sprites.front_shiny)
    }


  return (
    <div>
      <p>PokeApi</p>
      <button onClick={()=>onePokemon()} >obtener Pokemon</button>
      <br></br><br></br><br></br>
      <div>
        { namePokemon }
      </div>
      <img src={ imgPokemon }/>
    </div>
  )
}
