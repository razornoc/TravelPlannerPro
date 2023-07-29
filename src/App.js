import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import './App.css';
import Signup from './containers/Signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className='App'>

      <Router>
        <Routes>
          <Route path='/' element={loggedIn ? [<Dashboard />] : <Login />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
