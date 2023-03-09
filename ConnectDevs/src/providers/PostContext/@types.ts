export interface iPostsData {
  title: string;
  text: string;
  userId: number;
}

export interface iPostContext {
  posts: iPostsData[] | [];
  CreatePost: (data: iPostsData) => Promise<void>;
}
