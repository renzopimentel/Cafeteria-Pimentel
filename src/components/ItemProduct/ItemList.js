import styled from "styled-components";
import ItemProduct from "./ItemProduct";

const ItemList = ({ data }) => {
    return(
        <Container>
        {data.map((product) => {
            return <ItemProduct key={product.id} data={product}/>
        } )}
        </Container>
    )
}

export default ItemList

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin-bottom: 20px;
`