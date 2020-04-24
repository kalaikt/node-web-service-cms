import { projectService } from './project.service';
import { Project } from './project.model';
import { Request, Response } from 'express';
import { companyService } from '../companies/company.service';
import { Company } from '../companies/company.model';

const projectController = {
    getProjects: (req: Request, res: Response) => {
        projectService.getProjects((error: any, results: Project[]) => {
            if (error) {
                console.log(error);
                return;
            }

            for (let project of results) {
                project.p_responsibilities = JSON.parse(project.p_responsibilities);
            }

            return res.json({
                success: 1,
                data: results
            });
        })
    },
    getComplayProjects: (req: Request, res: Response) => {
        companyService.getCompanyProjects((error: any, results: Company[]) => {
            if (error) {
                console.log(error);
                return;
            }

            return res.json({
                success: 1,
                data: results
            });
        })
    }
}

export default projectController;

