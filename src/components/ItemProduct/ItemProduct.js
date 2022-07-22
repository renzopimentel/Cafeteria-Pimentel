import react, { useState } from 'react';

const ItemProduct = ({data, action}) => {
    const [contador, setContador] = useState(1);

    const addNumber = () => {
        setContador(contador + 1)
    }

    const removeNumber = () => {
        setContador(contador - 1)
    }
    const {title, image, price, stock} = data
    return(
        <div className='item-product'>
            <img src="" alt="" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <button>Comprar</button>
            <div>
                <button>{removeNumber}</button>
                <p></p>
                <button>{addNumber}</button>
            </div>
        </div>
        
    )
}

export default ItemProduct;