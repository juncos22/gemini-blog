export interface Post {
  id: number;
  title: string;
  content: string;
  author?: User;
  authorId: number;
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  googleId?: string;
}

export interface Profile {
  id: number;
  bio: string;
  userId: number;
}
