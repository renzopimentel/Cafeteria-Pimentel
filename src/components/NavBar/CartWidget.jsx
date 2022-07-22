import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

function CartWidget() {
  return (
    <Cart>
      <Icon icon={FaShoppingCart} />
      <p>4</p>
    </Cart>
  )
}

export default CartWidget

const Cart = styled.div`
  display: flex;

  p{
    font-size: 20px;
  }
`

const Icon = styled(FaShoppingCart)`
  margin: 20px 10px;
  font-size: 20px;
`