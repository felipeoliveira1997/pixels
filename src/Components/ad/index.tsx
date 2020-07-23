import React from 'react'

import './styles.css'

interface AdUI {
    img: JSX.Element
}

export function Ad(props:AdUI) {
    return (
        <div className="anuncio-item">
          {props.img}
        </div>
    )
}