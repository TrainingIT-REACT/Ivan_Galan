import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Css
import './App.css';
import Navbar from './navbar';
import Player from './player';

const getData = async(setAlbums, setLoading) => {
  try {
    const res = await fetch('/albums');
    const json = await res.json();
    setAlbums(json);
    setLoading(false);
  } catch(err) {
    console.error("Error accediendo al servidor", err);
  };
}

const App = () => {
  const [ albums, setAlbums ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect( () => { getData(setAlbums, setLoading) }, [] );
  
  return (<Router>
    <Navbar />
    <div className="App">
      <h1>Plantilla de la práctica final!</h1>
      
    </div>
    <Player />
  </Router>);
}

export default App;
