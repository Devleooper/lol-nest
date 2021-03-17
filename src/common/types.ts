import { Position, QueueType, Rank, Tier } from './enums';

export interface KeyValue {
    key: string;
    value: string;
}

export interface Summoner {
    accountId: string;
    profileIconId: number;
    revisionDate: number;
    name: string;
    id: string;
    puuid: string;
    summonerLevel: number;
}

export interface ChampionMastery {
    championPointsUntilNextLevel: number;
    chestGranted: boolean;
    championId: number;
    lastPlayTime: number;
    championLevel: number;
    summonerId: string;
    championPoints: number;
    championPointsSinceLastLevel: number;
    tokensEarned: number;
}

export interface ChampionInfo {
    maxNewPlayerLevel: number;
    freeChampionIdsForNewPlayers: number[];
    freeChampionIds: number[];
}

export interface Player {
    summonerId: string;
    teamId?: string;
    position: Position;
    role: string;
}

export interface Team {
    id: string;
    tournamentId: number;
    name: string;
    iconId: number;
    tier: number;
    captain: string;
    abbreviation: string;
    players: Player[];
}

export interface Tournament {
    id: number;
    themeId: number;
    nameKey: string;
    nameKeySecondary: string;
    schedule: TournamentPhase[];
}

export interface TournamentPhase {
    id: number;
    registrationTime: number;
    startTime: number;
    cancelled: boolean;
}

export interface LeagueList {
    leagueId: string;
    entries: LeagueItem[];
    tier: string;
    name: string;
    queue: QueueType
}

export interface LeagueItem {
    freshBlood: boolean;
    wins: number;
    summonerName: string;
    miniSeries?: MiniSeries;
    inactive: boolean;
    veteran: boolean;
    hotStreak: boolean;
    rank: Rank;
    leaguePoints: number;
    losses: number;
    summonerId: string;
}

export interface LeagueEntry {
    leagueId: string;
    summonerId: string;
    summonerName: string;
    queueType: QueueType;
    tier: Tier;
    rank: Rank;
    leaguePoints: number;
    wins: number;
    losses: number;
    hotStreak: boolean;
    veteran: boolean;
    freshBlood: boolean;
    inactive: boolean;
    miniSeries?: MiniSeries
}

export interface MiniSeries {
    losses: number;
    progress: string;
    target: number;
    wins: number;
}

export interface PlatformData {
    id: string;
    name: string;
    locales: string[];
    maintenances: Status[];
    incidents: Status[];
}

export interface Status {
    id: number;
    maintenance_status?: string;
    incident_severity?: string;
    titles: Content[];
    updates: Update[];
    created_at: string;
    archive_at: string;
    updated_at: string;
    platforms: string[];
}

export interface Content {
    locale: string;
    content: string;
}

export interface Update {
    id: number;
    author: string;
    publish: boolean;
    publish_locations: string[];
    translations: Content[];
    created_at: string;
    updated_at: string;
}