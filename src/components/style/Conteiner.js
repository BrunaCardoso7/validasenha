import styled from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 80px;
    input{
        margin-top: 30px;
        margin-right: 70px;
        height: 30px;
        font-size: 20px;
    }
    input:focus{
        outline: none;
    }
    button{
        width: 100px;
        height: 40px;
        font-size: 18px;
        margin-top: 20px;
        margin-left: 70px;
        /* border: 1px solid orange;
        border-radius: 4px;
        color: orange;
        background-color: white; */
    }
`;
