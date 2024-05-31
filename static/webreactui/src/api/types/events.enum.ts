export enum Events {
  // App
  UpdateAppInfo = "App:UpdateAppInfo",
  UpdateConfig = "App:UpdateConfig",

  // User
  UpdateUser = "User:Update",
}

export enum EventOperation {
  CREATE_OR_UPDATE = "CREATE_OR_UPDATE",
  DELETE = "DELETE",
  SET = "SET"
}