import React from 'react'

import './styles.css'

export function NavBar() {
    return (
        <ul className="ul-navbar">
            <li><a><img className="img-navbar" src={require('../../Assets/Images/rem2.png')} /></a></li>
            <li><a><img className="img-navbar" src={require('../../Assets/Images/rem2.png')} /></a></li>
        </ul>
    )
}