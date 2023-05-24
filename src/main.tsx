import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar.tsx';

import About from './pages/About.tsx';
import Details from './pages/Details.tsx';
import Error from './pages/Error.tsx';
import Home from './pages/Home.tsx';
import Logout from './pages/Logout.tsx';

import Protect from './auth/Protect.tsx';

import './styles/rectify.scss';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<Protect component={About} />} />
                    <Route path="details" element={<Protect component={Details} />} />
                    <Route path="logout" element={<Logout />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
