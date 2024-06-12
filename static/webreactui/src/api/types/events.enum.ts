export enum Events {
  // App
  UpdateAppInfo = "App:UpdateAppInfo",
  UpdateConfig = "App:UpdateConfig",

  // User Name
  SetUserName = "App:SetUserName",
  // Inventory
  UpdateInventory = "Inventory:Update",
}

export enum EventOperation {
  CREATE_OR_UPDATE = "CREATE_OR_UPDATE",
  DELETE = "DELETE",
  SET = "SET"
}