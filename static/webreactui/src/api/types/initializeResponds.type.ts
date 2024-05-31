import { AppInfo } from "./app.type";
import { Config } from "./config.type";

export interface InitializeResponds {
  app_info: AppInfo;
  config: Config;
}