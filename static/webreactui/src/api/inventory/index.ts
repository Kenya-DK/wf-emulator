
import { IInventory, ItemMod, OpenWF, RestClient, EventOperation, Events, SendDataEvent, api } from "@api";
export class InventoryModule {
  constructor(private readonly client: RestClient) { }

  async refreshInventory(): Promise<OpenWF.IInventory> {
    const res = await this.client.get<OpenWF.IInventory>('api/inventory.php');
    const inventory = this.parseInventory(res);
    SendDataEvent(Events.UpdateInventory, EventOperation.SET, inventory);
    return res;
  }

  private parseInventory(inventory: OpenWF.IInventory): IInventory {



    return {
      credits: inventory.RegularCredits,
      trades_remaining: inventory.TradesRemaining,
      platinum: inventory.PremiumCredits,
      endo: inventory.FusionPoints,
      mods: this.parseInventoryMods(inventory)
    }
  }
  private parseInventoryMods(inventory: OpenWF.IInventory): ItemMod[] {

    const mods: ItemMod[] = [];

    try {
      // Parse each raw upgrade
      for (const rawUpgrade of inventory.RawUpgrades) {
        const item = api.cache.getCachedItemByUniqueId(rawUpgrade.ItemType)
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
        const item = api.cache.getCachedItemByUniqueId(upgrade.ItemType)
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

}