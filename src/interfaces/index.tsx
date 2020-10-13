
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
    name: string,
    assists: number,
    blocked_shots: number,
    effective_field_goals_percentage: number,
    field_goals_percentage: number,
    free_throws_percentage: number,
    points: number,
    losses: number,
    games: number,
    three_pointers_percentage: number,
    true_shooting_percentage: number,
    two_pointers_percentage: number,
}

export interface TeamStatsDataProps{
    name: string,
    wins: number,
    losses: number,
    games: number,
    minutes: number,
    points: number,
    field_goals_percentage: number,
    effective_field_goals_percentage: number,
    two_pointers_percentage: number,
    three_pointers_percentage: number,
    free_throws_percentage: number;
    offensive_rebounds_percentage: number,
    defensive_rebounds_percentage: number,
    total_rebounds_percentage: number,
    assists: number,
    steals: number,
    turnovers: number,
    personal_fouls: number,
    blocked_shots: number;
    fantasy_points: number;
    true_shooting_percentage: number,
}

export interface PlayerStatsProps{
    team_id: string,
    player_id: string,
    name: string,
    position: string,
    games: number,
    minutes: number,
    field_goals_percentage: number,
    effective_field_goals_percentage: number,
    two_pointers_percentage: number,
    three_pointers_percentage: number,
    free_throws_percentage: number,
    offensive_rebounds_percentage: number,
    defensive_rebounds_percentage: number,
    total_rebounds_percentage: number,
    assists: number,
    steals: number,
    blocked_shots: number,
    personal_fouls: number,
    points: number,
    true_shooting_percentage: number,
    player_efficiency_rating: number,
    usage_rate_percentage: number,
    steals_percentage: number,
    blocks_percentage: number,
    turn_overs_percentage: number,
}


export interface DataChartProps{
    metric: string,
    first: number,
    second: number,
};