import styled from 'styled-components'; 

interface TeamContainerProps{
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    quaternaryColor: string,
}

export const Container = styled.div`
    width: 260px;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 15px;

    div{
        width: 85%;
        height: 100%;
        background: #bababa;
        border-radius: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        background: linear-gradient(120deg, #${(props: TeamContainerProps) => props.primaryColor}, #${(props: TeamContainerProps) => props.secondaryColor});

        img{
            width: 15%;
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
                font-size: 17px;
                color: #${(props: TeamContainerProps) => props.tertiaryColor};
                margin-left: 15px;
            }
        }

        .buttonSide{
            width: 30%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            background: transparent;

            a, .plusCircle{
                cursor: pointer;
                background: transparent;
                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }

`;