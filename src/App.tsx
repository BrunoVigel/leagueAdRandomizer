import { useState } from 'react'
import {champs} from './champs'
import Kalec from './assets/kalec-800x525.png'

function App() {
  const [number, setNumber] = useState(0)

  function randomizer() {
    setNumber(Math.floor(Math.random() * (25 - 1 + 1) + 1))
  }

  function reset() {
    setNumber(0)
  }

  champs.map((item) => {
    if (number === item.id) {
      console.log(item)
    }
  })

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
        (champs).map((item) => {
          if (number === item.id)  {
            return(
              <div key={item.id} className='result'>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <div className='info'>
                  <div>
                    <p>Core runes</p>
                    <img src={item.rune} alt="" />
                  </div>
                  <div>
                    <p>Core items</p>
                    <img src={item.build} alt="" />
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
