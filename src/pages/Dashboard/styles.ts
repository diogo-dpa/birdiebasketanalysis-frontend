import styled from 'styled-components'; 

export const ContainerDashboard = styled.div`
    width: 100%;
    height: 100%;
    color: #000;

        /* hr .solidDivider{
            border-top: 3px solid #bbb;
        } */

    .main{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        .firstPart{
            width: 100%;
            height: 450px;

            .filterPart{
                display: flex;
                flex-direction: column;

            }
        }

        .mediumPart{
            width: 100%;
            height: 200px;
        }

        .lastPart{
            width: 100%;
            height: 500px;
            display: flex;
            flex-direction: row;

            .teamsSectionDashboard{
                width: 50%;
                height: 100%;
            }
            .playersSectionDashboard{
                width: 50%;
                height: 100%;

            }
        }
    }
`;