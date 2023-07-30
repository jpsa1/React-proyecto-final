import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({item}) => {
  
    const [cantidad, setCantidad] = useState(1)
    
    const { carrito, setCarrito } = useContext(CartContext)
    console.log(carrito)

   
    const estilo = {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAling: 'center'
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad-1)
    }

    const handleSumar = () => {
        setCantidad(cantidad+1)
    }

    const handleAgregarCarrito = () => {
        
        const itemAgregado = {...item, cantidad}
        
        const nuevoCarrito = [...carrito]

        const estaEnElCarrito = nuevoCarrito.find((elem) => elem.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad +=cantidad
            setCarrito(nuevoCarrito)
        } else {
            setCarrito([...carrito, itemAgregado])
        }

    }


    return (
    <div >
        <div style={estilo}>
            <h1>{item.titulo}</h1>
            <img width={500} src={item.imagen} alt={item.titulo} />
            <h5>{}</h5> {/*Esto no se porque esta, pero lo deje*/}
            <h2>Precio: {item.precio}</h2>
            <h4>Descipcion: {item.descripcion}</h4>
            
            <button onClick={handleRestar}> - </button>
            <p> {cantidad} </p>
            <button onClick={handleSumar}> + </button>
            <br />

            <button onClick={handleAgregarCarrito}>Agregar al carrito</button>
            <br />
        </div>
    </div>
  )
}

export default ItemDetail