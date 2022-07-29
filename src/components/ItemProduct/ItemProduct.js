import react, { useState } from 'react';
import styled from 'styled-components';
import ItemCount from '../ItemCount/ItemCount';

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
            <ItemCount item={item} key={item.id}/>
        </Container>
    )
}

export default ItemProduct;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    /* background-color: #4E5340; */
`

const Price = styled.text`
    width: 100%;
    text-align: center;
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