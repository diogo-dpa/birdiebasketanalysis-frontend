import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { FaInfoCircle, FaPlusCircle } from 'react-icons/fa';


interface TeamDataProps{
    name: string,
    division: string,
    key: string,
    city: string,
    conference: string,
    wikipedia_logo_url: string,
    team_id: number,
};

interface IRowInfoProps{
    data: TeamDataProps,
    firstSelected: boolean,
    secondSelected: boolean,
    setFirstSelected(x : boolean): void,
    setSecondSelected(x : boolean): void,
    setFirstPlayerToCompare(y: number): void,
    setSecondPlayerToCompare(y: number): void,
};

const CardResultSearch: React.FC<IRowInfoProps> = ( { data, firstSelected, secondSelected, 
                setFirstSelected, setSecondSelected, 
                setFirstPlayerToCompare, setSecondPlayerToCompare 
            } : IRowInfoProps ) => {

    const teamSelectedByClick = (team_id: number) => {
        
        if(!firstSelected && !secondSelected){
            setFirstSelected(!firstSelected);
            setFirstPlayerToCompare(team_id);
        }else if(firstSelected && !secondSelected){
            setSecondSelected(!secondSelected);
            setSecondPlayerToCompare(team_id)
        }else if(firstSelected && secondSelected){
            setFirstSelected(!firstSelected);
        }else{
            setSecondSelected(!secondSelected);
        }

    };

    return (
        <Container>
            <div>
                <img src={data.wikipedia_logo_url} alt={data.name}/>
                <div className="mainInfoCard">
                    <strong>{data.name}</strong>
                </div>

                <div className="buttonSide">

                    <div className="plusCircle" onClick={() => teamSelectedByClick(data.team_id)}>
                        <FaPlusCircle size={30}/>
                    </div>

                    <Link to={{
                        pathname: `/team/${data.team_id}`,
                        state: {
                            data: data
                        }
                    }}>
                        <FaInfoCircle size={30} />
                    </Link>
                    
                </div>
            </div>
        </Container>
    );
};

export default CardResultSearch;


