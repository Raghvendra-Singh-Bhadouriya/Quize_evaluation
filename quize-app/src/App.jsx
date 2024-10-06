import { useState } from 'react'
import './App.css'
import SetUpQuize from './quize/quizeSetup'
import Navbar from './quize/Navbar'
import AllRoutes from './quize/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SetUpQuize/> */}
      <Navbar/>
      <AllRoutes/>
    </>
  )
}

export default App
