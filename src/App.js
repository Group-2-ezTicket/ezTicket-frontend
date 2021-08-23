import React, { useState }from 'react';
import Footer from './components/Footer';
import MenuHeader from "./components/MenuHeader";
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [cinemaName, setCinemaName] = useState("");

  function updateCinemaName(cinemaName) {
    setCinemaName(cinemaName);
  }
  return (
    <div className="App">
      <div className="allButFooter">
      <MenuHeader updateCinemaName={updateCinemaName} />
      <div className="movieList">
      <MovieList cinemaName={cinemaName} />
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
