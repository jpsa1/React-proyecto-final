import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'



const Carrito = () => {
  
    const {carrito} = useContext(CartContext)

    let compraTotal = 0
    
    carrito.forEach(element => {compraTotal += element.cantidad * element.precio});

    return (
    <div>
        <h1>CARRITO</h1>

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
        <p> ------------ </p>
        <h2>TOTAL COMPRA: {compraTotal}</h2>
        
        <br />
        <Link to="/checkout">
            <button>FINALIZAR COMPRA</button>
        </Link>

    </div>
  )
}

export default Carrito