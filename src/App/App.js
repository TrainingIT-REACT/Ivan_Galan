import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Css
import './App.css';

import store from '../store';

import PrivateRoute from './privateRoute';
// Components
import Navbar from './navbar';
import Player from './player';
import Profile from './profile';
import Favorites from './favorites';
import Find from './find';
import Home from './home';
import Details from './details';
import Login from './login';
import UserContext from './contexts/UserContext';

const App = () => {
  const [ logged, setLogged ] = useState(false);
  
  return (
    <Provider store={store} >
    <UserContext.Provider value={{logged, setLogged}}>
      <Router>
        <Navbar />
        <div className="App">
          <Route path='/home' exact component={Home} />
          <PrivateRoute path='/profile' exact component={Profile} />
          <Route path='/favorites' exact component={Favorites} />
          <Route path='/find' exact component={Find} />
          <Route path='/details/:id' exact component={Details} />
          <Route path='/login' exact component={Login} />
          <Route path='/' exact render={ () => <Redirect to='/home' />} />
        </div>
        <Player />
      </Router>
    </UserContext.Provider>
    </Provider>
  );
};

export default App;
