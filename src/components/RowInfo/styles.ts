import styled from 'styled-components'; 

export const Container = styled.div`
    width: 80%;
    height: 100px;
    background: #bababa;

    margin-top: 15px;

    div{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;

        img{
            width: auto;
        }

        .mainInfoCard{
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .numbersInfo{
            width: 55%;
            display: flex;
            justify-content: space-evenly;

            .metricsCard{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        .buttons{
            width: 60px;
            height: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            margin: 0 15px;

            .plusCircle{

                height: auto;
                width: auto;
                
                cursor: pointer;

                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }

`;