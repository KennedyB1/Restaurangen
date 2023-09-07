import styled from "styled-components";

export const Form = styled.form `
margin: 0 auto!important;
width: 100%!important;`

export const Input = styled.input `
border-color: #F3EDC9;
background: transparent;
color: #F3EDC9;
font-family: 'Poppins', sans-serif;
width: 100%!important;
border-style: none!important;
border: 1px solid #F3EDC9!important;
border-radius: 0px!important;
padding: 10px 10px 10px 30px!important;
margin-bottom: 30px!important;

  &::placeholder{
    color: #F3EDC9;
    font-family: 'Poppins', sans-serif;
  }`

export const Select = styled.select `
border-color: #F3EDC9;
background: transparent;
color: #F3EDC9;
font-family: 'Poppins', sans-serif;
width: 115%!important;
padding: 10px 10px 10px 30px;`;

export const Textarea = styled.textarea `
border-color: #F3EDC9;
background: transparent;
color: #F3EDC9;
font-family: 'Poppins', sans-serif;
width: 100%!important;
border-style: none!important;
border: 1px solid #F3EDC9!important;
border-radius: 0px!important;
padding: 10px 10px 10px 30px!important;
margin-bottom: 30px!important;`;