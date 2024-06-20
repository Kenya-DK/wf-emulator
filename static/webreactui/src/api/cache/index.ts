
import { CacheResponse, RestClient } from "..";

export class CacheModule {
  private _cache: CacheResponse | undefined;
  private mapUniqueNameToName: { [uniqueName: string]: string } = {};

  constructor(private readonly client: RestClient) {
    this.init();
  }


  async init() {
    if (this._cache)
      return this._cache;
    const res = await this.client.get<CacheResponse>('custom/cache');
    this._cache = res;
    this.mapUniqueNameToName = res.miscitems.reduce((acc, item) => {
      if (item.uniqueName)
        acc[item.uniqueName] = item.name;
      return acc;
    }, {} as { [uniqueName: string]: string });

    for (const item of res.mods) {
      if (item.uniqueName)
        this.mapUniqueNameToName[item.uniqueName] = item.name;
    }

    for (const item of res.weapons) {
      if (item.uniqueName)
        this.mapUniqueNameToName[item.uniqueName] = item.name;
    }

    for (const item of res.warframes) {
      if (item.uniqueName)
        this.mapUniqueNameToName[item.uniqueName] = item.name;
    }
    return res;
  }

  getNameByUniqueId(uniqueId: string): string | undefined {
    return this.mapUniqueNameToName[uniqueId] || uniqueId;
  }
}