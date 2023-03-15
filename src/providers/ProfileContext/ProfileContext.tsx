import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  IProfileContext,
  IDefaultProviderProps,
  IData,
  ILinks,
  IUserPost
} from './@types';
import { api } from '../../services/api';

export const ProfileContext = createContext({} as IProfileContext);

export const ProfileProvider = ({ children }: IDefaultProviderProps) => {
  const [links, setLinks] = useState<ILinks[]>([]);
  const [userPosts, setUserPosts] = useState<IUserPost[]>([]);
  const [modalAdd, setModalAdd] = useState<boolean>(false);
  const [editPost, setEditPost] = useState<IUserPost[] | null>(null);
  const [selectedPost, setSelectedPost] = useState<IUserPost | null>(null);
  const Token = JSON.parse(
    localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
  );

  const uploadLink = async (data: IData) => {
    const userToken = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );

    try {
      const response = await api.post('/links', data, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });

      setLinks(response.data);
      renderLink();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLink = async (id: number) => {
    const userToken = JSON.parse(
      localStorage.getItem('@CONNECTDEVS:TOKEN') || 'null'
    );
    try {
      const response = await api.delete(`/links/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });

      renderLink();
    } catch (error) {
      console.error(error);
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
          Authorization: `Bearer ${Token}`
        }
      });
      setLinks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderPosts = async () => {
    try {
      const response = await api.get('/posts', {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      setUserPosts(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Ops! Algo deu errado...');
    }
  };

  const updatePost = async (data: IUserPost, postId: number) => {
    try {
      const response = await api.patch(`/posts/${postId}`, data, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
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
      setModalAdd(false);
      renderPosts();
    } catch (error) {
      console.error(error);
      toast.error('Ops! Algo deu errado...');
    }
  };

  const removePost = async (PostId: number) => {
    try {
      const response = await api.delete(`/posts/${PostId}`, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      toast.success('Post excluido');
      setModalAdd(false);
      renderPosts();
    } catch (error) {
      console.error(error);
      toast.error('Ops!Algo deu errado...');
    }
  };
  function handleOutsideClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) {
      setModalAdd(false);
    }
  }
  return (
    <ProfileContext.Provider
      value={{
        uploadLink,
        deleteLink,
        links,
        userPosts,
        updatePost,
        removePost,
        editPost,
        setEditPost,
        modalAdd,
        setModalAdd,
        selectedPost,
        setSelectedPost,
        handleOutsideClick
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
