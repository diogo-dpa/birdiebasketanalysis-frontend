import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { TeamDataProps } from '../../interfaces';


interface IRowInfoProps{
    data: TeamDataProps,
};

const RowShortInfo: React.FC<IRowInfoProps> = ( { data } : IRowInfoProps ) => {

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
                    <span>{data.division}</span>
                </div>

                <div className="buttonSide"> 
                    <Link to={{
                        pathname: `/team/${data.team_id}`,
                        state: {
                            data: data
                        }
                    }}>
                        <button>See more</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default RowShortInfo;


