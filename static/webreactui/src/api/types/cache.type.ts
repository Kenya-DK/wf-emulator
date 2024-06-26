export interface CacheResponse {
  items: CacheItem[];
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
  fusionLimit?: number;
}