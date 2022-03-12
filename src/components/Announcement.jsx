import styled from '@emotion/styled';
import React from 'react'
const Container = styled.div`
height: 50px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-style: 14px;
font-weight: 500;
`;
const Announcement = () => {
    return (
        <Container>
            Discover new energy & smart vehicles. Rawat kendaraan Anda sebaik mungkin dengan moto murah yang bervariasi dan dapat diandalkan di sini.
        </Container>
    )
}

export default Announcement