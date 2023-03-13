import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IPostBody, IPostContext } from './@types';
import { api } from '../../services/api';
import { IDefaultProviderProps } from '../UserContext/@types';

export const PostsContext = createContext({} as IPostContext);

export const PostsProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<IPostBody[]>([]);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const userToken = JSON.parse(
    localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
  );
  const userId = JSON.parse(
    localStorage.getItem('@CONNECTDEVS:USER') || 'null'
  );

  const renderPosts = async () => {
    if (userToken && userId) {
      try {
        const response = await api.get('/posts', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    renderPosts();
  }, []);

  const userFormatted = (user: string) => {
    const username = user;
    const names = username.split(' ');
    const letterA = names[0].slice(0, 1).toUpperCase();
    const letterB = names[1].slice(0, 1).toUpperCase();
    const displayName = letterA + letterB;

    return displayName;
  };
  const createPost = async (data: IPostBody) => {
    try {
      const response = await api.post('/posts', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      renderPosts();
      toast.success('Post enviado com sucesso!');
    } catch (error) {
      console.error(error);
      toast.error('Ops! Algo deu errado...');
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        createPost,
        userFormatted,
        liked,
        setLiked,
        likes,
        setLikes,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
