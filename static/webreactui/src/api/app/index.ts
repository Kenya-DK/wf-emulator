import { RestClient } from "..";
import { Config } from "@api";
import { InitializeResponds } from "@api";
export class AppModule {
  constructor(private readonly client: RestClient) { }

  async init(): Promise<InitializeResponds> {
    return await this.client.get<InitializeResponds>('custom/initialize');
  }

  public async updateConfig(config: Config): Promise<void> {
    await this.client.put('custom/updateConfig', config);
  }
}