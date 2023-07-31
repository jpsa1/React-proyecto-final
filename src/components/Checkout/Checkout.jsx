import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
  
  const {carrito} = useContext(CartContext)
  
    return (
    <div>
        <h1>GRACIAS POR TU COMPRA</h1>
        <p>Estos son los detalles de tus productos:</p>

        {carrito && carrito.map((resp) => {
            return (
                <div key={resp.id}>    
                    <p> ------------</p>
                    <h3>{resp.titulo}</h3>
                    <h4>Precio: {resp.precio}</h4>
                    <h4>Cantidad: {resp.cantidad}</h4>
                    <h4>Total: {resp.precio * resp.cantidad}</h4>
                </div>
            )
        })}
        

    </div>
  )
}

export default Checkout