import React, { Component } from 'react';
import './navBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div>
                    <img alt="Company logo" />
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