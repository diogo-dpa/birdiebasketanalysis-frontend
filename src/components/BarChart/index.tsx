import React from 'react';

import { ResponsiveBar } from '@nivo/bar';

import { Container } from './styles';

// interface DataProps{
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
//     fantasy_points_yahoo: number,
//     blocks_percentage: number,
//     effective_field_goals_percentage: number,
//     blocked_shots: number,
// }

interface DataChartProps{
    metric: string,
    first: number,
    second: number,
};

interface IRowInfoProps{
    dataProps:  DataChartProps[],
    players:  {
        firstPlayer: string,
        secondPlayer: string,
    }
};

const BarChart: React.FC<IRowInfoProps> = ( { dataProps, players } : IRowInfoProps ) => {
    console.log(dataProps)

    return (
        <Container>
            <h2>{players.firstPlayer? 
                `${players.firstPlayer}`
                : 'Ops...Vazio'} x {players.secondPlayer? 
                    `${players.secondPlayer}`
                : 'Ops...Vazio'
            }</h2>
            <ResponsiveBar 
                data={dataProps} 
                keys={[ 'first', 'second']}
                indexBy="metric"
                margin={{ top: 50, right: 150, bottom: 65, left: 60 }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 20,
                tickRotation: 0,
                legend: "Estatísticas",
                legendOffset: 55,
                legendPosition: "middle",
                }}
                colors={{ scheme: "nivo" }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Container>
    );
};

export default BarChart;