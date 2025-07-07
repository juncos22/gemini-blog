export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  image: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
}
