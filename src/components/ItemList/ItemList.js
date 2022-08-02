import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';
import styled from 'styled-components';
import { products } from '../../data';

const ItemList = ({section}) => { 
    return (
      <Container>
        {products.map((item) => (
            <ItemProduct data={item} key={item.id} />
        ))}
      </Container>
  )
}

export default ItemList

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 20px;
`
