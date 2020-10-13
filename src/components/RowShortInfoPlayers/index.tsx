import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

interface PlayerDataProps{
    yahoo_name: string,
    position: string,
    team: string,
    player_id: number,
    photo_url: string,
}

interface IRowInfoProps{
    data: PlayerDataProps,
};

const RowShortInfoPlayer: React.FC<IRowInfoProps> = ( { data } : IRowInfoProps ) => {

    return (
        <Container>
            <div>
                <img src={data.photo_url} alt={data.yahoo_name}/>
                <div className="mainInfoCard">
                    <strong>{data.yahoo_name}</strong>
                    <span>{data.team}</span>
                </div>

                <div className="buttonSide">
                    <Link to={{
                        pathname: `/player/${data.player_id}`,
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

export default RowShortInfoPlayer;


