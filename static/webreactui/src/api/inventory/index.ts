import { EventOperation, Events, RestClient, SendDataEvent } from "..";
import { IInventory } from "@api";
export class InventoryModule {
  constructor(private readonly client: RestClient) { }


  async refreshInventory(): Promise<IInventory> {
    const res = await this.client.get<IInventory>('api/inventory.php');
    SendDataEvent(Events.UpdateInventory, EventOperation.SET, res);
    return res;
  }

  async getInventory(): Promise<IInventory> {
    const res = await this.client.get<IInventory>('api/inventory.php');
    return res;
  }
}