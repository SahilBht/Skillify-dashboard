import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import Dashboard from './components/Dashboard.jsx'
import GraphArea from './components/GraphArea.jsx'

function App() {
  return (
    <div className='w-full flex'>
      <NavigationBar />

      <main className='grow'>
        <Dashboard />
        <GraphArea />
      </main>
    </div>
  )
}

export default App
