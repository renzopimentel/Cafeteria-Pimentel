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
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Desc>
                <Price></Price>
            </InfoContainer>
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

const Desc = styled.p`
    margin: 20px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`