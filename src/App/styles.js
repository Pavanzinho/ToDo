import styled from "styled-components";

export const AppContainer=styled.div`
    
    height: 100vh;
    display: grid;

    grid-template-rows: 20rem auto;
    grid-template-areas: 
    "header" 
    "content"; // se eu não fizer isso, irei ter que usar position relativo no main

    >main{
        margin:  1rem auto 2rem ;
        width: 73.6rem;
        display: flex;
        flex-direction: column;
        grid-area: content;
        padding: 0 3rem;

    
        section{
            margin-top: 6.4rem;

            .taskCounter{
                display: flex;
                justify-content: space-between;
                align-items: center;
              

                .tasksCreated{
                    display: flex;
                    gap: 8px;

                    .countCreatedTasks{
                        width: 2.4rem;
                        height: 1.9rem;
                        border-radius: 999px;
                        background: ${props=>props.theme["gray_400"]};
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        span{
                            font-size: 1.2rem;
                            font-weight: 700;
                        }
                    }

                    >span{
                        font-size: 1.4rem;
                        color:${props=>props.theme["blue"]};
                        font-weight: 700;
                    }
                }

                .tasksCompleted{
                    display: flex;
                    gap: 8px;

                    >span{
                        font-size:1.4rem;
                        color: ${props=>props.theme["purple"]};
                        font-weight: 700;
                    }
                    

                    .countCompletedTasks{
                        display: flex;
                        gap: 4px;
                        width: 5.2rem;
                        height: 1.9rem;
                        background: ${props=>props.theme["gray_400"]};
                        border-radius: 999px;
                        justify-content: center;
                        align-items: center;
                        
                        >span{
                            font-size: 1.2rem;
                            font-weight: 700;
                        }
                        
                    }
                }
            }
        }
    }

`

export const ListContainer=styled.ul`
    display: flex;
    flex-direction: column;
    max-height: 40vh;
 
    margin-top: 2.4rem;

    ::-webkit-scrollbar{
            width: 8px;
           
    }
    ::-webkit-scrollbar-thumb{
            background: ${props=>props.theme["blue_dark"]};
            border-radius: 8px;
    }


    >li + li{
        margin-top: 1.2rem;
    }

    overflow-y: auto;

   
`
export const EmptySectionImageContainer=styled.div`

        margin-top: 6.4rem;
        display: flex;
        flex-direction:column ;
        padding: 6.4rem 2.4rem;
        align-items: center;
        justify-content: center;
        border-top: 1px solid ${props=>props.theme["gray_400"]};

        span:nth-of-type(1){
            color: ${props=>props.theme["gray_300"]};
            font-weight: 700;
            font-size: 1.6rem;
            margin-top: 1.6rem;
        }
        span:nth-of-type(2){
            color: ${props=>props.theme["gray_300"]};
            font-weight: 400;
            font-size: 1.6rem;
        }

`

export const InputArea=styled.form`
    width: 100%;
    display: flex;
    gap: 8px;
        

    >button[type=submit]{
        padding: 1.6rem;
        background: ${props=>props.theme["blue_dark"]};
        border: none;
        border-radius: 8px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:8px;
        transition: 0.2 s;

    }
    
    button[type=submit]:not(:disabled):hover{
        background:${props=>props.theme["blue"]} ;
        color: #ffff;
    }

    button[type=submit]:disabled{
        opacity: 0.8    ;
        cursor: not-allowed;
    }
 
   
    input{
        width: 87%;
        border: 1px solid ${props=>props.theme["gray_700"]} ;
        border-radius: 8px;
        background: ${props=>props.theme["gray_500"]};
        color:${props=>props.theme["gray_100"]};
        font-size: 1.6rem;
        padding: 1.6rem;
        


        &::placeholder{
            color: ${props=>props.theme["gray_300"]};
        }

        &:focus{
            outline: none;
            border: 2px solid ${props=>props.theme["purple_dark"]}
        }
    }
`

