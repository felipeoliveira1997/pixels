import React from 'react'

import './styles.css'

export function Header() {
    return (
        <>
            <a href="#" className="logo">Pixels</a>
            <nav>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Person Characters</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}