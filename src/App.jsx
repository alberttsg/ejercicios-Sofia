import { useState } from 'react'
import './App.css'
import { Allimages } from './components/dogsExercise/Allimages'
// import { Characters } from './components/Characters'
import { Dogs } from './components/dogsExercise/Dogs'
import { ImageRandom } from './components/dogsExercise/ImageRandom'
import { SearcherBreeds } from './components/dogsExercise/SearcherBreeds'
import { ImgGenerator } from './components/imgIA/imgGenerator'
import { PokeApi } from './components/pokeApi/PokeApi'

function App() {

  return (
    <div className="App">
      {/* <Characters/> */}
      {/* <Dogs/> */}
      {/* <ImageRandom/> */}
      {/* <Allimages/> */}
      {/* <SearcherBreeds/> */}
      {/* <PokeApi/> */}
      <ImgGenerator/>
    </div>
  )
}

export default App
