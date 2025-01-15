import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles/App.css'
import './styles/App-light.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
