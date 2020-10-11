import styled from 'styled-components'; 

// import imageHome from '../../assets/nbaHomeKobe.jpg';

export const ContainerDashboard = styled.div`
    width: 100%;
    height: 100%;
    color: #000;

    /* background-image: url($);
    background-repeat: no-repeat;
    background-size: cover; */
    /* background: linear-gradient(45deg, #2F1C53, #A46DFF, #F6D1FD); */
    /* background:linear-gradient(120deg, #fc4c02, #FFFFFF); */
    /* background:linear-gradient(-120deg, #e80029, #40b4e5, #7c868d); */
    /* background:linear-gradient(120deg, #006fbf, #ff7b00); */
    background:linear-gradient(120deg, #17408B, #FFFFFF, #C9082A);

    .main{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        .mainTitle{
            max-width: 300px;
            display: flex;
            flex-direction: row;
            align-items: center;

            img{
                width: 40px;
            }
        }

        .firstPart{
            width: 100%;

            .filterPart{
                display: flex;
                flex-direction: column;
                padding: 0 20px;
                padding-bottom: 20px;

                .divFieldsSeach{

                    & + .divFieldsSeach{
                        margin-top: 45px;
                    }

                    form{
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                    }
                    .labelInputField{
                        width: 40%;
                        display: flex;
                        flex-direction: column;
                    }
                    .mediumPart{
                        width: 100%;
                        height: 300px;
                        overflow: hidden;

                        padding: 30px 0;

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