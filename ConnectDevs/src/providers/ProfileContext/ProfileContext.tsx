import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  iProfileContext,
  iDefaultProviderProps,
  iData,
  iId,
  iLinks,
} from './@types';
import { api } from '../../services/api';
import { iPostBody } from '../PostsContext/@types';

export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: iDefaultProviderProps) => {
  const [links, setLinks] = useState<iLinks[]>([]);
  const [userPosts, setUserPosts] = useState<iPostBody[]>([]);

  const uploadLink = async (data: iData) => {
    const userToken = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );

    try {
      const response = await api.post('/links', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response.data);
      setLinks(response.data);
      renderLink();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLink = async (id: iId) => {
    const userToken = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );
    try {
      const response = await api.delete(`/links/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response);
      renderLink();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderLink();
    renderPosts();
  }, []);

  const renderLink = async () => {
    const Token = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );
    try {
      const response = await api.get('/links', {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      setLinks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPosts = async () => {
    const Token = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );
    try {
      const response = await api.get('/posts', {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      setUserPosts(response.data);
    } catch (error) {
      toast.error('Ops! Algo deu errado...');
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        uploadLink,
        deleteLink,
        links,
        userPosts,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
