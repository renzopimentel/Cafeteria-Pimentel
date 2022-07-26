import { width } from '@mui/system';
import react, { useState } from 'react';
import styled from 'styled-components';

const ItemProduct = ({item}) => {
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

    return(
        <Container>
            <Image src={item.image} />
            <Text>{item.title}</Text>
            <Price>$ {item.price}</Price>
            <CountContainer>
                <QuantityContainer>
                    <button onClick={removeNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
                </QuantityContainer>
                <ProductButton>Agregar al carrito</ProductButton>
            </CountContainer>
        </Container>
    )
}

export default ItemProduct;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    border-style: inset;
    /* background-color: #4E5340; */
`

const CountContainer = styled.div`
    width: 100%;
`

const Price = styled.text`
    width: 100%;
    text-align: center;
`

const QuantityContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const ProductButton = styled.button`
    width: 100%;
`
const Image = styled.img`
    display: block;
    margin: 5px auto 15px auto;
    height: 65%;
`
const Text = styled.text`
    width: 100%;
    text-align: center;
`