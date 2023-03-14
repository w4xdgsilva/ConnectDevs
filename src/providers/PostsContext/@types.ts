import { ILinks } from '../ProfileContext/@types';

export interface IPostContext {
  posts: IPostBody[];
  userFormatted: (user: string) => string;
  createPost: (data: IPostBody) => Promise<void>;
  selectedUser: number | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<number | null>>;
  userLinks: ILinks[] | null;
  setUserLinks: React.Dispatch<React.SetStateAction<ILinks[] | null>>;
}

export interface IPostCardProp {
  card: IPostBody;
}

export interface IPostBody {
  title: string;
  text: string;
  userId: number;
  username: string;
  id: number;
}
