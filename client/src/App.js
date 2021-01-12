import React from "react";
import "./App.css";
import CovidInfo from './components/CovidInfo';
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import CustomerForm from "./components/CustomerForm";
import ProviderForm from "./components/ProviderForm";
import ReviewForm from "./components/ReviewForm";
import Covid from './components/Covid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <CovidInfo />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/customer" component={CustomerForm} />
            <Route path="/provider" component={ProviderForm} />
            <Route path="/review" component={ReviewForm} />
            <Route path="/covid" component={Covid} />
          </Switch>
      </div>
    </Router>
  );
}


export default App;
