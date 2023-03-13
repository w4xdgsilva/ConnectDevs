import { iPostBody } from '../PostsContext/@types';

export interface iProfileContext {
  links: iLinks[];
  userPosts: iPostBody[];
  editPost: iUserPost[] | null;
  setEditPost: React.Dispatch<React.SetStateAction<iUserPost[] | null>>;
  modalAdd: boolean;
  setModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
  uploadLink: (data: iData) => Promise<void>;
  deleteLink: (id: iId) => Promise<void>;
  UpdatePost: (data: iUserPost, postId: iId) => Promise<void>;
  removePost: (PostId: iId) => Promise<void>;
}

export interface iItem {
  item: string;
}

export interface iLinks {
  link: string;
  userId: number;
  id: number;
}

export interface iDefaultProviderProps {
  children: React.ReactNode;
}

export interface iData {
  link: string;
  userId: number;
}

export interface iId {
  id: number;
}

export interface iInput {
  link: string;
  data: iData;
  userId: number;
}

export interface iUserPost {
  title: string;
  text: string;
  userId: number;
  username: string;
  id: number;
}
