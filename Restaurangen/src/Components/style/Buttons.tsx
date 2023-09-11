import styled from "styled-components";

export const Button = styled.button `
    font-family: 'Poppins', sans-serif;
    border: black 1px solid;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #0E0E0E;
       // color: #fff; /* Change text color on hover */
        color: rgb(243, 237, 201);
        border-color: rgb(243, 237, 201);;
    }
    &:disabled{
        background-color: transparent;    
    }
    &:disabled:hover{
        padding: 10px 15px;;
        cursor: not-allowed;
    }
    
`

export const ButtonYellow = styled(Button) `
    background-color: #FFCF00;
    color: #0E0E0E;
`

export const HeaderButtonYellow = styled(ButtonYellow) `
    display: flex;
    position: relative;
    bottom: 62px;
    left: 70%;
    font-size: 0.8rem;
    width: 70px;
    padding-left: 15px;
    z-index: 11;

    @media (min-width: 768px) {
        font-size: 1rem;
        bottom: 65px;
        left: 83%;
        width: 85px;
    }

    @media (min-width: 1200px) {
        left: 87%;
        bottom:120px;
        font-size: 1.5rem;
        width: 130px;
        
    }
`

export const ButtonGreen = styled(Button) `
    background-color: #01A56A;
`

export const ButtonRed = styled(Button) `
    background-color: #924C4C;
`

export const CancelBtn = styled.button `
    background: transparent;
    color: #924C4C;
    font-family: "Poppins", sans-serif;
    border: 'none';
    border-style: none!important;
    text-decoration: underline;
    margin-left: 20px;

    &:hover{
        cursor: pointer;
    }
    `