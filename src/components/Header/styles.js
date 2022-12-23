import styled from 'styled-components';

export const ContainerHeader=styled.header`
    grid-area: header;
    min-height: 20rem;
    
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: +1;

  
    
    background:${props=>props.theme["gray_700"]} ;

    .logo{
        display: flex;
        align-items: center;
        font-weight: 900;

       .to{
            font-size: 4rem;
            color: ${props=>props.theme["blue"]};
            margin-left: 1.2rem;
       }
       .do{
            font-size: 4rem;
            color: ${props=>props.theme["purple_dark"]};
       }
    }




`