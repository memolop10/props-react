import React from 'react'

const Imagen = ({urlImagen}) => {
    return (
        <div>
             <img 
                src={urlImagen}
                alt=""
                className="mr-3"/>
        </div>
    )
}

export default Imagen
