import './style/App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>hello</h1>} />
        <Route path="add-task" element={<h1>add task</h1>} />
      </Routes>
    </>
  )
}

export default App