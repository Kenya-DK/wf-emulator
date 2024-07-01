
import { IInventory, ItemMod, OpenWF, RestClient, EventOperation, Events, SendDataEvent, api, ItemWeapon, Frame, CreateItem } from "@api";
export class InventoryModule {
  private _inventory: IInventory | undefined;
  constructor(private readonly client: RestClient) { }

  async refreshInventory(): Promise<OpenWF.IInventory> {
    const res = await this.client.get<OpenWF.IInventory>('api/inventory.php');
    const inventory = this.parseInventory(res);
    this._inventory = inventory;
    SendDataEvent(Events.UpdateInventory, EventOperation.SET, inventory);
    return res;
  }

  private parseInventory(inventory: OpenWF.IInventory): IInventory {
    return {
      credits: inventory.RegularCredits,
      trades_remaining: inventory.TradesRemaining,
      platinum: inventory.PremiumCredits,
      endo: inventory.FusionPoints,
      mods: this.parseInventoryMods(inventory),
      weapons: this.parseInventoryWeapon(inventory),
      frames: this.parseInventoryFrames(inventory)
    }
  }
  private parseInventoryFrames(inventory: OpenWF.IInventory): Frame[] {
    const frames: Frame[] = [];
    for (const frame of inventory.Suits) {
      const item = api.cache.getFrameByUniqueId(frame.ItemType)

      // Get the item name from the cache
      let name = item?.name || frame.ItemType;
      if (frame.ItemName)
        name = `${frame.ItemName} (${name})`;

      frames.push({
        _id: frame.ItemId.$oid,
        name: name,
        uniqueId: frame.ItemType,
        xp: frame.XP || 0,
        quantity: 1
      });
    }
    return frames;
  }
  private parseInventoryWeapon(_inventory: OpenWF.IInventory): ItemWeapon[] {
    return [];
  }
  private parseInventoryMods(inventory: OpenWF.IInventory): ItemMod[] {

    const mods: ItemMod[] = [];

    try {
      // Parse each raw upgrade
      for (const rawUpgrade of inventory.RawUpgrades) {
        const item = api.cache.getModByUniqueId(rawUpgrade.ItemType)
        mods.push({
          _id: rawUpgrade.LastAdded.$oid,
          name: item?.name || rawUpgrade.ItemType,
          uniqueId: rawUpgrade.ItemType,
          quantity: rawUpgrade.ItemCount || 1,
          rank: 0
        });
      }
      // Parse each upgrade
      for (const upgrade of inventory.Upgrades) {
        const fingerprint = JSON.parse(upgrade.UpgradeFingerprint);
        const item = api.cache.getModByUniqueId(upgrade.ItemType)
        mods.push({
          _id: upgrade.ItemId.$oid,
          name: item?.name || upgrade.ItemType,
          uniqueId: upgrade.ItemType,
          quantity: upgrade.ItemCount || 1,
          rank: fingerprint.lvl,
          // maxRank: item?.fusionLimit || 0
        });
      }
    } catch (error) {
      console.error("parseInventoryMods", error);
    }
    return mods;
  }

  // Methods to update the inventory
  getSuitByItemId(itemId: string): Frame | undefined {
    if (!this._inventory)
      return undefined;
    return this._inventory.frames.find(i => i._id === itemId);
  }
  async renameGearItem(category: string, itemId: string, newName: string): Promise<any> {
    const res = await this.client.post<any>(`api/nameWeapon.php`, {
      ItemName: newName,
    }, [
      `Category=${category}`,
      `ItemId=${itemId}`,
      `webui=1`
    ]);
    this.refreshInventory();
    return res;
  }
  async deleteGearItem(category: string, itemId: string): Promise<any> {
    const data = {
      SellCurrency: "SC_RegularCredits",
      SellPrice: 0,
      Items: {
        [category]: [
          {
            String: itemId,
            Count: 0
          }
        ]
      }
    };
    const res = await this.client.post<any>(`api/sell.php`, data);
    this.refreshInventory();
    return res;
  }
  async addGearXP(category: string, itemId: string, xp: number): Promise<any> {
    const data = {
      [category]: [
        {
          ItemId: { $oid: itemId },
          XP: xp
        }
      ]
    };
    const res = await this.client.post<any>(`api/missionInventoryUpdate.php`, data);
    this.refreshInventory();
    return res;
  }

  async addItem(input: CreateItem): Promise<any> {
    const res = await this.client.post<any>(`custom/addItem`, {
      type: "Powersuit",
      internalName: input.uniqueId,
    }, undefined, "application/json");
    this.refreshInventory();
    return res;

  }
}