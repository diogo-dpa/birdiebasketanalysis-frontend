import React, {} from 'react';

import { Container } from './styles';

interface DataProps{
    player_id: number,
    photo_url: string,
    first_name: string,
    last_name: string,
    position: string,
    college: string,
    height: number,
    weight: number,
    yahoo_name: string,
    injury_status: string,
    experience: string,
    free_throws_percentage: number,
    assists: number,
    steals: number
    points: number,
    name: string,
}

interface IRowInfoProps{
    data: DataProps,
};

const CardPlayer: React.FC<IRowInfoProps> = ( { data } : IRowInfoProps ) => {

    console.log('CARAD')
    console.log(data)



    return (
        <Container>
            <div className="biggerCardInfo">
                <img src={data.photo_url} alt={data.yahoo_name}/>
                <div className="descriptionPlayer">
                    <div className="leftSide">
                        <strong className="playerName">{data.name}</strong>
                    </div>
                    <div className="rightSide">
                        <strong>{data.position}</strong>
                        <span>Position</span>
                    </div>
                </div>

                <div>
                    <div className="infoPlayer">
                        <div className="infoColumns">
                            <div className="upperPart">
                                <strong>{data.points}</strong>
                                <span>Points</span>
                            </div>
                            <div className="lowerPart">
                                <strong>{data.steals}</strong>
                                <span>Steals</span>
                            </div>
                        </div>
                        <div className="infoColumns">
                            <div className="upperPart">
                                <strong>{data.assists}</strong>
                                <span>Assists</span>
                            </div>
                            <div className="lowerPart">
                                <strong>{data.free_throws_percentage}</strong>
                                <span>Throws (%)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default CardPlayer;