export interface CacheResponse {
  weapons: CacheBaseItem[];
  items: CacheBaseItem[];
  mods: CacheBaseItem[];
  frames: CacheBaseItem[];
  badItems: { [key: string]: string };
}

export interface CacheBaseItem {
  uniqueName: string;
  name: string;
}
export interface CacheItemMod {
  uniqueName: string;
  name: string;
  maxRank?: number;
}