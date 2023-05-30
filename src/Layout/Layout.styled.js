import styled from "styled-components";
import { NavLink } from 'react-router-dom'; 

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`;
export const List = styled.ul`
    display: flex;
    list-style: none;
`; 

export const StyledLink = styled(NavLink)`
    color: #686868;
    padding: 8px 16px;
    text-decoration: none;
    color: black;
    font-weight: 500;
  
    &.active {
    color: #FF7F50;
    }
`;

