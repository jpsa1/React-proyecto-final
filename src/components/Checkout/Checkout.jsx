import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import {useForm } from "react-hook-form"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';





const Checkout = () => {
  
    const {carrito, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [pedidoId, setPedidoId] = useState("")

    const { register, handleSubmit } = useForm()

    const enviar = (data) => {

      console.log(data);

      const pedido = {
        cliente: data,
        pedido: carrito,
        total: totalCarrito()
      }

      const pedidosRef = collection(db, "pedidos")
      addDoc(pedidosRef, pedido)
        .then((doc) => {
          setPedidoId(doc.id)
        })
      
      vaciarCarrito()
      
    }

    if (pedidoId) {
       return (
        <div>
          <h1 style={{color:'lightblue', fontSize:'50px', textAlign:'center'}}>Gracias por tu compra </h1> 
          <h2 style={{color:'black', fontSize:'25px', textAlign:'center'}}>Tu numero de pedido es: {pedidoId}</h2>
        </div>
       )
    }
    // style={{ margin: '10px }}
  
    return (
      <div tyle={{ marginRight: '30%', marginLeft: '30%' }}>
        <h1 style={{color:'lightblue', fontSize:'50px', textAlign:'center'}}>CHECKOUT</h1>
        <p style={{color:'lightblue', fontSize:'30px', textAlign:'center'}}>Ingrese los datos a continuacion: </p>
        
        <form className='formulario' onSubmit={handleSubmit(enviar)} style={{ display: 'flex', flexDirection: 'column', marginRight: '30%', marginLeft: '30%' }}>
            
            <TextField style={{ margin: '10px' }}  required id="outlined-basic" label="Nombre" variant="outlined" {...register("nombre")}/>

            <TextField style={{ margin: '10px' }} required id="outlined-basic" label="Mail" variant="outlined" {...register("email")}/>

            <TextField style={{ margin: '10px' }} required id="outlined-basic" label="telefono" variant="outlined" {...register("phone")}/>
            
            <Button style={{ marginRight: '30%', marginLeft: '30%', marginTop: '20px' }} className='enviar' type='submit' variant="contained">FINALIZAR COMPRA</Button>
        </form>
      
      </div>
      
  )
}

export default Checkout