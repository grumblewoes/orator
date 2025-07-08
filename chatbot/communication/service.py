from protos.generated import chat_pb2, chat_pb2_grpc
from mistral_client import *

class ChatService(chat_pb2_grpc.ChatServiceServicer):
    def ConsumeClientMessage(self, request, context):
        reply_text = generate_response(request.text)
        analysis = analyze_client_msg(request.text)
        return chat_pb2.BotReply(text = reply_text, analysis = analysis)
