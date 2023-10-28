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
      console.error('Erro ao buscar categorias:', error);
      return res.status(500).json({ error: 'Falha ao buscar categorias' });
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      console.log('Corpo da solicitação:', req.body); // Adicione esta linha para registrar o corpo da solicitação
      const categoryRepository = getRepository(Category);
      const newCategory = categoryRepository.create(req.body);
      console.log('Nova categoria a ser criada:', newCategory); // Adicione esta linha para registrar a nova categoria
      await categoryRepository.save(newCategory);
      console.log('Categoria criada com sucesso:', newCategory); // Adicione esta linha para registrar a categoria criada
      return res.status(201).json(newCategory);
    } catch (error) {
      console.error('Erro ao criar uma categoria:', error);
      return res.status(500).json({ error: 'Falha ao criar uma categoria,Tente Novamente', reason: error.message });
    }
  }
}

export default new CategoryController();

