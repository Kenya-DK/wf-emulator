export namespace OpenWF {
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
    RawUpgrades: BaseItem[];
    Upgrades: Upgrade[];
    Suits: DataSuit[];
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
    Consumables: BaseItem[];
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
    ShipDecorations: BaseItem[];
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
    Recipes: BaseItem[];
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

  export interface Upgrade extends BaseItem {
    UpgradeFingerprint: string;
    ItemId: ItemID;
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
  export interface DataSuit {
    ItemType: string;
    ItemName?: string;
    XP?: number;
    Polarized: number;
    Configs: InvConfig[];
    Polarity: Polarity[];
    ItemId: ItemID;
    UpgradeVer?: number;
    FocusLens?: string;
    Features?: number;
  }

  export interface Polarity {
    Slot: number;
    Value: string;
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
    sigcol: Col;
    Name: string;
    Upgrades: string[];
    attcol: Col;
    pricol: Col;
    syancol: Col;
  }

  export interface Col {
    t0: number;
    t1: number;
    t2: number;
    t3: number;
    m0?: number;
    en: number;
  }


  export interface ItemID {
    $oid: string;
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

  export interface BaseItem {
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

}