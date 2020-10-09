import React from 'react';

import { Container } from './styles';

interface DataProps{
    photo_url: string,
    first_name: string,
    last_name: string,
    position: string,
    college: string,
    height: string,
    weight: number,
    yahoo_name: string,
    injury_status: string,
    experience: string,
    fourthMetricNumber: number,
    fourthMetricInfo: string,
    fivethMetricNumber: number,
    fivethMetricInfo: string,
}

interface IRowInfoProps{
    data: DataProps,
};

const CardPlayer: React.FC<IRowInfoProps> = ( { data } : IRowInfoProps ) => {

    return (
        <Container>
            <div className="biggerCardInfo">
                <img src={data.photo_url} alt={data.yahoo_name}/>
                <div className="descriptionPlayer">
                    <div className="leftSide">
                        <strong>3</strong>
                        <span>place</span>
                    </div>
                    <div className="rightSide">
                        <strong>{data.position}</strong>
                        <span>{data.college}</span>
                    </div>
                </div>

                <div>
                    <div className="infoPlayer">
                        <div className="infoColumns">
                            <div className="upperPart">
                                <strong>{data.height}</strong>
                                <span>Height</span>
                            </div>
                            <div className="lowerPart">
                                <strong>{data.weight}</strong>
                                <span>Weight</span>
                            </div>
                        </div>
                        <div className="infoColumns">
                            <div className="upperPart">
                                <strong>{data.injury_status}</strong>
                                <span>Injury</span>
                            </div>
                            <div className="lowerPart">
                                <strong>{data.experience}</strong>
                                <span>Experience</span>
                            </div>
                        </div>
                        <div className="infoColumns">
                            <div className="upperPart">
                                <strong>3</strong>
                                <span>place</span>
                            </div>
                            <div className="lowerPart">
                                <strong>4</strong>
                                <span>place</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default CardPlayer;