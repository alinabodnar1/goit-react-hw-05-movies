import styled from "styled-components";
import { Link } from 'react-router-dom'; 

export const Title = styled.h1`
    display: block;
    margin-left: 20px;
    font-weight: 700;
    color: #404040;
`;
export const StyledLink = styled(Link)`
    color: #318CE7;
    padding: 5px;
    display: block; 
   
  :hover {
    color: #FF7F50;
    }
`;