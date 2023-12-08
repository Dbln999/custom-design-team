export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  code?: string;
  address?: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;
  loaded: boolean;
}
