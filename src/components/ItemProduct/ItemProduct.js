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
            <p>{title}</p>
            <p>$ {price}</p>
            <button>Comprar</button>
            <div>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
        </div>
        
    )
}

export default ItemProduct;