import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative ;
`;
const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width:100%;
height: 100%;
display: flex;
font-size: 25px;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
color: white;
margin-bottom: 20px;

`;
const Button = styled.button`
border: none;
padding: 15px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
opacity: 0.7;
border-radius: 5px;

`;


const CategoryItem = ({ item }) => {
    return (
        <Container>

            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem