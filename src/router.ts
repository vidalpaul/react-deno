import { Router } from 'https://deno.land/x/oak@v7.7.0/mod.ts';
import { Register } from './controllers/authController.ts';

const router = new Router();

router.post('/api/register', Register);

export default router;
