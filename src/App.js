import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/components/home'
import './App.css';
import Form from "../src/components/Form";
import Login from './components/Login';
import Recoveryform from './components/RecoveryForm';
import Recoverynumber from './components/RecoveryNumber';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/form" component={Form} />
         <Route path="/login" component={Login} />
         <Route path="/recovery" component={Recoveryform} />
         <Route path="/recovery-number" component={Recoverynumber} />
       </Switch>
   </Router>
    </div>
  );
}

export default App;
