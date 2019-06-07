import { createContext } from 'react';

const UserContext = createContext({
    logged: false,
    setLogged: () => {}
});

export default UserContext;
