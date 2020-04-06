import React, { Component } from 'react';
import logo from '../images/logo.jpeg';
import './navBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div>
                    
                </div>
                <ul className="nav-list">
                    <img src="../images/mobile-logo.jpg" className="logo"/>
                   {// <li className="nav-item">some link</li>
                    //<li className="nav-item">some link</li>
                    //<li className="nav-item">some link</li>
                }
                </ul>
            </nav>
        )
    }
}

export default NavBar;