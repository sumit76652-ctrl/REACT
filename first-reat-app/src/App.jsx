import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header name="sumit"/>
  
    <h1>hello sumit i am from </h1>
    </>
  )
}

export default App
