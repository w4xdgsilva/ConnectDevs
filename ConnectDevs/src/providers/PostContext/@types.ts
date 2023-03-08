export interface iPostsData {
  title: string;
  text: string;
}

export interface iPostContext {
  post: iPostsData[];
  CreatePost: (data: iPostsData) => Promise<void>;
}
