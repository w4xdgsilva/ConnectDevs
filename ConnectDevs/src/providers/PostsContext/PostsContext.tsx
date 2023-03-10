import { createContext, useContext, useEffect, useState } from 'react';
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
              Authorization: `Bearer ${userToken}`
            }
          });
          setPosts(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    renderPosts();
  }, [posts]);

  const userFormatted = (user: string) => {
    const username = user;
    const names = username.split(' ');
    const letterA = names[0].slice(0, 1).toUpperCase();
    const letterB = names[1].slice(0, 1).toUpperCase();
    const displayName = letterA + letterB;

    return displayName;
  };

  return (
    <PostsContext.Provider value={{ posts, userFormatted }}>
      {children}
    </PostsContext.Provider>
  );
};
