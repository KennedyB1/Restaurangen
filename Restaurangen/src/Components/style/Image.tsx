import styled from "styled-components";

export const Image = styled.img `
    width: 100%;
    height: 50px;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 100px;
    }

    @media (min-width: 1200px) {
        height: 150px;  
    }
`

export const ImageStaticPage = styled.img `
    display: flex;
    justify-content: center;
    border: black solid 1px;
    border-radius: 5px;
    width: 50%;
    margin-left: 25%;

    @media (min-width: 1200px) {
        width: 40%;
        height: 40%;
        margin: 0;
    }
`