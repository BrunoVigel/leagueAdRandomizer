import { useState } from 'react'
import {champs} from './champs'
import Kalec from './assets/kalec-800x525.png'

function App() {
  const [number, setNumber] = useState(5)

  function randomizer() {
    setNumber(Math.floor(Math.random() * (25 - 1 + 1) + 1))
  }

  function reset() {
    setNumber(0)
  }

  return (
    <div className="App">
      <div className='home'>
        <h1>League of Legends ADCarry Randomizer</h1>
        <img src={Kalec} alt="Kalec" />
        <div>
          <button onClick={randomizer}>Iniciar</button>
          <button onClick={reset}>Resetar</button>
        </div>
      </div>
      {
        Object.entries(champs).map(([key, value]) => {
          if (number === value.id)  {
            return(
              <div className='result'>
                <img key={value.id} src={value.img} alt="" />
                <p>{value.name}</p>
                <div className='info'>
                  <div>
                    <p>Core runes</p>
                    <img src={value.rune} alt="" />
                  </div>
                  <div>
                    <p>Core items</p>
                    <img src={value.build} alt="" />
                  </div>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default App
