import { RestClient } from "..";
import { User } from "@api";
export class AuthModule {
  constructor(private readonly client: RestClient) { }

  async login(email: string, password: string): Promise<User> {
    return await this.client.post<User>('api/login.php', {
      email,
      password: wp.encSync(password, "hex"),
      time: new Date().getTime() / 1000,
      s: "W0RFXVN0ZXZlIGxpa2VzIGJpZyBidXR0cw==", // signature of some kind
      lang: "en",
      date: 1501230947855458660, // ???
      ClientType: "webui",
      PS: "W0RFXVN0ZXZlIGxpa2VzIGJpZyBidXR0cw==" // anti-cheat data
    });
  }
}
declare var wp: any;