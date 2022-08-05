import React, { useEffect, useState } from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';
import styled from 'styled-components';
import { products }  from '../../data';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import ItemList from '../ItemProduct/ItemList';

const ItemListContainer = ({ section }) => { 

    const [listProducts, setListProducts] = useState([]);    
    const { category } = useParams();
    const filterbycat = products.filter( (product) => product.category === category);
   

    useEffect(() => {
                const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {    
                if (category === "balanza" || category === "molinillo"){
                    resolve(filterbycat);
                }

                else{
                    resolve(products);
                }
                
            }, 2000);
        });
        getProducts
            .then((res) => {
                setListProducts(res);
            })
            .catch((bug) => {
                console.log("error capturado");
            })
            .finally(() => {
                console.log("termino");
            });
    }, [category]);

    return (
      <Container>
        <Section>{section}</Section>
        <ListProducts>
          <ItemList data={listProducts} />
        </ListProducts>
        {/* {products.map((item) => ( }
            <ItemProduct data={item} key={item.id} />
        ))*/}
      </Container>
  )
}

export default ItemListContainer

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 20px;
`

const Section = styled.h2`
`
const ListProducts = styled.div`
  float: left;
  width: 100%;
  margin: 10px 20px ;
  justify-content: initial;
`

