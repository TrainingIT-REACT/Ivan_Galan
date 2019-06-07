import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const PrivateRoute = ({ component: Component, ...others }) => {
    const { logged } = useContext(UserContext);
    return (            
        <Route
            {...others}
            render={ props =>
                logged
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: { message: 'Login is required'}}} />
            }
        />
    );
}

export default PrivateRoute;
