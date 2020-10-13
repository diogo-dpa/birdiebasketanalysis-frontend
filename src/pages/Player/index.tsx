import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import { FaArrowLeft } from 'react-icons/fa';

// import RowInfo from '../../components/RowInfo';

import api from '../../services/api';

import { useToasts } from 'react-toast-notifications';

import { PlayerStatsProps, TeamDataProps, PlayerMoreDataProps } from '../../interfaces';

interface locationProps{
    data: PlayerMoreDataProps;
}

const Player: React.FC = ( ) => {

    const [playerStatsData, setPlayerStatsData] = useState<PlayerStatsProps>({} as PlayerStatsProps);

    const [teamData, setTeamData] = useState<TeamDataProps>({} as TeamDataProps);

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

    useEffect(() => {

        async function getTeamById(){
            console.log(playerStatsData)
            const response = await api.get(`/team/${playerStatsData.team_id}`);
            if(response.data){
                setTeamData(response.data[0])
                console.log(response.data)
                addToast('Selected Team got it!', { appearance: 'success' })
            }else{
                addToast('Selected Team not found.', { appearance: 'error' })
            }
        }
        getTeamById();

    }, [playerStatsData, addToast]);

    return (
        <Container primaryColor={teamData.primary_color}
                    secondaryColor={teamData.secondary_color}
                    tertiaryColor={teamData.tertiary_color}
                    quaternaryColor={teamData.quaternary_color}
        >
            <Link to="/">
                <FaArrowLeft size={40} color="#fde" />
            </Link>
            {
                playerStatsData? (
                    <div className="mainContent">
                        <div className="titlePlayerPage">
                            <img src={`${teamData.wikipedia_logo_url}`} alt={teamData.name}/>
                            <h1>{playerStatsData.name}</h1>
                        </div>
                        <div className="firstSection">
                            <img src={data.photo_url} alt={playerStatsData.name}/>
                        </div>

                        <div className="playerData">
                            <h2>Player Data</h2>
                            <div className="info">
                                <div className="metrics">
                                    <strong>{data.height}</strong>
                                    <span>Height</span>
                                </div>
                                <div className="metrics">
                                    <strong>{data.weight}</strong>
                                    <span>Weight</span>
                                </div>
                                <div className="metrics">
                                    <strong>{data.position}</strong>
                                    <span>Position</span>
                                </div>
                                <div className="metrics">
                                    <strong>{data.birth_state}</strong>
                                    <span>Country</span>
                                </div>
                                <div className="metrics">
                                    <strong>{data.experience}</strong>
                                    <span>Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="playerStats">
                            <h2>Player Statistics</h2>
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
                                </div>
                                <div className="upperInfo">
                                    <div className="metrics">
                                        <strong>{playerStatsData.assists}</strong>
                                        <span>Assists</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.steals}</strong>
                                        <span>Steals</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.blocked_shots}</strong>
                                        <span>Blocked Shots</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.personal_fouls}</strong>
                                        <span>Personal Fouls</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.player_efficiency_rating}</strong>
                                        <span>Eff. Rating</span>
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
                                <div className="lowerInfo">
                                    <div className="metrics">
                                        <strong>{playerStatsData.offensive_rebounds_percentage}</strong>
                                        <span>Offens. Rebounds (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.defensive_rebounds_percentage}</strong>
                                        <span>Defens. Rebounds (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.total_rebounds_percentage}</strong>
                                        <span>Total. Rebounds (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.usage_rate_percentage}</strong>
                                        <span>Usage Rate (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.steals_percentage}</strong>
                                        <span>Steals (%)</span>
                                    </div>
                                    <div className="metrics">
                                        <strong>{playerStatsData.turn_overs_percentage}</strong>
                                        <span>Turn Over (%)</span>
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