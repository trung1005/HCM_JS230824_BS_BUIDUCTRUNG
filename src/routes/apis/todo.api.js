import express from 'express';
import { todoController } from '../../controllers/todo.controller.js';

const router = express.Router();

router.post('/',todoController.create)
router.get('/', todoController.getAll)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

export default router;