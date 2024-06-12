import { RestClient } from "..";
import { LogInResponse } from "@api";
export class AuthModule {
  constructor(private readonly client: RestClient) { }

  async login(email: string, password: string): Promise<LogInResponse> {
    const res = await this.client.post<LogInResponse>('api/login.php', {
      email,
      password: wp.encSync(password, "hex"),
      time: new Date().getTime() / 1000,
      s: "W0RFXVN0ZXZlIGxpa2VzIGJpZyBidXR0cw==", // signature of some kind
      lang: "en",
      date: 1501230947855458660, // ???
      ClientType: "webui",
      PS: "W0RFXVN0ZXZlIGxpa2VzIGJpZyBidXR0cw==" // anti-cheat data
    });
    this.client.setAccountId(res.id);
    this.client.setNonce(res.Nonce);
    return res;
  }
}
declare var wp: any;