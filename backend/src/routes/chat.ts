import { Router } from 'express';
import { consumeClientMessage } from '../controllers/chatController';

const router = Router();

router.post('/chat', consumeClientMessage);

export default router;
