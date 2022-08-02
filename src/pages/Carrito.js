import React from 'react'
import styled from 'styled-components'
import Announcement from '../Announcement/Announcement'
import Navbar from '../Navbar/index'



const Cart = () => {
  return (
    <Container>
        <Wrapper>
            <Title>TU CARRITO</Title>
            <Top>
                <TopButton>CONTINUAR COMPRANDO</TopButton>
                <TopTexts>
                    <TopText>Carrito de compras(2)</TopText>
                    <TopText>Lista de deseos(0)</TopText>
                </TopTexts>
                <TopButton type_="filled">CHECKOUT</TopButton>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.div`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => 
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`
const Bottom = styled.div``