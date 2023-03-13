import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  iProfileContext,
  iDefaultProviderProps,
  iData,
  iId,
  iLinks,
  iUserPost,
} from './@types';
import { api } from '../../services/api';

export const ProfileContext = createContext({} as iProfileContext);

export const ProfileProvider = ({ children }: iDefaultProviderProps) => {
  const [links, setLinks] = useState<iLinks[]>([]);
  const [userPosts, setUserPosts] = useState<iUserPost[]>([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [editPost, setEditPost] = useState<iUserPost[] | null>(null);
  const Token = JSON.parse(
    localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
  );

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

  const UpdatePost = async (data: iUserPost, postId: iId) => {
    try {
      const response = await api.patch(`/posts/${postId}`, data, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      const newPosts = userPosts.map((post) => {
        if (Number(postId) === post.id) {
          return { ...post, ...data };
          // eslint-disable-next-line no-else-return
        } else {
          return post;
        }
      });
      toast.success('Post editado');
      setEditPost(newPosts);
      renderPosts();
    } catch (error) {
      toast.error('Ops! Algo deu errado...');
    }
  };

  const removePost = async (PostId: iId) => {
    try {
      const response = await api.delete(`/posts/${PostId}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      toast.success('Post excluido');
      renderPosts();
    } catch (error) {
      toast.error('Ops!Algo deu errado...');
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        uploadLink,
        deleteLink,
        links,
        userPosts,
        UpdatePost,
        removePost,
        editPost,
        setEditPost,
        modalAdd,
        setModalAdd,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
