import React from "react";
import './App.css';
import Offer from "./components/home/Offer";
import Header from "./components/home/header";
import First from "./components/home/First";
import Third from "./components/home/Third";
import Fourth from "./components/home/Forth";

function App() {
  return (
    <div>
     <Offer/>
     <Header/>
     <First/>
     <Third/>
     <Fourth/>
    </div>
  );
}

export default App;
