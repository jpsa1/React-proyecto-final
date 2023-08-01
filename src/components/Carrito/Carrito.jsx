import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

// Material MUI

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// ***



const Carrito = () => {
  
    const {carrito, totalCarrito} = useContext(CartContext)
    
    return (
    <div style={{ marginRight: '30%', marginLeft: '30%' }}>
        <h2 style={{color:'lightblue', fontSize:'50px', textAlign:'center'}}>CARRITO</h2>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell align="center">Cantidad&nbsp;</TableCell>
                <TableCell align="center">Precio&nbsp;</TableCell>
                <TableCell align="center">Total&nbsp;</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {carrito.map((row) => (
                <TableRow
                key={row.titulo}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.titulo}
                </TableCell>
                <TableCell align="center">{row.cantidad}</TableCell>
                <TableCell align="center">{row.precio}</TableCell>
                <TableCell align="center">{row.cantidad * row.precio}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    
        <h2 style={{color:'lightblue', fontSize:'20px', textAlign:'right'}}>COMPRA TOTAL: $ {totalCarrito()}</h2>
        
        <br />
        <Link to="/checkout">
            <Button variant="contained">REALIZAR PEDIDO</Button>
        </Link>
    
    </div>
        
    
    // ********************
    
    // <div>
    //     <h1>CARRITO</h1>

    //     {carrito && carrito.map((resp) => {
    //         return (
    //             <div key={resp.id}>    
    //                 <p> ------------</p>
    //                 <h3>{resp.titulo}</h3>
    //                 <h4>Precio: {resp.precio}</h4>
    //                 <h4>Cantidad: {resp.cantidad}</h4>
    //                 <h4>Total: {resp.precio * resp.cantidad}</h4>
    //             </div>
    //         )
    //     })}
    //     <p> ------------ </p>
    //     <h2>TOTAL COMPRA: $ {totalCarrito()}</h2>
        
    //     <br />
    //     <Link to="/checkout">
    //         <Button variant="contained">REALIZAR PEDIDO</Button>
    //     </Link>

    // </div>
  )
}

export default Carrito