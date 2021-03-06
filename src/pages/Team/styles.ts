import styled from 'styled-components'; 

interface TeamContainerProps{
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    quaternaryColor: string,
}

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #${(props: TeamContainerProps) => props.tertiaryColor};

    position: relative;

    background: linear-gradient(45deg, #${(props: TeamContainerProps) => props.primaryColor}, #${(props: TeamContainerProps) => props.secondaryColor});

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

            h2{
                padding: 15px 0;
            }

            .kobeSection{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
            }

            .showPlayers{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
            }

        }

        .infoTeam{
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;
            align-items: center;

            padding: 35px 0;

            .upperInfo{
                width: 80%;
                height: 50%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-bottom: 30px;
            }

            .lowerInfo{
                width: 80%;
                height: 50%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }

            .metrics{
                display: flex;
                flex-direction: column;
                align-items: center;

                & + .metrics{
                    margin-left: 30px;
                }

                strong{
                    font-size: 30px;
                    font-weight: 600;
                }
                span{
                    font-size: 14px;
                }
            }
        }

        .analysisSection{
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            .analysisTitle{
                font-size: 40px;
                font-weight: 600;
            }

            .chartSection{
                width: 100%;
                height: auto;
            }

        }

        .secondSection{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-top: 20px;

            h2{
                text-align: left;
            }
        }
    }
`;