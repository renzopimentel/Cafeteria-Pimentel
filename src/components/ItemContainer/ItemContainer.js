import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { products } from '../../data'
import Item from '../Item/Item'


function ItemContainer({ section }) {
    const { id } = useParams();       
    const [productData, setProductData] = useState([]);    

    useEffect( () => {
        filterById()

    }, [])

    const filterById = () => {
        products.some( (item) => {
            if(item.id == id) {
                console.log("producto filtrado:", item)
                setProductData(item)
            }
        }
        )
    }

  return (
    <Container>
        <Section>{section}</Section>
        <Item data={productData}/>
    </Container>
  )
}

export default ItemContainer

const Container = styled.div``

const Section = styled.h2``