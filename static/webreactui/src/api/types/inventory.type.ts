export interface IInventory {
  credits: number,
  trades_remaining: number;
  platinum: number;
  endo: number;
  mods: Array<ItemMod>;
}

export interface ItemBase {
  _id: string;
  name: string;
  uniqueId: string;
  quantity: number;
}
export interface ItemMod extends ItemBase {
  rank: number;
}