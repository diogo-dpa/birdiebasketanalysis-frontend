import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { FaInfoCircle, FaPlusCircle } from 'react-icons/fa';



interface PlayerMoreDataProps{
    yahoo_name: string,
    position: string,
    team: string,
    player_id: number,
    height: number,
    weight: number,
    birth_state: string,
    first_name: string,
    last_name: string,
    photo_url: string,
}

interface IRowInfoProps{
    data: PlayerMoreDataProps,
    firstSelected: boolean,
    secondSelected: boolean,
    setFirstSelected(x : boolean): void,
    setSecondSelected(x : boolean): void,
    setFirstPlayerToCompare(y: number): void,
    setSecondPlayerToCompare(y: number): void,
};

const CardResultSearchPlayer: React.FC<IRowInfoProps> = ( { data, firstSelected, secondSelected, 
                setFirstSelected, setSecondSelected, 
                setFirstPlayerToCompare, setSecondPlayerToCompare 
            } : IRowInfoProps ) => {

    const playerSelectedByClick = (player_id: number) => {
        
        if(!firstSelected && !secondSelected){
            setFirstSelected(true);
            setFirstPlayerToCompare(player_id);
        }else if(firstSelected && !secondSelected){
            setSecondSelected(true);
            setSecondPlayerToCompare(player_id)
        }else if(!firstSelected && secondSelected){
            setSecondSelected(false);
            setSecondPlayerToCompare(player_id)
        }else if(firstSelected && secondSelected){
            setFirstSelected(false);
            setFirstPlayerToCompare(player_id);
        }

    };

    return (
        <Container>
            <div>
                <img src={data.photo_url} alt={data.yahoo_name}/>
                <div className="mainInfoCard">
                    <strong>{data.yahoo_name}</strong>
                </div>

                <div className="buttonSide">

                    <div className="plusCircle" onClick={() => playerSelectedByClick(data.player_id)}>
                        <FaPlusCircle size={30}/>
                    </div>

                    <Link to={{
                        pathname: `/player/${data.player_id}`,
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

export default CardResultSearchPlayer;


