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
