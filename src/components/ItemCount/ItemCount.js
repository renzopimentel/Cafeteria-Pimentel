import { Add, Remove } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components'

const ItemCount = ({ stock, quantitySelected }) => {
    const [contador, setContador] = useState(1);
    console.log("stock", stock);

    function incrementCount () {
        if (stock > contador){
           setContador(currCount => currCount + 1) 
        }
    }

    function decrementCount () {
        if (contador > 1){
             setContador(currCount => currCount - 1)
        }
    }

    const onAdd = () => {
        quantitySelected(contador)
    }

    return (
        <Container>
            <CountContainer>
                    <QuantityContainer>
                        <Remove onClick={decrementCount} />
                        <Amount>{contador}</Amount>
                        <Add onClick={incrementCount}/>
                    </QuantityContainer>
                    <ProductButton onClick={onAdd}>AÑADIR AL CARRITO</ProductButton>
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
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-content: initial;
    margin: 20px 40px;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid teal;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const ProductButton = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
`