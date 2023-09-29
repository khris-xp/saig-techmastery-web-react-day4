import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import About from './pages/About/About'
import Admin from './pages/Admin/Admin'
import CreateUser from './pages/CreateUser/CreateUser'
import Home from './pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
