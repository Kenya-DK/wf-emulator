export interface IInventory {
  credits: number,
  trades_remaining: number;
  platinum: number;
  endo: number;
  mods: Array<ItemMod>;
  weapons: Array<ItemWeapon>;
  frames: Array<Frame>;
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

export interface ItemWeapon extends ItemBase {
  rank: number;
  catalyst: boolean;
  reactor: boolean;
}

export interface Frame extends ItemBase {
  xp: number;
}


export interface CreateItem {
  type: string;
  uniqueId: string;
  options?: CreateItemOptions;
}
export interface CreateItemOptions {
  quantity?: number;
  rank?: number;
  catalyst?: boolean;
  reactor?: boolean;
}