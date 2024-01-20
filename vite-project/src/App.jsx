import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let maxWicket=10;
function CricketScoreboard() {
  const [countScore, runsetCount] = useState(0)
  const [countWicket, wicketsetCount] = useState(0)
  
  let handleWicketClick=() =>{
    if (countWicket < maxWicket) {
      wicketsetCount((countWicket)=>countWicket+1)
    }
  }


  return(
    <>
      <h1>wicket is {countWicket}</h1>
      <button onClick={handleWicketClick}>Wicket</button>
      <h2>Run is {countScore}</h2>
      <button onClick={()=>runsetCount((countScore) => countScore + 1 )}>Run 1</button>
      <button onClick={()=>runsetCount((countScore) => countScore + 4 )}>Run 4</button>
      <button onClick={()=>runsetCount((countScore) => countScore + 8 )}>Run 8</button>
      <button onClick={()=>runsetCount((countScore) => countScore + 3 )}>Run 3</button>
    </>
  )
}



function App() {
  return (
    <>
    <CricketScoreboard />
    </>
  )
}

export default App
