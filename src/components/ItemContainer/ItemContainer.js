import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';

const ItemContainer = () => {
  return (
    <div className="list-products">
        <ItemProduct title="Chestnut C2" price={4150} image={}/>
        <ItemProduct title="Chestnut Slim Plus" price={7820} image={}/>
    </div>
  )
}

export default ItemContainer;