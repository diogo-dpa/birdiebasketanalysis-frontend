import React from 'react';

import { ResponsiveBar } from '@nivo/bar';

import { Container } from './styles';

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

    const theme = {
        axis: {
          fontSize: "14px",
          tickColor: "#000",
          ticks: {
            line: {
              stroke: "#555555"
            },
            text: {
              fill: "#000",
            }
          },
          legend: {
            text: {
              fill: "#aaaaaa"
            }
          }
        }
    };

    return (
        <Container>
            <h2>{players.firstPlayer? 
                `${players.firstPlayer}`
                : 'Ops...Empty'} x {players.secondPlayer? 
                    `${players.secondPlayer}`
                : 'Ops...Empty'
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
                legend: "",
                legendOffset: 55,
                legendPosition: "middle",
                }}
                colors={{ scheme: "dark2" }}
                theme={theme}
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
                        itemTextColor: "#000",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1,
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