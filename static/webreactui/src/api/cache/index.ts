
import { CacheBaseItem, CacheItemMod, CacheResponse, RestClient } from "..";

export class CacheModule {
  private _cache: CacheResponse | undefined;

  constructor(private readonly client: RestClient) {
    this.init();
  }


  async init() {
    if (this._cache)
      return this._cache;
    const res = await this.client.get<CacheResponse>('custom/cache');
    this._cache = res;
  }

  getWarframes(): CacheBaseItem[] | undefined {
    if (!this._cache)
      return undefined;
    return this._cache.frames;
  }

  getWeaponByUniqueId(uniqueId: string): CacheBaseItem | undefined {
    if (!this._cache)
      return undefined;
    return this._cache.weapons.find(i => i.uniqueName === uniqueId);
  }
  getItemByUniqueId(uniqueId: string): CacheBaseItem | undefined {
    if (!this._cache)
      return undefined;
    return this._cache.items.find(i => i.uniqueName === uniqueId);
  }
  getModByUniqueId(uniqueId: string): CacheItemMod | undefined {
    if (!this._cache)
      return undefined;
    return this._cache.mods.find(i => i.uniqueName === uniqueId);
  }
  getFrameByUniqueId(uniqueId: string): CacheBaseItem | undefined {
    if (!this._cache)
      return undefined;
    return this._cache.frames.find(i => i.uniqueName === uniqueId);
  }
  getBadItemByUniqueId(uniqueId: string): string | undefined {
    if (!this._cache)
      return undefined;
    return this._cache.badItems[uniqueId];
  }
}