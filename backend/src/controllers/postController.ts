import { Request, Response } from "express";
import PostModel from "../models/post";
import { AuthRequest } from "../middleware/authMiddleware";
import { User } from "../models/types";

export const getAllPosts = (req: Request<AuthRequest>, res: Response) => {
  const posts = PostModel.findAll();
  res.json(posts);
};

export const getPostById = (req: Request<AuthRequest>, res: Response) => {
  const post = PostModel.findById(parseInt(req.params.id!));
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
};

export const createPost = (req: Request<AuthRequest>, res: Response) => {
  const { title, content } = req.body;
  const authorId = (req.user as User).id;
  if (!authorId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const newPost = PostModel.create({ title, content, authorId });
  res.status(201).json(newPost);
};

export const updatePost = (req: Request<AuthRequest>, res: Response) => {
  const updatedPost = PostModel.update(parseInt(req.params.id!), req.body);
  if (updatedPost) {
    res.json(updatedPost);
  } else {
    res.status(404).send("Post not found");
  }
};

export const deletePost = (req: Request<AuthRequest>, res: Response) => {
  const deleted = PostModel.delete(parseInt(req.params.id!));
  if (deleted) {
    res.status(204).send(); // No Content
  } else {
    res.status(404).send("Post not found");
  }
};
