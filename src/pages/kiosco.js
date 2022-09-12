import React, { useState } from 'react'
import styled from 'styled-components';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Kiosco = () => {
  return (
    <Container>
      <Title>Kiosco</Title>
      <FilterContainer>

        <Filter><FilterText>Filtrar:</FilterText></Filter>
        <Select>
          <Option disabled defaultValue>
            Marcas
          </Option>
          <Option>Fellow</Option>
          <Option>Timemore</Option>
        </Select>
        <Filter><FilterText>Ordenar</FilterText></Filter>
        <Select>
          <Option>Destacados</Option> 
          <Option>Más vendidos</Option>
          <Option>Precio (asc)</Option>
          <Option>Precio (desc)</Option>
          <Option>A-Z</Option>
          <Option>Z-A</Option>
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
  text-align: center;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`
const FilterText = styled.span`
  font-size: 90%;
  font-weight: 400;
  margin-bottom: 5px;
  display: inline-block;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 26px;
`

const Option = styled.option``