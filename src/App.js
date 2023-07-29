import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import './App.css';

function App() {
  const [loggedIn,setLoggedIn]=useState(true)
  return (
    <div className='App'>

      <Router>
      <Routes>
        <Route path='/'element={loggedIn ? [<Dashboard />] : <Login />}>
          
        </Route>
        <Route  path='/login'element={<Login />}>
          
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
