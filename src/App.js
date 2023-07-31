import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import Navbar from './containers/Navbar';
import MyDestinations from './containers/MyDestinations';
import './App.css';
import Signup from './containers/Signup';
import Alert from './containers/Alert';
import TravelState from './context/travel/TravelState';
import NotFound from './containers/NotFound';

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className='App'>
      <TravelState>
        <Alert />

        <Router>
          <Routes>
            <Route path='/' element={loggedIn ? [<Dashboard />] : <Login />} />
            <Route path='/destinations' element={<MyDestinations/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route exact path="/*" element={<NotFound />} />

          </Routes>
        </Router>
        
      </TravelState>
    </div>
  );
}

export default App;
