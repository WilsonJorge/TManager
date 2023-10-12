// src/controllers/CategoryController.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../entity/Category';

class CategoryController {
  async getAll(req: Request, res: Response) {
    try {
      const categoryRepository = getRepository(Category);
      const categories = await categoryRepository.find();
      return res.json(categories);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao buscar categorias' });
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      const categoryRepository = getRepository(Category);
      const newCategory = categoryRepository.create(req.body);
      await categoryRepository.save(newCategory);
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao criar uma categoria' });
    }
  }
}

export default new CategoryController();
