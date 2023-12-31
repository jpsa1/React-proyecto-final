import React, { useContext } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Badge from '@mui/material/Badge';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)

    return (
        <div >
            <Link to='/carrito'>
                <Badge badgeContent={ cantidadCarrito } color="primary">
                    <ShoppingCartOutlinedIcon color='success' fontSize='large' sx={{color: 'white'}}/>
                </Badge>
            </Link>
        </div>
    )
}

export default CartWidget