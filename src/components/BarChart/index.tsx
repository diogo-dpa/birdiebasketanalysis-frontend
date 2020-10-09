import React from 'react';

import { ResponsiveBar } from '@nivo/bar';

import { Container } from './styles';

interface DataProps{
    games: number,
    assists: number,
    three_pointers_percentage: number,
    two_pointers_percentage: number,
    usage_rate_percentage: number,
    total_rebounds_percentage: number,
    points: number,
    steals_percentage: number,
    player_efficiency_rating: number,
    minutes: number,
    free_throws_percentage: number,
    field_goals_percentage: number,
    fantasy_points_yahoo: number,
    blocks_percentage: number,
    effective_field_goals_percentage: number,
    blocked_shots: number,
}

interface IRowInfoProps{
    dataProps:  DataProps[],
};

const BarChart: React.FC<IRowInfoProps> = ( { dataProps } : IRowInfoProps ) => {

    return (
        <Container>
            <ResponsiveBar 
                data={dataProps} 
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Mês",
                legendOffset: 36,
                legendPosition: "middle",
                }}
                colors={{ scheme: "nivo" }}
                legends={[]}
            />
        </Container>
    );
};

export default BarChart;