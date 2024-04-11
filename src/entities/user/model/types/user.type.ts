export interface User {
  description?: string;
  email: string;
  name: string;
  photoURL?: string | null;
}

export interface UserSchema {
  userData: User | null;
}
