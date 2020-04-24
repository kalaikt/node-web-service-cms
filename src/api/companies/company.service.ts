import pool from "../../config/database";

const execute = (query: string) => {
  return new Promise((resove, reject) => {
    pool.query(query, (err, rows) => {
      if (err) reject(err);
      resove(rows);
    });
  });
};

export const companyService: any = {
  getCompanyProjects: async (callBack: Function) => {
    const query = `SELECT * FROM companies ORDER BY c_id`;
    let rows: any = await execute(query);

    for (let company of rows) {
      const sql = `SELECT * FROM projects WHERE c_id=${company.c_id} ORDER BY p_id DESC`;
      const projects: any = await execute(sql);

      for (let project of projects) {
        project.p_responsibilities = JSON.parse(project.p_responsibilities);
      }

      company.projects = projects;
    }

    return callBack(null, rows);
  },
};
