import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Project } from '../entity/Project';

export class ProjectController {
  async getAllProjects(req: Request, res: Response) {
    try {
      const projectRepository = getRepository(Project);
      const projects = await projectRepository.find();
      return res.json(projects);
    } catch (error) {
      console.error('Erro ao buscar projetos:', error);
      return res.status(500).json({ error: 'Falha ao buscar projetos' });
    }
  }

  async createProject(req: Request, res: Response) {
    try {
      const projectRepository = getRepository(Project);
      const newProject = projectRepository.create(req.body);
      await projectRepository.save(newProject);
      return res.status(201).json(newProject);
    } catch (error) {
      console.error('Erro ao criar um projeto:', error);
      return res.status(500).json({ error: 'Falha ao criar um projeto', reason: error.message });
    }
  }

  async updateProject(req: Request, res: Response) {
    try {
      const projectRepository = getRepository(Project);
      const projectId = req.params.id;
      const existingProject = await projectRepository.findOne(projectId);

      if (!existingProject) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }

      projectRepository.merge(existingProject, req.body);
      const updatedProject = await projectRepository.save(existingProject);
      return res.json(updatedProject);
    } catch (error) {
      console.error('Erro ao atualizar um projeto:', error);
      return res.status(500).json({ error: 'Falha ao atualizar um projeto', reason: error.message });
    }
  }

  async deleteProject(req: Request, res: Response) {
    try {
      const projectRepository = getRepository(Project);
      const projectId = req.params.id;
      const existingProject = await projectRepository.findOne(projectId);

      if (!existingProject) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }

      await projectRepository.remove(existingProject);
      return res.json({ message: 'Projeto removido com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir um projeto:', error);
      return res.status(500).json({ error: 'Falha ao excluir um projeto', reason: error.message });
    }
  }
}
