import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const CartWidget = () => {

    return (
        <div>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon color='success' fontSize='large' sx={{color: 'white'}}/>
            </Badge>
        </div>
    )
}

export default CartWidget