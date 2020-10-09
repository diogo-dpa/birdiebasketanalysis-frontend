import React from 'react';

import { ResponsiveLine } from '@nivo/line';

import { Container } from './styles';

interface DataProps{
    photo_url: string,
    first_name: string,
    last_name: string,
    position: string,
    college: string,
    height: string,
    weight: number,
    yahoo_name: string,
    injury_status: string,
    experience: string,
    fourthMetricNumber: number,
    fourthMetricInfo: string,
    fivethMetricNumber: number,
    fivethMetricInfo: string,
}

interface IRowInfoProps{
    dataProps: [{
        id: number,
        data: DataProps[],
    }],
};

const lineChart: React.FC<IRowInfoProps> = ( { dataProps } : IRowInfoProps ) => {

    return (
        <Container>
            <ResponsiveLine 
                data={dataProps} 
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
                }}
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
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                areaBlendMode="darken"
                areaOpacity={0.3}
                useMesh={true}
                legends={[]}
            />
        </Container>
    );
};

export default lineChart;