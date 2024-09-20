import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Input from './components/Input'

const App = () => {

  const [showValue, setShowValues] = useState<string>("")

  const ActionHandler = (value: string) => {
    setShowValues(value)
  }
  return (
    <>
      <Input initial={"Zadejte text"} changeAction={ActionHandler} />
      <Display show={showValue}/>
    </>
  )
}

export default App
