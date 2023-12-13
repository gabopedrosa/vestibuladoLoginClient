import {useState, useEffect} from 'react';
import './App.css'
// Import das páginas
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Agendamentos from './pages/Dashboard/Agendamentos/Agendamentos';

// React-Router-Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


  
// Rotas de páginas
const App = () => {

  const [token, setToken] = useState(false)

  if(token) {
    sessionStorage.setItem('token',JSON.stringify(token))
  }
  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])


  return(
    <div>
      <Router>
        <Routes>
          <Route path={'/'} element={<Login setToken={setToken}/>} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/forgotPassword'} element={<ForgotPassword />} />
          {token?<Route path={'/dashboard'} element={<Dashboard token={token} />} />:""}
          {token?<Route path={'/agendamentos'} element={<Agendamentos token={token} />} />:""}
        </Routes>
      </Router>
    </div>
  )
}

export default App;