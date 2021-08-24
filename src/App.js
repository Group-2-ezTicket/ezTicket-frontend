import React from 'react';
import Footer from './components/Footer';
import MenuHeader from "./components/MenuHeader";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="allButFooter">
      <MenuHeader/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
