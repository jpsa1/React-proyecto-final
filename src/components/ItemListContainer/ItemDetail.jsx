import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Button from '@mui/material/Button';


const ItemDetail = ({item}) => {
  
    const [cantidad, setCantidad] = useState(1)
    
    const { carrito, setCarrito } = useContext(CartContext)
    console.log(carrito)

   
    const estilo = {
        backgroundColor: '#EBF3FF',
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
            <img width={400} src={item.imagen} alt={item.titulo} />
            <h2>Precio: {item.precio}</h2>
            <h4 style={{ marginLeft: '35%', marginRight: '35%' }}>Descipcion: {item.descripcion}</h4>
            
            <div style={{ display: 'flex' }}>
                <Button variant="contained" onClick={handleRestar}> - </Button>
                <h3 style={{ margin: '15px' }}>{cantidad} </h3>
                <Button variant="contained" onClick={handleSumar}> + </Button>
            </div>
            
            <br />
            <Button variant="contained" onClick={handleAgregarCarrito}>Agregar al carrito</Button>
            <br />

        </div>
    </div>
  )
}

export default ItemDetail