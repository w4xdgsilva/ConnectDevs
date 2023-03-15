import { createContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import {
  IUserContext,
  IDefaultProviderProps,
  IUserData,
  IApiUserResponseData,
  IDefaultErrorResponse,
  IRegisterFormData,
  ILoginFormData,
  IApiAutoLoginResponseData,
  IUserId,
  IGetUser,
} from './@types';
import { api } from '../../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState<IUserData | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const userToken = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );
    const newId = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:USER') || 'null'
    );
    const userId = newId?.id;

    if (userToken) {
      const autoLogin = async () => {
        try {
          const response = await api.get<IApiAutoLoginResponseData>(
            `/users/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          );

          setUserData({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            username: response.data.username,
          });

          if (currentPage !== '/profilePage') {
            navigate('/');
          }
        } catch (error) {
          console.error(error);
          localStorage.removeItem('@CONNECTDEVS:TOKEN');
          localStorage.removeItem('@CONNECTDEVS:USER');
          setUserData(null);
          navigate('/login');
        }
      };

      autoLogin();
    }
  }, []);

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      const response = await api.post<IApiUserResponseData>(
        '/register',
        formData
      );
      setIsLoading(true);
      const userId = parseInt(response.data.user.id, 10);

      setUserData({
        id: userId,
        name: response.data.user.name,
        email: response.data.user.email,
        username: response.data.user.username,
      });

      localStorage.setItem(
        '@CONNECTDEVS:USER',
        JSON.stringify(response.data.user)
      );
      localStorage.setItem(
        '@CONNECTDEVS:TOKEN',
        JSON.stringify(response.data.accessToken)
      );
      navigate('/login');
      toast.success('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error(error);
      const currentError = error as AxiosError<IDefaultErrorResponse>;

      const errorMessage = currentError.response?.data;

      if (
        typeof errorMessage === 'string' &&
        errorMessage === 'Email already exists'
      ) {
        toast.error('Email já cadastrado');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormData) => {
    try {
      const response = await api.post<IApiUserResponseData>('/login', formData);
      setIsLoading(true);
      const userId = parseInt(response.data.user.id, 10);

      setUserData({
        id: userId,
        name: response.data.user.name,
        email: response.data.user.email,
        username: response.data.user.username,
      });

      localStorage.setItem(
        '@CONNECTDEVS:USER',
        JSON.stringify(response.data.user)
      );
      localStorage.setItem(
        '@CONNECTDEVS:TOKEN',
        JSON.stringify(response.data.accessToken)
      );
      navigate('/');
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      console.error(error);
      const currentError = error as AxiosError<IDefaultErrorResponse>;

      const errorMessage = currentError.response?.data;

      if (
        typeof errorMessage === 'string' &&
        errorMessage === 'Password is too short'
      ) {
        toast.error('A senha deve conter pelo menos oito caracteres');
      } else if (
        typeof errorMessage === 'string' &&
        errorMessage === 'Cannot find user'
      ) {
        toast.error('Email ou senha incorretos');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getUser = async (id: IUserId) => {
    const userToken = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );
    const userId = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:USER') || 'null'
    );
    if (userToken && userId) {
      try {
        const response = await api.get<IGetUser>(`/users/${id}`);

        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    return null;
  };

  const userLogout = () => {
    setUserData(null);
    localStorage.removeItem('@CONNECTDEVS:TOKEN');
    localStorage.removeItem('@CONNECTDEVS:USER');
    navigate('/login');
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        setIsLoading,
        userRegister,
        userLogin,
        userLogout,
        userData,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
