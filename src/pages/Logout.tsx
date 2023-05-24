import React from 'react';
import cookie from 'cookie';
import { Navigate } from 'react-router-dom';

import NavbarContext from '../contexts/NavbarContext';

function Logout(): React.ReactElement {
    const setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
        = React.useContext(NavbarContext);

    React.useEffect((): void => {
        setIsLoggedIn(false);
    }, []);

    document.cookie = cookie.serialize('logged_in', '', { maxAge: 0 });
    return <Navigate to="/" />;
}

export default Logout;
