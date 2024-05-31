export interface LogInResponse {
  DisplayName: string;
  CountryCode: string;
  ClientType: string;
  CrossPlatformAllowed: boolean;
  ForceLogoutVersion: number;
  ConsentNeeded: boolean;
  TrackedSettings: any[];
  Nonce: number;
  id: string;
  platformCDNs: string[];
  NRS: string[];
  DTLS: number;
  IRC: string[];
  HUB: string;
  BuildLabel: string;
  MatchmakingBuildId: string;
}
