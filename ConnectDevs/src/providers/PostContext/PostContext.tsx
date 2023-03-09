import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { iPostContext, iPostsData } from './@types';
import { iDefaultProviderProps } from '../UserContext/@types';
import { api } from '../../services/api';

export const PostContext = createContext({} as iPostContext);

export const PostProviders = ({ children }: iDefaultProviderProps) => {
  const [posts, setPosts] = useState<iPostsData[]>([]);

  const CreatePost = async (data: iPostsData) => {
    const userToken = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );

    try {
      const response = await api.post('/posts', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setPosts(response.data);
      toast.success('Post enviado com sucesso!');
    } catch (error) {
      toast.error('Ops! Algo deu errado...');
    }
  };
  return (
    <PostContext.Provider value={{ CreatePost, posts }}>
      {children}
    </PostContext.Provider>
  );
};
