import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Home from './Pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutPage/AboutMe';

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element= {<AboutMe />} />
    </Routes>
  )
}

export default App
