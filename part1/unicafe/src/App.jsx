import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
  setCounter(counter + 1)}
  const decreaseByOne = () => setCounter(counter - 1)
  const increaseByFive = () => setCounter(counter + 5)
  const decreaseByFive = () => setCounter(counter - 5)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='+ 1'/>
      <Button onClick={decreaseByOne} text='- 1'/>
      <Button onClick={increaseByFive} text='+ 5'/>
      <Button onClick={decreaseByFive} text='- 5'/>
      <Button onClick={setToZero} text='set to 0'/>
    </div>
  )
}

export default App
