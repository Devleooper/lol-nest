import { GameMode, GameType, Position, QueueType, Rank, Tier } from './enums';

export interface ApiException {
  status: number;
  errorBody?: any;
  message: string;
}

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
  queue: QueueType;
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
  miniSeries?: MiniSeries;
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

export interface MatchList {
  matches: MatchReference[];
  startIndex: number;
  endIndex: number;
  totalGames: number;
}

export interface MatchReference {
  platformId: string;
  gameId: number;
  champion: number;
  queue: number;
  season: number;
  timestamp: number;
  role: string;
  lane: string;
}

export interface Match {
  gameId: number;
  participantIdentities: ParticipantIdentity[];
  queueId: number;
  gameType: GameType;
  gameDuration: number;
  teams: TeamStats[];
  platformId: string;
  gameCreation: number;
  seasonId?: number;
  gameVersion: string;
  mapId: number;
  gameMode: GameMode;
  participants: Participant[];
}

export interface ParticipantIdentity {
  participantId: number;
  player: Player;
}

export interface Player {
  profileIcon: number;
  accountId: string;
  matchHistoryUri: string;
  currentAccountId: string;
  currentPlatformId: string;
  summonerName: string;
  summonerId: string;
  platformId: string;
}

export interface TeamStats {
  towerKills: number;
  riftHeraldKills: number;
  firstBlood: boolean;
  inhibitorKills: number;
  bans: TeamBans[];
  firstBaron: boolean;
  firstDragon: boolean;
  dominionVictoryScore: number;
  dragonKills: number;
  baronKills: number;
  firstInhibitor: boolean;
  firstTower: boolean;
  vilemawKills: number;
  firstRiftHerald: boolean;
  teamId: number;
  win: string;
}

export interface TeamBans {
  championId: number;
  pickTurn: number;
}

export interface Participant {
  participantId: number;
  championId: number;
  runes: Rune[];
  stats: ParticipantStats;
  teamId: number;
  timeline: ParticipantTimeline;
  spell1Id?: number;
  spell2Id?: number;
  summoner1Id?: number;
  summoner2Id?: number;
  highestAchievedSeasonTier: string;
  masteries: Mastery[];
}

export interface Rune {
  runeId: number;
  rank: number;
}

export interface ParticipantStats {
  participantId: number;
  win: boolean;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  kills: number;
  deaths: number;
  assists: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  killingSprees: number;
  longestTimeSpentLiving: number;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  unrealKills: number;
  totalDamageDealt: number;
  magicDamageDealt: number;
  physicalDamageDealt: number;
  trueDamageDealt: number;
  largestCriticalStrike: number;
  totalDamageDealtToChampions: number;
  magicDamageDealtToChampions: number;
  physicalDamageDealtToChampions: number;
  trueDamageDealtToChampions: number;
  totalHeal: number;
  totalUnitsHealed: number;
  damageSelfMitigated: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  visionScore: number;
  timeCCingOthers: number;
  totalDamageTaken: number;
  magicalDamageTaken: number;
  physicalDamageTaken: number;
  trueDamageTaken: number;
  goldEarned: number;
  goldSpent: number;
  turretKills: number;
  inhibitorKills: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  neutralMinionsKilledTeamJungle: number;
  neutralMinionsKilledEnemyJungle: number;
  totalTimeCrowdControlDealt: number;
  champLevel: number;
  visionWardsBoughtInGame: number;
  sightWardsBoughtInGame: number;
  wardsPlaced: number;
  wardsKilled: number;
  firstBloodKill: boolean;
  firstBloodAssist: boolean;
  firstTowerKill: boolean;
  firstTowerAssist: boolean;
  firstInhibitorKill: boolean;
  firstInhibitorAssist: boolean;
  combatPlayerScore: number;
  objectivePlayerScore: number;
  totalPlayerScore: number;
  totalScoreRank: number;
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerScore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
  perk0: number;
  perk0Var1: number;
  perk0Var2: number;
  perk0Var3: number;
  perk1: number;
  perk1Var1: number;
  perk1Var2: number;
  perk1Var3: number;
  perk2: number;
  perk2Var1: number;
  perk2Var2: number;
  perk2Var3: number;
  perk3: number;
  perk3Var1: number;
  perk3Var2: number;
  perk3Var3: number;
  perk4: number;
  perk4Var1: number;
  perk4Var2: number;
  perk4Var3: number;
  perk5: number;
  perk5Var1: number;
  perk5Var2: number;
  perk5Var3: number;
  perkPrimaryStyle: number;
  perkSubStyle: number;
  statPerk0: number;
  statPerk1: number;
  statPerk2: number;
}

