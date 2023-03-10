export interface iPostContext {
  posts: iPostBody[];
}

export interface iPostCardProp {
  card: iPostBody;
}

export interface iPostBody {
  title: string;
  text: string;
  userId?: number;
  id?: number;
}
