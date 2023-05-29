import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

 const Layout = () => {
    return (
        <div>
            <header>
                 <ul>
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                </li>
                <li>
                    <StyledLink to='/movies'>Movies</StyledLink>
                </li>
            </ul>
            </header>
            <main>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </main>    
            <footer></footer>
        </div>
    );
}
export default Layout;