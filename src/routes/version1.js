import express from 'express';
const router = express.Router();
import todoapi from './apis/todo.api.js';

router.use('/todo', todoapi);

export default router;