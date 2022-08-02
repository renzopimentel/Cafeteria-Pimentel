import React, { useState } from 'react'
import styled from 'styled-components'

const ItemCount = ({ item }) => {
    const [contador, setContador] = useState(1);

    const addNumber = () => {
        if (item.stock > contador){
           setContador(contador + 1) 
        }
    }

    const removeNumber = () => {
        if (contador > 1){
             setContador(contador - 1)
        }
    }

    return (
        <Container>
            <CountContainer>
                    <QuantityContainer>
                        <button onClick={removeNumber}>-</button>
                        <p>{contador}</p>
                        <button onClick={addNumber}>+</button>
                    </QuantityContainer>
                    <ProductButton>AÑADIR AL CARRITO</ProductButton>
                </CountContainer>
        </Container>
    )
}

export default ItemCount

const Container =  styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    margin: 5px;
`

const CountContainer = styled.div`
    width: 100%;
`
const QuantityContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    justify-content: center;

    .button{
        margin: 10px 10px 10px 0;
    }
`

const ProductButton = styled.button`
    width: 100%;
`