import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <Login />
    </>
  )
}

export default App
