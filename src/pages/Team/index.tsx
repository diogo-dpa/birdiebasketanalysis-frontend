import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import BarChart from '../../components/BarChart';

import { FaArrowLeft } from 'react-icons/fa';

import RowInfo from '../../components/RowInfo';
import CardPlayer from '../../components/CardPlayer';

import api from '../../services/api';

import { useToasts } from 'react-toast-notifications';

import { PlayerStatsProps, DataChartProps, PlayerMoreDataProps, TeamDataProps } from '../../interfaces';
import { createNoSubstitutionTemplateLiteral } from 'typescript';

interface DataProps{
    img: string,
    name: string,
    info: string,
    team_id: number;
}

// interface PlayerStatsProps{
//     games: number,
//     assists: number,
//     three_pointers_percentage: number,
//     two_pointers_percentage: number,
//     usage_rate_percentage: number,
//     total_rebounds_percentage: number,
//     points: number,
//     steals_percentage: number,
//     player_efficiency_rating: number,
//     minutes: number,
//     free_throws_percentage: number,
//     field_goals_percentage: number,
//     // fantasy_points_yahoo: number,
//     blocks_percentage: number,
//     effective_field_goals_percentage: number,
//     blocked_shots: number,
//     name: string,
// }

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
// interface DataChartProps{
//     metric: string,
//     first: number,
//     second: number,
// };

