import React from 'react';
import cookie from 'cookie';
import { Link, Outlet } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@mui/material';

import NavbarContext from '../contexts/NavbarContext';

function Navbar(): React.ReactElement {
    const [isLoggedIn, setIsLoggedIn]: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
        = React.useState(cookie.parse(document.cookie)['logged_in'] ? true : false);

    return (
        <NavbarContext.Provider value={setIsLoggedIn}>
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
        </NavbarContext.Provider>
    );
}

export default Navbar;
