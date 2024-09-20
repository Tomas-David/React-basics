import './App.css'
import Sequence from "./components/Sequence"

const App = () => {

  const done = () => console.log("DONE")

  return (
    <>
      <h1>Components</h1>
      <div>
        <Sequence first={0} step={2}  count={10} isDone={done}/>
      </div>   
    </>
  )
}

export default App
