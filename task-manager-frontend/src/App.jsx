import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSession, clearSession } from './state/userSlice';
import './App.css'
import Protected from './pages/Protected';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedSession = localStorage.getItem('supabaseSession');
    if (savedSession) {
      try {
        const { session, user } = JSON.parse(savedSession);
        if (session && user) {
          dispatch(setSession({ session, user }));
          
        } else {            
          localStorage.removeItem('supabaseSession');
          dispatch(clearSession());
        }
      } catch (error) {
        console.error("Error parsing saved session:", error);
        localStorage.removeItem('supabaseSession');
        dispatch(clearSession());
      }
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
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
    </BrowserRouter>        
  )
}

export default App
