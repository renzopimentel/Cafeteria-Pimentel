import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import react from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemProduct = ({data}) => {
    const {id, title, brand, images, imageprod, price, stock, category} = data

    return(
        <Container>
            <Circle />
            <Image src={imageprod} alt="Imagen Producto"/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/${category}/${id}`} className="link">
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
            <Price>$ {price}</Price>
            <TitleItem>{title}</TitleItem>
        </Container>
    )
}

export default ItemProduct;


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
        background-color: black;
        color: white;
        transform: scale(1.1);
    }

    .link{
        color:black;
    }

    .link:hover{
        color: white;
    }
`
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    border-radius: 10px;
`

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    background-color: #eeee;
    position: relative;
    border-radius: 10px;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    margin: 40px 20px 0 60px;
    position: absolute;
    z-index: 1;
`

const Price = styled.span`
    width: 100%;
    text-align: center;
`

const Image = styled.img`
    display: block;
    margin: 5px auto 15px auto;
    height: 65%;
    z-index: 2;
`
const TitleItem = styled.h3`
    width: 100%;
    text-align: center;
`