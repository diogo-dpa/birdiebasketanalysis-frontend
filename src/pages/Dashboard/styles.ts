import styled from 'styled-components'; 

// import imageHome from '../../assets/fundoHome.jpg';
// import imageHome from '../../assets/nbaHomeLogo.png';
import imageHome from '../../assets/nbaHomeLogoWithoutBG.png';

interface DashboardProps{
    hasString: boolean;
}

export const ContainerDashboard = styled.div`
    width: 100%;
    height: 100%;
    color: #000;

    /* background-image: url(${imageHome}); */
    /* background-color:linear-gradient(120deg, #17408B, #FFFFFF, #C9082A); */
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background:linear-gradient(120deg, #fc4c02, #FFFFFF);
    /* background:linear-gradient(-120deg, #e80029, #40b4e5, #7c868d); */
    /* background:linear-gradient(120deg, #006fbf, #ff7b00); */

    .main{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        .mainTitle{
            max-width: 400px;
            display: flex;
            flex-direction: row;
            align-items: center;

            h1{
                font-family: 'Fredoka One', cursive;
                font-size: 68px;
                img{
                    width: 70px;
                }
            }
        }

        p{
            font-size: 30px;
        }

        .firstPart{
            width: 100%;

            h2{
                font-size: 26px;
                font-weight: 600;
            }

            .filterPart{
                display: flex;
                flex-direction: column;
                padding: 0 20px;
                padding-bottom: 20px;

                span{
                    font-size: 23px;
                    color: #FFFFFF;

                }

                .divFieldsSeach{

                    strong{
                        font-size: 21px;
                        color: #FFFFFF;
                    }

                    & + .divFieldsSeach{
                        margin-top: 45px;
                    }
                    /* .fieldInputs{ */

                        /* background:linear-gradient(120deg, #17408B, #FFFFFF, #C9082A); */

                        form{
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            grid-template-rows: 1fr 1fr;
                        }
                        .labelInputField{
                            width: 40%;
                            display: flex;
                            flex-direction: column;
                            input{
                                border-radius: 5px;
                                border: none;
                                outline: none;
                                padding-left: 5px;
                            }
                        }
                    /* } */

                    .mediumPart{
                        width: 100%;
                        height: 300px;
                        overflow: hidden;

                        padding: 30px 0;

                        h2{
                            font-size: 23px;
                        }


                        .resultSearch{
                            height: 100%;
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            column-gap: 30px;
                            overflow-y: scroll;

                        }

                        .barChartPart{
                            width: 100%;
                            height: 300px;
                        }
                    }
                }
            }
        }


        .lastPart{
            width: 100%;
            height: 500px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            padding: 30px 0;
            overflow: hidden;

            .teamsSectionDashboard{
                width: 45%;
                height: 100%;
                overflow-y: scroll;
            }
            .playersSectionDashboard{
                width: 45%;
                height: 100%;
                overflow-y: scroll;
            }
        }
    }
`;