export interface IInventory {
  SubscribedToEmails: number;
  RewardSeed: number;
  RegularCredits: number;
  PremiumCredits: number;
  PremiumCreditsFree: number;
  FusionPoints: number;
  SuitBin: Bin;
  WeaponBin: Bin;
  SentinelBin: Bin;
  SpaceSuitBin: Bin;
  SpaceWeaponBin: Bin;
  PvpBonusLoadoutBin: Bin;
  PveBonusLoadoutBin: Bin;
  RandomModBin: Bin;
  OperatorAmpBin: Bin;
  CrewShipSalvageBin: Bin;
  MechBin: Bin;
  CrewMemberBin: Bin;
  TradesRemaining: number;
  GiftsRemaining: number;
  PendingTrades: any[];
  CompletedSyndicates: any[];
  DailyAffiliation: number;
  DailyAffiliationPvp: number;
  DailyAffiliationLibrary: number;
  DailyAffiliationCetus: number;
  DailyAffiliationQuills: number;
  DailyAffiliationSolaris: number;
  DailyAffiliationVentkids: number;
  DailyAffiliationVox: number;
  DailyAffiliationEntrati: number;
  DailyAffiliationNecraloid: number;
  DailyAffiliationZariman: number;
  DailyAffiliationKahl: number;
  DailyFocus: number;
  FocusUpgrades: any[];
  ChallengeProgress: ChallengeProgress[];
  MiscItems: any[];
  RawUpgrades: RawUpgrade[];
  Upgrades: any[];
  Suits: DataKnife[];
  LongGuns: DataKnife[];
  Pistols: DataKnife[];
  Melee: DataKnife[];
  SpecialItems: any[];
  StepSequencers: any[];
  Sentinels: any[];
  SentinelWeapons: any[];
  MoaPets: any[];
  KubrowPetEggs: any[];
  KubrowPets: any[];
  KubrowPetPrints: any[];
  Consumables: Consumable[];
  EquippedEmotes: any[];
  EquippedGear: any[];
  ReceivedStartingGear: boolean;
  SpaceSuits: any[];
  SpaceMelee: any[];
  SpaceGuns: any[];
  MechSuits: any[];
  Hoverboards: any[];
  OperatorAmps: any[];
  OperatorLoadOuts: any[];
  AdultOperatorLoadOuts: any[];
  DrifterMelee: DataKnife[];
  DrifterGuns: any[];
  Horses: DataKnife[];
  Ships: Ship[];
  ShipDecorations: Consumable[];
  CrewShipHarnesses: any[];
  CrewShipRawSalvage: any[];
  CrewShips: any[];
  CrewShipAmmo: any[];
  CrewShipWeapons: any[];
  CrewShipWeaponSkins: any[];
  CrewMembers: any[];
  CrewShipSalvagedWeaponSkins: any[];
  CrewShipSalvagedWeapons: any[];
  Missions: Mission[];
  QuestKeys: QuestKey[];
  LevelKeys: any[];
  Quests: any[];
  FlavourItems: FlavourItem[];
  Scoops: DataKnife[];
  PlayerLevel: number;
  XPInfo: XPInfo[];
  TrainingDate: Created;
  TrainingRetriesLeft: number;
  Recipes: Consumable[];
  PendingRecipes: any[];
  WeaponSkins: Ship[];
  FusionTreasures: any[];
  TauntHistory: any[];
  CompletedAlerts: any[];
  StoryModeChoice: string;
  LoreFragmentScans: any[];
  Boosters: any[];
  QualifyingInvasions: any[];
  FactionScores: any[];
  SpectreLoadouts: any[];
  PendingSpectreLoadouts: any[];
  EmailItems: any[];
  Wishlist: any[];
  CompletedSorties: any[];
  LastSortieReward: any[];
  Drones: any[];
  DiscoveredMarkers: any[];
  CompletedJobs: any[];
  PersonalGoalProgress: any[];
  LoginMilestoneRewards: any[];
  NodeIntrosCompleted: string[];
  SeasonChallengeHistory: SeasonChallengeHistory[];
  LibraryPersonalProgress: any[];
  LibraryAvailableDailyTaskInfo: LibraryAvailableDailyTaskInfo;
  InvasionChainProgress: any[];
  DataKnives: DataKnife[];
  NemesisAbandonedRewards: any[];
  NemesisHistory: any[];
  PersonalTechProjects: any[];
  NextRefill: Created;
  EvolutionProgress: any[];
  DuviriInfo: DuviriInfo;
  KahlLoadOuts: any[];
  ChallengesFixVersion: number;
  PlayedParkourTutorial: boolean;
  SubscribedToEmailsPersonalized: number;
  LastInventorySync: Date;
  ActiveLandscapeTraps: any[];
  RepVotes: any[];
  LeagueTickets: any[];
  HasContributedToDojo: boolean;
  LoadOutPresets: { [key: string]: any[] };
  CurrentLoadOutIds: any[];
  ChallengeInstanceStates: any[];
  RecentVendorPurchases: any[];
  Robotics: any[];
  UsedDailyDeals: any[];
  CollectibleSeries: any[];
  HasResetAccount: boolean;
  PendingCoupon: PendingCoupon;
  DeathMarks: any[];
  Affiliations: any[];
  PeriodicMissionCompletions: any[];
  CompletedJobChains: any[];
  Created: Created;
}

