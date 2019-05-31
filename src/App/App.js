import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Css
import './App.css';

import store from '../store';

// Components
import Navbar from './navbar';
import Player from './player';
import Profile from './profile';
import Favorites from './favorites';
import Find from './find';
import Home from './home';
import Details from './details';

const App = () => {
  
  return (
    <Provider store={store} >
      <Router>
        <Navbar />
        <div className="App">
          {/* <h1>Plantilla de la práctica final!</h1> */}
          <Route path='/home' exact component={Home} />
          <Route path='/profile' exact component={Profile}/>
          <Route path='/favorites' exact component={Favorites} />
          <Route path='/find' exact component={Find}/>
          <Route path='/details/:id' exact component={Details}/>
        </div>
        <Player />
      </Router>
    </Provider>
  );
};

export default App;
