import React, { useState } from 'react'
import styled from 'styled-components';
import Announcement from '../Announcement/Announcement';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Navbar from '../Navbar';

const Kiosco = () => {
  const [click, setClick] = useState(false)

  const handleClick = () =>{
      // cuando esta en true lo pasa a false y visceversa
       setClick(!click);
  }

  return (
    <Container>
      <Announcement />
      <Navbar handleClick={handleClick}/>
      <Title>Kiosco</Title>
      <FilterContainer>
        <Filter><FilterText>Filtrar:</FilterText></Filter>
        <Select>
          <Option disabled selectede>
            Marcas
          </Option>
          <Option>Fellow</Option>
          <Option>Timemore</Option>
        </Select>
        <Filter><FilterText>Ordenar</FilterText></Filter>
        <Select>
          <Option>Destacados</Option> 
          <Option>Más vendidos</Option>
          <Option>Precio, menor a mayor</Option>
          <Option>Precio, mayor a menor</Option>
          <Option>Alfabeticamente, A-Z</Option>
          <Option>Alfabeticamente, Z-A</Option>
          <Option>Fecha, antiguo a nuevo</Option>
          <Option>Fecha, nuevo a antiguo</Option>
        </Select>
      </FilterContainer>
      <ItemListContainer />
    </Container>
  )
}

export default Kiosco

const Container = styled.div`
`
const Filter = styled.div`
`
const Title = styled.h1`
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`

const Option = styled.option``