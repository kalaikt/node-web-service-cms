import pool from "../../config/database";
import { Project } from "./project.model";
import { companyService } from "../companies/company.service";
import { Company } from "../companies/company.model";

export const projectService = {
  create: (data: Project, callBack: any) => {
    pool.query(
      `INSERT INTO projects 
            (   
                p_title, 
                p_desc, 
                p_role, 
                p_responsibilities, 
                p_env, 
                p_image, 
                p_link, 
                p_is_free_lance, 
                p_period, 
                p_client, 
                p_location, 
                p_created_date, 
                p_created_by, 
                p_status, 
                c_id
            ) 
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.p_title,
        data.p_desc,
        data.p_role,
        data.p_responsibilities,
        data.p_env,
        data.p_image,
        data.p_link,
        data.p_is_free_lance,
        data.p_period,
        data.p_client,
        data.p_location,
        data.p_created_date,
        data.p_created_by,
        data.p_status,
        data.c_id,
      ],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results);
      }
    );
  },
  getProjects: (callBack: Function) => {
    pool.query(
      `SELECT * FROM projects ORDER BY p_id DESC`,
      [],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results);
      }
    );
  },
  getProjectsByCId: (id: number) => {
    pool.query(
      `SELECT * FROM projects WHERE c_id=? ORDER BY p_id DESC`,
      [id],
      (error, results, fields) => {
        if (error) return error;

        return results;
      }
    );
  },
};
