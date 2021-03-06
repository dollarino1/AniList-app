import './css/App.css';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { createContext, useEffect, useState } from 'react';
import app from '.';
import Preloader from './utils/Preloader'
import ScrollToTop from './utils/ScrollToTop';

export const Context = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user)
      setPending(false)
    })
  }, [])

  return <>
    {pending 
    ? <Preloader />
    :     <div className="App">
    <div className="wrapper">
      <Context.Provider value={{
        user: user,
        setUser: setUser,
        setPending
      }}>
        <BrowserRouter>
          <ScrollToTop />
          <AppRouter />
        </BrowserRouter>
      </Context.Provider>
    </div>
  </div>}

  </>;
}

export default App;
