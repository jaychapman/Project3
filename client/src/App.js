import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./components/FontawesomeIcons";
import Landing from "./components/Landing";
import './Custom.css';
import Provider from './pages/Provider';
import Customer from './pages/Customer';
import Join from './pages/Join';
import Admin from './pages/Admin';
import Results from './pages/Results';
import Review from './pages/Review';
import Chat from './components/Chat';




function App() {
  return (
    <div className="App">
    <Router>
   
      
        <Route exact path="/" component={Landing} />
        
        
        
    
       
        <Switch>
        
      <Route path="/provider" component={Provider} />
      <Route path="/customer" component={Customer} />
      <Route path="/join" component={Join} />
      <Route path="/admin" component={Admin} />
      <Route path="/results" component={Results} />
      <Route path="/review" component={Review} />
    
      
      
      </Switch>
      
    </Router>

    <Chat />
    
    </div>

    
  );
}

export default App;
