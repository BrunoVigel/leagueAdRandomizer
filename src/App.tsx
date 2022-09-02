import { ChangeEvent, FormEvent, useState } from 'react'
import Kalec from './assets/kalec-800x525.png'
import {champs} from './champs'

function App() {
  const [number, setNumber] = useState(0)
  const [input, setInput] = useState('')

  function randomizer() {
    setNumber(Math.floor(Math.random() * (25 - 1 + 1) + 1))
  }

  function reset() {
    setNumber(0)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
}

  function selectChamp(event: FormEvent) {
    event.preventDefault()

    champs.map((item) => {
      if(input === item.name) {
        setNumber(item.id)
      }
    })
  }

  
  
  

  return (
    <div className="App">
      <div className='home'>
        <h1>Virgeel's ADCarry Guide</h1>
        <img src={Kalec} alt="Kalec" />
        <div>
          <button onClick={randomizer}>Aleatório</button>
          <button onClick={reset}>Resetar</button>
        </div>
        <form onSubmit={selectChamp}>
          <label htmlFor="champ-sugestion">Escolha um campeão</label>
          <input value={input} onChange={handleInputChange} name="champ-sugestion" list='champ-sugestions' id="champ-sugestion" />
          <datalist id='champ-sugestions'>
            {
              (champs).map((item) => {
                return <option key={item.id} value={item.name}/>
              })
            }
          </datalist>
          <button type="submit">Selecionar</button>
        </form>
        
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