interface PlayersSelectedProps{
    firstPlayer: string,
    secondPlayer: string,
}

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
        // fantasy_points_yahoo: 0,
        blocks_percentage: 0,
        effective_field_goals_percentage: 0,
        blocked_shots: 0,
    } as PlayerStatsProps;

    const [teamData, setTeamData] = useState<TeamDataProps>({} as TeamDataProps);

    const [teamStatsData, setTeamStatsData] = useState<TeamStatsDataProps>({} as TeamStatsDataProps);

    const [playersInTeam, setPlayersInTeam] = useState<PlayerMoreDataProps[]>([] as PlayerMoreDataProps[]);

    const [top3PlayersInTeam, setTop3PlayersInTeam] = useState<PlayerMoreDataProps[]>([] as PlayerMoreDataProps[]);

    const [firstPlayerToCompare, setFirstPlayerToCompare] = useState(0);
    const [firstPlayerToCompareWithData, setFirstPlayerToCompareWithData] = useState<PlayerStatsProps>(initialPlayerStats);
    const [firstPlayerSelected, setFirstPlayerSelected] = useState(false);
    const [secondPlayerToCompare, setSecondPlayerToCompare] = useState(0);
    const [secondPlayerToCompareWithData, setSecondPlayerToCompareWithData] = useState<PlayerStatsProps>(initialPlayerStats);
    const [secondPlayerSelected, setSecondPlayerSelected] = useState(false);

    const { addToast } = useToasts();

    let props = useLocation<locationProps>();

    const data = props.state.data;

    useEffect(() => {


        async function getTeamById(){
            const response = await api.get(`/team/${data.team_id}`);
            if(response.data){
                setTeamData(response.data[0])
                addToast('Selected Team got it!', { appearance: 'success' })
            }else{
                addToast('Selected Team not found.', { appearance: 'error' })
            }
        }
        getTeamById()

        async function getTeamStatsById(){
            const response = await api.get(`/teamstats/${data.team_id}`);
            if(response.data){
                setTeamStatsData(response.data[0])
                addToast('Team Stats got it!', { appearance: 'success' })
            }
            else{
                addToast('Team Stats not found.', { appearance: 'error' })
            }
        }
        getTeamStatsById()

        async function getPlayersFromTeam(){
            const response = await api.get(`/player/team/${data.team_id}`);
            if(response.data){
                setPlayersInTeam(response.data)
                addToast('Players from Team got it!', { appearance: 'success' })
            }
            else{
                addToast('Players not found.', { appearance: 'error' })
            }
        }
        getPlayersFromTeam()

        async function getTop3PlayersByPoints(){
            const response = await api.get(`/player/team/${data.team_id}/top3/points`);

            
            if(response.data){
                setTop3PlayersInTeam(response.data)
                addToast('Top 3 Players from Team got it!', { appearance: 'success' })
            }
            else{
                addToast('Players not found.', { appearance: 'error' })
            }
        }
        getTop3PlayersByPoints()
        
    }, [])

    useEffect(() => {
        console.log('ENTROU 1º player')
        console.log(firstPlayerToCompare)
        async function getPlayerStatsById(){
            const response = await api.get(`/playerstats/${firstPlayerToCompare}`);
            console.log(response.data)
            if(response.data[0]){
                setFirstPlayerToCompareWithData(response.data[0])
                addToast('Player added on chart!', { appearance: 'success' })
            }else{
                addToast('[Chart] Player Stats not found.', { appearance: 'error' })
            }
        }
        getPlayerStatsById()
        
    }, [firstPlayerToCompare, setFirstPlayerToCompareWithData])

    useEffect(() => {
        console.log('ENTROU 2º player')
        async function getPlayerStatsById(){
            const response = await api.get(`/playerstats/${secondPlayerToCompare}`);
            console.log(response.data)
            if(response.data[0]){
                setSecondPlayerToCompareWithData(response.data[0]);
                addToast('Player added on chart!', { appearance: 'success' });
            }else{
                addToast('[Chart] Player Stats not found.', { appearance: 'error' })
            }
        }
        getPlayerStatsById()
        
    }, [secondPlayerToCompare, setSecondPlayerToCompareWithData])

    // useEffect(() => {
    //     const playersDataFromTop3 = top3PlayersInTeam.filter( (item: PlayerMoreDataProps) => {
    //         playersInTeam.filter( (itemInside: PlayerMoreDataProps) => itemInside.player_id == item.player_id)
    //     });
    //     console.log('AQUIO')
    //     console.log(playersDataFromTop3)
    // }, [top3PlayersInTeam, playersInTeam])
    
    

    // let dataProps: PlayerStatsProps[] = []
    let dataProps: DataChartProps[] = []
    dataProps = [{
        metric: "Games",
        first: firstPlayerToCompareWithData.games,
        second: secondPlayerToCompareWithData.games,
    },
    {
        metric: "Assists",
        first: firstPlayerToCompareWithData.assists,
        second: secondPlayerToCompareWithData.assists,
    },
    {
        metric: "3 point.(%)",
        first: firstPlayerToCompareWithData.three_pointers_percentage,
        second: secondPlayerToCompareWithData.three_pointers_percentage,
    },
    {
        metric: "2 point.(%)",
        first: firstPlayerToCompareWithData.two_pointers_percentage,
        second: secondPlayerToCompareWithData.two_pointers_percentage,
    },
    {
        metric: "Usage(%)",
        first: firstPlayerToCompareWithData.usage_rate_percentage,
        second: secondPlayerToCompareWithData.usage_rate_percentage,
    },
    {
        metric: "Rebounds(%)",
        first: firstPlayerToCompareWithData.total_rebounds_percentage,
        second: secondPlayerToCompareWithData.total_rebounds_percentage,
    },
    {
        metric: "Points",
        first: firstPlayerToCompareWithData.points,
        second: secondPlayerToCompareWithData.points,
    },
    {
        metric: "Steals(%)",
        first: firstPlayerToCompareWithData.steals_percentage,
        second: secondPlayerToCompareWithData.steals_percentage,
    },
    {
        metric: "Player eff.",
        first: firstPlayerToCompareWithData.player_efficiency_rating,
        second: secondPlayerToCompareWithData.player_efficiency_rating,
    },
    {
        metric: "Minutes",
        first: firstPlayerToCompareWithData.minutes,
        second: secondPlayerToCompareWithData.minutes,
    },
    {
        metric: "Free thr.(%)",
        first: firstPlayerToCompareWithData.free_throws_percentage,
        second: secondPlayerToCompareWithData.free_throws_percentage,
    },
    {
        metric: "Field goals(%)",
        first: firstPlayerToCompareWithData.field_goals_percentage,
        second: secondPlayerToCompareWithData.field_goals_percentage,
    },
    {
        metric: "Blocks(%)",
        first: firstPlayerToCompareWithData.blocks_percentage,
        second: secondPlayerToCompareWithData.blocks_percentage,
    },
    {
        metric: "Eff. Goals(%)",
        first: firstPlayerToCompareWithData.effective_field_goals_percentage,
        second: secondPlayerToCompareWithData.effective_field_goals_percentage,
    },
    {
        metric: "Blocked Shots",
        first: firstPlayerToCompareWithData.blocked_shots,
        second: secondPlayerToCompareWithData.blocked_shots,
    }
    ];

    const cardColors = { 
        firstColor: teamData.primary_color, 
        secondColor: teamData.secondary_color,
        thirdColor: teamData.tertiary_color, 
        fourthColor: teamData.quaternary_color
    };
    
    return (
        <Container primaryColor={teamData.primary_color}
            secondaryColor={teamData.secondary_color}
            tertiaryColor={teamData.tertiary_color}
            quaternaryColor={teamData.quaternary_color}
        >
            <Link to="/">
                <FaArrowLeft size={40} color="#fde" />
            </Link>
            <div className="mainContent">
                <img src={teamData.wikipedia_logo_url} alt={teamData.name}/>
                <h1>{teamData.name}</h1>
                <div className="firstSection">
                    <h2>Top 3 jogadores por pontos</h2>

                    <div className="showPlayers">
                        {top3PlayersInTeam.map((item, index: number) => {

                            return (
                                <CardPlayer data={item} key={index} 
                                    colors={cardColors}/>
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
                    <div className="lowerInfo">
                        <div className="metrics">
                            <strong>{teamStatsData.blocked_shots}</strong>
                            <span>Blocked Shots</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.fantasy_points}</strong>
                            <span>Fantasy Points</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.free_throws_made}</strong>
                            <span>Free Throws Made</span>
                        </div>
                        <div className="metrics">
                            <strong>{teamStatsData.free_throws_percentage}</strong>
                            <span>Free Throws (%)</span>
                        </div>
                    </div>
                </div>

                <div className="analysisSection">
                    <h2 className="analysisTitle" >Vamos comparar!</h2>
                    <div className="chartSection">
                        <BarChart dataProps={dataProps} 
                            players={{firstPlayer: firstPlayerToCompareWithData.name,
                                secondPlayer: secondPlayerToCompareWithData.name }}/>
                    </div>
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