import { ReactNode, useState } from 'react'
import './App.css'
import InputNumber from './components/inputNumber'
import DisplayNumber from './components/DisplayNumber'

function App() {

  const [count, setCount] = useState<number>(0)

  const OddNumbers: Array<ReactNode> = []

  if(count % 2 === 0){
    OddNumbers.push(<p>Sudé číslo</p>)
  }


  return (
    <>
      <InputNumber label='Číslo' defaultValue={count} onChange={setCount}/>
      
      {count < 100 ? <DisplayNumber num={count} /> : <p>Moc velké číslo</p>}
      {count >= 100 && <DisplayNumber num={count} />}
      {OddNumbers}
    </>
  )
}

export default App
