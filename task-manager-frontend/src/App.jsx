import { Route, Routes } from 'react-router-dom';
import './App.css'
import Protected from './pages/Protected';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';

function App() {  

  return (
    <section className='layout'>
      <nav className='headerContainer'>
        <Header />
      </nav>
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/protected' element={<Protected />} />      
        </Routes>
      </div>
      <div className="sideContentContainer">
        <p>Sidecontent</p>
      </div>
      <footer className='footerContainer'>
        <p>footer</p>
      </footer>        
    </section>
  )
}

export default App
