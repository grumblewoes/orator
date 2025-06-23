import grpc
from concurrent import futures
from protos import chat_pb2, chat_pb2_grpc

class ChatService(chat_pb2_grpc.ChatServiceServicer):
    def ConsumeClientMessage(self, request, context):
        return chat_pb2.BotReply(text=f"Input: {request.text}")

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    chat_pb2_grpc.add_ChatServiceServicer_to_server(ChatService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()