import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { createContext, useState } from 'react';

export const Context = createContext(null)

function App() {
  const [hasLogged, setHasLogged] = useState(false)
  return (
    <div className="App">
      <div className="wrapper">
        <Context.Provider value={{
          hasLogged,
          setHasLogged
        }}>
          <BrowserRouter>
            <AppRouter hasLogged={hasLogged} setHasLogged={setHasLogged}/>
          </BrowserRouter>
        </Context.Provider>

      </div>
    </div>
  );
}

export default App;
