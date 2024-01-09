import express from 'express';
import * as categoryController from '../controller/categorycontroller.js';

const router = express.Router();

router.post("/save",categoryController.save);

router.get("/fetch",categoryController.fetch);

export default router;