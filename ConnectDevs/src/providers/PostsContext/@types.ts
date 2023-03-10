export interface iPostContext {
  posts: iPostBody[];
  userFormatted: (user: string) => string;
  CreatePost: (data: iPostBody) => Promise<void>;
}

export interface iPostCardProp {
  card: iPostBody;
}

export interface iPostBody {
  title: string;
  text: string;
  userId: number;
  username: string;
}
