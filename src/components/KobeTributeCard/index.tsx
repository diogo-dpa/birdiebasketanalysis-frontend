import React from 'react';

import { Container } from './styles';

import  kobePhoto from '../../assets/kobePhoto.jpg';

const KobeTributeCard: React.FC = ( ) => {

    return (
        <Container >
            <div className="biggerCardInfo">
                <img src={kobePhoto} alt="Kobe Bryant"/>
                <div className="descriptionPlayer">
                    <div className="leftSide">
                        <strong className="playerName">Kobe Bryant</strong>
                    </div>
                    <div className="rightSide">
                        <strong>SG</strong>
                        <span>Position</span>
                    </div>
                </div>

                <div>
                    <div className="infoPlayer">
                        <div className="infoColumns">
                            <div className="upperPart">
                                <strong>1346</strong>
                                <span>Games</span>
                            </div>
                            <div className="lowerPart">
                                <strong>25</strong>
                                <span>Points/game</span>
                            </div>
                        </div>
                        <div className="infoColumns">
                            <div className="upperPart">
                                <strong>4.7</strong>
                                <span>Assists/game</span>
                            </div>
                            <div className="lowerPart">
                                <strong>83.7</strong>
                                <span>Throws (%)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default KobeTributeCard;