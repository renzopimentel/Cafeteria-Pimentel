import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';
import styled from 'styled-components';
import { products } from '../../data';

const ItemListContainer = ({section}) => { 
    return (
      <Container>
        {products.map((item) => (
            <ItemProduct item={item} key={item.id} />
        ))}
      </Container>
  )
}

export default ItemListContainer

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 20px;
`
