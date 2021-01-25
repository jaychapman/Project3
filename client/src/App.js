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
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ProverThankYou from "./pages/ProviderThankYou";
import Reviews from "./pages/Reviews";
import ZipCodeDistance from './components/zipcodes/ZipCodeDistance';
import zipCodeRadius from "./components/zipcodes/ZipCodeRadius";
import CustomerSearchResults from "./components/CustomerSearchResults";
import UpdateProvider from './pages/UpdateProvider';
import ProviderSuccess from "./pages/ProviderSuccess";





function App() {
  return (
    <Router>
    <div className="App"> 
        <Route exact path="/" component={Landing} />     
          <Switch>    
            <Route exact path="/provider" component={Provider} />
            <Route path="/customer" component={Customer} />
            <Route path="/join" component={Join} />
            <Route path="/admin" component={Admin} />
            <Route path="/results" component={Results} />
            <Route path="/review" component={Review} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/success" component={ProverThankYou} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/zipdist" component={ZipCodeDistance} />
            <Route path="/ziprad" component={zipCodeRadius} />
            <Route exact path="/customerresults" component={CustomerSearchResults} />
            <Route path="/update/:providerId" component={UpdateProvider} />
            <Route path= "/providersuccess" component={ProviderSuccess} />
          </Switch>    
      <Chat /> 
      
    </div>   
    </Router>
  );
}

export default App;
