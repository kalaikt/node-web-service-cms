import { Project } from "../projects/project.model";

export interface Company {
    c_id: number;
    c_name: string;
    start_date: string;
    projects: Project[];
    end_date: string;
    created_by: number;
}