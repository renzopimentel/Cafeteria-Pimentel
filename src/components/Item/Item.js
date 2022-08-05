import { Add, Remove, RouteTwoTone } from '@mui/icons-material'
import React, { useState } from 'react'
import { Router } from 'react-router-dom';
import styled from 'styled-components'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ data }) => {
    const {title, image, price, stock} = data

    return (
        <Container>
            <NavData>
                <NavRoute>
                    Inicio / Kiosco / {title}
                </NavRoute>
            </NavData>
            <Wrapper>
                <ImgContainer>
                    <ImgItem src={image}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{title}</Title>
                    <TitleDesc>Descripción</TitleDesc>
                    <Desc>
                        Caldera cuello de cisne c/ termómetro Fellow. Modelo con base eléctica. 1 Litro, Negra
                    </Desc>
                    <Price>$U {price},00</Price>
                    <ItemCount item={data}/>
                </InfoContainer>
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
    margin-top: 20px;
    margin-left: 5rem;
`

const Wrapper = styled.div`
    padding: 0 50px;
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

const ImgItem = styled.img`
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
    font-weight: 200;
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