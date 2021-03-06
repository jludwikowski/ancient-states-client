import React from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

export const Navbar: React.FunctionComponent = (props) => (
    <Router>
    <nav className='navbar navbar-expand navbar-dark bg-dark mb-3'>

        <NavLink className='navbar-brand' to='/'>
            Ancient States
        </NavLink>
        <div className='container'>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/armiesView'>
                            Armies View
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/cityView'>
                            City View
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/leadersView'>
                            Leader View
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/battleReports'>
                            Battle Reports
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </Router>
);
