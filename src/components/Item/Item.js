import { Add, ImagesearchRoller, Remove, RouteTwoTone } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import { Router } from 'react-router-dom';
import styled from 'styled-components'
import ItemCount from '../ItemCount/ItemCount';
import './item.css';
import { Link } from 'react-router-dom';


const Item = ({ data }) => {
    const {title, images, price, stock} = data

    console.log("images", {images});

    const [quantitySelected, setQuantitySelected] = useState();
    const [img, setImg] = useState(images[0]);

    const hoverHandler = (image, i) => {
        setImg(image);
        refs.current[i].classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if(i !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };

    const refs = useRef([]);
    refs.current=[];
    const addRefs = (el) => {
        if(el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    }

    return (
        <div className='container'>
            <div className='navdata'>
                Inicio / Kiosco / {title}
            </div>
            <div className='imgcontainer'>
                <div className='left'>
                    <div className='left_1'>
                        {images.map((image, i) => (
                            <div 
                                className={i === 0 ? 'img_wrap active' : 'img_wrap'} 
                                key={i}
                                onMouseOver={() => hoverHandler(image, i)}
                                ref={addRefs}
                            >
                                <img src={image} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className='left_2'>
                    </div>
                </div>
                <div className='right'>
                    <div className='infocontainer'>
                        <h1 className='fw200'>{title}</h1>
                        <h2 className='fw 200'>Descripción</h2>
                        <p  className='desc'>Caldera cuello de cisne c/ termómetro Fellow. Modelo con base eléctica. 1 Litro, Negra</p>
                        <span className='price'>$U {price},00</span>
                        {
                            quantitySelected > 0 ? <Link to='/cart' quantitySelected={setQuantitySelected}><button>TERMINAR COMPRA</button></Link> : <ItemCount stock={stock} quantitySelected={setQuantitySelected}/>
                        }
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Item;