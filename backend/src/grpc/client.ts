import { GrpcTransport } from '@protobuf-ts/grpc-transport';
import { credentials } from '@grpc/grpc-js';
import { ChatServiceClient } from '../models/protos/generated/chat.client';

const transport = new GrpcTransport({
  host: 'localhost:50051',
  channelCredentials: credentials.createInsecure(),
});

export const grpcClient = new ChatServiceClient(transport);
