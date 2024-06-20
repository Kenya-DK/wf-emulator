
import { IInventory, ItemMod, OpenWF, RestClient, EventOperation, Events, SendDataEvent } from "@api";
import { getItemNameByUniqueId } from "@utils";
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
        mods.push({
          _id: rawUpgrade.LastAdded.$oid,
          name: getItemNameByUniqueId(rawUpgrade.ItemType) || rawUpgrade.ItemType,
          uniqueId: rawUpgrade.ItemType,
          quality: rawUpgrade.ItemCount,
          rank: 0
        });
      }
      // Parse each upgrade
      for (const upgrade of inventory.Upgrades) {
        const fingerprint = JSON.parse(upgrade.UpgradeFingerprint);

        mods.push({
          _id: upgrade.ItemId.$oid,
          name: getItemNameByUniqueId(upgrade.ItemType) || upgrade.ItemType,
          uniqueId: upgrade.ItemType,
          quality: upgrade.ItemCount,
          rank: fingerprint.lvl
        });
      }
    } catch (error) {
      console.error("parseInventoryMods", error);
    }
    return mods;
  }

}