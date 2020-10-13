import React, {useEffect, useState} from 'react';

import { Container } from './styles';

import {PlayerMoreDataProps} from '../../interfaces';

import api from '../../services/api';

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

    const [playerData, setPlayerData] = useState<PlayerMoreDataProps>({} as PlayerMoreDataProps);

    useEffect(() => {
        async function getPlayerById(){
            const response = await api.get(`/player/${data.player_id}`);
            console.log('PRIMEIRO')
            console.log(response)
            if(response.data[0]){
                setPlayerData(response.data[0]);
            }else{
                // addToast('Players Data is empty.', { appearance: 'error' })
            }
        }

        getPlayerById()
        
    }, [])



    return (
        <Container >
            <div className="biggerCardInfo">
                <img src={playerData.photo_url} alt={data.yahoo_name}/>
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