import Item from "./Item"

const ItemDetail = ({dataProducts}) => {
    return(
        <>
        {dataProducts.map((products) => {
            return <Item key={products.id} data={products}/>
        } )}
        </>
    )
}

export default ItemDetail