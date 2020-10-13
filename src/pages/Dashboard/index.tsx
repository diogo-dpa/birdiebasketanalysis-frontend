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

import { PlayerMoreDataProps, TeamDataProps, TeamStatsDataProps,
    PlayerStatsProps, DataChartProps
} from '../../interfaces';

interface PlayerDataProps{
    yahoo_name: string,
    position: string,
    team: string,
    player_id: number,
    photo_url: string,
}


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

    const [firstTeamSearchedWithStats, setFirstTeamSearchedWithStats] = useState<TeamStatsDataProps>({} as TeamStatsDataProps);
    const [secondTeamSearchedWithStats, setSecondTeamSearchedWithStats] = useState<TeamStatsDataProps>({} as TeamStatsDataProps);

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

        
    }, [addToast])

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
        
    }, [firstTeamToCompare, setFirstTeamSearchedWithStats, addToast])

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
        
    }, [secondTeamToCompare, setSecondTeamSearchedWithStats, addToast])

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


    let teamDataPropsRow01: DataChartProps[] = []
    let teamDataPropsRow02: DataChartProps[] = []
    teamDataPropsRow01 = [{
        metric: "Games",
        first: firstTeamSearchedWithStats.games,
        second: secondTeamSearchedWithStats.games,
    },
    {
        metric: "2 point.(%)",
        first: firstTeamSearchedWithStats.two_pointers_percentage,
        second: secondTeamSearchedWithStats.two_pointers_percentage,
    },
    {
        metric: "3 point.(%)",
        first: firstTeamSearchedWithStats.three_pointers_percentage,
        second: secondTeamSearchedWithStats.three_pointers_percentage,
    },
    {
        metric: "Losses",
        first: firstTeamSearchedWithStats.losses,
        second: secondTeamSearchedWithStats.losses,
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
        metric: "Eff. Goals(%)",
        first: firstTeamSearchedWithStats.effective_field_goals_percentage,
        second: secondTeamSearchedWithStats.effective_field_goals_percentage,
    },
    {
        metric: "Offens. Reb.(%)",
        first: firstTeamSearchedWithStats.offensive_rebounds_percentage,
        second: secondTeamSearchedWithStats.offensive_rebounds_percentage,
    },
    {
        metric: "Defens. Reb.(%)",
        first: firstTeamSearchedWithStats.defensive_rebounds_percentage,
        second: secondTeamSearchedWithStats.defensive_rebounds_percentage,
    },
    {
        metric: "Total. Reb.(%)",
        first: firstTeamSearchedWithStats.total_rebounds_percentage,
        second: secondTeamSearchedWithStats.total_rebounds_percentage,
    },
    {
        metric: "True Shoot.(%)",
        first: firstTeamSearchedWithStats.true_shooting_percentage,
        second: secondTeamSearchedWithStats.true_shooting_percentage,
    },

    ];

    teamDataPropsRow02 = [
        {
            metric: "Points",
            first: firstTeamSearchedWithStats.points,
            second: secondTeamSearchedWithStats.points,
        },
        {
            metric: "Assists",
            first: firstTeamSearchedWithStats.assists,
            second: secondTeamSearchedWithStats.assists,
        },
        {
            metric: "Blocked Shots",
            first: firstTeamSearchedWithStats.blocked_shots,
            second: secondTeamSearchedWithStats.blocked_shots,
        },
        {
            metric: "Steals",
            first: firstTeamSearchedWithStats.steals,
            second: secondTeamSearchedWithStats.steals,
        },
        {
            metric: "Turnovers",
            first: firstTeamSearchedWithStats.turnovers,
            second: secondTeamSearchedWithStats.turnovers,
        },
        {
            metric: "Pers. Fouls",
            first: firstTeamSearchedWithStats.personal_fouls,
            second: secondTeamSearchedWithStats.personal_fouls,
        },
    ]

    let dataPlayerPropsRow01: DataChartProps[] = []
    let dataPlayerPropsRow02: DataChartProps[] = []
    dataPlayerPropsRow01 = [
    {
        metric: "Assists",
        first: firstPlayerSearchedWithStats.assists,
        second: secondPlayerSearchedWithStats.assists,
    },
    {
        metric: "Points",
        first: firstPlayerSearchedWithStats.points,
        second: secondPlayerSearchedWithStats.points,
    },
    {
        metric: "Minutes",
        first: firstPlayerSearchedWithStats.minutes,
        second: secondPlayerSearchedWithStats.minutes,
    },
    ];

    dataPlayerPropsRow02 = [
        {
            metric: "Games",
            first: firstPlayerSearchedWithStats.games,
            second: secondPlayerSearchedWithStats.games,
        },
        {
            metric: "Player eff.",
            first: firstPlayerSearchedWithStats.player_efficiency_rating,
            second: secondPlayerSearchedWithStats.player_efficiency_rating,
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
            metric: "Steals(%)",
            first: firstPlayerSearchedWithStats.steals_percentage,
            second: secondPlayerSearchedWithStats.steals_percentage,
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
        <ContainerDashboard >
            <div className="main">
                <div className="mainTitle">
                    
                    <h1>NBA <br/>PLAY<img src={basketBall} alt="Basket Ball"/>FFS</h1>
                </div>
                <p>Welcome to Dashboard!</p>

                <div className="firstPart">
                    <h2>
                        Search area
                    </h2>

                    <div className="filterPart">
                        <span>Search by:</span>
                        <div className="divFieldsSeach">
                            {/* <div  className="fieldInputs"> */}
                                <strong>Teams</strong>
                                <form >
                                    <div className="labelInputField">
                                        <label>Name:</label>
                                        <input type="text" id="fname" 
                                            name="fname" placeholder="Type a name" 
                                            onChange={(e) => handleTeamSearch("name", e.target.value)}
                                        />
                                    </div>
                                    <div className="labelInputField">
                                        <label>Key:</label>
                                        <input type="text" id="lname" 
                                            name="lname" placeholder="Type a key"
                                            onChange={(e) => handleTeamSearch("key", e.target.value)}
                                        />
                                    </div>
                                    <div className="labelInputField">
                                        <label>City:</label>
                                        <input type="text" id="lname" 
                                            name="lname" placeholder="Type a city"
                                            onChange={(e) => handleTeamSearch("city", e.target.value)}
                                        />
                                    </div>
                                    <div className="labelInputField">
                                        <label>Conference:</label>
                                        <input type="text" id="lname" 
                                            name="lname" placeholder="Type a conference"
                                            onChange={(e) => handleTeamSearch("conference", e.target.value)}
                                        />
                                    </div>
                                    <div className="labelInputField">
                                        <label>Division:</label>
                                        <input type="text" id="lname" 
                                            name="lname" placeholder="Type a division"
                                            onChange={(e) => handleTeamSearch("division", e.target.value)}
                                        />
                                    </div>
                                </form>
                            {/* </div> */}

                            <div className="mediumPart">
                                <h2>
                                    Result
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
                            <h2>Comparing...</h2>
                            <div className="barChartPart">
                                <BarChart dataProps={teamDataPropsRow01} 
                                    players={{firstPlayer: firstTeamSearchedWithStats.name,
                                        secondPlayer: secondTeamSearchedWithStats.name }}
                                />
                            </div>
                            <div className="barChartPart">
                                <BarChart dataProps={teamDataPropsRow02} 
                                    players={{firstPlayer: firstTeamSearchedWithStats.name,
                                        secondPlayer: secondTeamSearchedWithStats.name }}
                                />
                            </div>
                        </div>

                        <div className="divFieldsSeach">
                            <strong>Players</strong>
                            <form >
                                <div className="labelInputField">
                                    <label>First name:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Type the first name" 
                                        onChange={(e) => handlePlayerSearch("first_name", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Last name:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Type the last name" 
                                        onChange={(e) => handlePlayerSearch("last_name", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Height:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Type a height" 
                                        onChange={(e) => handlePlayerSearch("height", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Weight:</label>
                                    <input type="text" id="fname" 
                                        name="fname" placeholder="Type a weight" 
                                        onChange={(e) => handlePlayerSearch("weight", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Team key:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Type a key"
                                        onChange={(e) => handlePlayerSearch("team", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Position:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Type a position"
                                        onChange={(e) => handlePlayerSearch("position", e.target.value)}
                                    />
                                </div>
                                <div className="labelInputField">
                                    <label>Country:</label>
                                    <input type="text" id="lname" 
                                        name="lname" placeholder="Type a country"
                                        onChange={(e) => handlePlayerSearch("birth_state", e.target.value)}
                                    />
                                </div>
                            </form>

                            <div className="mediumPart">
                                <h2>
                                    Result
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
                            <h2>Comparing...</h2>
                            <div className="barChartPart">
                                <BarChart dataProps={dataPlayerPropsRow01} 
                                    players={{firstPlayer: firstPlayerSearchedWithStats.name,
                                        secondPlayer: secondPlayerSearchedWithStats.name }}
                                />
                            </div>
                            <div className="barChartPart">
                                <BarChart dataProps={dataPlayerPropsRow02} 
                                    players={{firstPlayer: firstPlayerSearchedWithStats.name,
                                        secondPlayer: secondPlayerSearchedWithStats.name }}
                                />
                            </div>
                        </div>



                    </div>
                </div>
                
                <div className="lastPart">
                    <div className="teamsSectionDashboard">
                        <strong>Teams</strong>
                        {allTeams.map((item: TeamDataProps, index: number) => {

                            return (
                                <RowShortInfo data={item} key={index}/>
                            );
                            
                        })}
                    </div>
                    <div className="playersSectionDashboard">
                        <strong>Players</strong>
                
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