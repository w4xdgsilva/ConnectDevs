export interface IItem {
  item: string;
}

export interface ILinks {
  link: string;
  userId: number;
  id: number;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IData {
  link: string;
  userId: number;
}

export interface IInput {
  link: string;
  data: IData;
  userId: number;
}

export interface IUserPost {
  title: string;
  text: string;
  userId: number;
  username: string;
  id: number;
}
export interface IUserCardProps {
  card: IUserPost;
}

export interface ILinkCardProps {
  card: IData;
}

export interface IProfileContext {
  links: ILinks[];
  userPosts: IUserPost[];
  editPost: IUserPost[] | null;
  setEditPost: React.Dispatch<React.SetStateAction<IUserPost[] | null>>;
  modalAdd: boolean;
  setModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPost: IUserPost | null;
  setSelectedPost: React.Dispatch<React.SetStateAction<IUserPost | null>>;
  uploadLink: (data: IData) => Promise<void>;
  deleteLink: (id: number) => Promise<void>;
  updatePost: (data: IUserPost, postId: number) => Promise<void>;
  removePost: (PostId: number) => Promise<void>;
  handleOutsideClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}
