import styled from "styled-components";

export const ListComponentContainer=styled.li`

    display: flex;

    justify-content: center;
    gap: 1.2rem;


    padding: 16px 16px 14px;

    width: 100%;
    height: 7.2rem;
    background: ${props=>props.theme["gray_500"]};
    border-radius: 8px;
    border: 2px solid ${props=>props.theme["gray_400"]};

    >span{
        flex:1;
        max-width: 63.2rem  ;
    }

        .styleButtonWhenNoChecked{
            svg{
                color: ${props=>props.theme["blue"]};
                border-radius: 999px    ;

                &:hover{
                    background:${props=>props.theme["blue_dark"]} ;
                }
            }
        }

        .styleButtonWhenChecked{
            svg{
                background: ${props=>props.theme["purple_dark"]};
                
                border-radius: 999px;
            }
        }

        .styleTextWhenChecked{
            color:${props=>props.theme["gray_300"]} ;
            text-decoration: line-through

        }

        .styleTextWhenNoChecked{
            color:${props=>props.theme["gray_100"]}
            
        }



        .buttonDelete{
            width:2.4rem;
            height: 2.4rem;
            
            border: none;
            border-radius: 4px;
            background: transparent;
            
            display: flex;
            align-items: center;
            justify-content: center;
            

            &:hover{
                background:${props=>props.theme["gray_400"]};
                color:${props=>props.theme["danger"]};
            
            }
        }
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

export const ButtonCheckContainer=styled.button`
    background: transparent;
    border: none;
    width: 1.5rem;
    height: 1rem;
    
    border-radius:1000px;


`