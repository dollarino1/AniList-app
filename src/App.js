import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { createContext, useEffect, useState } from 'react';
import app from '.';
import Preloader from './utils/Preloader'
import { getAnimeData } from './api/api';
import { useDispatch } from 'react-redux';

export const Context = createContext(null)

function App() {
  const [hasLogged, setHasLogged] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setHasLogged(user)
      setPending(false)
    })
  }, [])

  return <>
    {pending 
    ? <Preloader />
    :     <div className="App">
    <div className="wrapper">
      <Context.Provider value={{
        hasLogged,
        setHasLogged,
        setPending
      }}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </Context.Provider>
    </div>
  </div>}

  </>;
}

export default App;
