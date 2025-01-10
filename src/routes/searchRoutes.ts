import { Router } from "express";
import { getProjects, createProject } from "../controllers/projectController";
import { search } from "../controllers/searchController";

const router = Router();

router.get("/", search);
export default router;
