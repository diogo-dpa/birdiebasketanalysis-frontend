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
        
        display: flex;
        flex-direction: column;
        align-items: center;


        .firstSection{
            width: 80%;
            height: auto;

            display: flex;
            flex-direction: column;

            .showPlayers{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
            }

        }

        .analysisSection{
            width: 100%;
            height: 400px;

        }

        .secondSection{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;