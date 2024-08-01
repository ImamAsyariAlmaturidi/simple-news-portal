import { useState, useEffect } from 'react'

import Login from './components/Login'
import Navbar from './components/Navbar'
import Form from './components/Form'
function App() {
  const [page, setPage] = useState('login')
  let token = localStorage.access_token
  useEffect(() => {
      if (token) {
          setPage("home")
      } else {
          setPage("login")
      }
  }, [])

  return (
    <>
     <Navbar />
     <Login />
     <Form />
    </>
  )
}

export default App
