import React from 'react';
import Footer from './components/Footer';
import MenuHeader from "./components/MenuHeader";
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <div className="allButFooter">
      <MenuHeader/>
      <div className="movieList">
      <MovieList/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
