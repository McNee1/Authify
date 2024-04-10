export interface AuthUserSchema {
  email: string;
  password: string;
}

export interface UpdateUserSchema {
  deleteAttribute?: string[];
  displayName: string;
  idToken: string;
  photoUrl?: string;
}

export interface CreateUserResponse {
  email: string;
  expiresIn: string;
  idToken: string;
  localId: string;
  refreshToken: string;
}

export interface LogInUserResponse extends CreateUserResponse {
  displayName: string;
  profilePicture?: string;
  registered: boolean;
}
