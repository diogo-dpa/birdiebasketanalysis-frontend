import React, { useState, useEffect } from 'react';

import { ContainerDashboard } from './styles';

import RowShortInfo from '../../components/RowShortInfo';
import RowShortInfoPlayer from '../../components/RowShortInfoPlayers';

import basketBall from '../../assets/basketBallWithoutBG.png';

import BarChart from '../../components/BarChart';

import CardResultSearch from '../../components/CardResultSearch';
import CardResultSearchPlayer from '../../components/CardResultSearchPlayer';

import api from '../../services/api';

import { useToasts } from 'react-toast-notifications';

import { PlayerMoreDataProps, TeamDataProps, TeamStatsChartProps,
    PlayerStatsProps, DataChartProps
} from '../../interfaces';

interface PlayerDataProps{
    yahoo_name: string,
    position: string,
    team: string,
    player_id: number,
    photo_url: string,
}

// interface PlayerMoreDataProps{
//     yahoo_name: string,
//     position: string,
//     team: string,
//     player_id: number,
//     height: number,
//     weight: number,
//     birth_state: string,
//     first_name: string,
//     last_name: string,
//     photo_url: string,
// }

// interface TeamDataProps{
//     name: string,
//     division: string,
//     key: string,
//     city: string,
//     conference: string,
//     wikipedia_logo_url: string,
//     team_id: number,
// };

// interface TeamStatsChartProps{
//     assists: number,
//     blocked_shots: number,
//     effective_field_goals_percentage: number,
//     field_goals_percentage: number,
//     free_throws_percentage: number,
//     losses: number,
//     games: number,
//     three_pointers_percentage: number,
//     true_shooting_percentage: number,
//     two_pointers_percentage: number,
//     points: number,
//     name: string,
// }

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

// interface DataChartProps{
//     metric: string,
//     first: number,
//     second: number,
// };

