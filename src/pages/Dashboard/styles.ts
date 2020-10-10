import styled from 'styled-components'; 

export const ContainerDashboard = styled.div`
    width: 100%;
    height: 100%;
    color: #000;

    .main{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;

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