export interface ChallengeProgress {
  Progress: number;
  Name: string;
  Completed: any[];
}

export interface Consumable {
  ItemType: string;
  ItemCount: number;
}

export interface Created {
  $date: DateClass;
}

export interface DateClass {
  $numberLong: string;
}

export interface Bin {
  Slots: number;
}

export interface DataKnife {
  ItemType: string;
  XP?: number;
  Configs: InvConfig[];
  Polarity: any[];
  ItemId: ItemID;
  UpgradeVer?: number;
  ModularParts?: any[];
}

export interface InvConfig {
  Skins: string[];
  Upgrades: any[];
  PvpUpgrades: any[];
  Songs: any[];
}

export interface ItemID {
  $oid: OID;
}

export enum OID {
  The000000000000000000000000 = "000000000000000000000000",
  The66670E59207C750E916Fd06A = "66670e59207c750e916fd06a",
  The66670E59207C750E916Fd06D = "66670e59207c750e916fd06d",
  The66670E59207C750E916Fd06E = "66670e59207c750e916fd06e",
  The66670E59207C750E916Fd06F = "66670e59207c750e916fd06f",
  The66670E59207C750E916Fd070 = "66670e59207c750e916fd070",
  The66670E59207C750E916Fd071 = "66670e59207c750e916fd071",
  The66670E59207C750E916Fd072 = "66670e59207c750e916fd072",
  The66670E59207C750E916Fd073 = "66670e59207c750e916fd073",
  The66670E59207C750E916Fd074 = "66670e59207c750e916fd074",
  The66670E59207C750E916Fd076 = "66670e59207c750e916fd076",
}

export interface DuviriInfo {
  Seed: number;
  NumCompletions: number;
}

export interface FlavourItem {
  ItemType: string;
}

export interface LibraryAvailableDailyTaskInfo {
  EnemyTypes: string[];
  EnemyLocTag: string;
  EnemyIcon: string;
  ScansRequired: number;
  RewardStoreItem: string;
  RewardQuantity: number;
  RewardStanding: number;
}

export interface Mission {
  Completes: number;
  Tier?: number;
  Tag: string;
}

export interface PendingCoupon {
  Expiry: Created;
  Discount: number;
}

export interface QuestKey {
  ItemType: string;
  Progress?: any[];
}

export interface RawUpgrade {
  ItemType: string;
  ItemCount: number;
  LastAdded: ItemID;
}

export interface SeasonChallengeHistory {
  challenge: string;
  id: string;
}

export interface Ship {
  ItemType: string;
  ItemId: ItemID;
}

export interface XPInfo {
  ItemType: ItemType;
  XP: number;
}

export enum ItemType {
  LotusPowersuitsMagMag = "/Lotus/Powersuits/Mag/Mag",
}
