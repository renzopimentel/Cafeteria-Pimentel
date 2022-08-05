import styled from "styled-components"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Category = () => {
    return(
        <Container>
            <MainContainer>
                <ItemListContainer section= ""/>
            </MainContainer>
        </Container>
    )
}

export default Category

const Container = styled.div`
`

const MainContainer = styled.section`
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    float: left;
    max-width: 100%;
`