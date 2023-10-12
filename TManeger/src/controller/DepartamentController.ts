// src/controllers/DepartamentController.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Departament } from '../entity/Departament';

class DepartamentController {
  async getAll(req: Request, res: Response) {
    try {
      const departamentRepository = getRepository(Departament);
      const departaments = await departamentRepository.find();
      return res.json(departaments);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao buscar departamentos' });
    }
  }

  async createDepartament(req: Request, res: Response) {
    try {
      const departamentRepository = getRepository(Departament);
      const newDepartament = departamentRepository.create(req.body);
      await departamentRepository.save(newDepartament);
      return res.status(201).json(newDepartament);
    } catch (error) {
      return res.status(500).json({ error: 'Falha ao criar um departamento' });
    }
  }
}

export default new DepartamentController();
