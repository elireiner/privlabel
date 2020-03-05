import React, { Component } from 'react';
import logo from '../images/logo.jpeg';
import './navBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div>
                    <img src={logo} alt="Company logo" />
                </div>
                <ul className="nav-list">
                    <li className="nav-item">some link</li>
                    <li className="nav-item">some link</li>
                    <li className="nav-item">some link</li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;