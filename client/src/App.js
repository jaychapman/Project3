import React from "react";
import "./App.css";
import CustomerForm from "./components/CustomerForm";
import ProviderForm from "./components/ProviderForm";
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <div className="App">
      <CustomerForm />
      <ProviderForm />
      <ReviewForm />
    </div>
  );
}


export default App;
