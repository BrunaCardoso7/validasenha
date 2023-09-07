import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: sans-serif;
        color: gray;
    }
    body{
        
        background-color: black;
        display: flex;
        justify-content: center;
        margin-top: 90px;
        h1{
            font-size: 30px;
            font-weight: 100;
            text-align: center;
            padding: 10px;
        }
    }
`;