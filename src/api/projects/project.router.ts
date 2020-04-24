import express from 'express';
import projectController from './project.controller';

const router = express.Router();

router.get("/", projectController.getComplayProjects);


export default router;