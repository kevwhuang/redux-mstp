import React from 'react';
import cookie from 'cookie';
import { Navigate } from 'react-router-dom';

import NavbarContext from '../contexts/NavbarContext';

function checkAuth(): boolean {
    const cookies: Record<string, string> = cookie.parse(document.cookie);

    if (!cookies['logged_in']) {
        const code: null | string = window.prompt('Enter access code.', '12345');
        const maxAge: number = 24 * 60 * 60 * 1000;

        if (code !== '12345') {
            window.alert('Invalid access code.');
            return false;
        }

        document.cookie = cookie.serialize('logged_in', 'true', { maxAge });
    }

    return true;
}

function Protect(props: any): React.ReactElement {
    const { component: Component, ...rest }: any = props;

    const setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
        = React.useContext(NavbarContext);

    if (checkAuth()) {
        React.useEffect((): void => {
            setIsLoggedIn(true);
        }, []);

        return <Component {...rest} />;
    }

    return <Navigate to="/" />;
}

export default Protect;
