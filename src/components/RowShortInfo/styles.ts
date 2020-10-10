import styled from 'styled-components'; 

export const Container = styled.div`
    width: 100%;
    height: 120px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 15px;

    div{
        width: 85%;
        height: 100%;
        background: #bababa;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        img{
            width: 15%;
        }

        .mainInfoCard{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .buttonSide{
            width: 30%;
            button{

                padding: 8px 10px;
                border-radius: 10px;
                outline: none;
                border: none;
                transition: opacity 0.2s;

                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }

`;