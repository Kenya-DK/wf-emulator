export interface User {
  DisplayName: string;
  CountryCode: string;
  ClientType: string;
  CrossPlatformAllowed: boolean;
  ForceLogoutVersion: number;
  ConsentNeeded: boolean;
  TrackedSettings: any[];
  Nonce: number;
  id: string;
  Groups: Group[];
  platformCDNs: string[];
  NRS: string[];
  DTLS: number;
  IRC: string[];
  HUB: string;
  BuildLabel: string;
  MatchmakingBuildId: string;
}

export interface Group {
  experiment: string;
  experimentGroup: string;
}
