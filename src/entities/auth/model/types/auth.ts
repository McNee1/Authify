export interface Auth {
  idToken: string;
  refreshToken: string;
  uId: string;
}

export interface AuthSchema {
  authData: Auth | null;
}
