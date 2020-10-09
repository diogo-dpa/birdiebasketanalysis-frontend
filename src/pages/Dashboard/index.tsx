import React, { useState, useEffect } from 'react';

import { ContainerDashboard } from './styles';

import RowShortInfo from '../../components/RowShortInfo';
import RowShortInfoPlayer from '../../components/RowShortInfoPlayers';

import api from '../../services/api';

interface PlayerDataProps{
    yahoo_name: string,
    position: string,
    team: string,
    player_id: number,
    photo_url: string,
}

interface TeamDataProps{
    name: string,
    division: string,
    wikipedia_logo_url: string,
    team_id: number,
};

const Dashboard: React.FC = () => {


    const [playersInDatabase, setPlayersInDatabase] = useState<PlayerDataProps[]>([] as PlayerDataProps[]);

    const [allTeams, setAllTeams] = useState<TeamDataProps[]>([] as TeamDataProps[]);


    useEffect(() => {

        async function getAllTeams(){
            const response = await api.get('/team');
            setAllTeams(response.data)
        }
        getAllTeams()

        async function getSomePlayers(){
            const response = await api.get('/player');
            setPlayersInDatabase(response.data)
        }

        getSomePlayers();

        
    }, [])


    return (
        <ContainerDashboard>
            <div className="main">
                <h1>NBA PLAYOFFS</h1>
                <p>Seja bem vindo ao dashboard!</p>

                <div className="firstPart">
                    <h2>
                        Área de pesquisa
                    </h2>

                    <div className="filterPart">
                        <span>Pesquisar por:</span>
                        <form>
                            <input type="radio" id="teamRadioButton" name="searchTeam" value="team" />
                            <label htmlFor="teamRadioButton">Time</label>
                            <input type="radio" id="playerRadioButton" name="searchPlayer" value="player" />
                            <label htmlFor="playerRadioButton">Jogador</label>
                            <input type="text" placeholder="Teste" id="searchPartInput" name="searchPartInput"/>
                        </form>
                        <span>Realizar comparações?</span>
                        <input type="radio" id="compareAccepted" name="searchTeam" value="yes" />
                        <label htmlFor="compareAccepted">Sim</label>
                        <input type="radio" id="compareNotAccepted" name="compareNotAccepted" value="no" />
                        <label htmlFor="compareNotAccepted">Não</label>

                        <div className="divFieldsSeach">
                            <p>Componente de filtro</p>
                            <form>
                                <label>Nome:</label>
                                <input type="text" id="fname" name="fname" placeholder="Nome"/>
                                <label>Time:</label>
                                <input type="text" id="lname" name="lname" placeholder="Time"/>
                                <input type="submit" value="Buscar"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mediumPart">
                    <h2>
                        Resultado
                    </h2>
                    <div className="result">

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
                
                        {playersInDatabase.slice(0,30).map((item: PlayerDataProps, index: number) => {

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