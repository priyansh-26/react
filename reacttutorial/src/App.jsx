import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />

          </Routes>
      <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App
