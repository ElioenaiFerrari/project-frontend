import { createGlobalStyle } from "styled-components";
import background from "../assets/images/nature.jpg";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        font-size: 15px;
        font-family: 'Roboto';
        --webkit-font-smoothing: antialiased !important;
    }

    html, body, #root{
        background: url(${background}) no-repeat;
        background-size: auto;
    }       

    @media screen  and (min-width: 400px){
        html, body, #root{
            background: url(${background}) no-repeat;
            background-size: cover;
        }
    }

    button{
        cursor:pointer;
    }

    input{
        text-align:center;
    }

    input::placeholder {
        color: gray;
    }
`;

export default GlobalStyle;
