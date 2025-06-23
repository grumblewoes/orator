import { grpcClient } from '../grpc/client';
import { Request, Response } from 'express';

export const consumeClientMessage = async (req: Request, res: Response) => {
  const { message } = req.body;
  try {
    const call = grpcClient.consumeClientMessage({ text: message });
    const response = await call.response;
    res.status(201).json({ reply: response.text });
  } catch (error) {
    console.error('gRPC error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
