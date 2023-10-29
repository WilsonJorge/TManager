
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

class UserController {
  async getAll(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User);
      const users = await userRepository.find();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao buscar users' });
    }
  }

  
