import styled from 'styled-components'; 

export const Container = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;

    position: relative;

    >a {
        position: absolute;
        top: 20px;
        left: 20px;
    }

    .mainContent{
        margin-top: 60px;

        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        .firstSection{
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 30px;

            img{
                width: 200px;
                height: 200px;
            }
        }

        .playerData{
            width: 100%;

            .info{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                padding: 15px 0;

                .metrics{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    & + .metrics{
                        margin-left: 45px;
                    }

                    strong{
                        font-size: 30px;
                        font-weight: 600;
                    }
                }
            }
        }
        .playerStats{
            width: 100%;

            .infoPlayer{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 15px 0;

                .upperInfo, .lowerInfo{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                .lowerInfo{
                    margin-top: 20px;
                }

                .metrics{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    & + .metrics{
                        margin-left: 45px;
                    }

                    strong{
                        font-size: 30px;
                        font-weight: 600;
                    }
                }
            }
        }
    }
`;