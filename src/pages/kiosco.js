import React, { useState } from 'react'
import styled from 'styled-components';
import ItemList from '../components/ItemList/ItemList';

const Kiosco = () => {
  return (
    <Container>
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
      <ItemList />
    </Container>
  )
}

export default Kiosco

const Container = styled.div`
`
const Filter = styled.div`
`
const Title = styled.h1`
  text-align: center;
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
  margin-right: 26px;
`

const Option = styled.option``