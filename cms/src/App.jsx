import { useState, useEffect } from 'react'

import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import Form from './components/Form'
import AddFormUser from './components/AddUserForm'
import Dashboard from './pages/Dashboard'
import EditForm from './components/EditForm'
function App() {
  return (
    <>
     <Navbar />
     <Form />
     <LoginPage />
     <EditForm />
     <AddFormUser />
     <Dashboard />
    </>
  )
}

export default App
