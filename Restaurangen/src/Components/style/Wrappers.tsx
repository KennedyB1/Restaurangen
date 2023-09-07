import styled from "styled-components";

export const Wrapper = styled.div `
    width: 100%;
`

export const BlackWrapper = styled(Wrapper) `
    background-color: #0E0E0E;
`

export const BlackWrapperHeader = styled(BlackWrapper) `
    height: 95px;
`


export const BlackWrapperFotter = styled(BlackWrapper) `
    height: 70px;
`


export const LightWrapper = styled(Wrapper)`
    height: 100%;
    background-color: #F3EDC9;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
        width: 100%;
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
    /*border: solid black 1px;*/
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