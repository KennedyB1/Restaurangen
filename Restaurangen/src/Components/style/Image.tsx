import styled from "styled-components";


export const ImageStatic = styled.img `
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

export const ImageMenu = styled(ImageStaticPage) `
    width: 40%;
    height: 40%;

    @media (min-width: 768px) {
        display: flex;
        position: relative;
        left: 15%;
        width: 25%;
        height: 20%;
    }

    @media (min-width: 1200px) {
        position: static;
        width: 30%;
        height: 30%;
        margin: 0;
    }
`

export const IconImage = styled.img `
    padding: 18px;
    height: 30px;
    @media (min-width: 768px) {
        padding: 5px;
        height: 60px;
    }   
`
export const IconImageHeader = styled(IconImage) `
        cursor: pointer;
        position: relative;
        top: 15px;
        padding: 10px;
        height: 40px;

    @media (min-width: 768px) {
        cursor:none;
        position: relative;
        top: 15px;
        padding: 10px;
        height: 40px;
    }

    @media (min-width: 1200px) {
        top: 0px;
        padding: 15px;
        padding-bottom: 15px;
        height: 50px;
        
    }
`

export const ImgConfirmation = styled.img `
height: 200px;
width: auto;
opacity: 0.5;
margin-top: 50px;`