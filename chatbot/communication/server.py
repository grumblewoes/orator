import grpc
import requests
from concurrent import futures
from protos import chat_pb2, chat_pb2_grpc

MISTRAL_URL = "http://localhost:11434/api/generate"

class ChatService(chat_pb2_grpc.ChatServiceServicer):
    def ConsumeClientMessage(self, request, context):
        response = requests.post(MISTRAL_URL, json={"model": "mistral", "prompt": request.text, "stream":False})
        if response.status_code == 200:
            bot_text = response.json().get("response", "No response from model")
        else:
            bot_text = f"Error from model API: {response.status_code}"

        return chat_pb2.BotReply(text=bot_text)

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    chat_pb2_grpc.add_ChatServiceServicer_to_server(ChatService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    serve()