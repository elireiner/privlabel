import React, { Component } from 'react';
import mobile from '../images/mobile.jpg';
import './navBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div>
                    
                </div>
                <ul className="nav-list">
                    <img src={mobile} className="logo"/>
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