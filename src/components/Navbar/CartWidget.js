import React from 'react';
import { Badge } from '@mui/material';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartWidget = () => {
  return (
      <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
  );
}

export default CartWidget

