import React from 'react'

import './styles.css'

export function NavBar() {
    return (
        <ul className="ul-navbar">
            <li><a><img className="img-navbar" src={require('../../Assets/Images/rem3.png')} /></a></li>
            <li><a><img className="img-navbar" src={require('../../Assets/Images/morty.png')} /></a></li>
            <li><a><img className="img-navbar" src={require('../../Assets/Images/summer2.png')} /></a></li>
            <li><a><img className="img-navbar" src={require('../../Assets/Images/meeseeks.png')} /></a></li>
        </ul>
    )
}