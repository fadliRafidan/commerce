import React from 'react';
import styled from 'styled-components';
import { ShoppingCartOutlined, Search } from '@mui/icons-material'
import Badge from "@material-ui/core/Badge";

const Container = styled.div`
height: 60px;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Language = styled.span`
font-size: 25px;
cursor: pointer;
`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
justify-content: baseline;
margin-left: 25px;
padding: 8px;
`;
const Input = styled.input`
border: none;
`;
const Logo = styled.h1`
font-weight: bold;

`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;

`;

const MenuItem = styled.div`
font-size: 20px;
cursor: pointer;
margin-left: 20px;

`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>IDN</Language>
                    <SearchContainer>
                        <Input placeholder="Search Someting..." />
                        <Search style={{ color: "gray", fontSize: 25 }} />

                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>GREENLIGHT.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge color="secondary" badgeContent={7}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>


    )
}

export default Navbar