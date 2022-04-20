import styled from "styled-components";

const Button = styled.button`
    border-radius: 3px;
    border: ${props => props.theme.border};
    padding: 10px;
    text-align: center;
    color: ${props => props.theme.color};
    cursor: pointer;
    margin: 5px;
    background-color: ${props => props.theme.bg};
    
    
`

export {Button}