const Dashboard: React.FC = () => {


    const [playersInDatabase, setPlayersInDatabase] = useState<PlayerMoreDataProps[]>([] as PlayerMoreDataProps[]);

    const [allTeams, setAllTeams] = useState<TeamDataProps[]>([] as TeamDataProps[]);
    
    const [playerSearched, setPlayerSearched] = useState<PlayerMoreDataProps[]>([] as PlayerMoreDataProps[]);
    const [firstPlayerSearched, setFirstPlayerSearched] = useState(false);
    const [secondPlayerSearched, setSecondPlayerSearched] = useState(false);
    
    const [firstPlayerSearchedWithStats, setFirstPlayerSearchedWithStats] = useState<PlayerStatsProps>({} as PlayerStatsProps);
    const [secondPlayerSearchedWithStats, setSecondPlayerSearchedWithStats] = useState<PlayerStatsProps>({} as PlayerStatsProps);
    
    // GET ID
    const [firstPlayerToCompare, setFirstPlayerToCompare] = useState(0);
    const [secondPlayerToCompare, setSecondPlayerToCompare] = useState(0);


    const [teamSearched, setTeamSearched] = useState<TeamDataProps[]>([] as TeamDataProps[]);
    const [firstTeamSearched, setFirstTeamSearched] = useState(false);
    const [secondTeamSearched, setSecondTeamSearched] = useState(false);

    const [firstTeamSearchedWithStats, setFirstTeamSearchedWithStats] = useState<TeamStatsChartProps>({} as TeamStatsChartProps);
    const [secondTeamSearchedWithStats, setSecondTeamSearchedWithStats] = useState<TeamStatsChartProps>({} as TeamStatsChartProps);

    // GET ID
    const [firstTeamToCompare, setFirstTeamToCompare] = useState(0);
    const [secondTeamToCompare, setSecondTeamToCompare] = useState(0);
    
    const { addToast } = useToasts();

    useEffect(() => {

        async function getAllTeams(){
            const response = await api.get('/team');
            if(response.data){
                setAllTeams(response.data)
                addToast('Teams stored!', { appearance: 'success' })
            }else{
                addToast('Teams not found.', { appearance: 'error' })
            }
        }
        getAllTeams()

        async function getSomePlayers(){
            const response = await api.get('/player');
            if(response.data){
                setPlayersInDatabase(response.data)
                addToast('Players stored!', { appearance: 'success' })
            }else{
                addToast('Players not found.', { appearance: 'error' })
            }
        }
        getSomePlayers();

        
    }, [])

    //  GET TEAM STATS
    useEffect(() => {
        async function getTeamStatsById(){
            const response = await api.get(`/teamstats/${firstTeamToCompare}`);
            if(response.data[0]){
                setFirstTeamSearchedWithStats(response.data[0])
            }else{
                addToast('[Chart] Team Stats not found.', { appearance: 'error' })
            }
        }
        getTeamStatsById()
        
    }, [firstTeamToCompare, setFirstTeamSearchedWithStats])

    useEffect(() => {
        console.log('ENTROU 2º player')
        async function getTeamStatsById(){
            const response = await api.get(`/teamstats/${secondTeamToCompare}`);
            if(response.data[0]){
                setSecondTeamSearchedWithStats(response.data[0])
            }else{
                addToast('[Chart] Team Stats not found.', { appearance: 'error' })
            }
        }
        getTeamStatsById()
        
    }, [secondTeamToCompare, setSecondTeamSearchedWithStats])

    //  GET PLAYER STATS
    useEffect(() => {
        console.log('ENTROU 1º player')
        console.log(firstPlayerToCompare)
        async function getPlayerStatsById(){
            const response = await api.get(`/playerstats/${firstPlayerToCompare}`);
            console.log(response.data[0])
            if(response.data[0]){
                setFirstPlayerSearchedWithStats(response.data[0])
            }else{
                addToast('[Chart] Player Stats not found.', { appearance: 'error' })
            }
        }
        getPlayerStatsById()
        
    }, [firstPlayerToCompare, setFirstPlayerSearchedWithStats])

    useEffect(() => {
        console.log('ENTROU 2º player')
        async function getPlayerStatsById(){
            const response = await api.get(`/playerstats/${secondPlayerToCompare}`);
            if(response.data[0]){
                setSecondPlayerSearchedWithStats(response.data[0])
            }else{
                addToast('[Chart] Player Stats not found.', { appearance: 'error' })
            }
        }
        getPlayerStatsById()
        
    }, [secondPlayerToCompare, setSecondPlayerSearchedWithStats])


    let dataProps: DataChartProps[] = []
    dataProps = [{
        metric: "Games",
        first: firstTeamSearchedWithStats.games,
        second: secondTeamSearchedWithStats.games,
    },
    {
        metric: "Assists",
        first: firstTeamSearchedWithStats.assists,
        second: secondTeamSearchedWithStats.assists,
    },
    {
        metric: "3 point.(%)",
        first: firstTeamSearchedWithStats.three_pointers_percentage,
        second: secondTeamSearchedWithStats.three_pointers_percentage,
    },
    {
        metric: "2 point.(%)",
        first: firstTeamSearchedWithStats.two_pointers_percentage,
        second: secondTeamSearchedWithStats.two_pointers_percentage,
    },
    {
        metric: "Losses",
        first: firstTeamSearchedWithStats.losses,
        second: secondTeamSearchedWithStats.losses,
    },
    {
        metric: "Points",
        first: firstTeamSearchedWithStats.points,
        second: secondTeamSearchedWithStats.points,
    },
    {
        metric: "Free thr.(%)",
        first: firstTeamSearchedWithStats.free_throws_percentage,
        second: secondTeamSearchedWithStats.free_throws_percentage,
    },
    {
        metric: "Field Goals(%)",
        first: firstTeamSearchedWithStats.field_goals_percentage,
        second: secondTeamSearchedWithStats.field_goals_percentage,
    },
    {
        metric: "Eff. Goals(%)",
        first: firstTeamSearchedWithStats.effective_field_goals_percentage,
        second: secondTeamSearchedWithStats.effective_field_goals_percentage,
    },
    {
        metric: "Blocked Shots",
        first: firstTeamSearchedWithStats.blocked_shots,
        second: secondTeamSearchedWithStats.blocked_shots,
    }
    ];

    let dataPlayerProps: DataChartProps[] = []
    dataPlayerProps = [{
        metric: "Games",
        first: firstPlayerSearchedWithStats.games,
        second: secondPlayerSearchedWithStats.games,
    },
    {
        metric: "Assists",
        first: firstPlayerSearchedWithStats.assists,
        second: secondPlayerSearchedWithStats.assists,
    },
    {
        metric: "3 point.(%)",
        first: firstPlayerSearchedWithStats.three_pointers_percentage,
        second: secondPlayerSearchedWithStats.three_pointers_percentage,
    },
    {
        metric: "2 point.(%)",
        first: firstPlayerSearchedWithStats.two_pointers_percentage,
        second: secondPlayerSearchedWithStats.two_pointers_percentage,
    },
    {
        metric: "Usage(%)",
        first: firstPlayerSearchedWithStats.usage_rate_percentage,
        second: secondPlayerSearchedWithStats.usage_rate_percentage,
    },
    {
        metric: "Rebounds(%)",
        first: firstPlayerSearchedWithStats.total_rebounds_percentage,
        second: secondPlayerSearchedWithStats.total_rebounds_percentage,
    },
    {
        metric: "Points",
        first: firstPlayerSearchedWithStats.points,
        second: secondPlayerSearchedWithStats.points,
    },
    {
        metric: "Steals(%)",
        first: firstPlayerSearchedWithStats.steals_percentage,
        second: secondPlayerSearchedWithStats.steals_percentage,
    },
    {
        metric: "Player eff.",
        first: firstPlayerSearchedWithStats.player_efficiency_rating,
        second: secondPlayerSearchedWithStats.player_efficiency_rating,
    },
    {
        metric: "Minutes",
        first: firstPlayerSearchedWithStats.minutes,
        second: secondPlayerSearchedWithStats.minutes,
    },
    {
        metric: "Free thr.(%)",
        first: firstPlayerSearchedWithStats.free_throws_percentage,
        second: secondPlayerSearchedWithStats.free_throws_percentage,
    },
    {
        metric: "Field goals(%)",
        first: firstPlayerSearchedWithStats.field_goals_percentage,
        second: secondPlayerSearchedWithStats.field_goals_percentage,
    },
    {
        metric: "Blocks(%)",
        first: firstPlayerSearchedWithStats.blocks_percentage,
        second: secondPlayerSearchedWithStats.blocks_percentage,
    },
    {
        metric: "Eff. Goals(%)",
        first: firstPlayerSearchedWithStats.effective_field_goals_percentage,
        second: secondPlayerSearchedWithStats.effective_field_goals_percentage,
    },
    {
        metric: "Blocked Shots",
        first: firstPlayerSearchedWithStats.blocked_shots,
        second: secondPlayerSearchedWithStats.blocked_shots,
    }
    ];


    function handleTeamSearch(field: string, value: string){

        value = value.toLowerCase()
        let teamFound: TeamDataProps[]  = []
        console.log(value)
        if (value){
            switch (field) {
                case "name":
                    console.log(allTeams)
                    teamFound = allTeams.filter(item =>{
                        return item.name.toLowerCase().search(value) !== -1;
                    });
                    
                    break;
                case "city":
                    teamFound = allTeams.filter(item =>{
                        return item.city.toLowerCase().search(value) !== -1;
                    });
                    break;
                case "key":
                    teamFound = allTeams.filter(item =>{
                        return item.key.toLowerCase().search(value) !== -1;
                    })
                    break;
                case "conference":
                    teamFound = allTeams.filter(item =>{
                        return item.conference.toLowerCase().search(value) !== -1;
                    });
                    break;
                case "division":
                    teamFound = allTeams.filter(item =>{
                        return item.division.toLowerCase().search(value) !== -1;
                    });
                    break;
                default:
                    break;
            }
        }
        else{
            teamFound = []
        }
        setTeamSearched(teamFound)
    }

    function handlePlayerSearch(field: string, value: string){

        value = value.toLowerCase()
        let playerFound: PlayerMoreDataProps[]  = []
        console.log(value)
        if (value){
            switch (field) {
                case "first_name":
                    console.log(allTeams)
                    playerFound = playersInDatabase.filter(item =>{
                        return item.first_name.toLowerCase().search(value) !== -1;
                    });
                    
                    break;
                case "last_name":
                    playerFound = playersInDatabase.filter(item =>{
                        return item.last_name.toLowerCase().search(value) !== -1;
                    });
                    break;
                case "weight":
                    playerFound = playersInDatabase.filter(item =>{
                        return item.weight === Number(value);
                    })
                    break;
                case "height":
                    playerFound = playersInDatabase.filter(item =>{
                        return item.height === Number(value);
                    });
                    break;
                case "position":
                    playerFound = playersInDatabase.filter(item =>{
                        return item.position.toLowerCase().search(value) !== -1;
                    });
                    break;
                case "birth_state":
                    playerFound = playersInDatabase.filter(item =>{
                        if(item.birth_state){
                            return item.birth_state.toLowerCase().search(value) !== -1;
                        }
                    });
                    break;
                case "team":
                    playerFound = playersInDatabase.filter(item =>{
                        return item.team.toLowerCase().search(value) !== -1;
                    });
                    break;
                default:
                    break;
            }
        }
        else{
            playerFound = []
        }
        console.log('passou do filtro')
        console.log(playerFound)
        setPlayerSearched(playerFound)
        // return teamFound;
    }

    return (
        <ContainerDashboard>
            <div className="main">
                <div className="mainTitle">
                    <img src={basketBall} alt="Basket Ball"/>
                    <h1>NBA PLAYOFFS</h1>
                </div>
                <p>Seja bem vindo ao dashboard!</p>

                <div className="firstPart">
                    <h2>
                        Área de pesquisa
                    </h2>

                    <div className="filterPart">
                        <span>Pesquisar por:</span>
                        <div className="divFieldsSeach">
                            <strong>Times</strong>
                            <form >
                                <div className="labelInputField">
                                    <label>Nome:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Nome" 
                                        onChange={(e) => handleTeamSearch("name", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Chave:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Chave"
                                        onChange={(e) => handleTeamSearch("key", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Cidade:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Cidade"
                                        onChange={(e) => handleTeamSearch("city", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Conference:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Conference"
                                        onChange={(e) => handleTeamSearch("conference", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Divisão:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Divisão"
                                        onChange={(e) => handleTeamSearch("division", e.target.value)}
                                    />
                                </div>
                            </form>

                            <div className="mediumPart">
                                <h2>
                                    Resultado
                                </h2>
                                <div className="resultSearch">
                                    {   
                                        teamSearched? 
                                        teamSearched.map( (item, index) => {
                                            return (
                                                <CardResultSearch data={item} key={index} 
                                                    firstSelected={firstTeamSearched} setFirstSelected={setFirstTeamSearched}
                                                    secondSelected={secondTeamSearched} setSecondSelected={setSecondTeamSearched}
                                                    setFirstPlayerToCompare={setFirstTeamToCompare} 
                                                    setSecondPlayerToCompare={setSecondTeamToCompare}
                                                />
                                            )
                                        }):
                                        []
                                    }
                                </div>
                            </div>
                            <h2>Comparando...</h2>
                            <div className="barChartPart">
                                <BarChart dataProps={dataProps} 
                                    players={{firstPlayer: firstTeamSearchedWithStats.name,
                                        secondPlayer: secondTeamSearchedWithStats.name }}
                                />
                            </div>
                        </div>

                        <div className="divFieldsSeach">
                            <strong>Jogadores</strong>
                            <form >
                                <div className="labelInputField">
                                    <label>Primeiro Nome:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Primeiro Nome" 
                                        onChange={(e) => handlePlayerSearch("first_name", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Último Nome:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Último Nome" 
                                        onChange={(e) => handlePlayerSearch("last_name", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Altura:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Altura" 
                                        onChange={(e) => handlePlayerSearch("height", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Peso:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Peso" 
                                        onChange={(e) => handlePlayerSearch("weight", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Time (chave):</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Time"
                                        onChange={(e) => handlePlayerSearch("team", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Posição:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Posição"
                                        onChange={(e) => handlePlayerSearch("position", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>País:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="País"
                                        onChange={(e) => handlePlayerSearch("birth_state", e.target.value)}
                                    />
                                </div>
                            </form>

                            <div className="mediumPart">
                                <h2>
                                    Resultado
                                </h2>
                                <div className="resultSearch">
                                    {   
                                        playerSearched? 
                                        playerSearched.map( (item, index) => {
                                            return (
                                                < CardResultSearchPlayer data={item} key={index} 
                                                    firstSelected={firstPlayerSearched} setFirstSelected={setFirstPlayerSearched}
                                                    secondSelected={secondPlayerSearched} setSecondSelected={setSecondPlayerSearched}
                                                    setFirstPlayerToCompare={setFirstPlayerToCompare} 
                                                    setSecondPlayerToCompare={setSecondPlayerToCompare}
                                                />
                                            )
                                        }):
                                        []
                                    }
                                </div>
                            </div>
                            <h2>Comparando...</h2>
                            <div className="barChartPart">
                                <BarChart dataProps={dataPlayerProps} 
                                    players={{firstPlayer: firstPlayerSearchedWithStats.name,
                                        secondPlayer: secondPlayerSearchedWithStats.name }}
                                />
                            </div>
                        </div>



                    </div>
                </div>
                
                <div className="lastPart">
                    <div className="teamsSectionDashboard">
                        <strong>Times</strong>
                        {allTeams.map((item: TeamDataProps, index: number) => {

                            return (
                                <RowShortInfo data={item} key={index}/>
                            );
                            
                        })}
                    </div>
                    <div className="playersSectionDashboard">
                        <strong>Jogadores</strong>
                
                        {playersInDatabase.slice(0,30).map((item: PlayerMoreDataProps, index: number) => {

                            return (
                                <RowShortInfoPlayer data={item} key={index}/>
                            );
                            
                        })}
                    </div>
                </div>
                
            </div>
        </ContainerDashboard>
    );
};

export default Dashboard;