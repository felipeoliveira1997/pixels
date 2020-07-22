import React from 'react'

import './styles.css'

export function NavBar() {
    return (
        <ul className="ul-navbar">
            <li><a><img src={require('../../Assets/Images/rem2.png')} /></a></li>
            <li><a><img src={require('../../Assets/Images/rem2.png')} /></a></li>
        </ul>
    )
}