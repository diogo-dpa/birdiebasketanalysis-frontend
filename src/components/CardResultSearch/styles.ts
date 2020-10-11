import styled from 'styled-components'; 

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

        img{
            width: 15%;
        }

        .mainInfoCard{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .buttonSide{
            width: 30%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            a, .plusCircle{
                cursor: pointer;
                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }

`;