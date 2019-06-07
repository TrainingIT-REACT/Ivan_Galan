import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

const Login = ({ location }) => {
    const { logged, setLogged } = useContext(UserContext);

  return (
    <div>
        { logged ? (
            <Redirect to='/profile' />
        ) : (
          <>
            <button onClick={() => setLogged(true)}>Login</button>
            { (location.state && location.state.message) &&
              <p>
                { location.state.message }
              </p>
            }
          </>
        )}
    </div>
  )
}

export default Login;
