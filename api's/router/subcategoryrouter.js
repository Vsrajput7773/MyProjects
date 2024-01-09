import express from 'express';
import * as SubCategoryController from '../controller/subcategorycontroller.js';

const router = express.Router();

router.post("/save",SubCategoryController.save);

router.get("/fetch",SubCategoryController.fetch);

export default router;