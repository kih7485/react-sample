import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import SearchForm from './components/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="검색" />
      <div className='container'>
        <SearchForm/>
      </div>
    </>
  )
}

export default App
