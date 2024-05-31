export namespace WFItems {
  export type Item =
    | Extractor
    | MinimalItem
    | Melee
    | Weapon
    | Gun
    | SentinelWeapon
    | Warframe
    | Mod
    | SingleLevelMod
    | RivenMod
    | StanceMod
    | PrimeMod
    | RailjackMod
    | ModularPetPart
    | SolNode
    | Skin
    | Relic
    | EmptyRelic
    | ExaltedWeapon
    | Resource
    | Arcane
    | Misc
    | ModSet
    | FocusWay
  export type Polarity =
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik"
  export type Tag =
    | "Arbiters of Hexis"
    | "Baro"
    | "Cephalon"
    | "Cephalon Simaris"
    | "Cephalon Suda"
    | "Corpus"
    | "Dagath"
    | "Dax"
    | "Duviri"
    | "Entrati"
    | "Founder"
    | "Grineer"
    | "Incarnon"
    | "Infested"
    | "Invasion Reward"
    | "Kuva Lich"
    | "Lua"
    | "Never Vaulted"
    | "New Loka"
    | "Orokin"
    | "Perrin Sequence"
    | "Prime"
    | "Prisma"
    | "Red Veil"
    | "Sentient"
    | "Stalker"
    | "Steel Meridian"
    | "Syndicate"
    | "Tenet"
    | "Tenno"
    | "The Perrin Sequence"
    | "Tutorial"
    | "Vandal"
    | "Vaulted"
    | "Voruna"
    | "Wraith"
    | "Zariman"
  export type SystemName =
    | "Ceres"
    | "Deimos"
    | "Duviri"
    | "Earth"
    | "Eris"
    | "Europa"
    | "Jupiter"
    | "Kuva Fortress"
    | "Lua"
    | "Mars"
    | "Mercury"
    | "Neptune"
    | "Phobos"
    | "Pluto"
    | "Saturn"
    | "Sedna"
    | "Uranus"
    | "Venus"
    | "Void"
    | "Zariman"
  export type Rarity = "Common" | "Legendary" | "Rare" | "Uncommon"
  export type MySchema = Item[]

  export interface Extractor {
    binCapacity: number
    binCount: number
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    capacityMultiplier?: number[]
    category: "Misc"
    components?: Component[]
    consumeOnBuild?: boolean
    description?: string
    durability: number
    excludeFromCodex?: boolean
    fillRate: number
    i18n?: string
    imageName?: string
    itemCount?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    name: string
    patchlogs?: PatchLog[]
    releaseDate?: string
    repairRate: number
    skipBuildTimePrice?: number
    specialities: string[]
    tradable: boolean
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
  }
  export interface Component {
    accuracy?: number
    ammo?: null | number
    attacks?: Attack[]
    blockingAngle?: number
    bpCost?: string | number
    category?:
    | "All"
    | "Arcanes"
    | "Arch-Gun"
    | "Arch-Melee"
    | "Archwing"
    | "Fish"
    | "Gear"
    | "Glyphs"
    | "Melee"
    | "Misc"
    | "Mods"
    | "Node"
    | "Pets"
    | "Primary"
    | "Quests"
    | "Relics"
    | "Resources"
    | "Secondary"
    | "Sentinels"
    | "Sigils"
    | "Skins"
    | "Warframes"
    channeling?: number
    channelingDamageMultiplier?: number
    channelingDrain?: number
    chargeAttack?: number
    chargeTime?: number
    comboDuration?: number
    criticalChance?: number
    criticalMultiplier?: number
    damage?: DamageTypes
    damagePerSecond?: number
    damagePerShot?: number[]
    damageTypes?: DamageTypes
    description?: string
    /**
     * Riven disposition, a multiplier & range for omegaAttenuation
     */
    disposition?: 1 | 2 | 3 | 4 | 5
    drops?: Drop[]
    ducats?: number
    estimatedVaultDate?: string
    excludeFromCodex?: boolean
    fireRate?: number
    flight?: number
    followThrough?: number
    heavyAttackDamage?: number
    heavySlamAttack?: number
    heavySlamRadialDamage?: number
    heavySlamRadius?: number
    i18n?: string
    imageName: string
    introduced?: Update
    itemCount: number
    leapAttack?: number
    magazineSize?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    multishot?: number
    name: string
    noise?: "Alarming" | "Silent"
    omegaAttenuation?: number
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    primeSellingPrice?: number
    procChance?: number
    productCategory?:
    | "KubrowPets"
    | "LongGuns"
    | "MechSuits"
    | "Melee"
    | "OperatorAmps"
    | "Pistols"
    | "SentinelWeapons"
    | "Sentinels"
    | "SpaceGuns"
    | "SpaceMelee"
    | "SpaceSuits"
    | "SpecialItems"
    | "Suits"
    projectile?: "Discharge" | "Hitscan" | "Projectile" | "Thrown"
    range?: number
    releaseDate?: string
    reloadTime?: number
    secondsPerShot?: number
    sentinel?: boolean
    slamAttack?: number
    slamRadialDamage?: number
    slamRadius?: number
    slideAttack?: number
    slot?: number
    spinAttack?: number
    stancePolarity?:
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik"
    statusChance?: number
    tags?: Tag[]
    totalDamage?: number
    tradable: boolean
    trigger?:
    | ""
    | "Active"
    | "Auto"
    | "Auto Burst"
    | "Burst"
    | "Charge"
    | "Duplex"
    | "Held"
    | "Melee"
    | "Semi"
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
    wallAttack?: number
    wikiaThumbnail?: string
    wikiaUrl?: string
    windUp?: number
  }
  export interface Attack {
    channeling?: number
    charge_time?: number
    crit_chance?: number
    crit_mult?: number
    damage: DamageTypes
    duration?: number
    falloff?: Falloff
    flight?: string | number
    jump?: string
    name: string
    pellet?: Pellet
    radius?: number
    shot_speed?: null | number
    shot_type?: string
    slam?: SlamAttack
    slide?: string
    speed?: number
    status_chance?: number
    wall?: string
  }
  export interface DamageTypes {
    blast?: number
    cinematic?: number
    cold?: number
    corrosive?: number
    electricity?: number
    energyDrain?: number
    gas?: number
    healthDrain?: number
    heat?: number
    impact?: number
    magnetic?: number
    puncture?: number
    radiation?: number
    shieldDrain?: number
    slash?: number
    tau?: number
    total?: number
    toxin?: number
    true?: number
    viral?: number
    void?: number
  }
  export interface Falloff {
    end: number
    reduction?: number
    start: number
  }
  export interface Pellet {
    count: number
    name: string
  }
  export interface SlamAttack {
    damage: string | number
    radial: RadialDamage
  }
  export interface RadialDamage {
    damage: string | number
    element?:
    | "Blast"
    | "Cinematic"
    | "Cold"
    | "Corrosive"
    | "Electricity"
    | "EnergyDrain"
    | "Gas"
    | "HealthDrain"
    | "Heat"
    | "Impact"
    | "Magnetic"
    | "Puncture"
    | "Radiation"
    | "ShieldDrain"
    | "Slash"
    | "Tau"
    | "Total"
    | "Toxin"
    | "True"
    | "Viral"
    | "Void"
    proc?:
    | "Blast"
    | "Cinematic"
    | "Cold"
    | "Corrosive"
    | "Electricity"
    | "EnergyDrain"
    | "Gas"
    | "HealthDrain"
    | "Heat"
    | "Impact"
    | "Magnetic"
    | "Puncture"
    | "Radiation"
    | "ShieldDrain"
    | "Slash"
    | "Tau"
    | "Total"
    | "Toxin"
    | "True"
    | "Viral"
    | "Void"
    radius: number
  }
  export interface Drop {
    chance: null | number
    location: string
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    rotation?:
    | "(Extra)"
    | "A"
    | "Annihilation"
    | "Assassinate"
    | "B"
    | "C"
    | "Capture"
    | "Defense"
    | "Onslaught"
    | "Sabotage"
    | "Survival"
    | "rewards"
    type: string
  }
  export interface Update {
    aliases: string[]
    date: string
    name: string
    parent: string
    url: string
  }
  export interface PatchLog {
    additions: string
    changes: string
    date: string
    fixes: string
    imgUrl?: string
    name: string
    url: string
  }
  export interface MinimalItem {
    category?:
    | "All"
    | "Arcanes"
    | "Arch-Gun"
    | "Arch-Melee"
    | "Archwing"
    | "Fish"
    | "Gear"
    | "Glyphs"
    | "Melee"
    | "Misc"
    | "Mods"
    | "Node"
    | "Pets"
    | "Primary"
    | "Quests"
    | "Relics"
    | "Resources"
    | "Secondary"
    | "Sentinels"
    | "Sigils"
    | "Skins"
    | "Warframes"
    description?: string
    excludeFromCodex?: boolean
    i18n?: string
    imageName?: string
    masterable: boolean
    name: string
    patchlogs?: PatchLog[]
    releaseDate?: string
    tradable: boolean
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
  }
  export interface Melee {
    accuracy?: number
    ammo?: null | number
    areaAttack?: AreaAttack
    attacks?: Attack[]
    blockingAngle?: number
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    category: "Arch-Melee" | "Melee"
    channeling?: number
    channelingDamageMultiplier?: number
    channelingDrain?: number
    chargeAttack?: number
    chargeTime?: number
    color?: number
    comboDuration?: number
    components?: Component[]
    conclave?: boolean
    consumeOnBuild?: boolean
    criticalChance?: number
    criticalMultiplier?: number
    damage?: DamageTypes
    damagePerSecond?: number
    damagePerShot?: number[]
    damageTypes?: DamageTypes
    description?: string
    /**
     * Riven disposition, a multiplier & range for omegaAttenuation
     */
    disposition?: 1 | 2 | 3 | 4 | 5
    drops?: Drop[]
    estimatedVaultDate?: string
    excludeFromCodex?: boolean
    fireRate?: number
    followThrough?: number
    fusionLimit?: number
    heavyAttackDamage?: number
    heavySlamAttack?: number
    heavySlamRadialDamage?: number
    heavySlamRadius?: number
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    introduced?: Update
    isPrime?: boolean
    itemCount?: number
    leapAttack?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    maxLevelCap?: number
    multishot?: number
    name: string
    noise?: "Alarming" | "Silent"
    omegaAttenuation?: number
    parents?: string[]
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    primeOmegaAttenuation?: number
    primeSellingPrice?: number
    probability?: number
    procChance?: number
    productCategory?:
    | "KubrowPets"
    | "LongGuns"
    | "MechSuits"
    | "Melee"
    | "OperatorAmps"
    | "Pistols"
    | "SentinelWeapons"
    | "Sentinels"
    | "SpaceGuns"
    | "SpaceMelee"
    | "SpaceSuits"
    | "SpecialItems"
    | "Suits"
    range?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    rewardName?: string
    secondary?: Secondary
    secondaryArea?: SecondaryArea
    secondsPerShot?: number
    sentinel?: boolean
    showInInventory?: boolean
    skipBuildTimePrice?: number
    slamAttack?: number
    slamRadialDamage?: number
    slamRadius?: number
    slideAttack?: number
    slot?: number
    spinAttack?: number
    stancePolarity?:
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik"
    statusChance?: number
    tags?: Tag[]
    tier?: number
    totalDamage?: number
    tradable: boolean
    trigger?:
    | ""
    | "Active"
    | "Auto"
    | "Auto Burst"
    | "Burst"
    | "Charge"
    | "Duplex"
    | "Held"
    | "Melee"
    | "Semi"
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
    wallAttack?: number
    wikiaThumbnail?: string
    wikiaUrl?: string
    windUp?: number
  }
  export interface AreaAttack {
    blast?: number
    damage: string
    duration?: number
    falloff?: Falloff
    heat?: number
    name: string
    pellet?: Pellet
    radiation?: number
    radius?: number
    speed?: number
    status_chance?: number
  }
  export interface Colour {
    value: string
  }
  export interface Secondary {
    blast?: number
    charge_time?: number
    corrosive?: number
    crit_chance?: number
    crit_mult?: number
    damage?: DamageTypes
    electricity?: number
    impact?: number
    name?: string
    pellet?: Pellet
    puncture?: number
    radiation?: number
    shot_speed?: null | number
    shot_type?: "Continuous" | "Hit-Scan" | "Projectile"
    slash?: number
    speed?: number
    status_chance?: number
    toxin?: number
  }
  export interface SecondaryArea {
    blast?: number
    damage: string
    duration?: number
    heat?: number
    name: string
    pellet?: Pellet
    radiation?: number
    radius?: number
    speed?: number
    status_chance?: number
  }
  export interface Weapon {
    accuracy?: number
    ammo?: null | number
    areaAttack?: AreaAttack
    attacks?: Attack[]
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    category: "Arch-Gun" | "Arch-Melee" | "Melee" | "Primary" | "Secondary"
    color?: number
    components?: Component[]
    conclave?: boolean
    consumeOnBuild?: boolean
    criticalChance?: number
    criticalMultiplier?: number
    damage?: DamageTypes
    damagePerSecond?: number
    damagePerShot?: number[]
    damageTypes?: DamageTypes
    description?: string
    /**
     * Riven disposition, a multiplier & range for omegaAttenuation
     */
    disposition?: 1 | 2 | 3 | 4 | 5
    drops?: Drop[]
    estimatedVaultDate?: string
    excludeFromCodex?: boolean
    fireRate?: number
    fusionLimit?: number
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    introduced?: Update
    isPrime?: boolean
    itemCount?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    maxLevelCap?: number
    multishot?: number
    name: string
    noise?: "Alarming" | "Silent"
    omegaAttenuation?: number
    parents?: string[]
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    primeOmegaAttenuation?: number
    primeSellingPrice?: number
    probability?: number
    procChance?: number
    productCategory?:
    | "KubrowPets"
    | "LongGuns"
    | "MechSuits"
    | "Melee"
    | "OperatorAmps"
    | "Pistols"
    | "SentinelWeapons"
    | "Sentinels"
    | "SpaceGuns"
    | "SpaceMelee"
    | "SpaceSuits"
    | "SpecialItems"
    | "Suits"
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    rewardName?: string
    secondary?: Secondary
    secondaryArea?: SecondaryArea
    secondsPerShot?: number
    sentinel?: boolean
    showInInventory?: boolean
    skipBuildTimePrice?: number
    slot?: number
    statusChance?: number
    tags?: Tag[]
    tier?: number
    totalDamage?: number
    tradable: boolean
    trigger?:
    | ""
    | "Active"
    | "Auto"
    | "Auto Burst"
    | "Burst"
    | "Charge"
    | "Duplex"
    | "Held"
    | "Melee"
    | "Semi"
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface Gun {
    accuracy?: number
    ammo?: null | number
    areaAttack?: AreaAttack
    attacks?: Attack[]
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    category: "Arch-Gun" | "Primary" | "Secondary"
    color?: number
    components?: Component[]
    conclave?: boolean
    consumeOnBuild?: boolean
    criticalChance?: number
    criticalMultiplier?: number
    damage?: DamageTypes
    damagePerSecond?: number
    damagePerShot?: number[]
    damageTypes?: DamageTypes
    description?: string
    /**
     * Riven disposition, a multiplier & range for omegaAttenuation
     */
    disposition?: 1 | 2 | 3 | 4 | 5
    drops?: Drop[]
    estimatedVaultDate?: string
    excludeFromCodex?: boolean
    fireRate?: number
    flight?: "???" | number
    fusionLimit?: number
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    introduced?: Update
    isPrime?: boolean
    itemCount?: number
    magazineSize?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    maxLevelCap?: number
    multishot?: number
    name: string
    noise?: "Alarming" | "Silent"
    omegaAttenuation?: number
    parents?: string[]
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    primeOmegaAttenuation?: number
    primeSellingPrice?: number
    probability?: number
    procChance?: number
    productCategory?:
    | "KubrowPets"
    | "LongGuns"
    | "MechSuits"
    | "Melee"
    | "OperatorAmps"
    | "Pistols"
    | "SentinelWeapons"
    | "Sentinels"
    | "SpaceGuns"
    | "SpaceMelee"
    | "SpaceSuits"
    | "SpecialItems"
    | "Suits"
    projectile?: "Discharge" | "Hitscan" | "Projectile" | "Thrown"
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    reloadTime?: number
    rewardName?: string
    secondary?: Secondary
    secondaryArea?: SecondaryArea
    secondsPerShot?: number
    sentinel?: boolean
    showInInventory?: boolean
    skipBuildTimePrice?: number
    slot?: number
    statusChance?: number
    tags?: Tag[]
    tier?: number
    totalDamage?: number
    tradable: boolean
    trigger?:
    | ""
    | "Active"
    | "Auto"
    | "Auto Burst"
    | "Burst"
    | "Charge"
    | "Duplex"
    | "Held"
    | "Melee"
    | "Semi"
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface SentinelWeapon {
    accuracy?: number
    ammo?: null | number
    areaAttack?: AreaAttack
    attacks?: Attack[]
    blockingAngle?: number
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    category: "Primary"
    channeling?: number
    channelingDamageMultiplier?: number
    channelingDrain?: number
    chargeAttack?: number
    chargeTime?: number
    color?: number
    comboDuration?: number
    components?: Component[]
    conclave?: boolean
    consumeOnBuild?: boolean
    criticalChance?: number
    criticalMultiplier?: number
    damage?: DamageTypes
    damagePerSecond?: number
    damagePerShot?: number[]
    damageTypes?: DamageTypes
    description?: string
    /**
     * Riven disposition, a multiplier & range for omegaAttenuation
     */
    disposition?: 1 | 2 | 3 | 4 | 5
    drops?: Drop[]
    estimatedVaultDate?: string
    excludeFromCodex?: boolean
    fireRate?: number
    followThrough?: number
    fusionLimit?: number
    heavyAttackDamage?: number
    heavySlamAttack?: number
    heavySlamRadialDamage?: number
    heavySlamRadius?: number
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    introduced?: Update
    isPrime?: boolean
    itemCount?: number
    leapAttack?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    maxLevelCap?: number
    multishot?: number
    name: string
    noise?: "Alarming" | "Silent"
    omegaAttenuation?: number
    parents?: string[]
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    primeOmegaAttenuation?: number
    primeSellingPrice?: number
    probability?: number
    procChance?: number
    productCategory: "SentinelWeapons"
    range?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    rewardName?: string
    secondary?: Secondary
    secondaryArea?: SecondaryArea
    secondsPerShot?: number
    sentinel: true
    showInInventory?: boolean
    skipBuildTimePrice?: number
    slamAttack?: number
    slamRadialDamage?: number
    slamRadius?: number
    slideAttack?: number
    slot?: number
    spinAttack?: number
    stancePolarity?:
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik"
    statusChance?: number
    tags?: Tag[]
    tier?: number
    totalDamage?: number
    tradable: boolean
    trigger?:
    | ""
    | "Active"
    | "Auto"
    | "Auto Burst"
    | "Burst"
    | "Charge"
    | "Duplex"
    | "Held"
    | "Melee"
    | "Semi"
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
    wallAttack?: number
    wikiaThumbnail?: string
    wikiaUrl?: string
    windUp?: number
  }
  export interface Warframe {
    abilities?: Ability[]
    armor: number
    aura?:
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik"
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    category: "Archwing" | "Pets" | "Sentinels" | "Warframes"
    color?: number
    components?: Component[]
    conclave?: boolean
    consumeOnBuild?: boolean
    description?: string
    drops?: Drop[]
    estimatedVaultDate?: string
    exalted?: string[]
    excludeFromCodex?: boolean
    health: number
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    introduced?: Update
    isPrime?: boolean
    itemCount?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    maxLevelCap?: number
    name: string
    parents?: string[]
    passiveDescription?: string
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    power: number
    primeOmegaAttenuation?: number
    primeSellingPrice?: number
    probability?: number
    productCategory?:
    | "KubrowPets"
    | "LongGuns"
    | "MechSuits"
    | "Melee"
    | "OperatorAmps"
    | "Pistols"
    | "SentinelWeapons"
    | "Sentinels"
    | "SpaceGuns"
    | "SpaceMelee"
    | "SpaceSuits"
    | "SpecialItems"
    | "Suits"
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    rewardName?: string
    sentinel?: boolean
    sex?: "Androgynous" | "Female" | "Male" | "Non-binary (Pluriform)"
    shield: number
    showInInventory?: boolean
    skipBuildTimePrice?: number
    slot?: number
    sprint?: number
    sprintSpeed?: number
    stamina: number
    tags?: Tag[]
    tier?: number
    tradable: boolean
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface Ability {
    description: string
    imageName: string
    name: string
    uniqueName: string
  }
  export interface Mod {
    baseDrain: number
    category: "Mods"
    compatName?: string
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    fusionLimit: number
    i18n?: string
    imageName?: string
    introduced?: Update
    isAugment?: boolean
    isExilus?: boolean
    isPrime: boolean
    isUtility?: boolean
    levelStats?: LevelStat[]
    masterable: boolean
    modSet?: string
    modSetValues?: number[]
    name: string
    patchlogs?: PatchLog[]
    polarity: Polarity
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    tags?: Tag[]
    tradable: boolean
    transmutable?: boolean
    type:
    | "Arch-Gun Mod"
    | "Arch-Melee Mod"
    | "Archwing Mod"
    | "Companion Mod"
    | "Creature Mod"
    | "K-Drive Mod"
    | "Melee Mod"
    | "Necramech Mod"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Plexus Mod"
    | "Primary Mod"
    | "Railjack Mod"
    | "Riven Mod"
    | "Secondary Mod"
    | "Shotgun Mod"
    | "Stance Mod"
    | "Transmutation Mod"
    | "Warframe Mod"
    uniqueName: string
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface LevelStat {
    stats: string[]
  }
  export interface SingleLevelMod {
    baseDrain: number
    category: "Mods"
    compatName?: string
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    fusionLimit: number
    i18n?: string
    imageName?: string
    introduced?: Update
    isAugment?: boolean
    isExilus?: boolean
    isPrime: boolean
    isUtility?: boolean
    masterable: boolean
    modSet?: string
    modSetValues?: number[]
    name: string
    patchlogs?: PatchLog[]
    polarity: Polarity
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    tags?: Tag[]
    tradable: boolean
    transmutable?: boolean
    type:
    | "Arch-Gun Mod"
    | "Arch-Melee Mod"
    | "Archwing Mod"
    | "Companion Mod"
    | "Creature Mod"
    | "K-Drive Mod"
    | "Melee Mod"
    | "Necramech Mod"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Plexus Mod"
    | "Primary Mod"
    | "Railjack Mod"
    | "Riven Mod"
    | "Secondary Mod"
    | "Shotgun Mod"
    | "Stance Mod"
    | "Transmutation Mod"
    | "Warframe Mod"
    uniqueName: string
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface RivenMod {
    availableChallenges?: AvailableChallenge[]
    baseDrain: number
    category: "Misc" | "Mods"
    compatName?: string
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    fusionLimit: number
    i18n?: string
    imageName?: string
    introduced?: Update
    isAugment?: boolean
    isExilus?: boolean
    isPrime: boolean
    isUtility?: boolean
    masterable: boolean
    modSet?: string
    modSetValues?: number[]
    name: string
    patchlogs?: PatchLog[]
    polarity?:
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik"
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    tags?: Tag[]
    tradable: boolean
    transmutable?: boolean
    type:
    | "Amp Riven Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee Riven Mod"
    | "Companion Weapon Riven Mod"
    | "Kitgun Riven Mod"
    | "Melee Riven Mod"
    | "Pistol Riven Mod"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Shotgun Riven Mod"
    | "Zaw Riven Mod"
    uniqueName: string
    upgradeEntries?: UpgradeEntry[]
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface AvailableChallenge {
    complications: Complication[]
    description: string
    fullName: string
  }
  export interface Complication {
    description: string
    fullName: string
    overrideTag?: string
  }
  export interface UpgradeEntry {
    prefixTag: string
    suffixTag: string
    tag: string
    upgradeValues: UpgradeValue[]
  }
  export interface UpgradeValue {
    locTag?: string
    reverseValueSymbol?: boolean
    value: number
  }
  export interface StanceMod {
    baseDrain: number
    category: "Mods"
    compatName?: string
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    fusionLimit: number
    i18n?: string
    imageName?: string
    introduced?: Update
    isAugment?: boolean
    isExilus?: boolean
    isPrime: boolean
    isUtility?: boolean
    masterable: boolean
    modSet?: string
    modSetValues?: number[]
    name: string
    patchlogs?: PatchLog[]
    polarity: Polarity
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    tags?: Tag[]
    tradable: boolean
    transmutable?: boolean
    type: "Stance Mod"
    uniqueName: string
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface PrimeMod {
    baseDrain: number
    category: "Mods"
    compatName?: string
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    fusionLimit: number
    i18n?: string
    imageName?: string
    introduced?: Update
    isAugment?: boolean
    isExilus?: boolean
    isPrime: true
    isUtility?: boolean
    levelStats?: LevelStat[]
    masterable: boolean
    modSet?: string
    modSetValues?: number[]
    name: string
    patchlogs?: PatchLog[]
    polarity: Polarity
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    tags?: Tag[]
    tradable: boolean
    transmutable?: boolean
    type:
    | "Arch-Gun Mod"
    | "Arch-Melee Mod"
    | "Archwing Mod"
    | "Companion Mod"
    | "Creature Mod"
    | "K-Drive Mod"
    | "Melee Mod"
    | "Necramech Mod"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Plexus Mod"
    | "Primary Mod"
    | "Railjack Mod"
    | "Riven Mod"
    | "Secondary Mod"
    | "Shotgun Mod"
    | "Stance Mod"
    | "Transmutation Mod"
    | "Warframe Mod"
    uniqueName: string
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface RailjackMod {
    baseDrain: number
    category: "Mods"
    compatName?: string
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    fusionLimit: number
    i18n?: string
    imageName?: string
    introduced?: Update
    isAugment?: boolean
    isExilus?: boolean
    isPrime: boolean
    isUtility?: boolean
    masterable: boolean
    modSet?: string
    modSetValues?: number[]
    name: string
    patchlogs?: PatchLog[]
    polarity: Polarity
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    tags?: Tag[]
    tradable: boolean
    transmutable?: boolean
    type: "Railjack Mod"
    uniqueName: string
    upgradeEntries?: UpgradeEntry[]
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface ModularPetPart {
    accuracy?: number
    ammo?: null | number
    attacks?: Attack[]
    category: "Pets"
    criticalChance?: number
    criticalMultiplier?: number
    damage?: DamageTypes
    damagePerShot?: number[]
    description?: string
    /**
     * Riven disposition, a multiplier & range for omegaAttenuation
     */
    disposition?: 1 | 2 | 3 | 4 | 5
    drops?: Drop[]
    excludeFromCodex?: boolean
    fireRate?: number
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    masterable: boolean
    name: string
    noise?: "Alarming" | "Silent"
    omegaAttenuation?: number
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    probability?: number
    procChance?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    slot?: number
    totalDamage?: number
    tradable: boolean
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
  }
  export interface SolNode {
    category: "Node"
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    factionIndex?: number
    i18n?: string
    imageName?: string
    masterable: boolean
    masteryReq: number
    maxEnemyLevel: number
    minEnemyLevel: number
    missionIndex: number
    name: string
    nodeType: number
    patchlogs?: PatchLog[]
    releaseDate?: string
    systemIndex: number
    systemName: SystemName
    tradable: boolean
    type: "Node"
    uniqueName: string
  }
  export interface Skin {
    category: "Skins"
    description?: string
    excludeFromCodex: true
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    masterable: boolean
    name: string
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    releaseDate?: string
    slot?: number
    tradable: boolean
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
  }
  export interface Relic {
    category: "Relics"
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    i18n?: string
    imageName?: string
    locations: TitaniaRelicLocation[]
    marketInfo?: TitaniaWFMInfo | null
    masterable: boolean
    name: string
    patchlogs?: PatchLog[]
    releaseDate?: string
    rewards: TitaniaRelicReward[]
    tradable: true
    type: "Relic"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
  }
  export interface TitaniaRelicLocation {
    chance: number
    location: string
    rarity: Rarity
  }
  export interface TitaniaWFMInfo {
    id: string
    urlName: string
  }
  export interface TitaniaRelicReward {
    chance: number
    item: TitaniaRelicRewardItem
    rarity: Rarity
  }
  export interface TitaniaRelicRewardItem {
    name: string
    uniqueName: string
    warframeMarket?: TitaniaWFMInfo
  }
  export interface EmptyRelic {
    category: "Relics"
    description?: string
    drops?: Drop[]
    excludeFromCodex: true
    i18n?: string
    imageName?: string
    locations: []
    masterable: boolean
    name: string
    patchlogs?: PatchLog[]
    releaseDate?: string
    rewards: []
    tradable: boolean
    type: "Relic"
    uniqueName: string
  }
  export interface ExaltedWeapon {
    accuracy?: number
    ammo?: null | number
    areaAttack?: AreaAttack
    attacks?: Attack[]
    blockingAngle?: number
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    category: "Misc"
    channeling?: number
    channelingDamageMultiplier?: number
    channelingDrain?: number
    chargeAttack?: number
    chargeTime?: number
    color?: number
    comboDuration?: number
    components?: Component[]
    conclave?: boolean
    consumeOnBuild?: boolean
    criticalChance?: number
    criticalMultiplier?: number
    damage?: DamageTypes
    damagePerSecond?: number
    damagePerShot?: number[]
    damageTypes?: DamageTypes
    description?: string
    /**
     * Riven disposition, a multiplier & range for omegaAttenuation
     */
    disposition?: 1 | 2 | 3 | 4 | 5
    drops?: Drop[]
    estimatedVaultDate?: string
    excludeFromCodex?: boolean
    fireRate?: number
    flight?: "???" | number
    followThrough?: number
    fusionLimit?: number
    heavyAttackDamage?: number
    heavySlamAttack?: number
    heavySlamRadialDamage?: number
    heavySlamRadius?: number
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    introduced?: Update
    isPrime?: boolean
    itemCount?: number
    leapAttack?: number
    magazineSize?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    maxLevelCap?: number
    multishot?: number
    name: string
    noise?: "Alarming" | "Silent"
    omegaAttenuation?: number
    parents?: string[]
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    primeOmegaAttenuation?: number
    primeSellingPrice?: number
    probability?: number
    procChance?: number
    productCategory?:
    | "KubrowPets"
    | "LongGuns"
    | "MechSuits"
    | "Melee"
    | "OperatorAmps"
    | "Pistols"
    | "SentinelWeapons"
    | "Sentinels"
    | "SpaceGuns"
    | "SpaceMelee"
    | "SpaceSuits"
    | "SpecialItems"
    | "Suits"
    projectile?: "Discharge" | "Hitscan" | "Projectile" | "Thrown"
    range?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    reloadTime?: number
    rewardName?: string
    secondary?: Secondary
    secondaryArea?: SecondaryArea
    secondsPerShot?: number
    sentinel?: boolean
    showInInventory?: boolean
    skipBuildTimePrice?: number
    slamAttack?: number
    slamRadialDamage?: number
    slamRadius?: number
    slideAttack?: number
    slot?: number
    spinAttack?: number
    stancePolarity?:
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik"
    statusChance?: number
    tags?: Tag[]
    tier?: number
    totalDamage?: number
    tradable: boolean
    trigger?:
    | ""
    | "Active"
    | "Auto"
    | "Auto Burst"
    | "Burst"
    | "Charge"
    | "Duplex"
    | "Held"
    | "Melee"
    | "Semi"
    type: "Exalted Weapon"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
    wallAttack?: number
    wikiaThumbnail?: string
    wikiaUrl?: string
    windUp?: number
  }
  export interface Resource {
    category?:
    | "All"
    | "Arcanes"
    | "Arch-Gun"
    | "Arch-Melee"
    | "Archwing"
    | "Fish"
    | "Gear"
    | "Glyphs"
    | "Melee"
    | "Misc"
    | "Mods"
    | "Node"
    | "Pets"
    | "Primary"
    | "Quests"
    | "Relics"
    | "Resources"
    | "Secondary"
    | "Sentinels"
    | "Sigils"
    | "Skins"
    | "Warframes"
    description?: string
    excludeFromCodex?: boolean
    fusionPoints: number
    i18n?: string
    imageName?: string
    masterable: boolean
    name: string
    patchlogs?: PatchLog[]
    releaseDate?: string
    tradable: boolean
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
  }
  export interface Arcane {
    baseDrain?: number
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    category: "Arcanes"
    compatName?: string
    components?: Component[]
    consumeOnBuild?: boolean
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    fusionLimit?: number
    i18n?: string
    imageName?: string
    introduced?: Update
    isAugment?: boolean
    isExilus?: boolean
    isPrime?: boolean
    isUtility?: boolean
    itemCount?: number
    levelStats?: LevelStat[]
    marketCost?: number
    masterable?: boolean
    masteryReq?: number
    modSet?: string
    modSetValues?: number[]
    name?: string
    patchlogs?: PatchLog[]
    polarity?:
    | "aura"
    | "madurai"
    | "naramon"
    | "penjaga"
    | "umbra"
    | "unairu"
    | "universal"
    | "vazarin"
    | "zenurik"
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    skipBuildTimePrice?: number
    tags?: Tag[]
    tradable?: boolean
    transmutable?: boolean
    type: "Arcane"
    uniqueName?: string
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface Misc {
    accuracy?: number
    ammo?: null | number
    attacks?: Attack[]
    bpCost?: string | number
    buildPrice?: number
    buildQuantity?: number
    buildTime?: number
    category?:
    | "All"
    | "Arcanes"
    | "Arch-Gun"
    | "Arch-Melee"
    | "Archwing"
    | "Fish"
    | "Gear"
    | "Glyphs"
    | "Melee"
    | "Misc"
    | "Mods"
    | "Node"
    | "Pets"
    | "Primary"
    | "Quests"
    | "Relics"
    | "Resources"
    | "Secondary"
    | "Sentinels"
    | "Sigils"
    | "Skins"
    | "Warframes"
    color?: number
    components?: Component[]
    conclave?: boolean
    consumeOnBuild?: boolean
    criticalChance?: number
    criticalMultiplier?: number
    damage?: DamageTypes
    damagePerShot?: number[]
    description?: string
    /**
     * Riven disposition, a multiplier & range for omegaAttenuation
     */
    disposition?: 1 | 2 | 3 | 4 | 5
    drops?: Drop[]
    estimatedVaultDate?: string
    excludeFromCodex?: boolean
    fireRate?: number
    hexColours?: Colour[]
    i18n?: string
    imageName?: string
    introduced?: Update
    isPrime?: boolean
    itemCount?: number
    marketCost?: number
    masterable: boolean
    masteryReq?: number
    name: string
    noise?: "Alarming" | "Silent"
    omegaAttenuation?: number
    parents?: string[]
    patchlogs?: PatchLog[]
    polarities?: Polarity[]
    primeOmegaAttenuation?: number
    primeSellingPrice?: number
    probability?: number
    procChance?: number
    productCategory?:
    | "KubrowPets"
    | "LongGuns"
    | "MechSuits"
    | "Melee"
    | "OperatorAmps"
    | "Pistols"
    | "SentinelWeapons"
    | "Sentinels"
    | "SpaceGuns"
    | "SpaceMelee"
    | "SpaceSuits"
    | "SpecialItems"
    | "Suits"
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    rewardName?: string
    sentinel?: boolean
    showInInventory?: boolean
    skipBuildTimePrice?: number
    slot?: number
    tags?: Tag[]
    tier?: number
    totalDamage?: number
    tradable: boolean
    type?:
    | "---"
    | "Alloy"
    | "Amp"
    | "Amp Riven Mod"
    | "Arcade Minigame Unlock"
    | "Arcane"
    | "Arch-Gun"
    | "Arch-Gun Mod"
    | "Arch-Gun Riven Mod"
    | "Arch-Melee"
    | "Arch-Melee Mod"
    | "Arch-Melee Riven Mod"
    | "Archwing"
    | "Archwing Mod"
    | "Arm Cannon"
    | "Assault Saw"
    | "Aura"
    | "Ayatan Sculpture"
    | "Ayatan Star"
    | "Blade And Whip"
    | "Blade and Whip"
    | "Boosters"
    | "Bow"
    | "Captura"
    | "Cetus Bounty Rewards"
    | "Claws"
    | "Color Palette"
    | "Companion Mod"
    | "Companion Weapon"
    | "Companion Weapon Riven Mod"
    | "Conservation Prey"
    | "Conservation Tag"
    | "Creature Mod"
    | "Crossbow"
    | "Currency"
    | "Cut Gem"
    | "Dagger"
    | "Dual Daggers"
    | "Dual Pistols"
    | "Dual Shotguns"
    | "Dual Swords"
    | "Eidolon Shard"
    | "Emotes"
    | "Enemy Blueprint Tables"
    | "Enemy Mod Tables"
    | "Equipment Adapter"
    | "Exalted Weapon"
    | "Extractor"
    | "Fish"
    | "Fish Bait"
    | "Fish Part"
    | "Fist"
    | "Focus Lens"
    | "Fur Color"
    | "Fur Pattern"
    | "Gear"
    | "Gem"
    | "Glaive"
    | "Glyph"
    | "Gunblade"
    | "Hammer"
    | "Heavy Blade"
    | "Helminth Charger"
    | "K-Drive Component"
    | "K-Drive Mod"
    | "Kavat"
    | "Key"
    | "Key Rewards"
    | "Kitgun"
    | "Kitgun Component"
    | "Kitgun Riven Mod"
    | "Kubrow"
    | "Launcher"
    | "Machete"
    | "Medallion"
    | "Melee"
    | "Melee Mod"
    | "Melee Riven Mod"
    | "Misc"
    | "Mission Rewards"
    | "Mod Locations"
    | "Mod Set Mod"
    | "Necramech Mod"
    | "Nikana"
    | "Node"
    | "Note Packs"
    | "Nunchaku"
    | "Orbiter"
    | "Parazon"
    | "Parazon Mod"
    | "Peculiar Mod"
    | "Pet Collar"
    | "Pet Parts"
    | "Pet Resource"
    | "Pets"
    | "Pistol"
    | "Pistol Riven Mod"
    | "Plant"
    | "Plexus Mod"
    | "Polearm"
    | "Primary"
    | "Primary Mod"
    | "Railjack Mod"
    | "Rapier"
    | "Relic"
    | "Relics"
    | "Resource"
    | "Rifle"
    | "Rifle Riven Mod"
    | "Riven Mod"
    | "Scythe"
    | "Secondary"
    | "Secondary Mod"
    | "Sentinel"
    | "Ship Decoration"
    | "Ship Segment"
    | "Shotgun"
    | "Shotgun Mod"
    | "Shotgun Riven Mod"
    | "Shotgun Sidearm"
    | "Sigil"
    | "Simulacrum"
    | "Skin"
    | "Skins"
    | "Sniper Rifle"
    | "Solaris Bounty Rewards"
    | "Sortie Rewards"
    | "Sparring"
    | "Speargun"
    | "Specter"
    | "Staff"
    | "Stance Mod"
    | "Sword"
    | "Sword And Shield"
    | "Sword and Shield"
    | "Syandana"
    | "Theme Background"
    | "Theme Sound"
    | "Themes"
    | "Throwing"
    | "Thrown"
    | "Tonfa"
    | "Transient Rewards"
    | "Transmutation Mod"
    | "Two-Handed Nikana"
    | "Unique"
    | "Warfan"
    | "Warframe"
    | "Warframe Mod"
    | "Whip"
    | "Zaw"
    | "Zaw Component"
    | "Zaw Dagger / Staff"
    | "Zaw Machete / Hammer"
    | "Zaw Machete / Polearm"
    | "Zaw Nikana / Staff"
    | "Zaw Rapier / Polearm"
    | "Zaw Riven Mod"
    | "Zaw Scythe / Heavy Blade"
    | "Zaw Scythe / Staff"
    | "Zaw Sword / Polearm"
    | "Zaw Sword / Staff"
    uniqueName: string
    vaultDate?: string
    vaulted?: boolean
    wikiaThumbnail?: string
    wikiaUrl?: string
  }
  export interface ModSet {
    buffSet?: true
    category: "Mods"
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    i18n?: string
    imageName?: string
    isPrime: boolean
    masterable: boolean
    name: string
    numUpgradesInSet: number
    patchlogs?: PatchLog[]
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    stats: string[]
    tradable: boolean
    type: "Mod Set Mod"
    uniqueName: string
  }
  export interface FocusWay {
    baseDrain: number
    category: "Mods"
    compatName?: string
    description?: string
    drops?: Drop[]
    excludeFromCodex?: boolean
    fusionLimit: number
    i18n?: string
    imageName?: string
    introduced?: Update
    isAugment?: boolean
    isExilus?: boolean
    isPrime: boolean
    isUtility?: boolean
    levelStats?: LevelStat[]
    masterable: boolean
    modSet?: string
    modSetValues?: number[]
    name: string
    patchlogs?: PatchLog[]
    polarity: Polarity
    probability?: number
    rarity?: "Common" | "Legendary" | "Rare" | "Uncommon"
    releaseDate?: string
    tags?: Tag[]
    tradable: boolean
    transmutable?: boolean
    type: "Focus Way"
    uniqueName: string
    wikiaThumbnail?: string
    wikiaUrl?: string
  }

}