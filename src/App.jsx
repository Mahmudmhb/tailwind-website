import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headbar from './components/Headbar/Headbar'
import Prices from './components/Headbar/Prices/Prices'
import Recharts from './components/Recharts/Recharts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Headbar></Headbar>
    <h2 className='text-7xl text-center text-teal-500'>hello tailwind</h2>
    <Prices></Prices>
    <Recharts></Recharts>

    </>
  )
}

export default App
