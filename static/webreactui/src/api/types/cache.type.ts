export interface CacheResponse {
  warframes: CacheItem[];
  weapons: CacheItem[];
  miscitems: CacheItem[];
  mods: CacheMod[];
  badItems: { [key: string]: string };
}

export enum BadItem {
  BrokenBeginnerIntermediate = "broken (beginner/intermediate)",
  InnateDamage = "innate-damage",
  UnreleasedUnobtainable = "unreleased/unobtainable",
  UnveiledRiven = "unveiled-riven",
}

export interface CacheItem {
  uniqueName: string;
  name: string;
}

export interface CacheMod extends CacheItem {
  fusionLimit?: number;
}