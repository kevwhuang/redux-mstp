import React from 'react';
import cookie from 'cookie';
import { Navigate } from 'react-router-dom';

import { LoginContext } from '../layouts/Navbar.tsx';

export default function () {
    const { setIsLoggedIn }: any = React.useContext(LoginContext);

    document.cookie = cookie.serialize('loggedIn', '', { maxAge: 0 });
    setIsLoggedIn(false);
    return <Navigate to="/" />;
}
