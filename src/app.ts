import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import projectRouter from './api/projects/project.router'
dotenv.config();

const app: Application = express();

app.use(express.json());

app.use("/api/project", projectRouter);

app.listen(process.env.APP_PORT, () => console.log("Server running: "+ process.env.APP_PORT)); 