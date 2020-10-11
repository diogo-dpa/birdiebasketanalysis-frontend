import styled from 'styled-components'; 

interface TeamContainerProps{
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    quaternaryColor: string,
}

export const Container = styled.div`
    width: 100%;
    height: 120px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 15px;


    div{
        width: 85%;
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background: linear-gradient(120deg, #${(props: TeamContainerProps) => props.primaryColor}, #${(props: TeamContainerProps) => props.secondaryColor});
        border-radius: 10px;

        img{
            height: auto;
            max-height: 90px;
            width: 15%;
            background: transparent;
        }

        .mainInfoCard{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: transparent;

            strong{
                font-weight: 600;
                font-size: 26px;
                color: #${(props: TeamContainerProps) => props.tertiaryColor};
            }
            span{
                font-size: 14px;
            }
        }

        .buttonSide{
            width: 30%;
            background: transparent;
            button{

                padding: 8px 10px;
                border-radius: 10px;
                outline: none;
                border: none;
                transition: opacity 0.2s;

                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }

`;