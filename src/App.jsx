import { useState } from 'react'
import './App.css'
import { Allimages } from './components/dogsExercise/Allimages'
// import { Characters } from './components/Characters'
import { Dogs } from './components/dogsExercise/Dogs'
import { ImageRandom } from './components/dogsExercise/ImageRandom'

function App() {

  return (
    <div className="App">
      {/* <Characters/> */}
      {/* <Dogs/> */}
      {/* <ImageRandom/> */}
      <Allimages/>
    </div>
  )
}

export default App
