import express from 'express';
import cors from 'cors';
import chatRoutes from './routes/chat';

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:50051'],
}));

app.use(express.json());
app.use(chatRoutes);

export default app;
