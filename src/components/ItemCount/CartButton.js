import React from 'react'

const CartButton = () => {
    const button = document.querySelector(".addtocart");
    const done = document.querySelector(".done");
    console.log(button);
    let added = false;
    button.addEventListener('click',()=>{
    if(added){
        done.style.transform = "translate(-110%) skew(-40deg)";
        added = false;
    }
    else{
        done.style.transform = "translate(0px)";
        added = true;
    }
        
    });

    
  return (
        <Container>
            <ButtonCart>
                <Pretext>
                    <i className='fas fa-cart-plus'></i> AÑADIR AL CARRITO
                </Pretext>

                <PretextDone>
                    <PostText><i className='fas fa-check'></i> AÑADIDO</PostText>
                </PretextDone>
            </ButtonCart>
        </Container>
  )
}

export default CartButton

const Container = styled.div`
`

const ButtonCart = styled.div`
    display:block;
    padding:0.5em 1em 0.5em 1em;
    border-radius:100px;
    border:none;
    font-size:2em;
    position:relative;
    background:#0652DD;
    cursor:pointer;
    height:2em;
    width:10em;
    overflow:hidden;
    transition:transform 0.1s;
    z-index:1;

    &:hover{
        transform:scale(1.1);
    }
`

const Pretext = styled.div`
    color:#fff;
    background:#0652DD;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Quicksand', sans-serif;

    .i{
        margin-right: 10px;
    }
`
const PretextDone = styled.div`
    background:#be2edd;
    position:absolute;
    width:100%;
    top:0;
    left:0;
    transition:transform 0.3s ease;

    transform:translate(-110%) skew(-40deg);
`
const PostText = styled.div`
    background:#be2edd;

    .fa.check{
        background:#be2edd;
    }

`