import styled from 'styled-components'; 

export const Container = styled.div`
    width: 80%;
    height: 100px;

    margin-top: 15px;
    color: #000;

    div{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;

        background:linear-gradient(120deg, #17408B, #FFFFFF, #C9082A);
        border-radius: 10px;

        img{
            width: auto;
            margin-left: 5px;
        }

        .mainInfoCard{
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: transparent;

            strong{
                    font-weight: 600;
                    font-size: 20px;
            }
            span{
                font-size: 13px;
            }
        }

        .numbersInfo{
            width: 55%;
            display: flex;
            justify-content: space-evenly;
            background: transparent;

            .metricsCard{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: transparent;
                strong{
                    font-weight: 600;
                    font-size: 20px;
                }
                span{
                    font-size: 13px;
                }
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
            background: transparent;

            a{
                svg{
                    &:hover{
                        opacity: 0.8;
                    }
                }
            }

            .plusCircle{

                height: auto;
                width: auto;
                
                cursor: pointer;
                background: transparent;

                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }

`;