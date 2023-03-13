import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { iPostBody, iPostContext } from './@types';
import { api } from '../../services/api';
import { iDefaultProviderProps } from '../UserContext/@types';

export const PostsContext = createContext({} as iPostContext);

export const PostsProvider = ({ children }: iDefaultProviderProps) => {
  const [posts, setPosts] = useState<iPostBody[]>([]);
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

  const userFormatted = (user: string) => {
    const username = user;
    const names = username.split(' ');
    const letterA = names[0].slice(0, 1).toUpperCase();
    const letterB = names[1].slice(0, 1).toUpperCase();
    const displayName = letterA + letterB;

    return displayName;
  };
  const CreatePost = async (data: iPostBody) => {
    try {
      const response = await api.post('/posts', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      renderPosts();
      toast.success('Post enviado com sucesso!');
    } catch (error) {
      toast.error('Ops! Algo deu errado...');
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        CreatePost,
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
