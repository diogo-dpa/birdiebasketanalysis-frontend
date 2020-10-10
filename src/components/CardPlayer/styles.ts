import styled from 'styled-components'; 

export const Container = styled.div`

    width: 250px;
    height: 380px;
    background: #bababa;

    border-radius: 10px;

    .biggerCardInfo{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 140px;
            height: 180px;
            /* object-fit: cover; */
            border: 1px solid #fff;
        }

        .descriptionPlayer{
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            .leftSide, .rightSide{
                display: flex;
                flex-direction: column;
                align-items: center;

                strong{
                    font-size: 18px;
                    font-weight:600;
                }
                span{
                    font-size: 14px;
                }

                .playerName{
                    color: #001;
                }
            }
        }

        .infoPlayer{
            width: 100%;

            height: 150px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            .infoColumns{
                display: flex;
                flex-direction: column;
                align-items: space-evenly;

                .upperPart, .lowerPart{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    strong{
                        font-size: 25px;
                        font-weight: 600;
                    }
                    span{
                        font-size: 15px;
                    }
                }

                .lowerPart{
                    margin-top: 15px;
                }

                & + .infoColumns{
                    margin-left: 20px;
                }
            }
        }

    }
`;