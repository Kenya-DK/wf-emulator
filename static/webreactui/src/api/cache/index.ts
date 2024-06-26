
import { CacheItem, CacheResponse, RestClient } from "..";

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

  getCachedItemByUniqueId(uniqueId: string): CacheItem | undefined {
    if (!this._cache)
      return undefined;
    return this._cache.items.find(i => i.uniqueName === uniqueId);
  }


}