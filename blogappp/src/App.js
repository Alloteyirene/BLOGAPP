import React from 'react';
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
//import Navbar from './Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
     <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/home' component={Home}/>
     </Switch>
    
    </Router>
  );
}

export default App;
