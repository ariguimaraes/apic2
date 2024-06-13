import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getPosts = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;
  const newPost = await prisma.post.create({
    data: { title, content, authorId }
  });
  res.json(newPost);
};