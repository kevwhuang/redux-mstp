import React from 'react';
import cookie from 'cookie';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export const LoginContext: any = React.createContext(null);

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn]: [boolean, Function]
        = React.useState(cookie.parse(document.cookie)['loggedIn'] ? true : false);

    return (
        <LoginContext.Provider value={{ setIsLoggedIn }}>
            <AppBar position="relative">
                <Toolbar>
                    <Typography className="header" variant="h4" style={{ flexGrow: '1' }}>REACT ROUTER</Typography>
                    <div className="navbar">
                        <Link className="nav-link" to="">Home</Link>
                        <Link className="nav-link" to="about">About</Link>
                        {isLoggedIn && <Link className="nav-link" to="logout">Logout</Link>}
                    </div>
                </Toolbar>
            </AppBar>
            <Outlet />
        </LoginContext.Provider>
    );
}
