import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { FaChartLine, FaPlusCircle } from 'react-icons/fa';

interface DataProps{
    player_id: number,
    photo_url: string,
    first_name: string,
    last_name: string,
    position: string,
    college: string,
    height: number,
    weight: number,
    injury_status: string,
}

interface IRowInfoProps{
    data: DataProps,
    firstSelected: boolean,
    secondSelected: boolean,
    setFirstSelected(x : boolean): void,
    setSecondSelected(x : boolean): void,
    setFirstPlayerToCompare(y: number): void,
    setSecondPlayerToCompare(y: number): void,
};

const RowInfo: React.FC<IRowInfoProps> = ( { data, firstSelected, 
                        secondSelected, setFirstSelected, setSecondSelected,
                        setFirstPlayerToCompare, setSecondPlayerToCompare} : IRowInfoProps ) => {

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
                <img src={data.photo_url} alt={data.first_name}/>
                <div className="mainInfoCard">
                    <strong>{`${data.first_name} ${data.last_name}`}</strong>
                    <span>{data.position}</span>
                </div>

                <div className="numbersInfo">
                    <div className="metricsCard">
                        <strong>{data.college}</strong>
                        <span>College</span>
                    </div>
                    <div className="metricsCard">
                        <strong>{data.height}</strong>
                        <span>Height</span>
                    </div>
                    <div className="metricsCard">
                        <strong>{data.weight}</strong>
                        <span>Weight</span>
                    </div>
                    <div className="metricsCard">
                        <strong>{data.injury_status}</strong>
                        <span>Injury</span>
                    </div>
                </div>

                <div className="buttons">
                    <Link to={{
                            pathname: `/player/${data.player_id}`,
                            state: {
                                data: data
                            }
                    }}>
                        <FaChartLine size={35} />
                    </Link>
                    
                    <div className="plusCircle" onClick={() => playerSelectedByClick(data.player_id)}>
                        <FaPlusCircle size={35} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RowInfo;


