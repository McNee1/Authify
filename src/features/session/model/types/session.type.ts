export interface Session {
  idToken: string;
  refreshToken: string;
  uId: string;
}

export interface SessionSchema {
  error: string | null;
  sessionData: Session | null;
  status: 'failed' | 'idle' | 'pending' | 'succeeded';
}

export interface UpdateSession {
  access_token: string;
  expires_in: string;
  id_token: string;
  project_id: string;
  refresh_token: string;
  token_type: string;
  user_id: string;
}
