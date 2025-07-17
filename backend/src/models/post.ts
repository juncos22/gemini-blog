import { Post } from "./types";
import UserModel from "./user";
import { readDB, writeDB } from "../helpers/db";

const PostModel = {
  findAll: (): Post[] => {
    const db = readDB();
    return db.posts.map((post) => {
      const author = UserModel.findById(post.authorId);
      return { ...post, author };
    });
  },

  findById: (id: number): Post | undefined => {
    const db = readDB();
    const post = db.posts.find((p) => p.id === id);
    if (post) {
      const author = UserModel.findById(post.authorId);
      return { ...post, author };
    }
    return undefined;
  },

  create: (
    postData: Omit<Post, "id" | "createdAt" | "author"> & { authorId: number }
  ): Post => {
    const db = readDB();
    const newPost = {
      id: db.posts.length > 0 ? Math.max(...db.posts.map((p) => p.id)) + 1 : 1,
      ...postData,
      createdAt: new Date().toISOString(),
    };
    db.posts.push(newPost);
    writeDB(db);
    const author = UserModel.findById(newPost.authorId);
    if (!author) {
      throw new Error("Author not found");
    }
    const { password, ...authorWithoutPassword } = author; // Exclude password from author
    return { ...newPost, author: authorWithoutPassword };
  },

  update: (
    id: number,
    updatedData: Partial<
      Omit<Post, "id" | "createdAt" | "author"> & { authorId?: number }
    >
  ): Post | null => {
    const db = readDB();
    const index = db.posts.findIndex((p) => p.id === id);
    if (index !== -1) {
      db.posts[index] = { ...db.posts[index], ...updatedData };
      writeDB(db);
      const author = UserModel.findById(db.posts[index].authorId);
      return { ...db.posts[index], author };
    }
    return null;
  },

  delete: (id: number): boolean => {
    const db = readDB();
    const initialLength = db.posts.length;
    db.posts = db.posts.filter((p) => p.id !== id);
    if (db.posts.length < initialLength) {
      writeDB(db);
      return true;
    }
    return false;
  },
};

export default PostModel;
