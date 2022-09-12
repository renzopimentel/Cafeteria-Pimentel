import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    background-color: #565857;
    color: white;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
`

const Announcement = () => {
  return (
        <Container>
            Envíos gratis para compras mayores a $2500.
        </Container>
  )
}

export default Announcement