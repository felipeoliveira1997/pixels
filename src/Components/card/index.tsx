import React from 'react'

import './styles.css'

interface CardUI {
    tag: String,
    number: Number
}

export function Card(props: CardUI) {
    return (
        <div className="card-inf">
            <span className="number">{props.number}</span>
            <span className="tag">{props.tag}</span>
        </div>
    )
}