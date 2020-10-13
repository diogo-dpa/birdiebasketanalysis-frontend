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

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background:linear-gradient(120deg, #17408B, #FFFFFF, #C9082A);
        border-radius: 10px;

        img{
            width: 15%;
        }

        .mainInfoCard{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: transparent;

            strong{
                max-width: 110px;
                overflow: hidden;
                font-size: 20px !important;
                color: #000 !important;
                
                margin-left: 15px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        }

        .buttonSide{
            width: 30%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            background: transparent;

            a, .plusCircle{
                cursor: pointer;
                background: transparent;
                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }

`;