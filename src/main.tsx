import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import Navbar from './layouts/Navbar';

import About from './pages/About';
import Details from './pages/Details';
import Error from './pages/Error';
import Fallback from './pages/Fallback';
import Home from './pages/Home';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

import Protect from './features/Protect';
import store from './data/store';

import './styles/rectify.scss';
import './styles/main.scss';
import './styles/media.scss';

const router: any = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<Protect component={About} />} />
        <Route path="details" element={<Protect component={Details} />}>
            <Route path=":id" />
        </Route>
        <Route path="logout" element={<Logout />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
        </Provider>
    </React.StrictMode>
);
