import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Button = styled.button`
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 8px 10px;
    min-width: 50px;
    border-radius: 20px;
    border-color: transparent;
    text-transform: uppercase; 
    font-weight: 700;
    line-height: 1.5;
    color: #FF7F50;
`;
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  gap: 15px;
`;

export const Image = styled.img`
    display: block;
    width: 80%;
    height: 80%;
    padding: 10px;
    object-fit: contain;
    border-radius: 5px;
`;

export const Title = styled.h2`
    display: block;
    margin: 0 auto;
    text-decoration: underline;
    font-weight: 700;
    color: #505050;
`;

export const Paragraph = styled.p`
    display: block;
    text-align: justify;
`;

export const StyledLink = styled(Link)`
    color: #686868;
    padding: 8px 16px;
    text-decoration: none;
    color: black;
    font-weight: 500;
  
    &.active {
    color: #FF7F50;
    }
`;