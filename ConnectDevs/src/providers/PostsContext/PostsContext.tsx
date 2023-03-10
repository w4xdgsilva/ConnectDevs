import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { iPostBody, iPostContext } from './@types';
import { api } from '../../services/api';
import { iDefaultProviderProps } from '../UserContext/@types';
import { UserContext } from '../UserContext/UserContext';

export const PostsContext = createContext({} as iPostContext);

export const PostsProvider = ({ children }: iDefaultProviderProps) => {
  const { isLoading, setIsLoading } = useContext(UserContext);

  const [posts, setPosts] = useState<iPostBody[]>([]);
  const userToken = JSON.parse(
    localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
  );
  const userId = JSON.parse(
    localStorage.getItem('@CONNECTDEVS:USER') || 'null'
  );

  useEffect(() => {
    const renderPosts = async () => {
      if (userToken && userId) {
        try {
          const response = await api.get('/posts', {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          setPosts(response.data);
          console.log(posts);
        } catch (error) {
          console.error(error);
        }
      }
    };
    renderPosts();
  }, []);
  const CreatePost = async (data: iPostBody) => {
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
    <PostsContext.Provider value={{ posts, CreatePost }}>
      {children}
    </PostsContext.Provider>
  );
};
