import styled from "styled-components";

export const LightWrapper = styled.div`
    background-color: #F3EDC9;
    width: 98.5vw;
    height: 100vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
        width: 98.5vw;
        height: 100vh;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        top: 0px;    
    }
`

export const StaticWrapper = styled.div`
    background-color: white;
    width: 80%;
    height: 90%;
    border: solid black 1px;
    border-radius: 2%;
    justify-content: center;

    
    @media (min-width: 1200px) {
        width: 80%;
        height: 90%;
    }
`

export const StaticPartWrapper = styled.div`


@media (min-width: 1200px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    }
`

export const StaticTextWrapper = styled.div `
    padding-left: 10%;
    padding-right: 10%;

@media (min-width: 1200px) {
    padding: 0;
    width:40%
    }
`

export const MenuTextWrapper = styled(StaticTextWrapper) `
    @media (min-width: 1200px) {
        display: flex;
        flex-direction: column;
        padding: 0;
        width:55%
    }
`

export const MenuPartWrapper = styled.div `

    @media (min-width: 1200px) {
        display: flex;
        flex-direction: row;
    }
`