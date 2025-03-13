import express from 'express';
import { register, login, deleteUser } from '../controllers/authController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/delete', authenticate, deleteUser);

export default router;