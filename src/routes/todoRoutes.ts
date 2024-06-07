import { Router } from 'express';
import { getTodos, createTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.delete('/todos/:id', deleteTodo);

export default router;
