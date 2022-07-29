import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Item = () => {
  return (
    <Container>
        <Wrapper>
            <ImgContainer>
                <Image src="./img/fellow_stagg.jpeg" alt="Image"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Fellow Stagg Kettle Eléctrica</Title>
                <TitleDesc>Descripción</TitleDesc>
                <Desc>
                        Fellow Stagg EKG combina un hermoso diseño con una serie de características avanzadas:
                        La práctica capacidad de 900 ml hace que toda la familia prepare café.
                        El cuello contorneado y la boquilla precisa le permiten controlar el chorro de agua. Preparar café en un Chemex o gotero será más preciso y repetible, y lo hará aún más agradable.
                        Control electrónico de temperatura de 57 a 100 grados centígrados.
                </Desc>
                <Price>$U 10.700,00</Price>
            </InfoContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountContainer>
                <Button>AGREGAR AL CARRITO</Button>
            </AddContainer>
        </Wrapper>
    </Container>
  )
}

export default Item

const Container = styled.div`
    flex: 1;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const ImgContainer = styled.div`
    flex: 1;
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
    width: 50%
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
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;
`