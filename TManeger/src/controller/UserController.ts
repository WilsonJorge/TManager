
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

  async createUser(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User);
      const newUser = userRepository.create(req.body);
      await userRepository.save(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao criar um user' });
    }
  }
}

export default new UserController();
