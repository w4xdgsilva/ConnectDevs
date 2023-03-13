export interface iPostContext {
  posts: iPostBody[];
  userFormatted: (user: string) => string;
  CreatePost: (data: iPostBody) => Promise<void>;
  liked: boolean;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
  likes: number;
  setLikes: React.Dispatch<React.SetStateAction<number>>;
}

export interface iPostCardProp {
  card: iPostBody;
}

export interface iPostBody {
  title: string;
  text: string;
  userId: number;
  username: string;
  id: number;
}
