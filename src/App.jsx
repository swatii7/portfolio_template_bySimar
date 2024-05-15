import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Home from './Pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutPage/AboutMe';
import Service from './Pages/ServicesPage/Service';
import Resume from './Pages/ResumePage/Resume';
import Portfolio from './Pages/PortfolioPage/Portfolio';
import ContactUs from './Pages/ContactPage/ContactUs';
import ProjectsDetails from './Pages/PortfolioPage/ProjectsDetails';

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element= {<AboutMe />} />
      <Route path='/services' element= {<Service />} />
      <Route path='/resume' element= {<Resume />} />
      <Route path='/portfolio' element= {<Portfolio />} />
      <Route path='/contactUs' element= {<ContactUs />} />
      <Route path='/project_details/:type' element= {<ProjectsDetails />} />
    </Routes>
  )
}

export default App
