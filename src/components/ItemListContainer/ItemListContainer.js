import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';

const ItemListContainer = ({section}) => {
  const product1 = {
      title: "Molinillo Chestnut C2",
      price: "4150",
      stock: "10"
    }

    const product2 = {
      title: "Molinillo Timemore Slim Plus",
      price: "7600",
      stock: "100"
    }
    return (
    <List>
        <h2>{section}</h2>
        <ItemProduct data={product1}/>
        <ItemProduct data={product2}/>
    </List>
  )
}

export default ItemListContainer