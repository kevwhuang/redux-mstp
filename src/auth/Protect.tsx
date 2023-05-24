import React from 'react';
import cookie from 'cookie';
import { Navigate } from 'react-router-dom';

import { LoginContext } from '../layouts/Navbar.tsx';

export default function (props: any) {
    const { component: Component, ...rest }: any = props;

    return checkAuth() ? <Component {...rest} /> : <Navigate to="/" />;
}

function checkAuth() {
    const { setIsLoggedIn }: any = React.useContext(LoginContext);
    const cookies: any = cookie.parse(document.cookie);

    if (cookies['loggedIn']) {
        return true;
    } else {
        const code: any = prompt('Please enter the access code.', '12345');
        const ms: number = 24 * 60 * 60 * 1000;

        if (code === '12345') {
            document.cookie = cookie.serialize('loggedIn', 'true', { maxAge: ms });
            setIsLoggedIn(true);
            return true;
        } else {
            alert('Access code invalid.');
            return false;
        }
    }
}
