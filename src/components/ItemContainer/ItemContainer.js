import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data'
import Item from '../Item/Item'


const ItemContainer = () => {
    const { id } = useParams()
    const [ productData, setProductData] = useState({});
    const [ loading, setLoading ] = useState(false);
    
    
    useEffect( () => {
        filterById()

    }, [])

    const filterById = () => {
        products.some( (item) => {
            if(item.id == id) {
                console.log("producto filtrado:", item)
                setProductData(item)
            }
        }
        )
    }
  return (
    <>
        <Item data={productData}/>
    </>
  )
}

export default ItemContainer