export interface ParticipantTimeline {
  participantId: number;
  creepsPerMinDeltas: Map<string, number>;
  xpPerMinDeltas: Map<string, number>;
  goldPerMinDeltas: Map<string, number>;
  csDiffPerMinDeltas: Map<string, number>;
  xpDiffPerMinDeltas: Map<string, number>;
  damageTakenPerMinDeltas: Map<string, number>;
  damageTakenDiffPerMinDeltas: Map<string, number>;
  role: string;
  lane: string;
}

export interface Mastery {
  rank: number;
  masteryId: number;
}

export interface MatchTimeline {
  frames: MatchFrame[];
  frameInterval: number;
}

export interface MatchFrame {
  participantFrames: Map<string, MatchParticipantFrame>;
  events: Event[];
  timestamp: number;
}

export interface Event {
  type: string;
  timestamp: number;
  participantId: number;
  itemId: number;
  skillSlot?: number;
  levelUpType: string;
  wardType: string;
  creatorId?: number;
  position: MatchPosition;
  killerId?: number;
  victimId?: number;
  assistingParticipantIds: number[];
  afterId?: number;
  beforeId?: number;
  monsterType: string;
  monsterSubType: string;
  teamId?: number;
  buildingType: string;
  laneType: string;
  towerType: string;
}

export interface MatchParticipantFrame {
  participantId: number;
  position: MatchPosition;
  currentGold: number;
  totalGold: number;
  level: number;
  xp: number;
  minionsKilled: number;
  jungleMinionsKilled: number;
  dominionScore: number;
  teamScore: number;
}

export interface MatchPosition {
  x: number;
  y: number;
}

export interface Perks {
  perkIds: number[];
  perkStyle: number;
  perkSubStyle: number;
}

export interface BannedChampion {
  pickTurn: number;
  championId: number;
  teamId: number;
}

export interface GameCustomizationObject {
  category: string;
  content: string;
}

export interface CurrentGameParticipant {
  teamId: number;
  spell1Id: number;
  spell2Id: number;
  championId: number;
  profileIconId: number;
  summonerName: string;
  bot: boolean;
  summonerId: string;
  gameCustomizationObjects?: GameCustomizationObject[];
  perks: Perks;
}

export interface Observer {
  encryptionKey: string;
}

export interface CurrentGameInfo {
  gameId: number;
  mapId: number;
  gameMode: GameMode;
  gameType: GameType;
  participants: CurrentGameParticipant[];
  observers: Observer;
  platformId: string;
  bannedChampions?: BannedChampion[];
  gameStartTime: number;
  gameQueueConfigId?: number;
  gameLength: number;
}

export interface FeaturedGames {
  gameList: FeaturedGameInfo[];
  clientRefreshInterval: number;
}

export interface FeaturedGameInfo {
  gameId: number;
  mapId: number;
  gameMode: GameMode;
  gameType: GameType;
  gameQueueConfigId?: number;
  participants: FeaturedGameParticipant[];
  observers: Observer;
  platformId: string;
  gameTypeConfigId: number;
  bannedChampions?: BannedChampion[];
  gameStartTime: number;
  gameLength: number;
}

export interface FeaturedGameParticipant {
  teamId: number;
  spell1Id: number;
  spell2Id: number;
  championId: number;
  skinIndex: number;
  profileIconId: number;
  summonerName: string;
  bot: boolean;
}
