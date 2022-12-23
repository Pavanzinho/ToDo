import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    
    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size:1.6rem;
        line-height: 140%;
    }

    body{
        background: ${props=>props.theme['gray_600']};
        -webkit-font-smoothing:antialiased;
    }

    body,input,button{
        color: ${props=>props.theme['gray_100']};
        font-family: 'Inter', sans-serif;
    }

    button:hover{
        cursor: pointer;
    }

    @media (max-width:768px){
        :root{
            font-size: 50%;
        }
    }

    


`