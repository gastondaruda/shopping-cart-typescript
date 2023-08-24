import { HashRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './Components/Navbar'
import Home from './Components/Home'
import Store from './Components/Store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <HashRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
