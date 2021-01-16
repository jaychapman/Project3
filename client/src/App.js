import React from "react";
import "./App.css";
import CovidInfo from './components/CovidInfo';
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Customer from "./pages/Customer";
import Join from "./pages/Join";
import Review from "./pages/Review";
import Covid from './pages/Covid';
import Results from './pages/Results';
import Login from './pages/Login';
import Provider from './pages/Provider';
import Admin from './pages/Admin';
import CustomerForm from './components/CustomerForm';
import ReviewResults from './components/ReviewResults';
import Chat from './components/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Chat />
          <CovidInfo />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/customer" component={Customer} />
            <Route path="/join" component={Join} />
            <Route path="/review" component={Review} />
            <Route path="/covid" component={Covid} />
            <Route path="/results" component={Results} />
            <Route path="/login" component={Login} />
            <Route path="/provider" component={Provider} />
            <Route path="/admin" component={Admin} />
            <Route path="/customerForm" component={CustomerForm} />
            <Route path="/reviews" component={ReviewResults} />
          </Switch>
      </div>
    </Router>
  );
}


export default App;
