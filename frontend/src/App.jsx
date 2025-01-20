import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles/App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
            </Routes>
          </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
