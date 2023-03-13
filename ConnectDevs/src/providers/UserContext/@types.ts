export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IDefaultErrorResponse {
  data: string;
}

export interface IUserData {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface IRegisterFormData {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IApiUserResponseData {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    username: string;
  };
}

export interface IApiAutoLoginResponseData {
  id: number;
  name: string;
  email: string;
  username: string;
  password?: string;
  confirmPassword?: string;
}

export interface IUserContext {
  isLoading: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (formData: IRegisterFormData) => Promise<void>;
  userLogin: (formData: ILoginFormData) => Promise<void>;
  userLogout: () => void;
  userData: IUserData | null;
  getUser: (id: IUserId) => Promise<IGetUser | null>;
}

export interface IUserId {
  userId: IGetUser['id'];
}

export interface IGetUser {
  email: string;
  password: string;
  name: string;
  username: string;
  id: number;
}
