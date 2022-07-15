import react from 'react';

const ItemProduct = (props) => {
    return(
        <div>
            <img src="" alt="" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <button>Comprar</button>

        </div>
        
    )
}

export default ItemProduct;