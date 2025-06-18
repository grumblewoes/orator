import express from 'express';
import Config from './config/config';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.post('/chat', (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);
  res.status(201).json({ reply: `Echo: ${message}` });
});

app.listen(Config.port, () => {
  console.log(`Server running on port ${Config.port}`);
});