import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import { FaArrowLeft } from 'react-icons/fa';

// import RowInfo from '../../components/RowInfo';

import api from '../../services/api';

import { useToasts } from 'react-toast-notifications';

import { PlayerStatsProps, DataProps } from '../../interfaces';

// interface DataProps{
//     img: string,
//     name: string,
//     info: string,
//     player_id: string,
//     photo_url: string,
// }

// interface PlayerStatsDataProps{
//     name: string,
//     games: number,
//     minutes: number,
//     points: number,
//     assists: number,
//     field_goals_percentage: number,
//     two_pointers_percentage: number,
//     three_pointers_percentage: number,
//     free_throws_percentage: number,
//     true_shooting_percentage: number,
//     blocks_percentage: number,
// }

interface locationProps{
    data: DataProps;
}

const Player: React.FC = ( ) => {

    const [playerStatsData, setPlayerStatsData] = useState<PlayerStatsProps>({} as PlayerStatsProps);

    let props = useLocation<locationProps>();

    const data = props.state.data;

    const { addToast } = useToasts();

    useEffect(() => {

        async function getPlayerStatsById(){
            const response = await api.get(`/playerstats/${data.player_id}`);
            if(response.data[0]){
                setPlayerStatsData(response.data[0])
                addToast('Player Stats got it!', { appearance: 'success' })
            }else{
                addToast('Players Stats is empty.', { appearance: 'error' })
            }
        }
        getPlayerStatsById()
        
    }, [])

    return (
        <Container>
            <Link to="/">
                <FaArrowLeft size={40} />
            </Link>
            {
                playerStatsData? (
                    <div className="mainContent">
                        <h1>{playerStatsData.name}</h1>
                        <div className="firstSection">
                            <img src={data.photo_url} alt={playerStatsData.name}/>
                        </div>

                        <div className="playerData">
                            <h2>Dados do jogador</h2>
                            <div className="info">
                                <div className="metrics">
                                    <strong>{playerStatsData.games}</strong>
                                    <span>Games</span>
                                </div>
                                <div className="metrics">
                                    <strong>{playerStatsData.minutes}</strong>
                                    <span>Minutes</span>
                                </div>
                                <div className="metrics">
                                    <strong>{playerStatsData.points}</strong>
                                    <span>Points</span>
                                </div>
                                <div className="metrics">
                                    <strong>{playerStatsData.assists}</strong>
                                    <span>Assists</span>
                                </div>
                            </div>
                        </div>

                        <div className="playerStats">
                            <h2>Estatísticas do jogador</h2>
                            <div className="infoPlayer">
                                <div className="upperInfo">
                                    <div className="metrics">
                                        <strong>{playerStatsData.games}</strong>
                                        <span>Games</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.minutes}</strong>
                                        <span>Minutes</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.points}</strong>
                                        <span>Points</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.assists}</strong>
                                        <span>Assists</span>
                                    </div>
                                </div>
                                <div className="lowerInfo">
                                    <div className="metrics">
                                        <strong>{playerStatsData.field_goals_percentage}</strong>
                                        <span>Field Goals (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.two_pointers_percentage}</strong>
                                        <span>2 Pointers (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.three_pointers_percentage}</strong>
                                        <span>3 Pointers (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.free_throws_percentage}</strong>
                                        <span>Free Throws (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.true_shooting_percentage}</strong>
                                        <span>True Shooting (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.blocks_percentage}</strong>
                                        <span>Blocks (%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                :
                <h1>Deu ruim...</h1>
            }
        </Container>
    );
};

export default Player;