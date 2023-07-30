import React, { useContext } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Badge from '@mui/material/Badge';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

    const { totalCarrito } = useContext(CartContext)

    return (
        <div>
            <Badge badgeContent={ totalCarrito } color="primary">
                <ShoppingCartOutlinedIcon color='success' fontSize='large' sx={{color: 'white'}}/>
            </Badge>
        </div>
    )
}

export default CartWidget