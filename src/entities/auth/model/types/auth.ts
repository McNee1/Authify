export interface Auth {
  accessToken: string;
  refreshToken: string;
  uId: string;
}

export interface AuthSchema {
  authData: Auth | null;
}
