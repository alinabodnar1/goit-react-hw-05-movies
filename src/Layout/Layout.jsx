import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink, List } from './Layout.styled';

 const Layout = () => {
    return (
        <Container>
            <Header>
                 <List>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/movies'>Movies</StyledLink>
                </List>
            </Header>
            <main>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </main>    
            <footer></footer>
        </Container>
    );
}
export default Layout;