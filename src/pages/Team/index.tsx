import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import BarChart from '../../components/BarChart';

import { FaArrowLeft } from 'react-icons/fa';

import RowInfo from '../../components/RowInfo';
import CardPlayer from '../../components/CardPlayer';

import api from '../../services/api';

interface DataProps{
    img: string,
    name: string,
    info: string,
    team_id: number;
}

interface PlayerStatsProps{
    games: number,
    assists: number,
    three_pointers_percentage: number,
    two_pointers_percentage: number,
    usage_rate_percentage: number,
    total_rebounds_percentage: number,
    points: number,
    steals_percentage: number,
    player_efficiency_rating: number,
    minutes: number,
    free_throws_percentage: number,
    field_goals_percentage: number,
    fantasy_points_yahoo: number,
    blocks_percentage: number,
    effective_field_goals_percentage: number,
    blocked_shots: number,
}

interface TeamStatsDataProps{
    games: number,
    wins: number,
    losses: number,
    assists: number,
    blocked_shots: number;
    fantasy_points: number;
    free_throws_made: number;
    free_throws_percentage: number;
}

interface locationProps{
    data: DataProps;
}
// interface IRowInfoProps{
//     data: DataProps,
// };

const Team: React.FC = ( ) => {

    const initialPlayerStats = {
        games: 0,
        assists: 0,
        three_pointers_percentage: 0,
        two_pointers_percentage: 0,
        usage_rate_percentage: 0,
        total_rebounds_percentage: 0,
        points: 0,
        steals_percentage: 0,
        player_efficiency_rating: 0,
        minutes: 0,
        free_throws_percentage: 0,
        field_goals_percentage: 0,
        fantasy_points_yahoo: 0,
        blocks_percentage: 0,
        effective_field_goals_percentage: 0,
        blocked_shots: 0,
    } as PlayerStatsProps;

    const [teamData, setTeamData] = useState<DataProps>({} as DataProps);

    const [teamStatsData, setTeamStatsData] = useState<TeamStatsDataProps>({} as TeamStatsDataProps);

    const [playersInTeam, setPlayersInTeam] = useState([]);

    const [firstPlayerToCompare, setFirstPlayerToCompare] = useState(0);
    const [firstPlayerToCompareWithData, setFirstPlayerToCompareWithData] = useState<PlayerStatsProps>(initialPlayerStats);
    const [firstPlayerSelected, setFirstPlayerSelected] = useState(false);
    const [secondPlayerToCompare, setSecondPlayerToCompare] = useState(0);
    const [secondPlayerToCompareWithData, setSecondPlayerToCompareWithData] = useState<PlayerStatsProps>(initialPlayerStats);
    const [secondPlayerSelected, setSecondPlayerSelected] = useState(false);

    let props = useLocation<locationProps>();

    const data = props.state.data;

    useEffect(() => {


        async function getTeamById(){
            const response = await api.get(`/team/${data.team_id}`);
            setTeamData(response.data[0])
        }
        getTeamById()

        async function getTeamStatsById(){
            const response = await api.get(`/teamstats/${data.team_id}`);
            setTeamStatsData(response.data[0])
        }
        getTeamStatsById()

        async function getPlayersFromTeam(){
            const response = await api.get(`/player/team/${data.team_id}`);
            setPlayersInTeam(response.data)
        }
        getPlayersFromTeam()
        
    }, [])

    useEffect(() => {
        console.log('ENTROU')
        console.log(firstPlayerToCompare)
        async function getPlayerStatsById(){
            const response = await api.get(`/playerstats/${firstPlayerToCompare}`);
            console.log(response.data)
            setFirstPlayerToCompareWithData(response.data[0])
        }
        getPlayerStatsById()
        
    }, [firstPlayerToCompare, setFirstPlayerToCompareWithData])

    useEffect(() => {
        async function getPlayerStatsById(){
            const response = await api.get(`/playerstats/${secondPlayerToCompare}`);
            console.log(response.data)
            setSecondPlayerToCompareWithData(response.data[0])
        }
        getPlayerStatsById()
        
    }, [secondPlayerToCompare, setSecondPlayerToCompareWithData])

    let dataProps: PlayerStatsProps[] = []
    dataProps = [
            firstPlayerToCompareWithData,
            secondPlayerToCompareWithData,
    ];
    

    return (
        <Container>
            <Link to="/">
                <FaArrowLeft size={40} />
            </Link>
            <div className="mainContent">
                <h1>{teamData.name}</h1>
                <div className="firstSection">
                    <h2>Top 3 jogadores</h2>

                    <div className="showPlayers">
                        {playersInTeam.slice(0,3).map((item, index: number) => {

                            return (
                                <CardPlayer data={item} key={index} />
                            );

                        })}
                    </div>
                </div>

                <div className="infoTeam">
                    <div className="upperInfo">
                        <div className="metrics">
                            <strong>{teamStatsData.games}</strong>
                            <span>Games</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.wins}</strong>
                            <span>Wins</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.losses}</strong>
                            <span>Losses</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.assists}</strong>
                            <span>Assists</span>
                        </div>
                    </div>
                    <div className="lopperInfo">
                        <div className="metrics">
                            <strong>{teamStatsData.blocked_shots}</strong>
                            <span>Blocked_shots</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.fantasy_points}</strong>
                            <span>fantasy_points</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.free_throws_made}</strong>
                            <span>free_throws_made</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.free_throws_percentage}</strong>
                            <span>free_throws_percentage</span>
                        </div>
                    </div>
                </div>

                <div className="analysisSection">
                    <h2>Vamos comparar!</h2>
                    <div>
                        <BarChart dataProps={dataProps} />
                    </div>
                    <Link to="">
                        <button>
                            Comparar times
                        </button>
                    </Link>
                </div>

                <div className="secondSection">
                <h2>Meu time</h2>
                    {playersInTeam.map((item, index: number) => {

                        return (
                            <RowInfo data={item} key={index} 
                                firstSelected={firstPlayerSelected} setFirstSelected={setFirstPlayerSelected}
                                secondSelected={secondPlayerSelected} setSecondSelected={setSecondPlayerSelected}
                                setFirstPlayerToCompare={setFirstPlayerToCompare} 
                                setSecondPlayerToCompare={setSecondPlayerToCompare}
                            />
                        );

                    })}
                </div>

            </div>
        </Container>
    );
};

export default Team;