import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getComments = async (req: Request, res: Response) => {
  const comments = await prisma.comment.findMany();
  res.json(comments);
};

export const createComment = async (req: Request, res: Response) => {
  const { content, postId, authorId } = req.body;
  const newComment = await prisma.comment.create({
    data: { content, postId, authorId }
  });
  res.json(newComment);
};