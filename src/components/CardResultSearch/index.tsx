import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { FaInfoCircle, FaPlusCircle } from 'react-icons/fa';

import { TeamDataProps } from '../../interfaces';


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
            setFirstSelected(true);
            setFirstPlayerToCompare(team_id);
        }else if(firstSelected && !secondSelected){
            setSecondSelected(true);
            setSecondPlayerToCompare(team_id)
        }else if(!firstSelected && secondSelected){
            setSecondSelected(false);
            setSecondPlayerToCompare(team_id)
        }else if(firstSelected && secondSelected){
            setFirstSelected(false);
            setFirstPlayerToCompare(team_id);
        }

    };

    return (
        <Container primaryColor={data.primary_color}
            secondaryColor={data.secondary_color}
            tertiaryColor={data.tertiary_color}
            quaternaryColor={data.quaternary_color}
        >
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


