import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import './App.css';
import Signup from './containers/Signup';
import Alert from './containers/Alert';
import TravelState from './context/travel/TravelState';
import NotFound from './containers/NotFound';
import Navbar2 from './containers/Navbar2';
import Destination from './containers/Destination';

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className='App'>
      <TravelState>
        <Alert />

        <Router>
          <Routes>
            <Route path='/' element={loggedIn ? [<Dashboard />] : <Login />} />

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route exact path="/*" element={<NotFound />} />
            <Route exact path="/destination/:id" element={<Destination />} />
            <Route exact path="/nav" element={<Navbar2 />} />

          </Routes>
        </Router>
        
      </TravelState>
    </div>
  );
}

export default App;
