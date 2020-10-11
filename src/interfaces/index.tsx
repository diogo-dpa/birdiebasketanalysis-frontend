import React from 'react';

export interface DataProps{
    img: string,
    name: string,
    info: string,
    player_id: string,
    photo_url: string,
}

export interface PlayerMoreDataProps{
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
    college: string,
    injury_status: string,
    experience: string,
    free_throws_percentage: number,
    assists: number,
    steals: number
    points: number,
    name: string,
}


export interface TeamDataProps{
    name: string,
    division: string,
    key: string,
    city: string,
    conference: string,
    wikipedia_logo_url: string,
    team_id: number,
    primary_color: string,
    secondary_color: string,
    tertiary_color: string,
    quaternary_color: string,
};

export interface TeamStatsChartProps{
    assists: number,
    blocked_shots: number,
    effective_field_goals_percentage: number,
    field_goals_percentage: number,
    free_throws_percentage: number,
    losses: number,
    games: number,
    three_pointers_percentage: number,
    true_shooting_percentage: number,
    two_pointers_percentage: number,
    points: number,
    name: string,
}

export interface PlayerStatsProps{
    games: number,
    assists: number,
    points: number,
    minutes: number,
    three_pointers_percentage: number,
    two_pointers_percentage: number,
    usage_rate_percentage: number,
    total_rebounds_percentage: number,
    steals_percentage: number,
    player_efficiency_rating: number,
    free_throws_percentage: number,
    field_goals_percentage: number,
    blocks_percentage: number,
    effective_field_goals_percentage: number,
    true_shooting_percentage: number,
    blocked_shots: number,
    name: string,
    team_id: string,
}


export interface DataChartProps{
    metric: string,
    first: number,
    second: number,
};