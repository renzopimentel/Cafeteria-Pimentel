import { Add, Remove, RouteTwoTone } from '@mui/icons-material'
import React, { useState } from 'react'
import { Router } from 'react-router-dom';
import styled from 'styled-components'

const Item = ({ item }) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = ({product}) =>{
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity-1)
        } else {
            setQuantity(quantity+1)
        }
    }

    //OBTENER PRODUCTO
    router
  return (
    <Container>
        <NavData>
            <NavRoute>
                Inicio/Kiosco/Fellow Stagg Kettle Eléctrica
            </NavRoute>
        </NavData>
        <Wrapper>
            <ImgContainer>
                <Image src="./img/fellow_stagg.jpeg" alt="Image"/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}}</Title>
                <TitleDesc>Descripción</TitleDesc>
                <Desc>
                        Caldera cuello de cisne c/ termómetro Fellow. Modelo con base eléctica. 1 Litro, Negra
                </Desc>
                <Price>$U 10.700,00</Price>
            </InfoContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove onClick={() => handleQuantity("dec")}/>
                    <Amount>1</Amount>
                    <Add onClick={() => handleQuantity("inc")}/>
                </AmountContainer>
                <Button>AÑADIR AL CARRITO</Button>
            </AddContainer>
        </Wrapper>
    </Container>
  )
}

export default Item

const Container = styled.div`
    flex: 1;
`

const NavData =styled.div`
    margin: 20px 0 60px;
    text-decoration: none !important;
    display: flex;
`
const NavRoute = styled.div`
    flex: 1 1 0;
    box-sizing: border-box;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-between;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const ImgContainer = styled.div`
    flex: 1;
    width: 580px;
    height: 420px;
    margin-bottom: 80px;
`

const Image = styled.image`
    width: 100%;
`

const Title = styled.h1`
    font-weight: 200;
`
const TitleDesc = styled.h2`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px;
    margin-left: 0;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #565857;
    text-align: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border-radius: 6px;
    color: white;
    background-color: black;
    cursor: pointer;
    font-weight: 600;
`