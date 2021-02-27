import React from 'react'

const Saludo = (props) => {

    return (
        <div>
            <h1>Saludos {props.persona}</h1>
            <p>edad: {props.edad}</p>
        </div>
    )
}

export default Saludo
