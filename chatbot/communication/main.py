import grpc
from concurrent import futures
from protos.generated import chat_pb2_grpc
from service import ChatService
from config import GRPC_SERVER_PORT

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    chat_pb2_grpc.add_ChatServiceServicer_to_server(ChatService(), server)
    server.add_insecure_port(GRPC_SERVER_PORT)
    server.start()
    print(f"gRPC server started on {GRPC_SERVER_PORT}")
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
